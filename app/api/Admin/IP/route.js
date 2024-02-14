import { NextResponse } from "next/server";
// import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import VisitModal from "@/models/visitorModel";
import { connect } from "@/dbConfig/dbConfig";

export async function POST(request) {
  const check = await request.json();
  const { checkSession, clientIp, proxyIp, userAgent } = check;
  const hashedIp = checkSession.userInfo.ip;
  try {
    await connect();
    const ip = await VisitModal.findOne({ ip: hashedIp });
    if (!ip) {
      let newVisitor = new VisitModal({
        userAgent: userAgent,
        UserID: checkSession.data,
        userIP: clientIp,
        proxyIP: proxyIp,
        PageCount: 1,
        ...checkSession.userInfo,
      });
      const visitorStore = await newVisitor.save();
      if (visitorStore) {
        return NextResponse.json({
          status: 201,
          message: "Data has been saved",
          data: visitorStore,
        });
      } else {
        return NextResponse.json({
          status: 500,
          message: "Error while Store the Data",
        });
      }
    } else {
      ip.PageCount += 1;
      ip.save();
      return NextResponse.json({
        status: 200,
        message: "Successfully got IP address.",
        data: ip,
      });
    }
  } catch (error) {
    return NextResponse.json({ status: 500, error: error.message });
  }
}
