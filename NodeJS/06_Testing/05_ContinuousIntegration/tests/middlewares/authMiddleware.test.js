process.env.JWT_SECRET_KEY = "testsecret";

const { userAuth } = require("../../src/middlewares/authMiddleware");
const jwt = require("jsonwebtoken");
const userModel = require("../../src/models/userModel");

// ✅ mocks
jest.mock("jsonwebtoken");
jest.mock("../../src/models/userModel");

describe("authMiddleware", () => {

    let req, res, next;

    beforeEach(() => {
        req = {
            cookies: {}   // ✅ IMPORTANT (not req.cookie)
        };

        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };

        next = jest.fn();

        jest.clearAllMocks();
    });

    // =========================
    // NO TOKEN
    // =========================
    test("should return 401 if no token", async () => {

        await userAuth(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.send).toHaveBeenCalledWith("Please login");
        expect(next).not.toHaveBeenCalled();
    });

    // =========================
    // INVALID TOKEN
    // =========================
    test("should return 401 if token is invalid", async () => {

        req.cookies.token = "invalidToken";

        jwt.verify.mockImplementation(() => {
            throw new Error("Invalid token");
        });

        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        await userAuth(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(next).not.toHaveBeenCalled();

        consoleSpy.mockRestore();
    });

    // =========================
    // USER NOT FOUND
    // =========================
    test("should return 401 if user not found", async () => {

        req.cookies.token = "validToken";

        jwt.verify.mockReturnValue({ _id: "user123" });

        userModel.findById.mockResolvedValue(null);

        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        await userAuth(req, res, next);

        expect(userModel.findById).toHaveBeenCalledWith("user123");
        expect(res.status).toHaveBeenCalledWith(401);
        expect(next).not.toHaveBeenCalled();

        consoleSpy.mockRestore();
    });

    // =========================
    // SUCCESS
    // =========================
    test("should attach user and call next()", async () => {

        req.cookies.token = "validToken";

        const mockUser = { _id: "user123", name: "John" };

        jwt.verify.mockReturnValue({ _id: "user123" });

        userModel.findById.mockResolvedValue(mockUser);

        await userAuth(req, res, next);

        expect(jwt.verify).toHaveBeenCalledWith(
            "validToken",
            process.env.JWT_SECRET_KEY
        );

        expect(userModel.findById).toHaveBeenCalledWith("user123");

        expect(req.user).toEqual(mockUser);

        expect(next).toHaveBeenCalled();
    });

});