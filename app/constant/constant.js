"use client";
import React, { useEffect } from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/navbar";
import { SubMenu } from "../component/Header/submenu";
import Hero from "../component/Hero/hero";
import Leagecy from "../component/Leagecy/leagecy";
import WhyUs from "../component/WhyUs/whyUs";
import { WhyData } from "../component/WhyUs/whyData";
import Services from "../component/Services/services";
import Features from "../component/Features/features";
import Portfolio from "../component/Portfolio/portfolio";
import Testimonials from "../component/Testimonials/testimonials";
import Cta from "../component/CTA/Cta";
import NewsletterPopup from "../component/NewsPopup/NewsletterPopup";
import useScrollRestoration from "../Helper/useScrollRestoration";
// pages/index.js
import { Suspense } from "react";

import IP from "../component/IP/IP";
import LogoCloudSection from "../component/LogoCloud/LogoCloud";
// import useGeoLocation from "../Helper/useLocationData";

const constant = () => {
  useScrollRestoration();
  // useGeoLocation();

  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <NewsletterPopup />
      <Hero />
      <LogoCloudSection />
      <Leagecy />
      <WhyData>
        <WhyUs />
      </WhyData>
      <Services />
      <Features />
      <Portfolio />
      <Testimonials />
      <Cta />
      <Footer />
      <Suspense fallback={null}>
        <IP />
      </Suspense>
    </>
  );
};

export default constant;
