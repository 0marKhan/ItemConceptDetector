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
          Identifies a variety of concepts in images including objects, themes,
          and more. Trained with over 10,000 concepts and 20M images.
        </p>
        <Link to="item-detect-page" className="button1">
          Try It Out
        </Link>
      </div>
    </div>
  );
};

export default BackgroundVideo;
