"use client";
import React, { useState } from "react";
import Team from "./Team";
import AllTeam from "./AllTeam";

const Teampage = () => {
  const [activeTab, setActiveTab] = useState("TeamData");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div class="p-4 border-b border-blue-300 flex items-center justify-center overflow-x-auto overflow-y-hidden bg-white whitespace-nowrap">
        <div className="border border-blue-300 rounded-full p-2 transition delay-700 ease-in-out">
          <button
            onClick={() => handleTabChange("TeamData")}
            class={`inline-flex items-center h-10 px-2 py-2 -mb-px text-center
        ${
          activeTab === "TeamData"
            ? "text-white bg-blue-600 rounded-full sm:px-4 -px-1"
            : "text-black bg-transparent"
        }
        whitespace-nowrap focus:outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>

            <span class="mx-1 text-sm sm:text-base font-semibold">
              TeamData
            </span>
          </button>

          <button
            onClick={() => handleTabChange("AddTeam")}
            class={`inline-flex items-center h-10 px-2 py-2 -mb-px text-center
        ${
          activeTab === "AddTeam"
            ? "text-white bg-blue-600 rounded-full sm:px-4 -px-1"
            : "text-black bg-transparent"
        }
          whitespace-nowrap focus:outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span class="mx-1 text-sm sm:text-base font-bold">Add Member</span>
          </button>
        </div>
      </div>
      <div className="bg-white">
        {activeTab === "TeamData" && <AllTeam />}
        {activeTab === "AddTeam" && <Team />}
      </div>
    </>
  );
};

export default Teampage;
