import NotFound from "@/app/not-found";
import Footer from "@/app/component/Footer/Footer";
import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import { SUB_MENU } from "@/app/data/data";
import Detail from "../Detail";

export default function Page({ params }) {
  const check = SUB_MENU.filter(function (menu) {
    return menu.link === params.slug;
  }).map(function (item) {
    return item;
  });

  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      {check.length === 0 ? <NotFound /> : <Detail slug={check[0]} />}
      <Footer />
    </>
  );
}
