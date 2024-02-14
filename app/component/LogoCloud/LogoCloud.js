import { handleGetImagesIntoDB } from "@/actions/logoCloudAction";
import Image from "next/image";
import React from "react";
import { LOGOS } from "@/app/data/data";

const LogoItem = ({ logoImg, name }) => {
  return (
    <div className="p-4 sm:p-5 hover:cursor-pointer group">
      <Image
        src={logoImg.mainImageUrl}
        width={200}
        height={160}
        alt={"company name"}
        className="h-7 sm:h-20 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
      />
    </div>
  );
};
const LogoCloudSection = () => {
  const [logoImages, setLogoImages] = React.useState([]);
  React.useEffect(() => {
    const getLogo = async () => {
      const getLogoResult = await handleGetImagesIntoDB();
      if(!getLogoResult) setLogoImages(['']);
      setLogoImages(getLogoResult.data);
    };
    getLogo();
  }, []);
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        {/* <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900  capitalize">
            Trusted by companies like
          </h1>
        </div> */}
        <div className="flex justify-center flex-wrap">
          {logoImages.length >0 ? 
            logoImages.map((logo) => (
              <LogoItem key={logo.asset_id} logoImg={...logo} />
            )) : 
            LOGOS.map((logo) =>  (
              <LogoItem key={logo.id} logoImg={...logo}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};
export default LogoCloudSection;
