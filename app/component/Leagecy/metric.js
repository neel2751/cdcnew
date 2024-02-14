import { METRIC } from "@/app/data/data";
import Image from "next/image";

const MetricsSection = () => {
  return (
    // <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
    <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2">
      {METRIC.map((item) => (
        <div
          key={item.id}
          className="p-5 md:p-4 rounded-full border border-[#242A3D] space-y-4"
        >
          <div className="flex items-center gap-4 text-[#242A3D]">
            <span className="p-2">
              <Image src={item.image} alt={item.alt} height={40} width={40} />
            </span>
            <h2 className="font-medium text-base text-[#242A3D]">
              {item.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsSection;
