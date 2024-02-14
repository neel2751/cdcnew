import { connect } from "@/dbConfig/dbConfig";
import UploadModel from "@/models/edtorUploadModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    let chcek = await request.formData();
    const asset_id = chcek.get("asset_id");
    const public_id = chcek.get("public_id");
    const url = chcek.get("url");
    const mainUrl = chcek.get("mainUrl");
    await connect();
    const upload = new UploadModel({
      asset_id: asset_id,
      public_id: public_id,
      url: url,
      mainUrl: mainUrl,
    });
    const editorPage = await upload.save();
    if (!editorPage)
      return NextResponse.json({
        status: 400,
        message: "error while uploading into database",
      });
    return NextResponse.json({
      status: 200,
      data: editorPage,
    });
  } catch (e) {
    return NextResponse.json({
      status: 500,
      error: e.message,
    });
  }
}

export async function PATCH(request) {
  const url = await request.json();
  const { imageUrl } = url;
  try {
    const check = await UploadModel.findOne({ mainUrl: imageUrl });
    if (check) {
      // Document with mainUrl exists, update isActive to true
      const updatedImage = await UploadModel.updateOne(
        { mainUrl: imageUrl },
        { $set: { isActive: false } }
      );
      if (updatedImage) {
        return NextResponse.json({
          status: 200,
          data: updatedImage,
        });
      }
    } else {
      return NextResponse.json({
        status: 404,
        message: "Image not found in the database.",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error: error.message,
    });
  }
}
