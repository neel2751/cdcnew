import { connect } from "@/dbConfig/dbConfig";
import TeamSection from "@/models/teamModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const check = await request.formData();
    const name = check.get("name");
    const email = check.get("email");
    const password = check.get("password");
    const socialLinks = check.getAll("socialLinks");
    const department = check.get("department");
    const role = check.get("role");
    const position = check.get("position");
    const description = check.get("description");
    const asset_id = check.get("asset_id");
    const public_id = check.get("public_id");
    const url = check.get("url");
    const secure_url = check.get("secure_url");

    await connect();
    const teamData = await TeamSection({
      name: name,
      email: email,
      password: password,
      socialLinks: JSON.parse(socialLinks),
      company: {
        department: department,
        role: role,
        position: position,
      },
      description: description,
      mainImage: {
        asset_id: asset_id,
        public_id: public_id,
        url: url,
        mainImageUrl: secure_url,
      },
    });
    const teamReponse = await teamData.save();
    console.log(teamReponse);

    if (teamReponse) {
      return NextResponse.json({
        status: 200,
        message: "Successfully received data",
        data: teamReponse,
      });
      // if server has the data do something...
    } else {
      // if server has no data of user throw error or alert
      return NextResponse.json({
        status: 500,
        message: "No Data Found",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: `Error Occured ${error.message}`,
    });
  }
}

export async function GET() {
  try {
    await connect();
    const team = await TeamSection.find();
    return NextResponse.json({
      status: 200,
      message: "Team Section Fetched Successfully!",
      data: team,
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
  const { id } = url;
  try {
    await connect();
    let team_section = await TeamSection.findOne({
      _id: id,
    });
    if (!team_section) {
      return new Response("Team Member Not Found", { status: 404 });
    } else {
      const updatedStatus = !team_section.isActive;
      team_section = await TeamSection.updateOne(
        { _id: id },
        { $set: { isActive: updatedStatus } }
      );
      return NextResponse.json({
        status: 200,
        success: true,
      });
    }
  } catch (err) {
    return NextResponse.json({
      status: "Error",
      err: err.toString(),
    });
  }
}
