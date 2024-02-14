"use client";
import Image from "next/image";
import cdc from "../../../public/images/Logo_New.svg";
import Link from "next/link";
import React, { useState } from "react";
import { Projects, hoverImageContext } from "./submenu";
import {
  Facbook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "../../../public/images/social/icons";
import Img from "../Img/Img";

const Navbar = () => {
  //active link change text colour
  const SocialLinks = [
    {
      id: 1,
      icon: <Facbook />,
      name: "Facebook",
      link: "https://www.facebook.com/cdcconstructionltd",
    },
    {
      id: 2,
      icon: <Instagram />,
      name: "Instagram",
      link: "https://www.instagram.com/cdc.constructionuk",
    },
    {
      id: 3,
      icon: <Linkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/creative-design-construction-limited",
    },
    {
      id: 4,
      icon: <Youtube />,
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCnHvmTVf2_iu4sXY9pzW7XA",
    },
  ];
  const { jsxDataA, jsxDataB, name, desc, img, link } = hoverImageContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [navIsOpened, setNavIsOpened] = useState(false);

  const handleMail = () => {
    // You can add additional logic here if needed
    window.top.location.href = `mailto:info@cdc.construction`;
  };

  const checkProject = () => {
    if (isProject) {
      setIsProject(false);
    } else {
      setIsProject(true);
    }
  };
  const chekOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  const closeNavbar = () => {
    setNavIsOpened(false);
  };
  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };
  return (
    <>
      <div
        aria-hidden={true}
        onClick={() => {
          closeNavbar();
        }}
        className={`fixed scroll-smooth overflow-auto  bg-gray-800/40 inset-0 z-30 ${
          navIsOpened ? "lg:hidden" : "hidden lg:hidden"
        }`}
      />
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full flex justify-between h-14 items-center">
          <div className="h-full flex items-center gap-x-4 text-[#242A3D]">
            <a
              target="_top"
              href="tel:02080043327"
              aria-label="020 8004 3327"
              className="flex gap-1 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden sm:flex">020 8004 3327</span>
            </a>
            <Link
              onClick={handleMail}
              data-address="info@bushcraftlondon.co.uk"
              aria-label="info@cdc.construction"
              href="mailto:info@cdc.construction"
              className=" cursor-pointer flex gap-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden sm:flex">info@cdc.construction</span>
            </Link>
          </div>
          <div className="flex items-center gap-x-2.5 -mx-2 text-[#242A3D] children:p-2 children:border children:border-x-gray-200 dark:children:border-gray-800 children:bg-gray-100 dark:children:bg-gray-900 children:rounded-md">
            {/* Socail Medai Link */}
            {SocialLinks.map((links) => (
              <a
                aria-label={`CDC ${links.name}`}
                target="_blank"
                rel="noreferer"
                href={links.link}
                className="h-6 w-6 transition ease-linear text-[#242A3D] hover:text-pink-700"
              >
                {links.icon}
                {/* <
                  className={"transition ease-linear hover:text-pink-700"}
                /> */}
              </a>
            ))}
            {/* <a
              aria-label="CDC Instagram "
              target="_blank"
              rel="noreferer"
              href="https://www.instagram.com/cdc.constructionuk/"
              className="transition ease-linear hover:text-pink-700"
            >
              <Instagram
                className={"transition ease-linear hover:text-pink-700"}
              />
            </a> */}
          </div>
        </div>
      </div>

      <header className="sticky left-0 top-0 w-full flex items-center h-20 z-40 bg-[#9ED0E0]">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link
              href="#"
              className="text-xl font-semibold w-4/12 flex items-center gap-x-2"
            >
              <Img image={cdc} cls="9/12" alt="cdc_logo" />
            </Link>
          </div>

          <div
            className={`absolute top-full left-0 bg-[#9ED0E0] borde border-t-2 border-y-cyan-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:flex lg:justify-between duration-300 ease-linear${
              navIsOpened
                ? "translate-y-0 opacity-100 visible overflow-y-auto max-h-screen mt-4"
                : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"
            }`}
          >
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
              {/* Your menu items go here */}
              <li>
                <Link
                  href="/"
                  className="relative py-2.5 text-base duration-300 font-semibold text-[#222222] ease-linear hover:text-white after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="relative py-2.5 text-base duration-300 font-semibold text-[#222222] ease-linear hover:text-white after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-white"
                >
                  About
                </Link>
              </li>
              <li
                onMouseOver={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onClick={chekOpen}
              >
                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] md:py-8">
                  <Link
                    href="/Services"
                    className={`flex items-center relative text-base duration-300 ease-linear font-semibold text-[#222222] hover:text-white after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-white ${
                      isOpen
                        ? "after:absolute after:w-full after:bg-white after:scale-100"
                        : ""
                    }`}
                  >
                    Services
                    <svg
                      className={`flex-shrink-0 ms-2 duration-300 ease-linear w-2.5 h-2.5 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </Link>

                  {/* Start submenu */}
                  <div
                    className={`duration-300 ease-linear hs-dropdown-menu ${
                      isOpen
                        ? "block sm:block overflow-y-auto max-h-screen w-full"
                        : "hidden"
                    }  xl:absolute lg:absolute xl:-mt-3 z-10 top-full start-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4 divide-gray-700 before:start-0 before:w-full before:h-5`}
                  >
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="flex flex-col mx-1 md:mx-0">
                        {jsxDataA}
                      </div>
                      <div className="flex flex-col mx-1 md:mx-0">
                        {jsxDataB}
                      </div>
                      <div className="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                        <span className="text-sm font-semibold uppercase text-[#242A3D]">
                          {name}
                        </span>
                        <Link
                          className="group mt-2 p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 dark:hover:bg-slate-500/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600"
                          href={`Services/Service/${link}`}
                        >
                          <Image
                            src={img}
                            alt="Image Description"
                            height={1500}
                            width={1000}
                            className="aspect-[5/3] object-cover rounded-lg"
                          />
                        </Link>
                        <div className="grow pt-4 md:pt-0 mx-1 md:mx-0">
                          <p className="text-sm text-gray-800 dark:text-slate-400">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End submenu */}
                </div>
              </li>
              <li
                onMouseOver={() => setIsProject(true)}
                onMouseLeave={() => setIsProject(false)}
                onClick={checkProject}
              >
                <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] md:py-8">
                  <button
                    type="button"
                    className="flex items-center text-base w-full relative duration-300 ease-linear font-semibold text-[#222222] hover:text-white after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-white"
                  >
                    Portfolio
                    <svg
                      className={`flex-shrink-0 ms-2 duration-300 ease-linear w-2.5 h-2.5 ${
                        isProject ? "rotate-180" : ""
                      }`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>

                  <div
                    className={`hs-dropdown-menu md:w-80  ${
                      isProject
                        ? "block transition delay-150 duration-300 ease-in-out"
                        : "hidden"
                    } xl:-mt-1 xl:absolute lg:absolute z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-gray-800 dark:divide-gray-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5`}
                  >
                    <Projects />
                    {/* <div className="my-2 border-t border-gray-100 dark:border-gray-800"></div> */}
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/Team"
                  className="relative py-2.5 text-base duration-300 font-semibold text-[#222222] ease-linear hover:text-white after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-white"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/ContactUs"
                  className="relative py-2.5 text-base duration-300 font-semibold text-[#222222] ease-linear hover:text-white after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
              <Link
                href="tel:07515058788"
                className="px-6 items-center h-12 rounded-3xl text-sm font-semibold text-white bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto"
              >
                Book a call
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              aria-label="toggle navbar"
              className="outline-none border-l border-l-blue-500  pl-3 relative py-3"
            >
              <span
                aria-hidden={true}
                className={`
              flex h-0.5 w-6 rounded bg-gray-800  transition duration-300
              ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
            `}
              />
              <span
                aria-hidden={true}
                className={`
              mt-2 flex h-0.5 w-6 rounded bg-gray-800  transition duration-300
              ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
              `}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
