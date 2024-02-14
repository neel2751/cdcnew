import { getAllServices, serviceStatus } from "@/actions/servicesAction";
// import CustomFroalaEditorView from "@/components/edtor-view";
import React, { Suspense, memo, useEffect, useState } from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

const FroalaEditorView = dynamic(
  () => import("../../../../components/edtor-view"),
  { ssr: false }
);

const ServiceItems = memo(({ data, onUpdate }) => {
  const [editorData, setEditorData] = useState("");
  const [name, setName] = useState("");
  const [imgPreview, setImgPreview] = useState(false);
  const [img, setImg] = useState("");

  const viewEditorData = (data) => {
    setImgPreview(true);
    setName(data.serviceName);
    setImg(data?.icon?.mainImageUrl);
    setEditorData(data.editor);
  };
  const closeEditorData = () => {
    setImgPreview(false);
  };
  const handleStatus = async (id) => {
    if (
      !window.confirm(
        `Are you sure want to Chnage Status of this service item?`
      )
    )
      return;
    const response = await serviceStatus(id);

    if (response.success) {
      window.alert(`Service Item Updated Successfully!`);
      onUpdate();
    }
  };
  return (
    <>
      {imgPreview && (
        <Suspense fallback={<BigSpinner />}>
          <ImageViewer
            editorData={editorData}
            name={name}
            img={img}
            onClick={closeEditorData}
          />
        </Suspense>
      )}
      <tr>
        <td className="h-px w-auto whitespace-nowrap">
          <div className="px-6 py-2 flex items-center gap-x-3">
            {/* <span className="text-sm text-gray-600 dark:text-gray-400">1.</span> */}
            <a className="flex items-center gap-x-2" href="#">
              {/* Svg Here */}
              <span className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500">
                <Image
                  className=" object-contain aspect-square"
                  src={data?.icon?.mainImageUrl}
                  alt={data.slug}
                  width={24}
                  height={24}
                />
              </span>
            </a>
          </div>
        </td>
        <td className="h-px w-auto whitespace-nowrap">
          <div className="px-6 py-2">
            <span className="font-semibold text-sm text-gray-800">
              {data.serviceName}
            </span>
          </div>
        </td>
        <td className="h-px w-auto whitespace-nowrap">
          <div className="px-6 py-2">
            <span className="text-sm text-gray-800 ">{data.slug}</span>
          </div>
        </td>
        <td className="h-px w-auto whitespace-nowrap">
          <div className="px-6 py-2">
            <span className="text-sm text-gray-800">
              <Image
                className=" rounded-full aspect-square"
                src={data?.mianImage?.mainImageUrl}
                alt={data.slug}
                height={50}
                width={50}
              />
            </span>
          </div>
        </td>

        <td
          onClick={() => viewEditorData(data)}
          className="h-px w-auto whitespace-nowrap hover:cursor-pointer"
        >
          <div className="px-6 py-2">
            <span className="text-sm hover:text-blue-600 hover:font-bold text-gray-800">
              View
            </span>
          </div>
        </td>
        <td
          onClick={() => handleStatus(data._id)}
          className="h-px w-px whitespace-nowrap"
        >
          <div className="px-6 py-2">
            {data.isActive ? (
              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                Active
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800">
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                </svg>
                Inactive
              </span>
            )}
          </div>
        </td>
        <td className="flex h-px hover:cursor-pointer  w-auto whitespace-nowrap">
          <div className="p-2">
            <span className="text-sm text-gray-800 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </span>
          </div>
          <div className="p-2">
            <span className="text-sm text-gray-800 hover:text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </span>
          </div>
        </td>
      </tr>
    </>
    // <!-- End Table Section -->
  );
});

const AllService = () => {
  const [newdata, setData] = useState([""]);
  const [Loading, setLoading] = useState(true);

  // how can access useeffect function of outsid
  const getServices = async () => {
    try {
      const reponse = await getAllServices();
      setData(reponse.data);
    } catch (e) {
      console.log("Error: ", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Card --> */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* <!-- Header --> */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                  {/* <!-- Input --> */}
                  <div className="sm:col-span-1">
                    <label
                      for="hs-as-table-product-review-search"
                      className="sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-as-table-product-review-search"
                        name="hs-as-table-product-review-search"
                        className="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Search"
                      />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Input --> */}

                  <div>
                    <div className="inline-flex gap-x-2">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        View all
                      </a>

                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="#"
                      >
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        Create
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Header --> */}

                {/* <!-- Table --> */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start border-s border-gray-200 dark:border-gray-700"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Icon
                        </span>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Services
                        </span>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Url
                        </span>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Image
                        </span>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Editor
                        </span>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Active
                        </span>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Action
                        </span>
                      </th>
                    </tr>
                  </thead>

                  {Loading ? (
                    <BigSpinner />
                  ) : (
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {newdata &&
                        newdata.map((ser) => (
                          <ServiceItems
                            key={ser._id}
                            data={ser}
                            onUpdate={getServices}
                          />
                        ))}
                    </tbody>
                  )}
                </table>
                {/* <!-- End Table --> */}

                {/* <!-- Footer --> */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-800">
                        {newdata.length}
                      </span>{" "}
                      results
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                        Prev
                      </button>

                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Next
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- End Footer --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}
      </div>
    </>
  );
};

export default AllService;

function BigSpinner() {
  return <div>🌀 Loading...</div>;
}

function ImageViewer({ editorData, img, name, onClick }) {
  return (
    <>
      {/* <!-- Modal toggle --> */}

      {/* <!-- Main modal --> */}
      <div
        id="default-modal"
        tabindex="-1"
        aria-hidden="true"
        className={` ${
          editorData ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-3/4 max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <Image
                className="aspect-square object-contain"
                src={img}
                alt="preview"
                height={30}
                width={30}
              />
              <h3 className="text-xl font-semibold text-gray-900 ">{name}</h3>
              <button
                onClick={onClick}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
              <FroalaEditorView editorData={editorData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
