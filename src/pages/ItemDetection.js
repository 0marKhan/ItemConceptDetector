import React, { useState } from "react";
import "./ItemDetection.scss";
import ApiCall from "../components/ApiCall";

const ItemDetection = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [apiData, setApiData] = useState([]);
  const [isApiCallPending, setApiCallPending] = useState(false);

  const setImageUrlHandler = (e) => {
    setImageUrl(e.target.value);
    setApiData([]); // Clear previous API data when a new URL is set
  };

  const setApiCallTriggeredHandler = () => {
    if (imageUrl && !isApiCallPending) {
      setApiCallPending(true);
    }
  };

  const clearUrlHandler = () => {
    setImageUrl("");
    setApiData([]); // Clear previous API data when the URL is cleared
  };

  // Function to handle the API response
  const setApiDataHandler = (data) => {
    setApiData(data);
    setApiCallPending(false); // Reset the API call status
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
      {isApiCallPending && imageUrl && (
        <ApiCall setApiDataHandler={setApiDataHandler} imageUrl={imageUrl} />
      )}
      {/* Display the API data */}
      <div>
        {apiData &&
        apiData.status &&
        apiData.status.description === "Failure" ? (
          <p>No data for this image.</p>
        ) : apiData && apiData.status && apiData.status.description === "Ok" ? (
          <div>
            <h3>Concepts:</h3>
            <ul>
              {apiData.outputs[0].data.concepts.map((concept, index) => (
                <li key={index}>
                  {concept.name}, Value: {concept.value}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default ItemDetection;
