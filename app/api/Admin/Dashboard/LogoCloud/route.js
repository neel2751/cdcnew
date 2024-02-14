// import ServicesSection from "@/models/servicesModel";
import { connect } from "@/dbConfig/dbConfig";
import LogoCloudModel from "@/models/logoCloudModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connect();
    const check = await request.formData();
    const images = check.get("dbImage"); // this is an array data
    const newdata = JSON.parse(images);
    const logoCloudPage = await LogoCloudModel.create(newdata);
    if (!logoCloudPage)
      return NextResponse.json({
        status: 401,
        error: "Failed to upload Services content ",
      });
    return NextResponse.json({
      status: 200,
      message: "New Services Add successfully..",
      success: true,
      data: logoCloudPage,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error.message,
    });
  }
}

export async function GET() {
  try {
    await connect();
    // fetch all logo with active true
    const logContent = await LogoCloudModel.find({ active: "true" });
    if (!logContent)
      return NextResponse.json({
        status: 404,
        message: "No Data Found!",
        success: false,
      });
    return NextResponse.json({
      status: 200,
      data: logContent,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error.message,
    });
  }
}

export async function DELETE(request) {
  const url = new URL(request.url);
  let publicId = url.searchParams.get("public_id");
  try {
    await connect();
    const deleteLogo = await LogoCloudModel.deleteOne({
      public_id: publicId,
    }).exec();
    if (!deleteLogo)
      return NextResponse.json({
        status: 404,
        success: false,
        message: `Logo not found for the given ID ${publicId}.`,
      });
    else {
      // fs.unlinkSync(`${process.env.BASEDIR}/uploads/${public.id}`); // Identifier expected. 'public' is a reserved word in strict mode. Modules are automatically in strict mode.
      return NextResponse.json({
        status: 200,
        message: `Successfully deleted the Logo with Public Id : ${publicId}`,
        success: true,
        data: deleteLogo,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error.message,
    });
  }
}
