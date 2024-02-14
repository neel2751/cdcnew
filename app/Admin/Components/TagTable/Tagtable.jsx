"use client";
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import TagStatic from "./TagStatic";
import EditTag from "./EditTag";
import Buttons from "../Buttons/Buttons";
import {
  handleTagDelete,
  myTagData,
} from "../../../../actions/tagServerAction";

const Tagtable = () => {
  const [openEdit, setOpenEdit] = useState(false); // Open modal for Edit or Add Tag
  const [id, setId] = useState(""); // set id use for edit tag only
  const [parentData, setParentData] = useState(); // this is use for receive the data from the child to parent
  const [data, setData] = useState([]); // all tag data store in this state
  const [tagName, setTagName] = useState(""); // use for both edit and add tag data

  // Callback function to receive data from the child
  const handleChildData = (dataFromChild) => {
    const { tagname, click, id } = dataFromChild;
    setOpenEdit(click);
    setTagName(tagname);
    setId(id);
    setParentData(dataFromChild);
  };

  //   Edit or Add Tag data call function
  const updateTag = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        if (!tagName) return alert("please enter valid tag name..");
        const response = await axios.put(`/api/Admin/Dashboard/Tag`, {
          tagName: tagName,
          id: id,
        });

        if (response.data) {
          if (response.data.status === 201) {
            setOpenEdit((openEdit) => !openEdit);
          } else {
            alert(response.data.message);
          }
        } else {
          alert("error");
          console.error("Error submitting form");
        }
      } catch (error) {
        console.log("Mail Sent Failed", error.message);
      }
    } else {
      try {
        if (!tagName) alert("please enter valid tag name..");
        const response = await axios.post(`/api/Admin/Dashboard/Tag`, {
          tagName: tagName,
        });

        if (response.data) {
          if (response.data.status === 201) {
            setOpenEdit((openEdit) => !openEdit);
          } else {
            alert(response.data.message);
          }
        } else {
          alert("error");
          console.error("Error submitting form");
        }
      } catch (error) {
        console.log("Mail Sent Failed", error.message);
      }
    }
  };

  // declare the async data fetching function for all ways like first component mount and then Add, Edit, and Delete
  const fetchTagData = useCallback(async () => {
    const data = await myTagData();
    setData(data);
  }, []);

  //   Declare the function for open the modal for add tag can't use direct onClick
  const handleClick = () => {
    setOpenEdit((openEdit) => !openEdit);
  };
  useEffect(() => {
    fetchTagData();
  }, [fetchTagData, openEdit]);
  return (
    <>
      <Buttons
        btnName={"Add"}
        cls={"bg-blue-500 text-white p-4 rounded"}
        onClick={handleClick}
      />
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden shadow">
                <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                  <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        TagName
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        CreatedAt
                      </th>

                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {data.map((tag) => (
                      <TagStatic
                        onData={handleChildData}
                        key={tag._id}
                        tag={tag}
                        onDelete={() => handleTagDelete(tag._id, fetchTagData)}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* <button onClick={updateTag}>Update the Data</button> */}
            <EditTag
              parentData={parentData}
              tagName={tagName}
              setTagName={setTagName}
              openEdit={openEdit}
              setOpenEdit={setOpenEdit}
              click={updateTag}
              id={id}
              setId={setId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tagtable;

// const EditTag = ({
//   parentData,
//   tagName,
//   setTagName,
//   openEdit,
//   click,
//   setOpenEdit,
// }) => {
//   return (
//     <div
//       class={`fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full ${
//         openEdit ? "flex" : "hidden"
//       }`}
//       id="edit-tag-modal"
//     >
//       <div class="relative w-full h-full max-w-2xl px-4 md:h-auto">
//         {/* <!-- Modal content --> */}
//         <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
//           {/* <!-- Modal header --> */}
//           <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
//             <h3 class="text-xl font-semibold dark:text-white">Edit Tag</h3>
//             <button
//               onClick={() => setOpenEdit(false)}
//               type="button"
//               class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
//               data-modal-toggle="edit-user-modal"
//             >
//               <svg
//                 class="w-5 h-5"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//           {/* <!-- Modal body --> */}
//           <div class="p-6 space-y-6">
//             <div class="grid grid-cols-6 gap-6">
//               <div class="col-span-6">
//                 <label
//                   htmlFor="first-name"
//                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="tagname"
//                   value={tagName}
//                   onChange={(e) => setTagName(e.target.value)}
//                   id="first-name"
//                   class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                   placeholder={tagName}
//                 />
//                 <input
//                   type="text"
//                   name="id"
//                   // value={parentData?.id}
//                   id="tagid"
//                   class="hidden"
//                   readOnly={true}
//                   defaultValue={parentData?.id}
//                 />
//               </div>
//             </div>
//             {/* <!-- Modal footer --> */}
//             <div class="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
//               <button
//                 onClick={click}
//                 //   onClick={updateTag}
//                 //   onClick={updateTag}
//                 class="text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//                 type="submit"
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const EditTagModal = ({
//   tagName,
//   setTagName,
//   onClick,
//   openEdit,
//   setOpenEdit,
// }) => {
//   return (
//     <div
//       class={`fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full ${
//         openEdit ? "flex" : "hidden"
//       }`}
//       id="edit-tag-modal"
//     >
//       <div class="relative w-full h-full max-w-2xl px-4 md:h-auto">
//         {/* <!-- Modal content --> */}
//         <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
//           {/* <!-- Modal header --> */}
//           <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
//             <h3 class="text-xl font-semibold dark:text-white">Edit Tag</h3>
//             <button
//               onClick={() => setOpenEdit(false)}
//               type="button"
//               class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
//               data-modal-toggle="edit-user-modal"
//             >
//               <svg
//                 class="w-5 h-5"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//           {/* <!-- Modal body --> */}
//           <div class="p-6 space-y-6">
//             <form action="#">
//               <div class="grid grid-cols-6 gap-6">
//                 <div class="col-span-6">
//                   <label
//                     for="first-name"
//                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="first-name"
//                     onChange={(e) => setTagName(e.target.value)}
//                     id="first-name"
//                     class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder={tagName}
//                     required=""
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//           {/* <!-- Modal footer --> */}
//           <div class="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
//             <button
//               onClick={onClick}
//               class="text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//               type="submit"
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
