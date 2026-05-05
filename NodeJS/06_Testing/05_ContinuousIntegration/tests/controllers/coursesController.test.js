const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const { createCourse, getAllCourse, getCourseById } = require('../../src/controllers/courseController');
const courseModel = require('../../src/models/courseModel');

let mongoServer;

// Setup
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
});

// Clean DB after each test
afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (let key in collections) {
        await collections[key].deleteMany();
    }
});

// Teardown
afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});

describe("Create Course Controller", () => {

    test("should create course successfully and return 200", async () => {

        const req = {
            body: {
                name: "Node.js",
                price: 100,
                instructor: "John Doe",
                description: "Learn Node.js"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await createCourse(req, res);

        expect(res.status).toHaveBeenCalledWith(200);

        const response = res.json.mock.calls[0][0];

        expect(response.message).toBe("Course created successfully");
        expect(response.data.name).toBe("Node.js");
    });

    test("should return 400 when required fields are missing", async () => {

        const req = {
            body: {
                name: "Node.js"
                // ❌ missing instructor, description, etc.
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        await createCourse(req, res);

        expect(res.status).toHaveBeenCalledWith(400);

        const response = res.json.mock.calls[0][0];

        expect(response.error).toBe("BAD_REQUEST");
        expect(response.message).toMatch(/validation/i);

        expect(consoleSpy).toHaveBeenCalled();

        consoleSpy.mockRestore();
    });

    test("should return 400 when DB operation fails", async () => {

        const req = {
            body: {
                name: "Node.js",
                price: 100,
                instructor: "John Doe",
                description: "Learn Node.js"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const dbSpy = jest.spyOn(courseModel, 'create').mockImplementation(() => {
            throw new Error("DB error");
        });

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        await createCourse(req, res);

        expect(res.status).toHaveBeenCalledWith(400);

        expect(res.json).toHaveBeenCalledWith({
            message: "DB error",
            error: "BAD_REQUEST"
        });

        expect(consoleSpy).toHaveBeenCalled();

        dbSpy.mockRestore();
        consoleSpy.mockRestore();
    });

    test("should log error with timestamp and message", async () => {

        const req = { body: {} };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        await createCourse(req, res);

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.any(String), // timestamp
            "ERROR: ",
            expect.any(String)
        );

        consoleSpy.mockRestore();
    });

    test("should call courseModel.create only once per request", async () => {

        const req = {
            body: {
                name: "Node.js",
                price: 100,
                instructor: "John Doe",
                description: "Learn Node.js"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        // Spy on DB call
        const createSpy = jest.spyOn(courseModel, 'create');

        await createCourse(req, res);

        // Assert call count
        expect(createSpy).toHaveBeenCalledTimes(1);

        // (optional but strong)
        expect(createSpy).toHaveBeenCalledWith(req.body);

        createSpy.mockRestore();
    });

});

describe("Get All Courses Controller", () => {
    test("should return 200 and fetch all courses", async () => {

        // Insert data
        await courseModel.create([
            {
                name: "Node.js",
                price: 100,
                instructor: "John",
                description: "Backend"
            },
            {
                name: "React",
                price: 120,
                instructor: "Jane",
                description: "Frontend"
            }
        ]);

        const req = {};

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await getAllCourse(req, res);

        expect(res.status).toHaveBeenCalledWith(200);

        const response = res.json.mock.calls[0][0];

        expect(response.data.length).toBe(2);
    });

    test("should return 400 when no courses exist", async () => {

        const req = {};

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        await getAllCourse(req, res);

        expect(res.status).toHaveBeenCalledWith(400);

        expect(res.json).toHaveBeenCalledWith({
            message: "No data found",
            error: "BAD_REQUEST"
        });

        expect(consoleSpy).toHaveBeenCalled();

        consoleSpy.mockRestore();
    });

    test("should return 400 when DB fails", async () => {

        const req = {};

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const dbSpy = jest.spyOn(courseModel, 'find').mockImplementation(() => {
            throw new Error("DB error");
        });

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        await getAllCourse(req, res);

        expect(res.status).toHaveBeenCalledWith(400);

        expect(res.json).toHaveBeenCalledWith({
            message: "DB error",
            error: "BAD_REQUEST"
        });

        expect(consoleSpy).toHaveBeenCalled();

        dbSpy.mockRestore();
        consoleSpy.mockRestore();
    });

    test("should call courseModel.find only once", async () => {

        await courseModel.create([
            {
                name: "Node.js",
                price: 100,
                instructor: "John",
                description: "Backend"
            }
        ]);

        const req = {};

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const findSpy = jest.spyOn(courseModel, 'find');

        await getAllCourse(req, res);

        expect(findSpy).toHaveBeenCalledTimes(1);

        findSpy.mockRestore();
    });
});

describe("Get a Course by ID Controller", () => {
    test("should return 200 when course exists", async () => {

        const course = await courseModel.create({
            name: "Node.js",
            price: 100,
            instructor: "John",
            description: "Backend"
        });

        const req = {
            params: {
                courseId: course._id.toString()
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await getCourseById(req, res);

        expect(res.status).toHaveBeenCalledWith(200);

        const response = res.json.mock.calls[0][0];

        expect(response.data._id.toString()).toBe(course._id.toString());
    });

    test("should return 400 when course not found", async () => {

        const fakeId = new mongoose.Types.ObjectId();

        const req = {
            params: {
                courseId: fakeId.toString()
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        await getCourseById(req, res);

        expect(res.status).toHaveBeenCalledWith(400);

        const response = res.json.mock.calls[0][0];

        expect(response.message).toMatch(/not found/i);

        expect(consoleSpy).toHaveBeenCalled();

        consoleSpy.mockRestore();
    });

    test("should return 400 when courseId is invalid", async () => {

        const req = {
            params: {
                courseId: "invalid-id"
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        await getCourseById(req, res);

        expect(res.status).toHaveBeenCalledWith(400);

        const response = res.json.mock.calls[0][0];

        expect(response.error).toBe("BAD_REQUEST");

        expect(consoleSpy).toHaveBeenCalled();

        consoleSpy.mockRestore();
    });

    test("should return 400 when DB fails", async () => {

        const req = {
            params: {
                courseId: new mongoose.Types.ObjectId().toString()
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const dbSpy = jest.spyOn(courseModel, 'findById').mockImplementation(() => {
            throw new Error("DB error");
        });

        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        await getCourseById(req, res);

        expect(res.status).toHaveBeenCalledWith(400);

        expect(res.json).toHaveBeenCalledWith({
            message: "DB error",
            error: "BAD_REQUEST"
        });

        expect(consoleSpy).toHaveBeenCalled();

        dbSpy.mockRestore();
        consoleSpy.mockRestore();
    });

    test("should call findById only once", async () => {

        const course = await courseModel.create({
            name: "Node.js",
            price: 100,
            instructor: "John",
            description: "Backend"
        });

        const req = {
            params: {
                courseId: course._id.toString()
            }
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const spy = jest.spyOn(courseModel, 'findById');

        await getCourseById(req, res);

        expect(spy).toHaveBeenCalledTimes(1);

        spy.mockRestore();
    });

});