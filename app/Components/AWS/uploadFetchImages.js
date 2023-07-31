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

export const uploadFile = (file, setImages) => {
  const params = {
    ACL: "bucket-owner-full-control",
    Body: file,
    Bucket: S3_BUCKET,
    Key: file.name,
  };

  myBucket
    .putObject(params)
    .on("httpUploadProgress", (evt) => {
      console.log(Math.round((evt.loaded / evt.total) * 100));
    })
    .send((err) => {
      if (err) console.log(err, NEXT_PUBLIC_SECRET_ACCESS_KEY);
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
      setImages(
        data.Contents.map((img) => ({
          url: `https://${params.Bucket}.s3.${REGION}.amazonaws.com/${img.Key}`,
          key: img.Key,
        }))
      );
    }
  });
};

