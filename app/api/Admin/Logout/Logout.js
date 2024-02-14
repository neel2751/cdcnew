import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const response = NextResponse.json({
      message: "Logout Successfully",
      status: 200,
      success: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      status: 500,
      success: false,
      error: error.message,
    });
  }
}
//   const url = new URL(request.url);
