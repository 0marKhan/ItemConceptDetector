import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const ApiCall = ({ imageUrl, setApiDataHandler }) => {
  const [loading, setLoading] = useState(true); // Initialize loading state

  const PAT = "5bbe26035eeb482a9a8420e2d6acf6ee";
  const USER_ID = "clarifai";
  const APP_ID = "main";
  const MODEL_ID = "general-image-recognition";
  const MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40";

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: imageUrl,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  fetch(
    "https://api.clarifai.com/v2/models/" +
      MODEL_ID +
      "/versions/" +
      MODEL_VERSION_ID +
      "/outputs",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      setApiDataHandler(result);
    })
    .catch((error) => console.log("error", error))
    .finally(() => {
      setLoading(false);
    });

  return (
    <>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default ApiCall;
