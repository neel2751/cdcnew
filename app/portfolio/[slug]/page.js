import NotFound from "@/app/not-found";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Header/navbar";
import { SubMenu } from "../../component/Header/submenu";
import Portview from "./Portview";
import { PORTFOLIO } from "@/app/data/data";

export default function Page({ params }) {
  let check = PORTFOLIO.filter(function (port) {
    return port.link === params?.slug;
  }).map(function (item) {
    return item.link;
  });
  console.log(check.length === 0);
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      {check.length === 0 ? <NotFound /> : <Portview slug={check} />}
      <Footer />
    </>
  );
}
