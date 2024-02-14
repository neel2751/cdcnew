import React from "react";
import Image from "next/image";
import { PORTFOLIO } from "@/app/data/data";
import Link from "next/link";

const PortfolioItem = ({ title, description, project, image, link }) => {
  return (
    <>
      <Link
        className="group sm:flex rounded-xl border-solid border-gray-200 border-2"
        href={`/portfolio/${link}`}
      >
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
          <Image
            className="w-full h-full absolute top-0 start-0 object-cover"
            src={image}
            alt="new icon"
            width={200}
            height={100}
          />
        </div>

        <div className="grow">
          <div className="p-4 flex flex-col h-full sm:p-6">
            <div className="mb-3">
              <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-800 text-gray-200">
                {project}
              </p>
            </div>
            <h3 className="text-lg sm:text-2xl font-semibold  group-hover:text-blue-600 text-[#242A3D] dark:group-hover:text-blue-800">
              {title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {description}
            </p>

            <div className="mt-5 sm:mt-auto">
              {/* <!-- Avatar --> */}
              <div className="flex items-center">
                <div className="ms-2.5 sm:ms-4 transition ease-in-out delay-100 hover:scale-125 flex text-[#242A3D] dark:text-[#EAF3F5]">
                  <h4 className="font-semibold mr-1">Read More</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              {/* <!-- End Avatar --> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

const Portfolio = () => {
  return (
    <>
      <section>
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 px-4 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-[#242A3D]">
            Our Remarkable Project Portfolio
          </h2>
          <p className="mt-1 text-gray-600">
            Explore our extensive portfolio showcasing the breadth of our
            expertise, from iconic structures to sustainable solutions, all
            meticulously crafted to perfection
          </p>
        </div>
        {/* <!-- End Title --> */}
        {/* <!-- Card Blog --> */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* <!-- Card --> */}
            {PORTFOLIO.map((portfolio) => (
              <PortfolioItem key={portfolio.id} {...portfolio} />
            ))}
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Card Blog --> */}
      </section>
    </>
  );
};

export default Portfolio;
