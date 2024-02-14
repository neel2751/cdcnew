// components/IP.js
import { getIPAddress, ipExists } from "@/actions/ipAddressAction";
import { useEffect } from "react";

const IP = () => {
  useEffect(() => {
    const fetchIPAddress = async () => {
      //if the data is already there then just update with userid and increment page
      try {
        const getIp = await getIPAddress();
        if (!getIp) return console.log("this is the error we find", getIp);
        const isExists = await ipExists(getIp);
        if (isExists) {
          localStorage.setItem("VisitorSession", isExists.data.UserID);
        }
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIPAddress();
  }, []);

  return <div></div>;
};

export default IP;
