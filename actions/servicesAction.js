"use server";
import { connect } from "@/dbConfig/dbConfig";
import {
  imageToArrayBuffer,
  uploadSingleImageToCloudinary,
} from "./uploadImageAction";
import axios from "axios";
import ServiceSection from "@/models/serviceModel";
import { revalidatePath } from "next/cache";

// Main function to call direct on client side all data is here...
export const allServicesAction = async (formData) => {
  const image = formData.get("mainImage");
  // upload the main image of service
  const mainImage = await imageToArrayBuffer(image);
  const options = {
    resource_type: "image",
    folder: "cdc/Services",
  };
  const uploadMainImage = await uploadSingleImageToCloudinary(
    mainImage,
    options
  );
  if (!uploadMainImage)
    throw new Error("Main Image Not Upload Something went wrong!");
  formData.append("MainAsset_id", uploadMainImage.asset_id);
  formData.append("MainPublic_id", uploadMainImage.public_id);
  formData.append("MainUrl", uploadMainImage.url);
  formData.append("MainImageUrl", uploadMainImage.secure_url);

  const icon = formData.get("icon");
  const Iconoptions = {
    resource_type: "image",
    folder: "cdc/Services/Icon",
  };
  const iconImage = await imageToArrayBuffer(icon);
  const uploadIcon = await uploadSingleImageToCloudinary(
    iconImage,
    Iconoptions
  );
  if (!uploadIcon)
    throw new Error("Main Image Not Upload Something went wrong!");
  if (uploadIcon) {
    formData.append("IconAssetId", uploadIcon.asset_id);
    formData.append("IconPublicId", uploadIcon.public_id);
    formData.append("IconUrl", uploadIcon.url);
    formData.append("IconMainUrl", uploadIcon.secure_url);
    // formData.delete("mainImage");
    // formData.delete("icon");
    const sendServicesData = await storeServicesData(formData);
    console.log(
      "This is the last data after store into database",
      sendServicesData
    );
    return sendServicesData;
  }
};

// Api call in the main function use upload data into database...
export const storeServicesData = async (formData) => {
  // console.log("fromdata", formData);
  try {
    const response = await axios.post(
      `http://localhost:3000/api/Admin/Dashboard/Services`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        maxContentLength: 300000000,
      }
    );
    console.log("this is the after api get response", response);
    return response.data;
    // console.log(response);
    // return response;
  } catch (error) {
    console.log(error);
  }
};

export const storeLocalService = async (formData) => {
  console.log("new functoin run if not to store into database", formData);
  try {
    await connect();
    const serviceName = formData.get("serviceName");
    const slug = formData.get("slug");
    const description = formData.get("desc");
    const editor = formData.get("editor");
    const MainAsset_id = formData.get("MainAsset_id");
    const MainPublic_id = formData.get("MainPublic_id");
    const MainUrl = formData.get("MainUrl");
    const MainImageUrl = formData.get("MainImageUrl");
    const IconMainAsset_id = formData.get("IconAssetId");
    const IconMainPublic_id = formData.get("IconPublicId");
    const IconMainUrl = formData.get("IconUrl");
    const IconMainImageUrl = formData.get("IconMainUrl");

    // this all data to save in mongodb
    const Addservices = new ServiceSection({
      serviceName,
      slug,
      mianImage: {
        asset_id: MainAsset_id,
        public_id: MainPublic_id,
        url: MainUrl,
        mainImageUrl: MainImageUrl,
      },
      description,
      editor,
      icon: {
        asset_id: IconMainAsset_id,
        public_id: IconMainPublic_id,
        url: IconMainUrl,
        mainImageUrl: IconMainImageUrl,
      },
    });
    try {
      const servicePage = await Addservices.save();
      return { data: servicePage };
    } catch (error) {
      console.error(
        "Error adding service page to the database:",
        error.message
      );
      // Handle the error appropriately
    }
  } catch (error) {
    return { error: error.message };
  }
};

// Get all Services for admin as well as User To show main website...
export const getAllServices = async () => {
  try {
    const { signal } = new AbortController();
    const response = await axios.get(
      `${process.env.WEBSITE_URI}/api/Admin/Dashboard/Services`,
      { signal }
    );
    revalidatePath("/");
    return response.data;

    // return response;
  } catch (error) {
    console.log(error);
  }
};

export const serviceStatus = async (id) => {
  // console.log("ServerAction Data", id, status);
  try {
    const response = await axios.patch(
      `${process.env.WEBSITE_URI}/api/Admin/Dashboard/Services`,
      {
        id,
      }
    );
    revalidatePath("/");
    return response.data;
  } catch (error) {
    console.log("Service Status Error : ", error);
  }
  return { data: "true" };
};

// Step into your custom haven with our new build services: the magic of tailored homes, just for you!
// This function not use in now this is the mutiple image upload
// export const allServicesAction = async (formData) => {
//   const image = formData.get("mainImage");
//   // upload the main image of service
//   let mainImage = await imageToArrayBuffer(image);
//   const options = {
//     resource_type: "image",
//     folder: "cdc/Services",
//   };
//   let uploadMainImage = await uploadSingleImageToCloudinary(mainImage, options);

//   if (uploadMainImage.public_id) {
//     // upload the multiple image of services
//     const multipleImage = formData.getAll("images");
//     console.log("this is test of that all images", multipleImage);
//     let multipleImageResponse = await imageToArrayBuffer(multipleImage);
//     const { results } = await uploadMultipleImageCloudinary(
//       multipleImageResponse,
//       options
//     );
//     return results.then(async (results) => {
//       //   results.forEach((image, index) => {
//       //     Object.entries(image).forEach(([key, value]) => {
//       //       formData.append(`images.${index}.${key}`, value);
//       //     });
//       //   });
//       const allImagesData = [];
//       results.forEach((image) => {
//         const { url, secure_url, public_id, asset_id } = image;
//         const imageData = {
//           url: url,
//           imageUrl: secure_url,
//           public_id: public_id,
//           asset_id: asset_id,
//         };
//         // Convert the object to a JSON string and add it to the array
//         const imageString = JSON.stringify(imageData);
//         allImagesData.push(imageString);
//       });
//       // Join the array into a single JSON string
//       const allImagesString = `[${allImagesData.join(",")}]`;
//       formData.append("allImages", allImagesString);
//       formData.append("MainImageUrl", uploadMainImage.secure_url),
//         formData.append("MainPublic_id", uploadMainImage.public_id),
//         formData.append("MainUrl", uploadMainImage.url),
//         formData.append("MainAsset_id", uploadMainImage.asset_id);
//       formData.delete("mainImage");
//       formData.delete("images");
//       //   console.log("this is all form data is here", formData);
//       const sendServicesData = await storeServicesData(formData);
//       return sendServicesData;
//     });
//   }
// };
