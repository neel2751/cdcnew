import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/adminModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  await connect();
  try {
    const check = await request.json();
    const { username, email, password } = check;
    console.table(check);
    // Check email or username exists in the database or not
    // Check user exists in the database or not
    let userExist = await User.findOne({ $or: [{ email }, { username }] });
    if (userExist) {
      return NextResponse.json({ status: 400, error: "User Already exist" });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();
      console.info(savedUser);
      if (!savedUser) {
        return NextResponse.json({
          status: 401,
          error: "Failed to create a new user ",
        });
      } else {
        return NextResponse.json({
          status: 201,
          success: "User is Registerd...",
          savedUser,
        }).redirected("/Admin/Login");
        return new NextResponse.redirect("/login"); // this one is valid for the user redirect from here
      }
    }
    // this code for user login user to check the password
    // if(await bcrypt.compare(password, userExist.password)){
    //     return new NextResponse(true,"User logged In");
    //     }else{
    //         return new NextResponse("Invalid Password", {status : 401});
    //         }

    //   userExist = await new User({ username, email, hashedPassword }).save();

    // password &&
    //   (await bcrypt.hash(password, 10).then((hashedPassword) => {
    //     request.body = { ...check, password: hashedPassword };
    //   }));
    // const result= await new User(request.body as Omit<User, 'id'>).save() ;
    // return new NextResponse(`Signup Successful ${result._id}`);
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }

  //   if (userExist) {
  //     // If user already exist then compare password with hashed password stored in db
  //     const isMatch = await bcrypt.compare(password, userExist.password);
  //     if (!isMatch)
  //       return new NextResponse("Invalid credentials", { status: 401 });
  //     // Create a token and send it to client side for authentication of user
  //     const token = createToken(userExist._id);
  //     return new NextResponse(`${JSON.stringify({ token: token })}`, {
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   } else {
  //     // If user doesnot exist then register the user by hashing the password
  //     const salt = await bcrypt.genSalt(10);
  //     password = await bcrypt.hash(password, salt);
  //     userExist = await new User({ username, email, password }).save();
  //   }

  // Check email or username exists in the database or not and then register the new user with chcek hashed password
  //   return new NextResponse(JSON.stringify(userExist), {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
}
