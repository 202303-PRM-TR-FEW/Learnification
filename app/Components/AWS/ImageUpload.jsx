"use client";
import React, { useState, useEffect } from "react";
import {uploadFile, fetchImages} from "./uploadFetchImages";
const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  return (
    <div>
      <input type="file" onChange={handleFileInput} />
      <button
        onClick={() => uploadFile(selectedFile, setImages)}
        className="px-3 py-1 bg-blue-500 text-white rounded-2xl"
      >
        Upload to S3
      </button>
      <p>Fetching From S3:</p>
      <div className="flex p-4 gap-4 bg-blue-500/40 mt-6 rounded-2xl backdrop-blur-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.key}
            className="w-40 h-40 rounded-2xl"
          />
        ))}
      </div>
      {uploadFile}
    </div>
  );
};

export default ImageUpload;
