import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET); //If the verification succeeds, the decoded payload is stored in the decoded variable.

      req.user = await User.findById(decoded.id).select("-password");

      next(); //The next() function is called to move to the next middleware or route handler.
    } catch (error) {
      res.status(401);
      throw new Error("Not authorised, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorised, no token");
  }
});

export default protect;
