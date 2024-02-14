import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/navbar";
import { SubMenu } from "../component/Header/submenu";
import Blog from "./Blog";
export default function Home() {
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <Blog />
      <Footer />
    </>
  );
}
