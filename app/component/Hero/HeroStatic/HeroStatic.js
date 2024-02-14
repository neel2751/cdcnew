"use client";
import React from "react";
import Link from "next/link";
import Video from "../video";
import { AboutImage, TeamImage } from "../../../About/AboutImage";
import { motion } from "framer-motion";

const HeroStatic = ({ company, title, desc, tag }) => {
  return (
    <section className="min-h-max">
      <div className="w-full flex items-center relative">
        <div className="absolute top-1/4 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5]" />
        <div className="min-h-max relative mx-auto pt-20 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
          <Link
            href="#"
            className="flex items-center text-[#EAF3F5] mx-auto w-max px-2 font-medium text-sm py-1 rounded-full bg-[#242A3D] border border-gray-300"
          >
            {company}
          </Link>
          <h1 className="text-[#242A3D] mx-auto max-w-5xl font-semibold  text-3xl/tight sm:text-5xl/tight lg:text-5xl/tight after:content-[url('/images/team/TeamLine.svg')] xl:lg:after:flex items-center after:-m-12 after:justify-end after:hidden">
            {title}
          </h1>
          {/* This is bug after check using mx-auto and provide some margin top to get better change */}
          <p
            style={{ marginTop: "0" }}
            className={`text-[#242A3D] opacity-70 font-medium text-base text-pretty mx-auto mt-[0px] ${
              tag ? "max-w-2xl" : "max-w-4xl mt-4"
            }`}
          >
            {desc}
          </p>
          <motion.button whileTap={{ scale: 0.9 }}>
            <div className="flex items-center justify-center w-max-2xl">
              <a
                className="flex items-center justify-center font-semibold text-sm px-8 py-4 transition bg-pink-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-pink-50"
                href="#"
              >
                Conatct Us
                <span aria-hidden="true" className="ml-1.5" role="img">
                  🤔
                </span>
              </a>
            </div>
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.2 }}
            animate={{ y: 50 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="mx-auto max-w-full h-full rounded-2xl aspect-[5/2.3] overflow-hidden px-2 pt-2 ">
              {tag === "Home" ? (
                <Video />
              ) : tag === "About" ? (
                <AboutImage />
              ) : (
                <TeamImage />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroStatic;
