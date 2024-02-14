import Image from "next/image";
import Link from "next/link";
import SecondServices from "./secondServices";
import { SUB_MENU } from "@/app/data/data";
import { motion } from "framer-motion";

const ServiceCard = ({ image, name, description, link }) => {
  return (
    <motion.div
      whileHover={{ scale: [1, 1.05] }}
      transition={{ duration: 0.3, ease: [0.43, 0, 0.53, 1], type: "spring" }}

      // transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Link
        className={`group transition ease-in-out delay-150 hover:scale-105`}
        href={`/Services/Service/${link}`}
      >
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <Image
            className="rounded-t-lg rounded-b-none w-full rounded aspect-[5/3] object-cover bg-gray-100"
            src={image}
            alt="new thing"
            width={1300}
            height={800}
            // priority
            loading="lazy"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="p-5">
            <h2
              className={`cursor-pointer transition-all duration-300 group-hover:bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text group-hover:text-transparent mb-2 text-xl font-semibold tracking-tight text-[#242A3D]`}
            >
              {name}
            </h2>
            <p className="mb-3 font-normal text-[#242A3D] opacity-70">
              {description}
            </p>
          </div>
        </div>

        {/* <div className="rounded-md flex flex-col bg-white dark:bg-white shadow-lg shadow-gray-200/60 p-4">
        <div className="relative">
          <Image
            src={cover}
            alt="illustration"
            width={1300}
            height={800}
            className="w-full rounded aspect-[5/3] object-cover bg-gray-100 dark:bg-gray-900"
          />
        </div>
        <Link
          href="#"
          className="mt-5 text-xl font-semibold text-gray-900 dark:text-[#242A3D]"
        >
          {title}
        </Link>
        <p className="text-gray-700 dark:text-[#242A3D] opacity-80 line-clamp-2 my-4">
          {sumary}
        </p>
      </div> */}
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-semibold sm:text-3xl text-[#242A3D] capitalize">
            Tailored Construction Solutions
          </h1>
          <p className="text-[#242A3D] text-base font-medium opacity-70">
            At CDC, we offer a comprehensive suite of construction services,
            meticulously tailored to match your unique project requirements,
            ensuring success at every step.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUB_MENU.filter((order) => order.tag === "Y").map((ser) => (
            <ServiceCard key={ser.id} {...ser} />
          ))}
          {/* {SUB_MENU.slice(0, 6).map((ser) => (
            <BlogCard key={ser.id} {...ser} />
          ))} */}
        </div>
        <SecondServices />
      </div>
    </section>
  );
};
export default Services;
