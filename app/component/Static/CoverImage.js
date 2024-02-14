import Image from "next/image";

// components/CoverImage.js
const CoverImage = ({ src, alt, text }) => (
  <div className="p-24" style={{ position: "relative" }}>
    <Image
      className="h-fit"
      src={src}
      alt={alt}
      height={100}
      width={100}
      style={{ width: "100%", height: "500px", objectFit: "cover" }}
    />
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2>{text}</h2>
    </div>
  </div>
);

export default CoverImage;
