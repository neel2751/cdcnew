import Image from "next/image";
import Link from "next/link";
import { SUB_MENU } from "@/app/data/data";

const BlogCard = ({ image, name, description, link }) => {
  return (
    <Link
      className="transition ease-in-out delay-150 hover:scale-105 shadow"
      href={`/Services/Service/${link}`}
    >
      <div className="flex flex-col lg:flex-row gap-8 rounded-md bg-gray-100 dark:bg-white shadow-lg shadow-gray-200/60 ">
        <div className="w-full lg:w-3/6 lg:h-full xl:h-60">
          <Image
            src={image}
            alt="post cover"
            width={1300}
            height={800}
            className="rounded-lg rounded-r-none aspect-video lg:aspect-auto lg:h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 flex justify-center flex-col space-y-6 p-3">
          <h5
            className={`cursor-pointer transition-all duration-300 group-hover:bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text group-hover:text-transparent mb-2 text-xl font-semibold tracking-tight text-[#242A3D]`}
          >
            {name}
          </h5>
          <p className="mb-3 font-normal text-[#242A3D] opacity-70">
            {description}
          </p>
          {/* <div className="text-xl font-semibold tracking-tight text-[#242A3D]">
            {name}
          </div>
          <p className="text-[#242A3D] opacity-80 text-sm">{description}</p> */}
        </div>
      </div>
    </Link>
  );
};

const SecondServices = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {SUB_MENU.filter((order) => order.tag === "N").map((ser) => (
        <BlogCard key={ser.id} {...ser} />
      ))}
    </div>
  );
};
export default SecondServices;
