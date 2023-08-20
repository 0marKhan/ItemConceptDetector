import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CopyToClipboard from "react-copy-to-clipboard";

import "./MaterialModal.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#444444",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#fff",
};

const MaterialModal = ({ open, handleClose }) => {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);

  const handleCopy1 = () => {
    setCopied1(true);
    setTimeout(() => setCopied1(false), 3000);
  };

  const handleCopy2 = () => {
    setCopied2(true);
    setTimeout(() => setCopied2(false), 3000);
  };

  const handleCopy3 = () => {
    setCopied3(true);
    setTimeout(() => setCopied3(false), 3000);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Example URLs
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Example URL 1:
          https://images.pexels.com/photos/2055100/pexels-photo-2055100.jpeg
          <br />
          <CopyToClipboard text="https://images.pexels.com/photos/2055100/pexels-photo-2055100.jpeg">
            <Button
              className="modal-button"
              onClick={handleCopy1}
              variant="contained"
              color="primary"
            >
              {copied1 ? "Copied!" : "Copy to Clipboard"}
            </Button>
          </CopyToClipboard>
          <br />
          <br />
          Example URL 2:
          https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg
          <br />
          <CopyToClipboard text="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg">
            <Button
              className="modal-button"
              onClick={handleCopy2}
              variant="contained"
              color="primary"
            >
              {copied2 ? "Copied!" : "Copy to Clipboard"}
            </Button>
          </CopyToClipboard>
          <br />
          <br />
          Example URL 3:
          https://img.freepik.com/free-photo/grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple_23-2147968680.jpg
          <br />
          <CopyToClipboard text="https://img.freepik.com/free-photo/grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple_23-2147968680.jpg">
            <Button
              className="modal-button"
              onClick={handleCopy3}
              variant="contained"
              color="primary"
            >
              {copied3 ? "Copied!" : "Copy to Clipboard"}
            </Button>
          </CopyToClipboard>
        </Typography>
      </Box>
    </Modal>
  );
};

export default MaterialModal;
