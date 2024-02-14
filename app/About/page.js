// import TopBar from "./component/Static/TopBar";
// import Slider from "./component/Slider/Slider";
import { Suspense } from "react";
import { NavigationEvents } from "../Helper/navigationHelper";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/navbar";
import { SubMenu } from "../component/Header/submenu";
import Hero from "../component/Hero/hero";
import AboutFeatures from "./AboutFeature";
import OurVision from "./OurVision";
export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <NavigationEvents>
          <SubMenu>
            <Navbar />
          </SubMenu>
          <Hero />
          <AboutFeatures />
          <OurVision />
          <Footer />
        </NavigationEvents>
      </Suspense>
    </>
  );
}
