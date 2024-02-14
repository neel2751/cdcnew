import Image from "next/image";
import CTA from "../../../public/images/cta.png";

const Cta = () => {
  return (
    <section className=" xl:lg:md:px-16 py-20 ">
      <div className="max-w-full mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-md bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900">
          <div className="absolute right-0 top-0 h-full w-full flex justify-end ">
            <Image
              className="h-full w-full object-cover rounded-md"
              src={CTA}
              alt="check"
              height={500}
              width={500}
            />
          </div>
          {/* <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
            <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
              <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
              <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
            </div>
          </div> */}
          <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
            <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-950 dark:text-white">
              Transform your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">
                vision into reality
              </span>{" "}
              with our help.
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Ready to turn your vision into solid ground? We're more than
              builders, we're partners. Let's collaborate, innovate, and craft a
              space that exceeds your wildest dreams. Contact us today and build
              together.
            </p>
            <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
              <button className="outline-none h-12 px-5 rounded-xl bg-blue-600 text-white flex items-center">
                Get In touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
