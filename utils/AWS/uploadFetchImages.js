import AWS from "aws-sdk";

const S3_BUCKET = "learnu7bucket";
const REGION = "us-east-1";

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});


export async function uploadImage(file, imageName) {
  const params = {
    ACL: "bucket-owner-full-control",
    Body: file,
    Bucket: S3_BUCKET,
    Key: imageName
  };
  const uploadedFile = myBucket.upload({
    ...params,
  }).promise()
  return (await uploadedFile).Location
}

export const uploadFile = (file, setImages) => {
  const params = {
    ACL: "bucket-owner-full-control",
    Body: file,
    Bucket: S3_BUCKET,
    Key: "uploadedImage.webp",
  };

  myBucket
    .putObject(params)
    .on("httpUploadProgress", (evt) => {
      console.log(Math.round((evt.loaded / evt.total) * 100));
    })
    .send((err) => {
      if (err) console.log(err, process.env.SECRET_ACCESS_KEY);
      else fetchImages(setImages);
    });
};

export const fetchImages = (setImages) => {
  const params = {
    Bucket: S3_BUCKET,
  };

  myBucket.listObjects(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      const filteredImages = data.Contents.filter((img) => img.Key === "uploadedImage.webp");
      setImages(
        filteredImages.map((img) => ({
          url: `https://${params.Bucket}.s3.${REGION}.amazonaws.com/${img.Key}`,
          key: img.Key,
        }))
      );
    }
  });
};
