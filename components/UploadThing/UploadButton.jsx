"use client";
import React from "react";
import { UploadButton } from "./Upload";

const UploadButtons = ({ setImage }) => {
  return (
    <div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setImage(res[0].url);
          // console.log("Files: ", res[0].url);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default UploadButtons;
