import { RequestHandler, Request } from "express";
import { auth } from "../services/auth-service";
import { UserModel } from "../model/user-signup-model";

const extractToken = (req: Request) => {
  const authHeader = req.header("Authorization"); //"bearer aslkfdjasfl2ejroi2ejwroi32jerf"

  if (
    authHeader &&
    authHeader.length > 7 &&
    authHeader.toLowerCase().startsWith("bearer ")
  ) {
    return authHeader.substring(7);
  }
console.log("token is missing in Authorization header", 400);
};

const isAdmin: RequestHandler = async (req, res, next) => {
  const token = extractToken(req); //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IldpbGxpc0BiYXRjYXZlLmNvbSIsImlhdCI6MTcwMjU0NzM4N30.hD91HgG16KwP3T-sVj0DrcasaG7hHiDdkCR0s9WuHn4
  const { email } = auth.verifyJWT(token);

  //get user from database
  const user = await UserModel.findOne({ email });

  const isAdmin = user?.isAdmin;
  if (isAdmin) {
    return next();
  }

  return res.status(401).json({ message: "Must be admin" });
};

export { isAdmin, extractToken };