import React, { useState } from "react";
// import { handleDelte } from "../../../../actions/tagDeleteAction";

const TagStatic = ({ tag, onData, onDelete }) => {
  const [childData, setChildData] = useState();
  const handleButtonClick = (tag) => {
    const newData = {
      tagname: tag.tagName,
      id: tag._id,
      click: true,
    };
    setChildData(newData);
    onData(newData);
  };

  const handleDeleteClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this tag?"
    );
    if (confirmed) {
      onDelete(); // Call the onDelete function provided by the parent component
    }
  };
  return (
    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {tag.tagName}
      </td>
      <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {tag.createdAt}
      </td>
      <td class="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
        <div class="flex items-center">
          <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
          {tag.isActive ? "Active" : "Inactive"}
        </div>
      </td>
      <td class="p-4 space-x-2 whitespace-nowrap">
        <button
          onClick={() => handleButtonClick(tag)}
          type="button"
          data-modal-toggle="edit-user-modal"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Edit Tag
        </button>
        <button
          // onClick={() => handleDelte(tag._id, updateUI)}
          onClick={handleDeleteClick}
          type="button"
          data-modal-toggle="delete-user-modal"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Delete Tag
        </button>
      </td>
    </tr>
  );
};

export default TagStatic;
