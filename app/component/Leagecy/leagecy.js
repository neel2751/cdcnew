import React from "react";
import MetricsSection from "./metric";

const Leagecy = () => {
  return (
    <section className="pb-20 pt-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="space-y-6 xl:max-w-3xl max-w-xl">
          <h2 className="text-4xl font-semibold text-[#242A3D]">
            Our Legacy of Excellence
          </h2>
          <p className="text-[#242A3D] text-base font-medium opacity-70">
            CDC is a leading commercial office building contractor, established
            in 2021 and committed to quality and innovation. We specialize in
            building high-performance, energy-efficient, and sustainable office
            buildings that meet the needs of our clients and the communities we
            serve.
          </p>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-0 lg:py-14 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              {/* <!-- Stats --> */}
              <div className="lg:pe-6 xl:pe-12">
                <p className="text-6xl font-bold leading-10 text-blue-600">
                  105+
                  <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2 dark:bg-gray-800 dark:text-gray-300">
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                    +12% this month
                  </span>
                </p>
                <p className="mt-2 sm:mt-3 text-gray-600">
                  of the project we have Done.
                </p>
              </div>
              {/* <!-- End Stats --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-gray-700">
              <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
                {/* <!-- Stats --> */}
                <div>
                  <p className="text-3xl font-semibold text-blue-600">98.95%</p>
                  <p className="mt-1 text-gray-600">in fulfilling projects</p>
                </div>
                {/* <!-- End Stats --> */}

                {/* <!-- Stats --> */}
                <div>
                  <p className="text-3xl font-semibold text-blue-600">190+</p>
                  <p className="mt-1 text-gray-600">partner with Government</p>
                </div>
                {/* <!-- End Stats --> */}

                {/* <!-- Stats --> */}
                <div>
                  <p className="text-3xl font-semibold text-blue-600">30+</p>
                  <p className="mt-1 text-gray-600">year of experience</p>
                </div>
                {/* <!-- End Stats --> */}
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* // <!-- End Features --> */}
        <MetricsSection />
      </div>
    </section>
  );
};

export default Leagecy;
