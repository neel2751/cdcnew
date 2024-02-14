// import Dash from "./Dash";
"use client";
import DashAside from "../Components/DashAside/DashAside";
import HeaderStatic from "../Components/Helper/HeaderStatic";
import MainHeader from "../Components/Helper/MainHeader";
import Tagtable from "../Components/TagTable/Tagtable";
import Dash from "./Dash";
import DashHome from "./DashHome/DashHome";
import Sections from "./DashHome/Sections";
import DashNav from "./DashNav/DashNav";
import DashNew from "./DashNew";
import AllService from "./DashServices/AllService";
import AdminServices from "./DashServices/page";
import LogoUpload from "./LogoCloudUpload/page";
import Team from "./Team/Team";
import Teampage from "./Team/page";

export default function Home() {
  return (
    <>
      <DashNav />
      <DashAside />
      <HeaderStatic>
        {/* <DashNew /> */}
        {/* <Dash /> */}
        <MainHeader>
          {/* <AdminServices /> */}
          {/* <AllService /> */}
          {/* <LogoUpload /> */}
          <Teampage />
          {/* <-- working on this file as well... first we have to figure it out of the social media account} */}
          {/* <DashHome /> */}
        </MainHeader>
        {/* <MainHeader
          class={"p-10"}
          title={"All Tags"}
          desc={"All tags here to manage"}
        >
          <Sections />
          <Tagtable />
        </MainHeader> */}
      </HeaderStatic>
    </>
  );
}
