import Image from "next/image";
import Link from "next/link";
import styles from "../component/WhyUs/whyus.module.css";
import { ABOUTFEA } from "../data/data";

const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="space-y-4">
      <span className="p-2 rounded-md  flex w-max">
        <img className="h-8 w-8" src={icon} alt="about_us icon" />
      </span>
      <h2 className="font-bold text-[#242A3D] text-xl">{title}</h2>
      <p className="text-[#242A3D]">{description}</p>
    </div>
  );
};

const AboutFeatures = () => {
  const handleHover = () => {
    // Logic to add your custom class on hover
    const button = document.getElementById("yourButton"); // Adjust the ID based on your button
    button.classList.add("your-custom-class"); // Replace 'your-custom-class' with your desired class
  };

  const handleMouseLeave = () => {
    // Logic to remove your custom class on mouse leave
    const button = document.getElementById("yourButton"); // Adjust the ID based on your button
    button.classList.remove("your-custom-class"); // Replace 'your-custom-class' with your desired class
  };
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col gap-14">
        <div className="flex flex-col max-w-xl">
          <h2 className="text-4xl lg:text-4xl font-bold text-[#242A3D]">
            The CDC
          </h2>
          <p className="mt-4">
            Our culture isn’t something we keep to ourselves. Our culture is
            baked into every feature of CDC. Because the keys to our success are
            yours, too.
          </p>
        </div>
        <div className="flex gap-12 lg:items-center">
          <div className="flex flex-1 flex-col gap-10">
            <div className="gap-8 lg:gap-10 grid sm:grid-cols-2">
              {ABOUTFEA.map((feature) => (
                <FeatureItem key={feature.id} {...feature} />
              ))}
            </div>
            <Link
              href="/Team"
              className={`active:${styles._wiggle} hover:bg-[#242A3D] group border-[#242A3D] transition-all ease-in-out delay-100 border-2 text-[#242A3D] hover:text-white px-5 h-12 rounded-md w-max flex items-center gap-x-3 `}
            >
              Meet Our Team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="group-hover:motion-safe:animate-spin w-5 h-5 group-hover:text-white text-gray-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
            </Link>
          </div>
          <div className="hidden md:flex justify-end md:w-1/2 xl:w-[45%] text-white lg:h-full items-center">
            <Image
              src="/images/aboutus/theCDC.svg"
              width={1300}
              height={800}
              alt="img cover about"
              className="w-full lg:w-[90%] xl:lg:w-[85%] h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
