"use client";
import React, { useState, useRef } from "react";
import { allServicesAction } from "@/actions/servicesAction";
import Title from "../../Components/Title/Title";
import dynamic from "next/dynamic";

const DynamicFroalaEditorView = dynamic(
  () => import("../../../../components/editor"),
  {
    ssr: false, // Ensure it's not included during SSR
  }
);

const AddServices = () => {
  const formRef = useRef();
  const [icon, setIcon] = useState(null);
  const [iconpreviewUrl, setIconPreviewUrl] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [description, setDescription] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [serslug, setSlug] = useState("");
  const [editorData, setEditorData] = useState(() => {
    return localStorage.getItem("editor_data") || "";
  });
  const allowedFileTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/svg+xml",
    "video/mp4",
  ];
  const generateSlug = (input) => {
    const sanitizedInput = input
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with dashes
      // .replace(/[^0-9\-]/g, ""); // Remove non-alphanumric
      .replace(/[^a-z0-9-]/g, ""); // Remove non-alphanumeric characters except dashes

    return sanitizedInput;
  };
  const handleServices = (event) => {
    const serviceName = event.target.value;
    setServiceName(serviceName);

    // Generate the slug and update the state
    const newSlug = generateSlug(serviceName);
    setSlug(newSlug);
  };
  const onChangeMainImage = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
      setMainImage(selectedFile);
      // Display a preview of the selected image or video
      const reader = new FileReader();
      // Create a Blob from the selected file
      const blob = new Blob([selectedFile], { type: selectedFile.type });
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(blob);
    } else {
      // File type not allowed, reset file and show an error
      setMainImage(null);
      setPreviewUrl("");
      alert("Only jpg, png, jpeg, svg, and video file types are allowed.");
    }
  };
  const onChangeIcon = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
      setIcon(selectedFile);
      // Display a preview of the selected image or video
      const reader = new FileReader();
      // Create a Blob from the selected file
      const blob = new Blob([selectedFile], { type: selectedFile.type });
      reader.onload = () => {
        setIconPreviewUrl(reader.result);
      };

      reader.readAsDataURL(blob);
    } else {
      // File type not allowed, reset file and show an error
      setIcon(null);
      setIconPreviewUrl("");
      alert("Only jpg, png, jpeg, svg, and video file types are allowed.");
    }
  };

  async function handleUploadService() {
    if (!mainImage) return alert("No mainImage file select");
    if (!serviceName) return alert("please Enter ServiceName");
    if (!description) return alert("please Enter Description");
    if (!icon) return alert("No Icon file select.. ");
    const data = new FormData();
    data.append("mainImage", mainImage);
    data.append("icon", icon);
    data.append("serviceName", serviceName);
    data.append("slug", serslug);
    data.append("desc", description);
    data.append("editor", editorData);

    const response = await allServicesAction(data);
    console.log(response);
  }
  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <Title title={"Services Section"} desc={"Add Your New Services"} />
      <form action={handleUploadService} ref={formRef}>
        {/* <!-- Card --> */}
        <div className="bg-white border-gray-500 border  rounded-xl shadow">
          <div className={`relative h-40 rounded-t-xl`}>
            {iconpreviewUrl && (
              <div className="px-20 py-10">
                <PhotoCard imageUrl={iconpreviewUrl} />
              </div>
            )}
            <div className="absolute top-0 end-0 p-4">
              <label
                for="main-submit-app-upload-image"
                className="hover:cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  focus:outline-none focus:ring-1 focus:ring-gray-600"
              >
                <input
                  id="main-submit-app-upload-image"
                  name="mainImage"
                  type="file"
                  onChange={onChangeIcon}
                  accept="image/*"
                  className="sr-only"
                />
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                Upload Icon
              </label>
            </div>
          </div>

          <div className="pt-0 p-4 sm:pt-0 sm:p-7">
            {/* <!-- Grid --> */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label
                  for="af-submit-app-project-name"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                >
                  Service name
                </label>

                <input
                  id="af-submit-app-project-name"
                  type="text"
                  value={serviceName}
                  onChange={handleServices}
                  className="py-2 px-3 pe-11 block w-full  shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-400 text-gray-900 "
                  placeholder="Enter Services name"
                />
              </div>

              <div className="space-y-2">
                <label
                  for="af-submit-project-url"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                >
                  Url
                </label>

                <input
                  id="af-submit-project-url"
                  type="text"
                  name="slug"
                  className="py-2 px-3 pe-11 block w-full  shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-400 text-gray-900 "
                  placeholder={serslug ? serslug : "Automated Generated"}
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <label
                  for="af-submit-app-upload-images"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                >
                  Preview image
                </label>
                <div className="flex gap-4 p-2">
                  {previewUrl && <PhotoCard imageUrl={previewUrl} />}
                </div>

                <label
                  for="af-submit-app-upload-images"
                  className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed  rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 border-gray-700"
                >
                  <input
                    id="af-submit-app-upload-images"
                    name="af-submit-app-upload-images"
                    type="file"
                    accept="image/*"
                    onChange={onChangeMainImage}
                    className="sr-only"
                  />
                  <svg
                    className="w-10 h-10 mx-auto  text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                    />
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                  </svg>
                  <span className="mt-2 block text-sm text-gray-800 ">
                    Browse your device or{" "}
                    <span className="group-hover:text-blue-700 text-blue-600">
                      drag 'n drop'
                    </span>
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    Maximum file size is 2 MB
                  </span>
                </label>
              </div>

              <div className="space-y-2">
                <label
                  for="af-submit-app-description"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                >
                  Short Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="af-submit-app-description"
                  className="py-2 px-3 pe-11 block w-full  shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-400 text-gray-900 "
                  rows="6"
                  placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated Service page."
                ></textarea>
              </div>
              <div>
                <label
                  for="af-submit-app-description"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                >
                  Long Description
                </label>
                <div className="mt-2">
                  <DynamicFroalaEditorView
                    editorData={editorData}
                    setEditorData={setEditorData}
                  />
                </div>
              </div>
            </div>
            {/* <!-- End Grid --> */}

            <div className="mt-5 flex justify-center gap-x-2">
              <button
                type="submit"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              >
                Submit Service
              </button>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}
      </form>
    </div>
  );
};

export default AddServices;
