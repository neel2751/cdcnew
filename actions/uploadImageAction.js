"use server";
import axios from "axios";
import cloudinary from "cloudinary";
import fs from "fs";
import path from "path";

// Cloudinary Config attach with all clodinary function
cloudinary.config({
  cloud_name: process.env.CLOUDE_NAME,
  api_key: process.env.CLOUDE_API_KEY,
  api_secret: process.env.CLOUDE_API_SECRET,
});

// # 1
// This is the main function Dash Home Function Submit data...
export const sectionSubmit = async (formData) => {
  try {
    // let formData = await formdata;
    const image = formData.get("image");
    if (!image) throw Error("No Image Provided");
    // if video here under 90Mb
    if (image.type === "video/mp4") {
      let uploadedVideo = await uploadVideoToCloudinary(image);
      if (uploadedVideo) {
        const newData = new FormData();
        newData.append("title", formData.get("title"));
        newData.append("description", formData.get("description"));
        newData.append("tagName", formData.get("tagName"));
        formData.append("public_id", uploadedVideo.public_id);
        formData.append("asset_id", uploadedVideo.asset_id);
        formData.append("url", uploadedVideo.url);
        formData.append("secure_url", uploadedVideo.secure_url);
        const sendFormData = await sendSectionData(formData);
        console.log(
          "this is form data is confirm data is here...",
          sendFormData
        );
        return { message: "File Upload SuccessFully" };
      }
    } else {
      const options = {
        resource_type: "image",
        folder: "cdc/Section",
      };
      let uploadedImage = await imageToArrayBuffer(image);
      console.log("this is the main function buffer data", uploadedImage);
      const uploadCloudinary = await uploadSingleImageToCloudinary(
        uploadedImage,
        options
      );
      if (uploadCloudinary) {
        //   console.log(uploadCloudinary.secure_url);
        const newData = new FormData();
        newData.append("title", formData.get("title"));
        newData.append("description", formData.get("description"));
        newData.append("tagName", formData.get("tagName"));
        formData.append("public_id", uploadCloudinary.public_id);
        formData.append("asset_id", uploadCloudinary.asset_id);
        formData.append("url", uploadCloudinary.url);
        formData.append("secure_url", uploadCloudinary.secure_url);

        const sendFormData = await sendSectionData(formData);
        console.log(
          "this is form data is confirm data is here...",
          sendFormData
        );
        return { message: "File Upload SuccessFully" };
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

// # 2 (If upload video)
// Video Upload Function From Dash Home function
export const uploadVideoToCloudinary = async (image) => {
  try {
    const data = await image.arrayBuffer();
    const b64 = Buffer.from(data).toString("base64");
    let dataURI = "data:" + image.type + ";base64," + b64;
    const result = await cloudinary.v2.uploader.upload_large(dataURI, {
      resource_type: "auto",
      folder: "cdc",
    });
    console.log(result);
  } catch (e) {
    console.log("this is the error form function", e);
  }
};

// # 3 (If image so image into Buffer Data) Usage[sectionSubmit,ServicesAction,LogoCloudAction]
// Every Where We Can use this Function Image to buffer data
export const imageToArrayBuffer = async (images) => {
  if (Array.isArray(images)) {
    const multipleImageBuffer = images.map((file) =>
      file.arrayBuffer().then((data) => {
        const buffer = new Uint8Array(data);
        return { buffer: buffer };
      })
    );
    return await Promise.all(multipleImageBuffer);
  } else {
    // Single Imags
    const singleImageBuffer = await images.arrayBuffer();
    const buffersingleImage = new Uint8Array(singleImageBuffer);
    return buffersingleImage;
    // }
  }
};

// # 4 (Upload Single Images from Cloudinary)  Usage[sectionSubmit,ServicesAction,ckEditorImageUpload]
//This is the new function without the file path and only one image buffer upload function
export const uploadSingleImageToCloudinary = async (buffer, options) => {
  try {
    return await new Promise((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream(options, function (err, result) {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        })
        .end(buffer);
    });
  } catch (e) {
    // Handle any errors that occur during the upload
    console.error("Error during upload:", e);
    throw e; // Optionally rethrow the error if needed
  }
};

// # 5 (Last Function With Api)
// Send Section function after all formData with images Api call
async function sendSectionData(formdata) {
  try {
    const res = await axios
      .post(
        `${process.env.WEBSITE_URI}/api/Admin/Dashboard/HomeApi`,
        formdata,
        {
          headers: {
            accept: "application/json",
            "Content-Type": `multipart/form-data; boundary=${formdata._boundary}`,
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // const response = await axios.post('')
  } catch (error) {
    console.log(error.message);
  }
}

// this is the services images upload function after buffer Usage[ServicesAction,LogoCloudAction]
export const uploadMultipleImageCloudinary = async (bufferImage, options) => {
  try {
    // console.log("cloudinary data ", bufferImage);
    const uploadPromises = bufferImage.map(
      (file) =>
        new Promise((resolve, reject) =>
          cloudinary.v2.uploader
            .upload_stream(options, (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            })
            .end(file.buffer)
        )
    );
    const multipleImageBufferData = Promise.all(uploadPromises);
    return {
      promise: multipleImageBufferData,
      results: multipleImageBufferData.then((results) => {
        return results;
      }),
    };
  } catch (error) {
    console.log(error.message);
  }
};

// EveryWhere We can use this Cloduinary Delete Function
export const clodinaryImageDelete = async (public_id) => {
  try {
    const deleteResponse = await cloudinary.v2.uploader.destroy(public_id);
    return deleteResponse;
  } catch (error) {
    console.log(error);
  }
};

// #[!] Under all of this function not in work
// This function is After Array image to upload Dash Home Not in use Now
async function uploadToCloudinary(localImage) {
  try {
    const data = cloudinary.v2.uploader.upload(localImage.filepath, {
      folder: "cdc",
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// This is the image function upload locally using DashHome function Not use in this function now[sectionSubmit]
export const uploadImage = async (image) => {
  const multiplePromise = await image.arrayBuffer().then((data) => {
    //this is the second messge of this buffer image using the Unit8Array
    // const bufferimage = new Uint8Array(data);
    // console.log("this is unit8 buffer data:", bufferimage);
    const buffer = Buffer.from(data);
    const filename = `${Date.now()}.${image.name.split(".")[1]}`;
    const filepath = path.join(process.cwd(), "public/uploads", filename);
    fs.writeFileSync(filepath, buffer);
    return { filepath: filepath, filename: filename };
  });
  return await multiplePromise;
};

// this is the Upload Logo Function to Cloudinary After Buffer Function
// Not Use This one now
export const uploadMultipleLogoCloudinary = async (bufferImage) => {
  try {
    // console.log("cloudinary data ", bufferImage);
    const uploadPromises = bufferImage.map(
      (file) =>
        new Promise((resolve, reject) =>
          cloudinary.v2.uploader
            .upload_stream(
              {
                folder: "cdc/LogoCloud",
              },
              (error, result) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(result);
                }
              }
            )
            .end(file.buffer)
        )
    );
    const multipleImageBufferData = Promise.all(uploadPromises);
    return {
      promise: multipleImageBufferData,
      results: multipleImageBufferData.then((results) => {
        return results;
      }),
    };
  } catch (error) {
    console.log(error.message);
  }
};

//this is the main image to upload to clodinary of services this is we have to change to another function
// This is the new task for this done this task as well
export const mainImageToCloudinary = async (mainImage) => {
  try {
    const data = cloudinary.v2.uploader.upload(mainImage.filepath, {
      folder: "services",
    });
    // fs.unlinkSync(mainImage.filepath); //delete local file after it's been uploaded to Cloudinary
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

//# 6 (CK-Editor Function)
// Function is call from CkEditor Custome editor (Custome-Editor)
export const ckEditorImageUpload = async (images) => {
  const fileImage = images.get("file");
  // image into buffer data uisng unit8arry
  const singleImageBuffer = await fileImage.arrayBuffer();
  const buffersingleImage = new Uint8Array(singleImageBuffer);
  if (buffersingleImage) {
    const options = {
      resource_type: "image",
      folder: "cdc/Editor",
    };
    const result = await uploadSingleImageToCloudinary(
      buffersingleImage,
      options
    );
    // we have to upload image into database
    const formData = new FormData();
    formData.append("asset_id", result.asset_id);
    formData.append("public_id", result.public_id);
    formData.append("url", result.url);
    formData.append("mainUrl", result.secure_url);
    console.log("this is the form data is here", formData);
    const uploadIntoDatabase = await axios.post(
      `http://localhost:3000/api/Admin/Dashboard/Editor`,
      formData
    );
    // console.log(
    //   "main function to show result after store into db",
    //   uploadIntoDatabase
    // );
    return uploadIntoDatabase.data;
  }
};

export const removeEditorImage = async (imageUrl) => {
  try {
    const response = await axios.patch(
      `${process.env.WEBSITE_URI}/api/Admin/Dashboard/Editor`,
      { imageUrl }
    );
    return response.data;
  } catch (error) {
    console.log("Error in delete image from clouadnary", error);
    throw error;
  }
};
