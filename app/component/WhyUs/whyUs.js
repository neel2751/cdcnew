"use client";
import React from "react";
import WhyData, { clickImageContext } from "./whyData";
import Image from "next/image";

const WhyUs = () => {
  const { jsxWhyUs, image } = clickImageContext();
  return (
    // <!-- Features -->
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        {/* <!-- Grid --> */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-7 lg:col-start-8 lg:order-2">
            <h2 className="text-xl text-[#242A3D] font-semibold sm:text-3xl">
              Transforming dreams into reality with exceptional construction.
            </h2>

            {/* <!-- Tab Navs --> */}
            <nav className="grid gap-4 mt-5 md:mt-10">{jsxWhyUs}</nav>
            {/* <!-- End Tab Navs --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="lg:col-span-6">
            <div className="relative flex justify-center">
              {/* <!-- Tab Content --> */}
              <Image
                // width={1280}
                // height={1919}
                width={1000}
                height={1000}
                className="shadow-xl aspect-[2/3] object-cover h-3/4 shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                src={image}
                alt="Image Description"
                // style={{ height: "603px", width: "488px" }}
                // style={{ height: "603px", width: "auto" }}
              />
              {/* <!-- End Tab Content --> */}

              {/* <!-- SVG Element --> */}
              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-blue-600"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* <!-- End SVG Element --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- Background Color --> */}

        {/* <!-- End Background Color --> */}
      </div>
    </section>
    //  End Feature
  );
};

export default WhyUs;
