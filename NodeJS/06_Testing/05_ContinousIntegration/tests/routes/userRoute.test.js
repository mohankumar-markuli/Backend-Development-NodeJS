process.env.JWT_SECRET_KEY = "testsecret";
process.env.SALT_ROUNDS = "10";

const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const app = require("../utils/testApp");
const userModel = require("../../src/models/userModel");

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
});

// ✅ silence console errors (clean output)
beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => { });
});

afterEach(async () => {
    await userModel.deleteMany();
    jest.restoreAllMocks();
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});


// =========================
// REGISTER
// =========================

describe("POST /users/register", () => {

    test("should register user successfully", async () => {

        const res = await request(app)
            .post("/users/register")
            .send({
                name: "John",
                email: "john@test.com",
                password: "123456"
            });

        expect(res.status).toBe(200);
        expect(res.body.message).toBe("User registered successfully");

        const user = await userModel.findOne({ email: "john@test.com" });
        expect(user).not.toBeNull();
    });


    test("should return 400 for missing fields", async () => {

        const res = await request(app)
            .post("/users/register")
            .send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toBe("All fields are required");
    });

});


// =========================
// LOGIN
// =========================

describe("POST /users/login", () => {

    beforeEach(async () => {
        await request(app)
            .post("/users/register")
            .send({
                name: "John",
                email: "john@test.com",
                password: "123456"
            });
    });

    test("should login successfully and set cookie", async () => {

        const res = await request(app)
            .post("/users/login")
            .send({
                email: "john@test.com",
                password: "123456"
            });

        expect(res.status).toBe(200);
        expect(res.headers["set-cookie"]).toBeDefined();
    });


    test("should return 400 for wrong password", async () => {

        const res = await request(app)
            .post("/users/login")
            .send({
                email: "john@test.com",
                password: "wrong"
            });

        expect(res.status).toBe(400);
        expect(res.body.message).toBe("Invalid credentials");
    });


    test("should return 400 if user not found", async () => {

        const res = await request(app)
            .post("/users/login")
            .send({
                email: "nouser@test.com",
                password: "123456"
            });

        expect(res.status).toBe(400);
        expect(res.body.message).toBe("User not found");
    });


    test("should return 400 for missing fields", async () => {

        const res = await request(app)
            .post("/users/login")
            .send({});

        expect(res.status).toBe(400);
        expect(res.body.message).toBe("Email and password are required");
    });

});