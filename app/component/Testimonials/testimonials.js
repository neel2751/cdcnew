import React from "react";

const Testimonials = () => {
  return (
    // <!-- Testimonials -->
    <section className="py-20">
      <div className="px-24 space-y-4 max-w-2xl">
        <span className="text-blue-500 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
          Happy Clients
        </span>
        <h1 className="font-bold text-gray-800 text-3xl">
          Client’s Say About Us
        </h1>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                <em>
                  "Sai and Narendra and the team were so helpful. I wish I had
                  started my job with their architect who helped me sort out the
                  mess that my original architect had left me in. And so it
                  continued, they were always helpful, offering up creative
                  solutions, going above and beyond and provided such a high
                  quality of work. And fast too! Just amazing. I will definitely
                  use them again for anything I need doing and can't recommend
                  them enough".
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
                Christopher S
              </h3>
              <p className="text-sm text-gray-500">03/Jun/2023</p>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                <em>
                  "Creative Design and Construction has just completed a
                  complete renovation of our house in Dagenham over the past 3
                  months. We’re very happy with the result, they did a great job
                  - we have high standards and they delivered. The team we had
                  on site were excellent and we built up a great working
                  relationship with them as the job progressed. In the last few
                  weeks, we could feel that they wanted to do a good job and
                  were very flexible working around various delays (e.g
                  kitchen)."
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
                Silviya Barrett
              </h3>
              <p className="text-sm text-gray-500"> 02/Jun/2023</p>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                <em>
                  "I am delighted to come across Creative Design and
                  Construction after dreadful few months dealing with
                  unprofessional construction company and architect! Andrew and
                  Sadequl were working on my project of completely refurbishing
                  my house, everything has been done with good quality and good
                  value. Even after my project has finished whenever I had
                  questions to ask Andrew and Sadequl always are very
                  responsive, which I appreciate. I cannot recommend this
                  company enough! Definitely will get back if I have projects in
                  future."
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
                Jimmy Flynn
              </h3>
              <p className="text-sm text-gray-500">10/Jun/2023</p>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* // <!-- End Testimonials --> */}
    </section>
  );
};

export default Testimonials;
