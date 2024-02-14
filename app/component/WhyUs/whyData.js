"use client";
import React, { createContext, useContext, useState } from "react";
import { WHYUS } from "../../data/data";
import Image from "next/image";
import styles from "./whyus.module.css";

const WhyUsContext = createContext();

const WhyData = ({ children }) => {
  const [image, setImage] = useState(WHYUS[0].image);
  const [active, setActive] = useState(WHYUS[0].id);

  const handleClick = (item) => {
    setImage(item.image);
    setActive(item.id);
  };

  const jsxWhyUs = WHYUS.map((item) => (
    <button
      key={item.id}
      type="button"
      onClick={() => handleClick(item)}
      className={`text-start hover:border-blue-500 border-2 border-solid cursor-pointer p-4 md:p-5 rounded-xl ${
        active === item.id
          ? "bg-white shadow-md border-2 border-dashed border-blue-500"
          : ""
      }  `}
      id="tabs-with-card-item-3"
      data-hs-tab="#tabs-with-card-3"
      aria-controls="tabs-with-card-3"
      role="tab"
    >
      <span className="flex ">
        <Image
          className={`cursor-pointer ${
            active === item.id ? styles.active : ""
          }`}
          src={"/images/services/icon/2.svg"}
          alt="check svg"
          height={24}
          width={24}
          style={{ height: "auto", width: "auto" }}
        />
        <span className="grow ms-6">
          <span
            className={`block text-lg font-semibold ${
              active === item.id ? "text-blue-600" : "text-gray-800"
            }`}
          >
            {item.name}
          </span>
          <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200">
            Reduce time and effort on building modern look design with Preline
            only.
          </span>
        </span>
      </span>
    </button>
  ));

  return (
    <>
      <WhyUsContext.Provider value={{ jsxWhyUs, image }}>
        {children}
      </WhyUsContext.Provider>
    </>
  );
};

const clickImageContext = () => {
  const context = useContext(WhyUsContext);
  if (!context) {
    throw new Error("useYourContext must be used within a YourProvider");
  }
  return context;
};

export { WhyData, clickImageContext };
