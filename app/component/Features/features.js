import Image from "next/image";
import Link from "next/link";
import { FEATURES } from "@/app/data/data";

const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="space-y-6 lg:space-y-10">
      <div className="flex">
        <Image
          src={icon}
          alt="new icon"
          height={40}
          width={40}
          style={{ height: "auto", width: "auto" }}
        />
        <div className="ms-5 sm:ms-8">
          <h3 className="text-base sm:text-lg font-semibold text-[#242A3D]">
            {title}
          </h3>
          <p className="mt-1 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-10 mb-10">
      <div className="mx-auto px-5 sm:px-10 md:px-10 xl:p-0 flex flex-col">
        <div className="flex max-w-xl px-16">
          <h2 className="text-4xl xl:lg:pl-16 xl:lg:-mb-96 mb-10 lg:text-4xl font-bold text-[#242A3D]">
            Features
          </h2>
        </div>
        <div className="flex xl:flex-row md:flex-col md:justify-center md:items-center lg:items-center">
          <div className="flex flex-1 flex-col gap-10">
            <div className="gap-8 xl:pl-16 md:pl-0 lg:gap-10 grid sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <FeatureItem key={feature.id} {...feature} />
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-end md:w-1/2 xl:w-[45%] lg:h-full items-center">
            <Image
              src="/images/Features.svg"
              width={500}
              height={500}
              alt="img cover about"
              className="w-[90%] lg:w-[90%] xl:lg:w-[85%] h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
