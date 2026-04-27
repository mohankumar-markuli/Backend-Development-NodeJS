process.env.JWT_SECRET_KEY = "testsecret";
process.env.SALT_ROUNDS = "10";

const { registerUser, loginUser } = require("../../src/controllers/userController");
const userModel = require("../../src/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// 🧪 mocks
jest.mock("../../src/models/userModel");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe("User Controller", () => {

    let req, res;

    beforeEach(() => {
        req = { body: {} };

        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            cookie: jest.fn()
        };

        jest.clearAllMocks();
    });

    // =========================
    // REGISTER
    // =========================

    describe("registerUser", () => {

        test("should register user successfully", async () => {

            req.body = {
                name: "John",
                email: "john@test.com",
                password: "123456"
            };

            bcrypt.hash.mockResolvedValue("hashedPassword");

            userModel.create.mockResolvedValue({
                ...req.body,
                password: "hashedPassword"
            });

            await registerUser(req, res);

            expect(bcrypt.hash).toHaveBeenCalled();
            expect(userModel.create).toHaveBeenCalled();

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(
                expect.objectContaining({
                    message: "User registered successfully"
                })
            );
        });


        test("should return 400 on error", async () => {

            req.body = {};

            bcrypt.hash.mockRejectedValue(new Error("Hash error"));

            const consoleSpy = jest.spyOn(console, "error").mockImplementation();

            await registerUser(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(consoleSpy).toHaveBeenCalled();

            consoleSpy.mockRestore();
        });

    });


    // =========================
    // LOGIN
    // =========================

    describe("loginUser", () => {

        test("should login successfully", async () => {

            req.body = {
                email: "john@test.com",
                password: "123456"
            };

            const mockUser = {
                _id: "user123",
                email: "john@test.com",
                validatePassword: jest.fn().mockResolvedValue(true)
            };

            userModel.findOne.mockResolvedValue(mockUser);
            jwt.sign.mockReturnValue("mockToken");

            await loginUser(req, res);

            expect(userModel.findOne).toHaveBeenCalledWith({ email: "john@test.com" });
            expect(mockUser.validatePassword).toHaveBeenCalledWith("123456");

            expect(jwt.sign).toHaveBeenCalled();

            expect(res.cookie).toHaveBeenCalledWith("token", "mockToken");

            expect(res.status).toHaveBeenCalledWith(200);
        });


        test("should return 400 if user not found", async () => {

            req.body = {
                email: "no@test.com",
                password: "123456"
            };

            userModel.findOne.mockResolvedValue(null);

            const consoleSpy = jest.spyOn(console, "error").mockImplementation();

            await loginUser(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(consoleSpy).toHaveBeenCalled();

            consoleSpy.mockRestore();
        });


        test("should return 400 for invalid password", async () => {

            req.body = {
                email: "john@test.com",
                password: "wrong"
            };

            const mockUser = {
                validatePassword: jest.fn().mockResolvedValue(false)
            };

            userModel.findOne.mockResolvedValue(mockUser);

            const consoleSpy = jest.spyOn(console, "error").mockImplementation();

            await loginUser(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(consoleSpy).toHaveBeenCalled();

            consoleSpy.mockRestore();
        });


        test("should return 400 on jwt error", async () => {

            req.body = {
                email: "john@test.com",
                password: "123456"
            };

            const mockUser = {
                _id: "user123",
                validatePassword: jest.fn().mockResolvedValue(true)
            };

            userModel.findOne.mockResolvedValue(mockUser);
            jwt.sign.mockImplementation(() => {
                throw new Error("JWT error");
            });

            const consoleSpy = jest.spyOn(console, "error").mockImplementation();

            await loginUser(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(consoleSpy).toHaveBeenCalled();

            consoleSpy.mockRestore();
        });

    });

});