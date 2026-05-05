process.env.JWT_SECRET_KEY = "testsecret";
process.env.SALT_ROUNDS = "10";

const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const app = require("../utils/testApp");
const courseModel = require("../../src/models/courseModel");

let mongoServer;
let authCookie;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());

    // register
    await request(app).post("/users/register").send({
        name: "John",
        email: "john@test.com",
        password: "123456"
    });

    // login
    const loginRes = await request(app).post("/users/login").send({
        email: "john@test.com",
        password: "123456"
    });

    expect(loginRes.status).toBe(200);

    authCookie = loginRes.headers["set-cookie"];
    expect(authCookie).toBeDefined();
});

afterEach(async () => {
    await courseModel.deleteMany();
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});


describe("POST /courses/create", () => {

    test("should create course successfully", async () => {
        const res = await request(app)
            .post("/courses/create")
            .set("Cookie", authCookie)
            .send({
                name: "Node.js",
                price: 100,
                instructor: "John",
                description: "Backend"
            });

        expect(res.status).toBe(200);
    });

    test("should fail without auth", async () => {
        const res = await request(app)
            .post("/courses/create")
            .send({});

        expect(res.status).toBe(401);
    });
});


describe("GET /courses", () => {

    test("should fetch courses", async () => {

        await courseModel.create({
            name: "Node.js",
            price: 100,
            instructor: "John",
            description: "Backend"
        });

        const res = await request(app)
            .get("/courses")
            .set("Cookie", authCookie);

        expect(res.status).toBe(200);
    });
});


describe("GET /courses/:id", () => {

    test("should fetch by id", async () => {

        const course = await courseModel.create({
            name: "Node.js",
            price: 100,
            instructor: "John",
            description: "Backend"
        });

        const res = await request(app)
            .get(`/courses/${course._id}`)
            .set("Cookie", authCookie);

        expect(res.status).toBe(200);
    });
});