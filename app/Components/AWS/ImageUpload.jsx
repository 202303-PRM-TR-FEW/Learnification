'use client'
import React, { useState, useEffect } from "react";
import AWS from "aws-sdk";

const S3_BUCKET = "learnu7bucket";
const REGION = "us-east-1";

AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const ImageUpload = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([])

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file) => {
    const params = {
      ACL: "bucket-owner-full-control",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err, NEXT_PUBLIC_SECRET_ACCESS_KEY);
        else fetchImages(); 
      });
  };

  const fetchImages = () => {
    const params = {
      Bucket: S3_BUCKET,
    };

    myBucket.listObjects(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        setImages(data.Contents.map(img => ({
          url: `https://${params.Bucket}.s3.${REGION}.amazonaws.com/${img.Key}`,
          key: img.Key
        })));
      }
    });
  }

  useEffect(() => {
    fetchImages();
  }, [])

  return (
    <div>
      <div>Upload Progress: {progress}%</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => uploadFile(selectedFile)} className="px-3 py-1 bg-blue-500 text-white rounded-2xl">
        Upload to S3
      </button>
      <p>Fetching From S3:</p>
      <div className="flex p-4 gap-4 bg-blue-500/40 mt-6 rounded-2xl backdrop-blur-2xl">
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={image.key} className="w-40 h-40 rounded-2xl"/>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
