"use server";
import axios from "axios";
import {
  clodinaryImageDelete,
  imageToArrayBuffer,
  uploadMultipleImageCloudinary,
} from "./uploadImageAction";

export const addProductLogo = async (images) => {
  const multipleImage = images.getAll("images");
  const options = {
    resource_type: "image",
    folder: "cdc/LogoCloud",
  };
  const imagesTobuffer = await imageToArrayBuffer(multipleImage);
  const { results } = await uploadMultipleImageCloudinary(
    imagesTobuffer,
    options
  );

  return results.then(async (results) => {
    const allImagesData = [];
    results.forEach((image) => {
      const { url, secure_url, public_id, asset_id } = image;
      const imageData = {
        url: url,
        mainImageUrl: secure_url,
        public_id: public_id,
        asset_id: asset_id,
      };
      // Convert the object to a JSON string and add it to the array
      const imageString = JSON.stringify(imageData);
      allImagesData.push(imageString);
    });
    // Join the array into a single JSON string
    const allImagesString = `[${allImagesData.join(",")}]`;

    images.append("dbImage", allImagesString);
    images.delete("images");

    const uploadLogoDb = await handleAddingImagesIntoDB(images);
    return uploadLogoDb;
  });
};

export const handleAddingImagesIntoDB = async (images) => {
  try {
    const response = await axios.post(
      `${process.env.WEBSITE_URI}/api/Admin/Dashboard/LogoCloud`,
      images
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetImagesIntoDB = async () => {
  const response = await axios.get(
    `${process.env.WEBSITE_URI}/api/Admin/Dashboard/LogoCloud`
  );
  //   console.log("this is response data", response.data);
  return response.data;
};

export const deleteLogoCloudeImage = async (public_id) => {
  const response = await clodinaryImageDelete(public_id);
  if (response.result === "ok") {
    const res = await removeImageFromDB(public_id);
    return res;
  } else {
    return JSON.stringify({
      status: 404,
      message: "Something went wrong in server side",
    });
  }
};

const removeImageFromDB = async (public_id) => {
  const response = await axios.delete(
    `${process.env.WEBSITE_URI}/api/Admin/Dashboard/LogoCloud`,
    { params: { public_id } }
  );
  return response.data;
};
