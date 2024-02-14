"use client";
import React from "react";
import HeroStatic from "./HeroStatic/HeroStatic";
import { Home, About, Team } from "@/app/data/data";
import { usePathname } from "next/navigation";

const Hero = () => {
  const pathname = usePathname();

  return pathname === "/" ? (
    <HeroStatic
      company={Home.company}
      title={Home.title}
      desc={Home.desc}
      tag={Home.tag}
    />
  ) : pathname === "/About" ? (
    <HeroStatic
      company={About.company}
      title={About.title}
      desc={About.desc}
      tag={About.tag}
    />
  ) : (
    <HeroStatic
      company={Team.company}
      title={Team.title}
      desc={Team.desc}
      tag={Team.tag}
    />
  );
};

export default Hero;
