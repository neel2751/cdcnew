"use server";
import axios from "axios";
import {
  imageToArrayBuffer,
  uploadSingleImageToCloudinary,
} from "./uploadImageAction";

export const handleTeamMemberData = async (formData) => {
  const image = formData.get("mainImage");
  // const links = formData.getAll("socialLinks");
  // if (links.length > 0) {
  //   try {
  //     // Assuming links[0] is the JSON string
  //     const socialLinksArray = JSON.parse(links[0]);
  //     console.log(socialLinksArray);
  //   } catch (error) {
  //     console.error("Error parsing JSON:", error.message);
  //   }
  // } else {
  //   console.error("No socialLinks found in FormData.");
  // }

  // get object extract from links

  const uploadImageData = await imageToArrayBuffer(image);
  if (!uploadImageData) return { error: "upload at least one image" };
  const options = {
    resource_type: "image",
    folder: "cdc/Team",
  };
  const uploadClodinaryData = await uploadSingleImageToCloudinary(
    uploadImageData,
    options
  );
  if (!uploadClodinaryData)
    return { error: "Upload to server to Failed somthing went wrong..." };
  formData.append("asset_id", uploadClodinaryData.asset_id);
  formData.append("public_id", uploadClodinaryData.public_id);
  formData.append("url", uploadClodinaryData.url);
  formData.append("secure_url", uploadClodinaryData.secure_url);
  formData.delete("mainImage");
  const response = await uploadTeamDatabase(formData);
  console.log("this is the main function", response);
  return response;
  // console.log(uploadClodinaryData);
};

export const uploadTeamDatabase = async (formData) => {
  // console.log(formData);
  const response = await axios.post(
    `${process.env.WEBSITE_URI}/api/Admin/Team`,
    formData
  );
  console.log("this is the main api response after", response.data);
  return response.data;
};

export const getTeamMembers = async () => {
  try {
    const response = await axios.get(
      `${process.env.WEBSITE_URI}/api/Admin/Team`
    );
    return response.data;
  } catch (error) {
    console.log("Error in getting team members", error);
  }
};

export const teamStatus = async (id) => {
  try {
    const response = await axios.patch(
      `${process.env.WEBSITE_URI}/api/Admin/Team`,
      {
        id,
      }
    );
    return response.data;
  } catch (error) {
    console.log("Service Status Error : ", error);
  }
  return { data: "true" };
};

// Change Date to string like to Readable form
export const changeDateToString = async (date) => {
  let newDate = date.toLocaleString();
  return newDate;
};

// Reading function
export async function calculateReadingTime(content, wordsPerMinute = 200) {
  const words = content.split(/\s+/).length; // Split by spaces to count words
  const readingTime = Math.ceil(words / wordsPerMinute);

  return readingTime;
}
