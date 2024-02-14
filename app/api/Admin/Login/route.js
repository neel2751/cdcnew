import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/adminModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    // extract form data
    // const check = await request.formData();
    // const email = check.get("email");
    // const password = check.get("password");

    const check = await request.json();
    const { username, email, password } = check;
    console.table(check);
    await connect();
    // Check email or username exists in the database or not
    // Check user exists in the database or not
    let userExist = await User.findOne({ $or: [{ email }, { username }] });
    if (!userExist)
      return NextResponse.json({ status: 400, error: "User Doesn't exist" });
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch)
      return NextResponse.json({
        status: 400,
        message: "Invalid Password",
      });
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

    const response = NextResponse.json({
      status: 200,
      success: true,
      message: "Login Successfully",
      data: tokenData,
    });

    // response.cookies.set("token", token, { httpOnly: true, path: "/" });
    // set data into cookie
    // response.cookies.set("Set-Cookie", `auth=${token};path=/;HttpOnly`);
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
