import PageCountModel from "@/models/countPageModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function POST(request) {
  const check = await request.json();
  const { path } = check;
  if (path) {
    try {
      await connect();
      const findPath = await PageCountModel.findOne({
        pageName: path,
      });
      if (findPath) {
        findPath.visits += 1;
        findPath.save();
        return NextResponse.json({
          status: 201,
          success: true,
          data: findPath,
        });
      } else {
        const addNewPage = new PageCountModel({ pageName: path, visits: 1 });
        const visitorPage = await addNewPage.save();
        return NextResponse.json({
          status: 200,
          success: true,
          data: visitorPage,
        });
      }
    } catch (error) {
      return NextResponse.json({
        status: 500,
        message: error.message,
      });
    }
  }
}
