"use client";
import React, { createContext, useContext, useState } from "react";
import { SUB_MENU, PROJECT } from "../../data/data.js";
import Image from "next/image";
import Link from "next/link.js";

const HoverContext = createContext();

const SubMenu = ({ children }) => {
  const [hover, subHover] = useState(SUB_MENU[0].id);
  const [name, subName] = useState(SUB_MENU[0].name);
  const [desc, subDesc] = useState(SUB_MENU[0].description);
  const [img, subImg] = useState(SUB_MENU[0].image);
  const [link, subLink] = useState(SUB_MENU[0].link);

  const handleClick = (item) => {
    subHover(item.id);
    subName(item.name);
    subDesc(item.description);
    subImg(item.image);
    subLink(item.link);
  };

  const groupA = SUB_MENU.filter((item) => item.category === "A");
  const groupB = SUB_MENU.filter((item) => item.category === "B");

  const jsxDataA = groupA.map((item) => (
    <Link
      key={item.id}
      onMouseEnter={() => handleClick(item)}
      className="group flex gap-x-5 hover:bg-[#EAF3F5] rounded-lg p-4 text-gray-200  focus:outline-none focus:ring-1 focus:ring-gray-600"
      href={`/Services/Service/${item.link}`}
    >
      <Image
        src={item?.icon}
        alt="new"
        sizes="100vw"
        style={{
          width: "auto",
        }}
        width={24}
        height={24}
      />
      <div className="grow">
        <p className=" font-semibold text-base text-[#242A3D] group-hover:text-[#242A3D]">
          {item.name}
        </p>
        <p className="text-sm text-gray-500 group-hover:text-gray-800">
          {item.description}
        </p>
      </div>
    </Link>
  ));
  const jsxDataB = groupB.map((item) => (
    <Link
      key={item.id}
      onMouseEnter={() => handleClick(item)}
      className="group flex gap-x-5 hover:bg-[#EAF3F5] rounded-lg p-4 dark:text-gray-200  focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={`/Services/Service/${item.link}`}
    >
      <Image src={item.icon} alt="new" width={24} height={24} />
      <div className="grow">
        <p className="font-semibold text-base text-[#242A3D] group-hover:text-[#242A3D]">
          {item.name}
        </p>
        <p className="text-sm text-gray-500 group-hover:text-gray-800">
          {item.description}
        </p>
      </div>
    </Link>
  ));

  return (
    <>
      <HoverContext.Provider
        value={{ jsxDataA, jsxDataB, name, desc, img, link, hover }}
      >
        {children}
      </HoverContext.Provider>
    </>
  );
};

const hoverImageContext = () => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error("useYourContext must be used within a YourProvider");
  }
  return context;
};

const Projects = () => {
  return (
    <>
      {PROJECT.map((item) => (
        <a
          key={item.id}
          className="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <div className="grow">
            <span className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
              {item.name}
              {item.category ? (
                <span className="inline ms-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full">
                  EXPERT
                </span>
              ) : (
                <span></span>
              )}
            </span>
            {item.description}
          </div>
        </a>
      ))}
    </>
  );
};

export { SubMenu, Projects, hoverImageContext };
