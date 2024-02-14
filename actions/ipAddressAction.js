// import { Suspense } from "react";
"use server";
import axios from "axios";
import { headers } from "next/headers";
import bcrypt from "bcryptjs";

export const getIPAddress = async () => {
  // console.log("this is the data of header", headers().get);
  // const agentheader = headers().get("user-agent");

  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");
  try {
    if (forwardedFor) {
      const ipAddress = forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
      const ipnewAddress = headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
      const UserAgentInfo = headers().get("user-agent");
      const parsedData = JSON.stringify(UserAgentInfo);
      const checkSession = await checkSessionData();
      return {
        clientIp: ipAddress,
        proxyIp: ipnewAddress,
        checkSession: checkSession,
        userAgent: parsedData,
      };
      // get the user agent info using with the header
    } else {
      const ipAddress = headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
      return `No x-forwarded-for header was provided in this request. The client\'
              IP address has been used instead (${ipAddress}).`;
    }
  } catch (error) {
    return error.message;
  }
};

export const checkSessionData = async () => {
  // using the third party api get the user ip address and
  // get the geo location and get and the all data...
  // after we using the google location for accurate data

  // we can use this one for fetch original ip adress
  // https://checkip.amazonaws.com/

  const response = await axios.post("https://ipapi.co/json/");
  const userInfo = response.data;
  const data = await generateStringForLocalStorage(userInfo.ip);
  return { data, userInfo };
};

export const generateStringForLocalStorage = async (ip) => {
  try {
    if (ip) {
      var salt = bcrypt.genSaltSync(10);
      var hashedIP = bcrypt.hashSync(ip, salt);
    } else {
      var salt = bcrypt.genSaltSync(10);
      var hashedIP = bcrypt.hashSync("visitorInfoIsHere", salt);
    }

    return hashedIP;
  } catch (e) {
    console.log(e.message);
  }
};

export async function ipExists(ipData) {
  const response = await axios.post(
    "http://localhost:3000/api/Admin/IP",
    ipData
  );
  return response.data;
}

export async function storePageView(path) {
  const response = await axios.post(
    "http://localhost:3000/api/Admin/IP/PageCount",
    {
      path,
    }
  );
  if (response.success) {
    return true;
  }
}
