import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const routeAuthorization = async (req, res, next) => {
  const { authorization } = req.headers;
  const secret = process.env.TOKEN_SECRET;
  if (!authorization) {
    return res.status(401).json({ message: "No token" });
  }
  const splitedUserToken = authorization.split(" ");
  const userToken = splitedUserToken[1];
  await jwt.verify(userToken, secret, (error, user) => {
    if (error) {
      console.error(error);
      return res.status(401).json({ message: "Invalid token" });
    }
    next();
  });
};

export default routeAuthorization;
