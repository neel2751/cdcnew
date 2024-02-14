import { NavigationEvents } from "../Helper/navigationHelper";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/navbar";
import { SubMenu } from "../component/Header/submenu";
import Hero from "../component/Hero/hero";
import Team from "./Team";
export default function Home() {
  return (
    <>
      <NavigationEvents>
        <SubMenu>
          <Navbar />
        </SubMenu>
        <Hero />
        <Team />
        <Footer />
      </NavigationEvents>
    </>
  );
}
