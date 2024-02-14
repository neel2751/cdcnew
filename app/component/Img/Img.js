import Image from "next/image";
import React from "react";

const Img = ({ image, alt, cls }) => {
  return (
    <Image
      src={image}
      alt={alt}
      className={cls}
      sizes="100vw"
      style={{
        width: "auto",
        height: "auto",
      }}
      width={500}
      height={300}
    />
  );
};

export default Img;
