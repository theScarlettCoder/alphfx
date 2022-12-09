import React from "react";
import style from "../styles/video.module.css";

const Video = () => {
  return (
    <div className={`flex flex-col justify-center items-center gap-5`}>
      <h1 className="text-center uppercase text-white text-3xl bold">
        Secured and fast trading...
      </h1>
      <video width="600" height="320" controls>
        <source src="https://erovelyntrades.com/img/vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
