import React from "react";
import "./BackgroundVideo.scss";

import Programming from "../assets/programming.mp4";
import { Link } from "react-router-dom";

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video src={Programming} autoPlay loop muted />
      <div className="content">
        <h1>Item Detector</h1>
        <p>
          A website that uses the clarify API to detect items from images and
          display their concepts
        </p>
        <Link to="face-detect-page" className="button1">
          Try It Out
        </Link>
      </div>
    </div>
  );
};

export default BackgroundVideo;
