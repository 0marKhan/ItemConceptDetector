import React, { useState } from "react";
import "./ItemDetection.scss";
import ApiCall from "../components/ApiCall";

const ItemDetection = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [apiCallTriggered, setApiCallTriggered] = useState(false);

  const [apiData, setApiData] = useState([]);

  const setImageUrlHandler = (e) => {
    setImageUrl(e.target.value);
    // Reset the apiCallTriggered state when you set a new image URL
    setApiCallTriggered(false);
  };

  const setApiCallTriggeredHandler = () => {
    // If apiCallTriggered is already true, perform the API call again
    if (apiCallTriggered) {
      setApiCallTriggered(false); // Reset to false first
    }
    setApiCallTriggered(true);
  };

  const setApiDataHandler = (event) => {
    setApiData(event.target.value);
  };

  const clearUrlHandler = () => {
    setImageUrl("");
    // Reset the apiCallTriggered state when you clear the URL
    setApiCallTriggered(false);
  };

  return (
    <div>
      <h1>Item Detection</h1>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={setImageUrlHandler}
          placeholder="Enter Image URL"
        />
      </div>
      {imageUrl && (
        <div className="input-image-container">
          <img className="input-image" src={imageUrl} alt="Uploaded" />
          <div className="button-container">
            <button onClick={setApiCallTriggeredHandler}>Get Concepts</button>
            <button onClick={clearUrlHandler}>Clear</button>
          </div>
        </div>
      )}
      {apiCallTriggered && imageUrl && (
        <ApiCall setApiDataHandler={setApiDataHandler} imageUrl={imageUrl} />
      )}
    </div>
  );
};

export default ItemDetection;
