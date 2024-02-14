// components/TabbedCategories.js
"use client";
import React, { useState } from "react";
import NewsSection from "./TeamSection";
import { motion } from "framer-motion";

const Tab = ({ teamdata }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const uniqueAuthors = [
    ...new Map(teamdata.map((v) => [v.company.teamCategories, v])).values(),
  ];

  return (
    <div className="container mx-auto mt-8">
      <div class="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll ">
        <div class="live-preview  h-full w-full not-prose">
          <div class="flex w-full xl:items-center flex-col">
            <div data-slot="base" class="inline-flex" aria-label="Options">
              <div
                class="flex p-1 transition delay-150 h-fit gap-2 items-center flex-nowrap overflow-x-scroll scrollbar-hide bg-transparent border-2 border-[#242A3D] rounded-[12px] "
                aria-orientation="horizontal"
              >
                <motion.span
                  layout
                  transition={{ type: "spring", damping: 15, stiffness: 250 }}
                  className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                />
                <button
                  className={`px-4 py-2 rounded-[10px] ${
                    activeCategory === ""
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-800 opacity-70"
                  }`}
                  onClick={() => setActiveCategory("")}
                >
                  <div class="flex items-center space-x-2">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      height="24"
                      role="presentation"
                      viewBox="0 0 24 24"
                      width="24"
                      fill="none"
                    >
                      <path
                        d="M2.58078 19.0112L2.56078 19.0312C2.29078 18.4413 2.12078 17.7713 2.05078 17.0312C2.12078 17.7613 2.31078 18.4212 2.58078 19.0112Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>ALL</span>
                  </div>
                </button>
                {uniqueAuthors.map((item) => (
                  <button
                    onClick={() =>
                      setActiveCategory(item.company.teamCategories)
                    }
                    data-slot="tab"
                    data-key="photos"
                    id="react-aria9613397964-:rcm:-tab-photos"
                    aria-selected="true"
                    role="tab"
                    class={`px-4 py-2 rounded-[10px] ${
                      activeCategory === item.company.teamCategories
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800 opacity-70"
                    }`}
                    type="button"
                  >
                    <span
                      class="absolute z-0 inset-0 rounded-small bg-primary text-primary-foreground"
                      data-slot="cursor"
                    ></span>
                    <div
                      class="relative z-10 whitespace-nowrap transition-colors text-default-500 group-data-[selected=true]:text-primary-foreground"
                      data-slot="tabContent"
                    >
                      <div class="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-7 h-7"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                          />
                        </svg>

                        <span>{item.company.teamCategories}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsSection category={activeCategory} teamdata={teamdata} />
    </div>
  );
};

export default Tab;
