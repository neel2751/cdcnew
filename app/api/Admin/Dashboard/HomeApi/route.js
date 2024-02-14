import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { connect } from "@/dbConfig/dbConfig";
import HomeModel from "@/models/homemodel";

// export async function POST(request) {
//   try {
//     await connect();
//     // extreact formData form request body
//     let formData = await request.formData();
//     // const homeObj = new HomeModel({ ...formData });
//     // det the data form to extract
//     const title = formData.get("title");
//     const description = formData.get("description");
//     const tagName = formData.get("tagName");
//     const image = formData.get("image");

//     // console.log("this is the tag id whcih we have upload", tagId);

//     if (image && image instanceof File) {
//       // console.log(File);
//       // Save the image data to a file
//       const filename = `${Date.now()}.${image.type.split("/")[1]}`;
//       const filepath = path.join(process.cwd(), "public/uploads", filename);
//       //   console.log(filepath);
//       // fs.writeFileSync(filepath, image.name, "base64");
//       // update the home model with the new data and the saved image path
//       const home = new HomeModel({
//         title: title ? title : "",
//         description: description ? description : "",
//         tagName: tagName,
//         filename: filename ? filename : "",
//         filepath: `/uploads/${filename}`,
//       });
//       const homePage = await home.save();
//       console.info(homePage);
//       if (!homePage) {
//         return NextResponse.json({
//           status: 401,
//           error: "Failed to upload Home content ",
//         });
//       } else {
//         fs.writeFileSync(filepath, image.name, "base64");
//         return NextResponse.json({
//           status: 201,
//           success: "Home Update successfully...",
//           homePage,
//         });
//       }
//     }
//   } catch (error) {
//     return NextResponse.json({ error: error.message, status: 500 });
//   }
// }

export async function GET() {
  try {
    await connect();
    // const home = await HomeModel.findOne({ where: { id } });
    const homes = await HomeModel.find();
    return NextResponse.json({
      status: 200,
      success: true,
      data: homes,
      message: "Youe home data ready",
    });
  } catch (err) {
    return NextResponse.status(500).json({ error: "Server Error" });
  }
}

export async function POST(request) {
  try {
    await connect();
    const check = await request.formData();
    console.log("formdata is here form Homeapi section api..", check);
    const title = check.get("title");
    const description = check.get("description");
    const tagName = check.get("tagName");
    const asset_id = check.get("asset_id");
    const public_id = check.get("public_id");
    const url = check.get("url");
    const secure_url = check.get("secure_url");

    const home = new HomeModel({
      title: title ? title : "",
      description: description ? description : "",
      tagName: tagName,
      public_id: public_id,
      asset_id: asset_id,
      url: url ? url : "",
      imgUrl: secure_url ? secure_url : "",
    });
    const homePage = await home.save();
    if (!homePage)
      return NextResponse.json({
        status: 401,
        error: "Failed to upload Home content ",
      });
    return NextResponse.json({
      status: 200,
      message: "New Section Add successfully..",
      success: true,
      data: homePage,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

export async function PATCH(request) {
  //console.log('updateHome', updateHome)
  const id = request.query.get("id");
  const { title, description, tagName } = await request.json();
  try {
    await connect();
    const home = await HomeModel.findOne({ where: { id } });
    let updatedHome = await HomeModel.findByIdAndUpdate(
      id,
      { title, description, tagName },
      { new: true }
    );
    if (!updatedHome) return new Response.Error("No User found");
    return new Response.Success(
      "User Updated Successfully",
      "Updated User Details are as follows",
      updatedHome
    );
  } catch (e) {
    return new Response.Error(
      e,
      "Something went wrong while updating the user"
    );
  }
}
