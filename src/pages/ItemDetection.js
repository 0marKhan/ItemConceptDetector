import React, { useEffect, useState } from "react";
import "./ItemDetection.scss";
import ApiCall from "../components/ApiCall";
import { Link } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";

import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import MaterialModal from "../components/MaterialModal";

const ItemDetection = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [apiData, setApiData] = useState([]);
  const [isApiCallPending, setApiCallPending] = useState(false);
  const [open, setOpen] = useState(false);

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

  // Function to scroll smoothly to concepts-data
  const scrollToConceptsData = () => {
    const conceptsData = document.getElementById("concepts-data");
    if (conceptsData) {
      conceptsData.scrollIntoView({ behavior: "smooth" });
    }
  };

  const autoScrollToConceptsData = () => {
    const conceptsData = document.getElementById("concepts-data");
    if (conceptsData) {
      conceptsData.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Use useEffect to scroll when apiData is updated
  useEffect(() => {
    // Scroll to concepts only when apiData is available and status is "Ok"
    if (apiData.status && apiData.status.description === "Ok") {
      autoScrollToConceptsData();
    }
  }, [apiData]);

  //for modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="back-container">
        <button onClick={handleOpen}>Example URLs</button>
        <Link className="home-link" to="/">
          Home
        </Link>
      </div>
      <h1 className="page-heading">Item Detection</h1>
      <div className="input-boxes">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={setImageUrlHandler}
          placeholder="Enter Image URL"
        />
        {/* Conditional rendering for the arrow icon */}
        {apiData.status && apiData.status.description === "Ok" && (
          <Tooltip title="scroll to concepts">
            <ArrowDownwardSharpIcon
              onClick={scrollToConceptsData}
              className="arrow-icon"
            />
          </Tooltip>
        )}
      </div>
      {imageUrl && (
        <div className="input-image-container">
          <div className="button-container">
            <button onClick={setApiCallTriggeredHandler}>Get Concepts</button>
            <button onClick={clearUrlHandler}>Clear</button>
          </div>
          <img className="input-image" src={imageUrl} alt="concepts input" />
        </div>
      )}
      {isApiCallPending && imageUrl && (
        <ApiCall setApiDataHandler={setApiDataHandler} imageUrl={imageUrl} />
      )}
      {/* Display the API data */}
      <div id="concepts-data">
        {apiData &&
        apiData.status &&
        apiData.status.description === "Failure" ? (
          <p className="failure-case">No data available for this Url</p>
        ) : apiData && apiData.status && apiData.status.description === "Ok" ? (
          <div className="concepts-container">
            <h3 className="concepts-heading">Concepts</h3>
            <h4 className="concepts-subheading">concept prediction out of 1</h4>
            <ul className="concepts">
              {apiData.outputs[0].data.concepts.map((concept, index) => (
                <li key={index}>
                  <span className="concept-name">{concept.name}</span>, Value:{" "}
                  {concept.value}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <MaterialModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default ItemDetection;
