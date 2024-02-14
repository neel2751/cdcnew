"use client";
import React, { useState, useEffect, useRef } from "react";
import { homeSectionData, myTagData } from "@/actions/tagServerAction";
import { sectionSubmit } from "@/actions/uploadImageAction";
import Title from "../../Components/Title/Title";

const DashHome = () => {
  const formRef = useRef();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();
  const [file, setFile] = useState(null);
  const [tagData, setTagData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const allowedFileTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/svg+xml",
    "video/mp4",
  ];

  useEffect(() => {
    async function getTagData() {
      const data = await myTagData();
      // console.log(data);

      setTagData(data);
    }
    getTagData();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (file) return alert("only one file at a time");
    if (selectedFile && allowedFileTypes.includes(selectedFile.type)) {
      if (selectedFile.type === "video/mp4") {
        setVideoUrl(URL.createObjectURL(selectedFile));
        setFile(selectedFile);
      } else {
        setFile(selectedFile);
        // Display a preview of the selected image or video
        const reader = new FileReader();
        // Create a Blob from the selected file
        const blob = new Blob([selectedFile], { type: selectedFile.type });

        reader.onload = () => {
          setPreviewUrl(reader.result);
        };

        reader.readAsDataURL(blob);
      }
    } else {
      // File type not allowed, reset file and show an error
      setFile(null);
      setPreviewUrl("");
      alert("Only jpg, png, jpeg, svg, and video file types are allowed.");
    }
  };

  const fecthHome = async () => {
    // const id = "659423225231b71f06f2a20f";
    const id = "659423225231b71f06f2a20f";

    const data = await homeSectionData(id);
    console.log(data);
  };
  const removeImage = () => {
    setVideoUrl("");
    setPreviewUrl("");
    setFile(null);
    formRef.current.reset();
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please Add atleast one file.");
    if (!title || !description || !selectedOption) return alert("Please add");
    let formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tagName", selectedOption);
    const allSectionData = await sectionSubmit(formData);
  };
  return (
    <main className="relative w-full h-full overflow-y-auto bg-gray-50  dark:bg-white">
      {/* <!-- Card Section --> */}
      <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <Title
          title={"Home Section"}
          desc={"Manage your Header, SubHeader and Image or videos."}
        />
        <form ref={formRef}>
          {/* <!-- Card --> */}
          <div class="bg-white rounded-xl shadow ">
            <div class="pt-0 p-4 sm:pt-0 sm:p-7">
              {/* <!-- Grid --> */}
              <div class="space-y-4 sm:space-y-6">
                <div class="space-y-2">
                  <label
                    for="af-submit-app-project-name"
                    class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Company name
                  </label>

                  <input
                    id="af-submit-app-project-name"
                    type="text"
                    class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Creative Design & Construction Limited"
                    readOnly={true}
                  />
                </div>

                <div class="space-y-2">
                  <label
                    for="af-submit-project-url"
                    class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Company Headline
                  </label>

                  <input
                    id="af-submit-project-url"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Building Dreams, Delivering Excellence"
                  />
                </div>

                <div class="space-y-2">
                  <label
                    for="af-submit-app-upload-images"
                    class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Preview image
                  </label>
                  <div className="flex gap-4">
                    {videoUrl && (
                      <div>
                        <video width="330" height="50" controls>
                          <source src={videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div onClick={removeImage}>Remove</div>
                      </div>
                    )}
                    {previewUrl && (
                      <div>
                        <img
                          src={previewUrl}
                          alt="Selected Preview"
                          style={{ maxWidth: "20%" }}
                        />
                        <div onClick={removeImage}>Remove</div>
                      </div>
                    )}
                  </div>
                  <label
                    for="af-submit-app-upload-images"
                    class="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700"
                  >
                    <input
                      id="af-submit-app-upload-images"
                      name="af-submit-app-upload-images"
                      class="sr-only"
                      type="file"
                      accept=".jpg, .jpeg, .png, .svg, .mp4"
                      onChange={handleFileChange}
                    />
                    {/* <input
                      id="af-submit-app-upload-images"
                      name="af-submit-app-upload-images"
                      type="file"
                      class="sr-only"
                      onChange={handleFileChange}
                    /> */}
                    <svg
                      class="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600"
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
                    <span class="mt-2 block text-sm text-gray-800 dark:text-gray-200">
                      Browse your device or{" "}
                      <span class="group-hover:text-blue-700 text-blue-600">
                        drag 'n drop'
                      </span>
                    </span>
                    <span class="mt-1 block text-xs text-gray-500">
                      Maximum file size is 2 MB
                    </span>
                  </label>
                </div>
                <div class="space-y-2">
                  <label
                    for="af-submit-app-category"
                    class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Category
                  </label>

                  {/* <Select options={tagData} onChange={handleSelectChange} /> */}

                  <select
                    onChange={(e) => setSelectedOption(e.target.value)}
                    id="af-submit-app-category"
                    class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  >
                    <option value="">Select an option</option>
                    {tagData?.map((tag) => (
                      <option value={tag.tagName}>{tag.tagName}</option>
                    ))}
                  </select>
                </div>
                <div class="space-y-2">
                  <label
                    for="af-submit-app-description"
                    class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Description
                  </label>

                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="af-submit-app-description"
                    class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    rows="6"
                    placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                  ></textarea>
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div class="mt-5 flex justify-center gap-x-2">
                <button
                  onClick={submitForm}
                  type="button"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Submit your Home Section
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </form>
      </div>
      <button onClick={fecthHome}>Click the get data</button>
      {/* <!-- End Card Section --> */}
    </main>
  );
};

export default DashHome;
