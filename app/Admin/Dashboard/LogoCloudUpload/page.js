"use client";
import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";
import PhotoCard from "../../Components/PhotoCard/PhotoCard";
import {
  addProductLogo,
  deleteLogoCloudeImage,
  handleGetImagesIntoDB,
} from "@/actions/logoCloudAction";
import Title from "../../Components/Title/Title";

const Home = () => {
  const formRef = useRef(null);
  const [images, setImages] = useState([]);
  const [logoImages, setLogoImages] = useState([]);

  const [uploading, setUploading] = useState(false);
  const allowedFileTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/svg+xml",
  ];
  const onChangeImages = async (e) => {
    try {
      let files = e.target.files;
      setUploading(true);
      if (
        [...images, ...Array.from(files)].some((img) => img.name === files.name)
      ) {
        alert("you already uploaded this image!");
        //add svg file type as well
      } else if (
        [...allowedFileTypes.map((type) => type.toLowerCase())].indexOf(
          files[0]?.type.toLowerCase()
        ) == -1
      ) {
        alert(`Only ${allowedFileTypes.join(", ")} are supported`);
      } else if ([...images, ...Array.from(files)].length > 3)
        alert("You can only upload up to 3 images.");
      else {
        const newFiles = [...files].filter((file) => {
          if (file.size < 2048 * 1024) {
            return file;
          }
        });
        setImages((prev) => [...newFiles, ...prev]);
        formRef.current.reset();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setUploading(false);
    }
  };
  async function handleDeleteImage(index) {
    const newFiles = images.filter((_, i) => i != index);
    setImages(newFiles);
  }

  const memoizedImages = useMemo(() => {
    // Perform any processing or filtering on the images if needed
    return logoImages?.map((image) => ({
      id: image._id,
      url: image.mainImageUrl,
      publicId: image.public_id,
      // Add other properties or transformations if needed
    }));
  }, [logoImages]);

  const getLogo = useCallback(async () => {
    const getLogoResult = await handleGetImagesIntoDB();
    setLogoImages(getLogoResult.data);
  }, []);

  useEffect(() => {
    getLogo();
  }, [getLogo]);

  const handleDeleteCloudeImage = async (public_id) => {
    // alert and then delete
    try {
      let confirmation = window.confirm("Are you sure?");
      if (!confirmation) {
        return;
      } else {
        const response = await deleteLogoCloudeImage(public_id);
        getLogo();
        if (response.success) {
          alert("Deleted Image Successfully!");
        }
      }
    } catch (error) {
      console.log("Handle Delete Cloud image Error...", error);
    }
  };

  const handleSubmitLogos = async () => {
    if (!images.length) return alert("Atleast one file select...");

    const bodyFormData = new FormData();
    images.forEach((file) => {
      bodyFormData.append("images", file);
    });
    // const res = await addProductLogo({ variables: { logos: images } });

    try {
      const response = await addProductLogo(bodyFormData);
      if (response.success === true) {
        setImages("");
        getLogo();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {/* <!-- Card Section --> */}
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <Title title={"Logo"} desc={"Manage Your Logo Here..."} />
        <form action={handleSubmitLogos} ref={formRef}>
          {/* <!-- Card --> */}
          <div className="bg-white rounded-xl shadow dark:bg-slate-900">
            <div className="pt-0 p-4 sm:pt-0 sm:p-7">
              {/* <!-- Grid --> */}
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <label
                    for="af-submit-app-upload-images"
                    className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Preview image
                  </label>
                  <div className="flex gap-4 p-2">
                    {/* start it from Tommorrow done with that of sure of usig  */}
                    {images &&
                      images.map((image, index) => (
                        <PhotoCard
                          key={index}
                          imageUrl={URL.createObjectURL(image)}
                          onClick={() => handleDeleteImage(index)}
                        />
                      ))}
                  </div>
                  <label
                    for="af-submit-app-upload-images"
                    className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700"
                  >
                    <input
                      id="af-submit-app-upload-images"
                      name="af-submit-app-upload-images"
                      type="file"
                      accept="image/*"
                      onChange={onChangeImages}
                      className="sr-only"
                      multiple
                    />
                    <svg
                      className="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600"
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
                    <span className="mt-2 block text-sm text-gray-800 dark:text-gray-200">
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
              </div>
              {/* <!-- End Grid --> */}

              <div className="mt-5 flex justify-center gap-x-2">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Submit your Logo
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </form>
        <div className="flex gap-10">
          {memoizedImages &&
            memoizedImages.map((image) => (
              <PhotoCard
                key={image.id}
                imageUrl={image.url}
                onClick={() => handleDeleteCloudeImage(image.publicId, getLogo)}
              />
            ))}
        </div>
      </div>
      {/* <!-- End Card Section --> */}
    </>
  );
};

export default Home;
