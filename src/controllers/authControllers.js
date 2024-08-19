import { Patient } from "../dbConnection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const signIn = async (credentials) => {
  try {
    const { email, password } = credentials;
    const secret = process.env.TOKEN_SECRET;

    const validateUser = await Patient.findOne({
      where: {
        email
      }
    });
    if (!validateUser) {
      throw new Error("User not found");
    }
    const userPassword = validateUser.password;
    const isValidPassword = await bcrypt.compare(password, userPassword);
    if (!isValidPassword) {
      throw new Error("Incorrect password");
    }

    const userData = {
      id: validateUser.userId,
      name: validateUser.name,
      lastName: validateUser.lastName,
      email: validateUser.email
    };
    const token = await jwt.sign(userData, secret);
    return {
      message: "User Authenticated",
      id: validateUser.userId,
      name: validateUser.name,
      lastName: validateUser.lastName,
      email: validateUser.email,
      token
    };
  } catch (error) {
    console.error;
    throw new Error(error.message);
  }
};

