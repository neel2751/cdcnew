import axios from "axios";
import User from "@/models/adminModel";
import { connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcryptjs";

export const AuthLogin = async (email, password) => {
  try {
    await connect();
    // Check email or username exists in the database or not
    // Check user exists in the database or not
    let userExist = await User.findOne({ email });
    if (!userExist) return { status: 400, error: "User Doesn't exist" };
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch)
      return {
        status: 400,
        message: "Invalid Password",
      };
    // create a token data
    const tokenData = {
      id: userExist._id,
      name: userExist.username,
      email: userExist.email,
      isAdmin: userExist.isAdmin,
    };
    // Create a jwt token
    // const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
    //   expiresIn: "1h",
    // });

    const response = {
      status: 200,
      success: true,
      message: "Login Successfully",
      data: tokenData,
    };

    // response.cookies.set("token", token, { httpOnly: true, path: "/" });
    // set data into cookie
    // response.cookies.set("Set-Cookie", `auth=${token};path=/;HttpOnly`);
    return response;
  } catch (error) {
    return { error: error.message, status: 500 };
  }
};
