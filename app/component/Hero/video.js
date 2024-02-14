import React from "react";

const Video = () => {
  return (
    <video
      className="rounded-2xl"
      autobuffer="autobuffer"
      autoPlay={true}
      muted
      loop
      playsInline={true}
      preload="auto"
    >
      <source
        src="https://res.cloudinary.com/doahepgtc/video/upload/v1705315023/cdc/Section/NewHome_vzgega.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
