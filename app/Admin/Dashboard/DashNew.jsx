import React from "react";

const DashNew = () => {
  return (
    <>
      {/* main Content */}
      <main className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
        <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full mb-1">
            <div class="mb-4">
              <nav class="flex mb-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                  <li class="inline-flex items-center">
                    <a
                      href="#"
                      class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                    >
                      <svg
                        class="w-5 h-5 mr-2.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg
                        class="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <a
                        href="#"
                        class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                      >
                        Users
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg
                        class="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span
                        class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500"
                        aria-current="page"
                      >
                        List
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                All users
              </h1>
            </div>
            <div class="sm:flex">
              <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                <form class="lg:pr-3" action="#" method="GET">
                  <label for="users-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative mt-1 lg:w-64 xl:w-96">
                    <input
                      type="text"
                      name="email"
                      id="users-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search for users"
                    />
                  </div>
                </form>
                <div class="flex pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
                  <a
                    href="#"
                    class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
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
                  </a>
                  <a
                    href="#"
                    class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
                <button
                  type="button"
                  data-modal-toggle="add-user-modal"
                  class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Add user
                </button>
                <a
                  href="#"
                  class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    class="w-5 h-5 mr-2 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Export
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* table start */}
        <div class="flex flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden shadow">
                <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                  <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th scope="col" class="p-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-all"
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-all" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        Biography
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        Position
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        Country
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
                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td class="w-4 p-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-1"
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-1" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                          alt="Neil Sims avatar"
                        />
                        <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                          <div class="text-base font-semibold text-gray-900 dark:text-white">
                            Neil Sims
                          </div>
                          <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            neil.sims@flowbite.com
                          </div>
                        </div>
                      </td>
                      <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                        I love working with React and Flowbites to create
                        efficient and user-friendly interfaces. In my spare
                        time, I enjoys baking, hiking, and spending time with my
                        family.
                      </td>
                      <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Front-end developer
                      </td>
                      <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        United States
                      </td>
                      <td class="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                          Active
                        </div>
                      </td>
                      <td class="p-4 space-x-2 whitespace-nowrap">
                        <button
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
                          Edit user
                        </button>
                        <button
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
                          Delete user
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* table end */}
        <div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center mb-4 sm:mb-0">
            <a
              href="#"
              class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span class="font-semibold text-gray-900 dark:text-white">
                1-20
              </span>{" "}
              of{" "}
              <span class="font-semibold text-gray-900 dark:text-white">
                2290
              </span>
            </span>
          </div>
          <div class="flex items-center space-x-3">
            <a
              href="#"
              class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                class="w-5 h-5 mr-1 -ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Previous
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Next
              <svg
                class="w-5 h-5 ml-1 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!-- Edit User Modal --> */}
        <div
          class="fixed left-0 right-0 z-50 items-center justify-center hidden overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full"
          id="edit-user-modal"
        >
          <div class="relative w-full h-full max-w-2xl px-4 md:h-auto">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
              {/* <!-- Modal header --> */}
              <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                <h3 class="text-xl font-semibold dark:text-white">Edit user</h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                  data-modal-toggle="edit-user-modal"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div class="p-6 space-y-6">
                <form action="#">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first-name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        value="Bonnie"
                        id="first-name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Bonnie"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="last-name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        value="Green"
                        id="last-name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Green"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value="bonnie@flowbite.com"
                        id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="example@company.com"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="position"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Position
                      </label>
                      <input
                        type="text"
                        name="position"
                        value="React Developer"
                        id="position"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="e.g. React developer"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="current-password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Current Password
                      </label>
                      <input
                        type="password"
                        name="current-password"
                        value="••••••••"
                        id="current-password"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="••••••••"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="new-password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        name="new-password"
                        value="••••••••"
                        id="new-password"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="••••••••"
                        required=""
                      />
                    </div>
                    <div class="col-span-6">
                      <label
                        for="biography"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Biography
                      </label>
                      <textarea
                        id="biography"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="👨&zwj;💻Full-stack web developer. Open-source contributor."
                      >
                        👨&zwj;💻Full-stack web developer. Open-source
                        contributor.
                      </textarea>
                    </div>
                  </div>
                </form>
              </div>
              {/* <!-- Modal footer --> */}
              <div class="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                <button
                  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                >
                  Save all
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Add User Modal --> */}
        <div
          class="fixed left-0 right-0 z-50 items-center justify-center hidden overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full"
          id="add-user-modal"
        >
          <div class="relative w-full h-full max-w-2xl px-4 md:h-auto">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
              {/* <!-- Modal header --> */}
              <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                <h3 class="text-xl font-semibold dark:text-white">
                  Add new user
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                  data-modal-toggle="add-user-modal"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div class="p-6 space-y-6">
                <form action="#">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first-name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Bonnie"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="last-name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Green"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="example@company.com"
                        required=""
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="position"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Position
                      </label>
                      <input
                        type="text"
                        name="position"
                        id="position"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="e.g. React developer"
                        required=""
                      />
                    </div>
                    <div class="col-span-6">
                      <label
                        for="biography"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Biography
                      </label>
                      <textarea
                        id="biography"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="👨&zwj;💻Full-stack web developer. Open-source contributor."
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
              {/* <!-- Modal footer --> */}
              <div class="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                <button
                  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                >
                  Add user
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Delete User Modal --> */}
        <div
          class="fixed left-0 right-0 z-50 items-center justify-center hidden overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full"
          id="delete-user-modal"
        >
          <div class="relative w-full h-full max-w-md px-4 md:h-auto">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
              {/* <!-- Modal header --> */}
              <div class="flex justify-end p-2">
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                  data-modal-toggle="delete-user-modal"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div class="p-6 pt-0 text-center">
                <svg
                  class="w-16 h-16 mx-auto text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 class="mt-5 mb-6 text-lg text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this user?
                </h3>
                <a
                  href="#"
                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-800"
                >
                  Yes, I'm sure
                </a>
                <a
                  href="#"
                  class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  data-modal-toggle="delete-user-modal"
                >
                  No, cancel
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card for Date */}
        <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          {/* <!-- Card header --> */}
          <div class="items-center justify-between lg:flex">
            <div class="mb-4 lg:mb-0">
              <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Transactions
              </h3>
              <span class="text-base font-normal text-gray-500 dark:text-gray-400">
                This is a list of latest transactions
              </span>
            </div>
            <div class="items-center sm:flex">
              <div class="flex items-center">
                <button
                  id="dropdownDefault"
                  data-dropdown-toggle="dropdown"
                  class="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  Filter by status
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdown"
                  class="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700 hidden"
                  data-popper-placement="bottom"
                >
                  <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Category
                  </h6>
                  <ul
                    class="space-y-2 text-sm"
                    aria-labelledby="dropdownDefault"
                  >
                    <li class="flex items-center">
                      <input
                        id="apple"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />

                      <label
                        for="apple"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Completed (56)
                      </label>
                    </li>

                    <li class="flex items-center">
                      <input
                        id="fitbit"
                        type="checkbox"
                        value=""
                        checked=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />

                      <label
                        for="fitbit"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Cancelled (56)
                      </label>
                    </li>

                    <li class="flex items-center">
                      <input
                        id="dell"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />

                      <label
                        for="dell"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        In progress (56)
                      </label>
                    </li>

                    <li class="flex items-center">
                      <input
                        id="asus"
                        type="checkbox"
                        value=""
                        checked=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />

                      <label
                        for="asus"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        In review (97)
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div date-rangepicker="" class="flex items-center space-x-4">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    name="start"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"
                    placeholder="From"
                  />
                </div>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    name="end"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"
                    placeholder="To"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Table --> */}
          <div class="flex flex-col mt-6">
            <div class="overflow-x-auto rounded-lg">
              <div class="inline-block min-w-full align-middle">
                <div class="overflow-hidden shadow sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                        >
                          Transaction
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                        >
                          Date &amp; Time
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                        >
                          Reference number
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                        >
                          Payment method
                        </th>
                        <th
                          scope="col"
                          class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800">
                      <tr>
                        <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          Payment from{" "}
                          <span class="font-semibold">Bonnie Green</span>
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Apr 23 ,2021
                        </td>
                        <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                          $2300
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          0047568936
                        </td>
                        <td class="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            class="w-7 h-7"
                            aria-hidden="true"
                            enable-background="new 0 0 780 500"
                            viewBox="0 0 780 500"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5"
                              fill="#d9222a"
                            ></path>
                            <path
                              d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5"
                              fill="#ee9f2d"
                            ></path>
                            <path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-.001 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-.006c-2.429-.003-4.4 1.963-4.404 4.391v.014c-.002 2.433 1.968 4.406 4.4 4.408.001-.001.003-.001.004-.001zm-.783-1.86h-1.187v-5.096h2.149c.45 0 .908 0 1.305.254.413.279.646.771.646 1.279 0 .571-.338 1.104-.884 1.312l.938 2.25h-1.315l-.779-2.017h-.871zm0-2.89h.658c.246 0 .505.021.726-.1.195-.125.296-.359.296-.584-.005-.209-.112-.402-.288-.518-.207-.129-.536-.101-.758-.101h-.634zm-443.5-80.063c-2.046-.238-2.945-.301-4.35-.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042.199 7.941.57.604-2.441.763-3.488.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-.108-17.396 2.271-20.625 3.333.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712.033 3.805-.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167zm354.97-32.996c-2.037-.238-2.941-.301-4.342-.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037.199 7.934.57.604-2.441.763-3.488.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-.108-17.387 2.271-20.629 3.333.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712.032 3.805-.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-.227 5.254-.7zm59.392-.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663zm-10.888-43.9c.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05.408 14 1.112l2.775-17.175c-5.046-.8-12.696-1.442-17.15-1.442-21.801.001-29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c.383-2.483.729-4.95.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"></path>
                            <path
                              d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l.788 56.362 18.904-56.362h30.267z"
                              fill="#fff"
                            ></path>
                            <path d="m647.52 211.6-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-.004.067c.658-6.134.921-9.875.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-.913 6.884h18.435l14.842-91.042zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509.001 14.679-6.37 24.962-15.449 24.962z"></path>
                            <path
                              d="m233.19 264.26c-2.042-.236-2.946-.299-4.346-.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-.001 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042.2 7.938.571.604-2.441.763-3.487.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-.108-17.396 2.271-20.629 3.321.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704.029 3.821-.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507.001 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-.236-2.941-.299-4.347-.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-.001 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042.2 7.941.571.601-2.441.763-3.487.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-.108-17.396 2.271-20.63 3.321.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704.033 3.821-.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-.216 5.254-.691zm59.391-.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677zm-10.891-43.912c.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046.421 14.004 1.125l2.771-17.179c-5.042-.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-.001 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675.471-3.788 1.333-7.467 1.162-11.225zm-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675.471-3.788 1.324-7.467 1.162-11.225zm254.57 68.241c-.004-3.199 2.586-5.795 5.784-5.799h.012c3.197-.004 5.793 2.586 5.796 5.783v.016c-.001 3.201-2.595 5.795-5.796 5.797-3.201-.002-5.795-2.596-5.796-5.797zm5.796 4.405c2.431.002 4.402-1.969 4.403-4.399v-.004c.003-2.433-1.968-4.406-4.399-4.408h-.004c-2.435.001-4.407 1.974-4.408 4.408.002 2.432 1.975 4.403 4.408 4.403zm-.784-1.871h-1.188v-5.082h2.153c.446 0 .909.009 1.296.254.417.283.654.767.654 1.274 0 .575-.337 1.112-.888 1.317l.941 2.236h-1.32l-.779-2.009h-.87zm0-2.879h.653c.246 0 .513.019.729-.1.196-.125.296-.361.296-.588-.009-.21-.114-.404-.287-.523-.204-.117-.542-.084-.763-.084h-.629z"
                              fill="#fff"
                            ></path>
                          </svg>
                          <span>••• 475</span>
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr class="bg-gray-50 dark:bg-gray-700">
                        <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          Payment refund to{" "}
                          <span class="font-semibold">#00910</span>
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Apr 23 ,2021
                        </td>
                        <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                          -$670
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          0078568936
                        </td>
                        <td class="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 83"
                          >
                            <defs>
                              <linearGradient
                                id="logosVisa0"
                                x1="45.974%"
                                x2="54.877%"
                                y1="-2.006%"
                                y2="100%"
                              >
                                <stop offset="0%" stop-color="#222357"></stop>
                                <stop offset="100%" stop-color="#254AA5"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#logosVisa0)"
                              d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
                              transform="matrix(1 0 0 -1 0 82.668)"
                            ></path>
                          </svg>
                          <span>••• 924</span>
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          Payment failed from{" "}
                          <span class="font-semibold">#087651</span>
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Apr 18 ,2021
                        </td>
                        <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                          $234
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          0088568934
                        </td>
                        <td class="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 83"
                          >
                            <defs>
                              <linearGradient
                                id="logosVisa0"
                                x1="45.974%"
                                x2="54.877%"
                                y1="-2.006%"
                                y2="100%"
                              >
                                <stop offset="0%" stop-color="#222357"></stop>
                                <stop offset="100%" stop-color="#254AA5"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#logosVisa0)"
                              d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
                              transform="matrix(1 0 0 -1 0 82.668)"
                            ></path>
                          </svg>
                          <span>••• 826</span>
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400">
                            Cancelled
                          </span>
                        </td>
                      </tr>
                      <tr class="bg-gray-50 dark:bg-gray-700">
                        <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          Payment from{" "}
                          <span class="font-semibold">Lana Byrd</span>
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Apr 15 ,2021
                        </td>
                        <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                          $5000
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          0018568911
                        </td>
                        <td class="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 83"
                          >
                            <defs>
                              <linearGradient
                                id="logosVisa0"
                                x1="45.974%"
                                x2="54.877%"
                                y1="-2.006%"
                                y2="100%"
                              >
                                <stop offset="0%" stop-color="#222357"></stop>
                                <stop offset="100%" stop-color="#254AA5"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#logosVisa0)"
                              d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
                              transform="matrix(1 0 0 -1 0 82.668)"
                            ></path>
                          </svg>
                          <span>••• 634</span>
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-purple-100 dark:bg-gray-700 dark:border-purple-500 dark:text-purple-400">
                            In progress
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          Payment from{" "}
                          <span class="font-semibold">Jese Leos</span>
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Apr 15 ,2021
                        </td>
                        <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                          $2300
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          0045568939
                        </td>
                        <td class="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            class="w-7 h-7"
                            aria-hidden="true"
                            enable-background="new 0 0 780 500"
                            viewBox="0 0 780 500"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5"
                              fill="#d9222a"
                            ></path>
                            <path
                              d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5"
                              fill="#ee9f2d"
                            ></path>
                            <path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-.001 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-.006c-2.429-.003-4.4 1.963-4.404 4.391v.014c-.002 2.433 1.968 4.406 4.4 4.408.001-.001.003-.001.004-.001zm-.783-1.86h-1.187v-5.096h2.149c.45 0 .908 0 1.305.254.413.279.646.771.646 1.279 0 .571-.338 1.104-.884 1.312l.938 2.25h-1.315l-.779-2.017h-.871zm0-2.89h.658c.246 0 .505.021.726-.1.195-.125.296-.359.296-.584-.005-.209-.112-.402-.288-.518-.207-.129-.536-.101-.758-.101h-.634zm-443.5-80.063c-2.046-.238-2.945-.301-4.35-.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042.199 7.941.57.604-2.441.763-3.488.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-.108-17.396 2.271-20.625 3.333.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712.033 3.805-.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167zm354.97-32.996c-2.037-.238-2.941-.301-4.342-.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037.199 7.934.57.604-2.441.763-3.488.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-.108-17.387 2.271-20.629 3.333.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712.032 3.805-.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-.227 5.254-.7zm59.392-.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663zm-10.888-43.9c.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05.408 14 1.112l2.775-17.175c-5.046-.8-12.696-1.442-17.15-1.442-21.801.001-29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c.383-2.483.729-4.95.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"></path>
                            <path
                              d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l.788 56.362 18.904-56.362h30.267z"
                              fill="#fff"
                            ></path>
                            <path d="m647.52 211.6-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-.004.067c.658-6.134.921-9.875.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-.913 6.884h18.435l14.842-91.042zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509.001 14.679-6.37 24.962-15.449 24.962z"></path>
                            <path
                              d="m233.19 264.26c-2.042-.236-2.946-.299-4.346-.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-.001 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042.2 7.938.571.604-2.441.763-3.487.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-.108-17.396 2.271-20.629 3.321.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704.029 3.821-.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507.001 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-.236-2.941-.299-4.347-.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-.001 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042.2 7.941.571.601-2.441.763-3.487.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-.108-17.396 2.271-20.63 3.321.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704.033 3.821-.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-.216 5.254-.691zm59.391-.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677zm-10.891-43.912c.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046.421 14.004 1.125l2.771-17.179c-5.042-.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-.001 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675.471-3.788 1.333-7.467 1.162-11.225zm-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675.471-3.788 1.324-7.467 1.162-11.225zm254.57 68.241c-.004-3.199 2.586-5.795 5.784-5.799h.012c3.197-.004 5.793 2.586 5.796 5.783v.016c-.001 3.201-2.595 5.795-5.796 5.797-3.201-.002-5.795-2.596-5.796-5.797zm5.796 4.405c2.431.002 4.402-1.969 4.403-4.399v-.004c.003-2.433-1.968-4.406-4.399-4.408h-.004c-2.435.001-4.407 1.974-4.408 4.408.002 2.432 1.975 4.403 4.408 4.403zm-.784-1.871h-1.188v-5.082h2.153c.446 0 .909.009 1.296.254.417.283.654.767.654 1.274 0 .575-.337 1.112-.888 1.317l.941 2.236h-1.32l-.779-2.009h-.87zm0-2.879h.653c.246 0 .513.019.729-.1.196-.125.296-.361.296-.588-.009-.21-.114-.404-.287-.523-.204-.117-.542-.084-.763-.084h-.629z"
                              fill="#fff"
                            ></path>
                          </svg>
                          <span>••• 163</span>
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr class="bg-gray-50 dark:bg-gray-700">
                        <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          Refund to{" "}
                          <span class="font-semibold">THEMESBERG LLC</span>
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Apr 11 ,2021
                        </td>
                        <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                          -$560
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          0031568935
                        </td>
                        <td class="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            class="w-7 h-7"
                            aria-hidden="true"
                            enable-background="new 0 0 780 500"
                            viewBox="0 0 780 500"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5"
                              fill="#d9222a"
                            ></path>
                            <path
                              d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5"
                              fill="#ee9f2d"
                            ></path>
                            <path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-.001 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-.006c-2.429-.003-4.4 1.963-4.404 4.391v.014c-.002 2.433 1.968 4.406 4.4 4.408.001-.001.003-.001.004-.001zm-.783-1.86h-1.187v-5.096h2.149c.45 0 .908 0 1.305.254.413.279.646.771.646 1.279 0 .571-.338 1.104-.884 1.312l.938 2.25h-1.315l-.779-2.017h-.871zm0-2.89h.658c.246 0 .505.021.726-.1.195-.125.296-.359.296-.584-.005-.209-.112-.402-.288-.518-.207-.129-.536-.101-.758-.101h-.634zm-443.5-80.063c-2.046-.238-2.945-.301-4.35-.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042.199 7.941.57.604-2.441.763-3.488.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-.108-17.396 2.271-20.625 3.333.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712.033 3.805-.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167zm354.97-32.996c-2.037-.238-2.941-.301-4.342-.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037.199 7.934.57.604-2.441.763-3.488.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-.108-17.387 2.271-20.629 3.333.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712.032 3.805-.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-.227 5.254-.7zm59.392-.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663zm-10.888-43.9c.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05.408 14 1.112l2.775-17.175c-5.046-.8-12.696-1.442-17.15-1.442-21.801.001-29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c.383-2.483.729-4.95.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"></path>
                            <path
                              d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l.788 56.362 18.904-56.362h30.267z"
                              fill="#fff"
                            ></path>
                            <path d="m647.52 211.6-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-.004.067c.658-6.134.921-9.875.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-.913 6.884h18.435l14.842-91.042zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509.001 14.679-6.37 24.962-15.449 24.962z"></path>
                            <path
                              d="m233.19 264.26c-2.042-.236-2.946-.299-4.346-.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-.001 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042.2 7.938.571.604-2.441.763-3.487.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-.108-17.396 2.271-20.629 3.321.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704.029 3.821-.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507.001 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-.236-2.941-.299-4.347-.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-.001 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042.2 7.941.571.601-2.441.763-3.487.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-.108-17.396 2.271-20.63 3.321.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704.033 3.821-.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-.216 5.254-.691zm59.391-.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677zm-10.891-43.912c.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046.421 14.004 1.125l2.771-17.179c-5.042-.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-.001 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675.471-3.788 1.333-7.467 1.162-11.225zm-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675.471-3.788 1.324-7.467 1.162-11.225zm254.57 68.241c-.004-3.199 2.586-5.795 5.784-5.799h.012c3.197-.004 5.793 2.586 5.796 5.783v.016c-.001 3.201-2.595 5.795-5.796 5.797-3.201-.002-5.795-2.596-5.796-5.797zm5.796 4.405c2.431.002 4.402-1.969 4.403-4.399v-.004c.003-2.433-1.968-4.406-4.399-4.408h-.004c-2.435.001-4.407 1.974-4.408 4.408.002 2.432 1.975 4.403 4.408 4.403zm-.784-1.871h-1.188v-5.082h2.153c.446 0 .909.009 1.296.254.417.283.654.767.654 1.274 0 .575-.337 1.112-.888 1.317l.941 2.236h-1.32l-.779-2.009h-.87zm0-2.879h.653c.246 0 .513.019.729-.1.196-.125.296-.361.296-.588-.009-.21-.114-.404-.287-.523-.204-.117-.542-.084-.763-.084h-.629z"
                              fill="#fff"
                            ></path>
                          </svg>
                          <span>••• 443</span>
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <span class="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-orange-100 dark:bg-gray-700 dark:border-orange-300 dark:text-orange-300">
                            In review
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          Payment from{" "}
                          <span class="font-semibold">Lana Lysle</span>
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Apr 6 ,2021
                        </td>
                        <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                          $1437
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          0023568934
                        </td>
                        <td class="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            class="w-7 h-7"
                            aria-hidden="true"
                            enable-background="new 0 0 780 500"
                            viewBox="0 0 780 500"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5"
                              fill="#d9222a"
                            ></path>
                            <path
                              d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5"
                              fill="#ee9f2d"
                            ></path>
                            <path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-.001 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-.006c-2.429-.003-4.4 1.963-4.404 4.391v.014c-.002 2.433 1.968 4.406 4.4 4.408.001-.001.003-.001.004-.001zm-.783-1.86h-1.187v-5.096h2.149c.45 0 .908 0 1.305.254.413.279.646.771.646 1.279 0 .571-.338 1.104-.884 1.312l.938 2.25h-1.315l-.779-2.017h-.871zm0-2.89h.658c.246 0 .505.021.726-.1.195-.125.296-.359.296-.584-.005-.209-.112-.402-.288-.518-.207-.129-.536-.101-.758-.101h-.634zm-443.5-80.063c-2.046-.238-2.945-.301-4.35-.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042.199 7.941.57.604-2.441.763-3.488.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-.108-17.396 2.271-20.625 3.333.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712.033 3.805-.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167zm354.97-32.996c-2.037-.238-2.941-.301-4.342-.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037.199 7.934.57.604-2.441.763-3.488.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-.108-17.387 2.271-20.629 3.333.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712.032 3.805-.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-.227 5.254-.7zm59.392-.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663zm-10.888-43.9c.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05.408 14 1.112l2.775-17.175c-5.046-.8-12.696-1.442-17.15-1.442-21.801.001-29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c.383-2.483.729-4.95.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"></path>
                            <path
                              d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l.788 56.362 18.904-56.362h30.267z"
                              fill="#fff"
                            ></path>
                            <path d="m647.52 211.6-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-.004.067c.658-6.134.921-9.875.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-.913 6.884h18.435l14.842-91.042zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509.001 14.679-6.37 24.962-15.449 24.962z"></path>
                            <path
                              d="m233.19 264.26c-2.042-.236-2.946-.299-4.346-.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-.001 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042.2 7.938.571.604-2.441.763-3.487.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-.108-17.396 2.271-20.629 3.321.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704.029 3.821-.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507.001 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-.236-2.941-.299-4.347-.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-.001 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042.2 7.941.571.601-2.441.763-3.487.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-.108-17.396 2.271-20.63 3.321.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704.033 3.821-.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-.216 5.254-.691zm59.391-.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677zm-10.891-43.912c.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046.421 14.004 1.125l2.771-17.179c-5.042-.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-.001 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675.471-3.788 1.333-7.467 1.162-11.225zm-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675.471-3.788 1.324-7.467 1.162-11.225zm254.57 68.241c-.004-3.199 2.586-5.795 5.784-5.799h.012c3.197-.004 5.793 2.586 5.796 5.783v.016c-.001 3.201-2.595 5.795-5.796 5.797-3.201-.002-5.795-2.596-5.796-5.797zm5.796 4.405c2.431.002 4.402-1.969 4.403-4.399v-.004c.003-2.433-1.968-4.406-4.399-4.408h-.004c-2.435.001-4.407 1.974-4.408 4.408.002 2.432 1.975 4.403 4.408 4.403zm-.784-1.871h-1.188v-5.082h2.153c.446 0 .909.009 1.296.254.417.283.654.767.654 1.274 0 .575-.337 1.112-.888 1.317l.941 2.236h-1.32l-.779-2.009h-.87zm0-2.879h.653c.246 0 .513.019.729-.1.196-.125.296-.361.296-.588-.009-.21-.114-.404-.287-.523-.204-.117-.542-.084-.763-.084h-.629z"
                              fill="#fff"
                            ></path>
                          </svg>
                          <span>••• 223</span>
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <span class="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-orange-100 dark:bg-gray-700 dark:border-orange-300 dark:text-orange-300">
                            In review
                          </span>
                        </td>
                      </tr>
                      <tr class="bg-gray-50 dark:bg-gray-700">
                        <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          Payment to{" "}
                          <span class="font-semibold">Joseph Mcfall</span>
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Apr 1 ,2021
                        </td>
                        <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                          $980
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          0057568935
                        </td>
                        <td class="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 83"
                          >
                            <defs>
                              <linearGradient
                                id="logosVisa0"
                                x1="45.974%"
                                x2="54.877%"
                                y1="-2.006%"
                                y2="100%"
                              >
                                <stop offset="0%" stop-color="#222357"></stop>
                                <stop offset="100%" stop-color="#254AA5"></stop>
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#logosVisa0)"
                              d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
                              transform="matrix(1 0 0 -1 0 82.668)"
                            ></path>
                          </svg>
                          <span>••• 363</span>
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                            Completed
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          Payment from{" "}
                          <span class="font-semibold">Alphabet LLC</span>
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Mar 23 ,2021
                        </td>
                        <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                          $11,436
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          00836143841
                        </td>
                        <td class="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            class="w-7 h-7"
                            aria-hidden="true"
                            enable-background="new 0 0 780 500"
                            viewBox="0 0 780 500"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5"
                              fill="#d9222a"
                            ></path>
                            <path
                              d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5"
                              fill="#ee9f2d"
                            ></path>
                            <path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-.001 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-.006c-2.429-.003-4.4 1.963-4.404 4.391v.014c-.002 2.433 1.968 4.406 4.4 4.408.001-.001.003-.001.004-.001zm-.783-1.86h-1.187v-5.096h2.149c.45 0 .908 0 1.305.254.413.279.646.771.646 1.279 0 .571-.338 1.104-.884 1.312l.938 2.25h-1.315l-.779-2.017h-.871zm0-2.89h.658c.246 0 .505.021.726-.1.195-.125.296-.359.296-.584-.005-.209-.112-.402-.288-.518-.207-.129-.536-.101-.758-.101h-.634zm-443.5-80.063c-2.046-.238-2.945-.301-4.35-.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042.199 7.941.57.604-2.441.763-3.488.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-.108-17.396 2.271-20.625 3.333.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712.033 3.805-.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167zm354.97-32.996c-2.037-.238-2.941-.301-4.342-.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037.199 7.934.57.604-2.441.763-3.488.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-.108-17.387 2.271-20.629 3.333.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712.032 3.805-.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-.227 5.254-.7zm59.392-.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663zm-10.888-43.9c.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05.408 14 1.112l2.775-17.175c-5.046-.8-12.696-1.442-17.15-1.442-21.801.001-29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c.383-2.483.729-4.95.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"></path>
                            <path
                              d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l.788 56.362 18.904-56.362h30.267z"
                              fill="#fff"
                            ></path>
                            <path d="m647.52 211.6-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-.004.067c.658-6.134.921-9.875.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-.913 6.884h18.435l14.842-91.042zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509.001 14.679-6.37 24.962-15.449 24.962z"></path>
                            <path
                              d="m233.19 264.26c-2.042-.236-2.946-.299-4.346-.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-.001 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042.2 7.938.571.604-2.441.763-3.487.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-.108-17.396 2.271-20.629 3.321.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704.029 3.821-.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507.001 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-.236-2.941-.299-4.347-.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-.001 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042.2 7.941.571.601-2.441.763-3.487.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-.108-17.396 2.271-20.63 3.321.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704.033 3.821-.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-.216 5.254-.691zm59.391-.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677zm-10.891-43.912c.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046.421 14.004 1.125l2.771-17.179c-5.042-.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-.001 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675.471-3.788 1.333-7.467 1.162-11.225zm-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675.471-3.788 1.324-7.467 1.162-11.225zm254.57 68.241c-.004-3.199 2.586-5.795 5.784-5.799h.012c3.197-.004 5.793 2.586 5.796 5.783v.016c-.001 3.201-2.595 5.795-5.796 5.797-3.201-.002-5.795-2.596-5.796-5.797zm5.796 4.405c2.431.002 4.402-1.969 4.403-4.399v-.004c.003-2.433-1.968-4.406-4.399-4.408h-.004c-2.435.001-4.407 1.974-4.408 4.408.002 2.432 1.975 4.403 4.408 4.403zm-.784-1.871h-1.188v-5.082h2.153c.446 0 .909.009 1.296.254.417.283.654.767.654 1.274 0 .575-.337 1.112-.888 1.317l.941 2.236h-1.32l-.779-2.009h-.87zm0-2.879h.653c.246 0 .513.019.729-.1.196-.125.296-.361.296-.588-.009-.21-.114-.404-.287-.523-.204-.117-.542-.084-.763-.084h-.629z"
                              fill="#fff"
                            ></path>
                          </svg>
                          <span>••• 771</span>
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-purple-100 dark:bg-gray-700 dark:border-purple-500 dark:text-purple-400">
                            In progress
                          </span>
                        </td>
                      </tr>
                      <tr class="bg-gray-50 dark:bg-gray-700">
                        <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          Payment from{" "}
                          <span class="font-semibold">Bonnie Green</span>
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          Mar 23 ,2021
                        </td>
                        <td class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                          $560
                        </td>
                        <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          0031568935
                        </td>
                        <td class="inline-flex items-center p-4 space-x-2 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <svg
                            class="w-7 h-7"
                            aria-hidden="true"
                            enable-background="new 0 0 780 500"
                            viewBox="0 0 780 500"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m449.01 250c0 99.143-80.371 179.5-179.51 179.5s-179.5-80.361-179.5-179.5c0-99.133 80.362-179.5 179.5-179.5 99.137 0 179.51 80.371 179.51 179.5"
                              fill="#d9222a"
                            ></path>
                            <path
                              d="m510.49 70.496c-46.379 0-88.643 17.596-120.5 46.467-6.49 5.889-12.548 12.237-18.125 18.996h36.267c4.965 6.037 9.536 12.387 13.685 19.012h-63.635c-3.827 6.122-7.281 12.469-10.342 19.008h84.313c2.894 6.185 5.431 12.53 7.601 19.004h-99.513c-2.09 6.234-3.832 12.58-5.217 19.008h109.94c2.689 12.49 4.045 25.231 4.042 38.008 0 19.935-3.254 39.112-9.254 57.021h-99.513c2.164 6.477 4.7 12.824 7.596 19.008h84.316c-3.063 6.541-6.519 12.889-10.347 19.013h-63.625c4.147 6.62 8.719 12.966 13.685 18.996h36.259c-5.57 6.772-11.63 13.127-18.13 19.013 31.857 28.866 74.117 46.454 120.5 46.454 99.139 0 179.51-80.361 179.51-179.5 0-99.129-80.371-179.5-179.51-179.5"
                              fill="#ee9f2d"
                            ></path>
                            <path d="m666.07 350.06c0-3.199 2.592-5.801 5.796-5.801s5.796 2.602 5.796 5.801-2.592 5.801-5.796 5.801-5.796-2.602-5.796-5.801zm5.796 4.408c2.434-.001 4.407-1.974 4.408-4.408 0-2.432-1.971-4.402-4.402-4.404h-.006c-2.429-.003-4.4 1.963-4.404 4.391v.014c-.002 2.433 1.968 4.406 4.4 4.408.001-.001.003-.001.004-.001zm-.783-1.86h-1.187v-5.096h2.149c.45 0 .908 0 1.305.254.413.279.646.771.646 1.279 0 .571-.338 1.104-.884 1.312l.938 2.25h-1.315l-.779-2.017h-.871zm0-2.89h.658c.246 0 .505.021.726-.1.195-.125.296-.359.296-.584-.005-.209-.112-.402-.288-.518-.207-.129-.536-.101-.758-.101h-.634zm-443.5-80.063c-2.046-.238-2.945-.301-4.35-.301-11.046 0-16.638 3.787-16.638 11.268 0 4.611 2.729 7.545 6.987 7.545 7.939 0 13.659-7.559 14.001-18.512zm14.171 32.996h-16.146l.371-7.676c-4.926 6.065-11.496 8.949-20.426 8.949-10.563 0-17.804-8.25-17.804-20.229 0-18.024 12.596-28.541 34.217-28.541 2.208 0 5.042.199 7.941.57.604-2.441.763-3.488.763-4.801 0-4.908-3.396-6.737-12.5-6.737-9.533-.108-17.396 2.271-20.625 3.333.204-1.229 2.7-16.659 2.7-16.659 9.712-2.846 16.116-3.917 23.325-3.917 16.732 0 25.596 7.513 25.579 21.712.033 3.805-.597 8.5-1.579 14.671-1.691 10.734-5.32 33.721-5.816 39.325zm-62.158 0h-19.487l11.162-69.997-24.925 69.997h-13.279l-1.642-69.597-11.733 69.597h-18.242l15.237-91.056h28.021l1.7 50.968 17.092-50.968h31.167zm354.97-32.996c-2.037-.238-2.941-.301-4.342-.301-11.041 0-16.634 3.787-16.634 11.268 0 4.611 2.726 7.545 6.983 7.545 7.94 0 13.664-7.559 13.993-18.512zm14.184 32.996h-16.146l.366-7.676c-4.926 6.065-11.5 8.949-20.422 8.949-10.565 0-17.8-8.25-17.8-20.229 0-18.024 12.588-28.541 34.213-28.541 2.208 0 5.037.199 7.934.57.604-2.441.763-3.488.763-4.801 0-4.908-3.392-6.737-12.496-6.737-9.533-.108-17.387 2.271-20.629 3.333.204-1.229 2.709-16.659 2.709-16.659 9.712-2.846 16.112-3.917 23.313-3.917 16.74 0 25.604 7.513 25.587 21.712.032 3.805-.597 8.5-1.579 14.671-1.684 10.734-5.321 33.721-5.813 39.325zm-220.39-1.125c-5.333 1.679-9.491 2.398-14 2.398-9.962 0-15.399-5.725-15.399-16.267-.142-3.271 1.433-11.88 2.671-19.737 1.125-6.917 8.449-50.529 8.449-50.529h19.371l-2.263 11.208h11.699l-2.642 17.796h-11.742c-2.25 14.083-5.454 31.625-5.491 33.95 0 3.816 2.037 5.483 6.671 5.483 2.221 0 3.94-.227 5.254-.7zm59.392-.6c-6.654 2.034-13.075 3.017-19.879 3-21.684-.021-32.987-11.346-32.987-33.032 0-25.313 14.38-43.947 33.899-43.947 15.971 0 26.171 10.433 26.171 26.796 0 5.429-.7 10.729-2.388 18.212h-38.574c-1.305 10.741 5.57 15.217 16.837 15.217 6.935 0 13.188-1.429 20.142-4.663zm-10.888-43.9c.107-1.543 2.055-13.217-9.013-13.217-6.171 0-10.583 4.704-12.38 13.217zm-123.42-5.017c0 9.367 4.542 15.826 14.842 20.676 7.892 3.709 9.112 4.81 9.112 8.17 0 4.617-3.479 6.701-11.191 6.701-5.813 0-11.221-.908-17.458-2.922 0 0-2.563 16.321-2.68 17.102 4.43.967 8.38 1.861 20.279 2.19 20.563 0 30.059-7.829 30.059-24.75 0-10.175-3.976-16.146-13.737-20.634-8.171-3.75-9.108-4.587-9.108-8.045 0-4.004 3.237-6.046 9.537-6.046 3.825 0 9.05.408 14 1.112l2.775-17.175c-5.046-.8-12.696-1.442-17.15-1.442-21.801.001-29.347 11.388-29.28 25.063m229.09-23.116c5.412 0 10.458 1.421 17.412 4.921l3.188-19.763c-2.854-1.121-12.904-7.7-21.417-7.7-13.041 0-24.065 6.471-31.82 17.15-11.309-3.746-15.958 3.825-21.657 11.367l-5.063 1.179c.383-2.483.729-4.95.612-7.446h-17.896c-2.445 22.917-6.778 46.128-10.171 69.075l-.884 4.976h19.496c3.254-21.143 5.037-34.68 6.121-43.842l7.341-4.084c1.097-4.078 4.529-5.458 11.417-5.291-.926 5.008-1.389 10.091-1.383 15.184 0 24.225 13.07 39.308 34.05 39.308 5.404 0 10.041-.712 17.221-2.658l3.43-20.759c-6.458 3.181-11.759 4.677-16.559 4.677-11.329 0-18.184-8.363-18.184-22.185 0-20.051 10.196-34.109 24.746-34.109"></path>
                            <path
                              d="m185.21 297.24h-19.491l11.171-69.988-24.926 69.988h-13.283l-1.642-69.588-11.733 69.588h-18.241l15.237-91.042h28.021l.788 56.362 18.904-56.362h30.267z"
                              fill="#fff"
                            ></path>
                            <path d="m647.52 211.6-4.321 26.309c-5.329-7.013-11.054-12.088-18.612-12.088-9.833 0-18.783 7.455-24.642 18.425-8.158-1.692-16.597-4.563-16.597-4.563l-.004.067c.658-6.134.921-9.875.862-11.146h-17.9c-2.438 22.917-6.771 46.128-10.157 69.075l-.893 4.976h19.492c2.633-17.096 4.648-31.291 6.133-42.551 6.658-6.016 9.992-11.266 16.721-10.916-2.979 7.205-4.725 15.503-4.725 24.017 0 18.513 9.366 30.725 23.533 30.725 7.142 0 12.621-2.462 17.967-8.171l-.913 6.884h18.435l14.842-91.042zm-24.371 73.941c-6.634 0-9.983-4.908-9.983-14.596 0-14.555 6.271-24.875 15.112-24.875 6.695 0 10.32 5.104 10.32 14.509.001 14.679-6.37 24.962-15.449 24.962z"></path>
                            <path
                              d="m233.19 264.26c-2.042-.236-2.946-.299-4.346-.299-11.046 0-16.634 3.787-16.634 11.266 0 4.604 2.729 7.547 6.979 7.547 7.947-.001 13.668-7.559 14.001-18.514zm14.178 32.984h-16.146l.367-7.663c-4.921 6.054-11.5 8.95-20.421 8.95-10.567 0-17.805-8.25-17.805-20.229 0-18.032 12.592-28.542 34.217-28.542 2.208 0 5.042.2 7.938.571.604-2.441.763-3.487.763-4.808 0-4.909-3.392-6.729-12.496-6.729-9.537-.108-17.396 2.271-20.629 3.321.204-1.225 2.7-16.637 2.7-16.637 9.708-2.858 16.12-3.929 23.32-3.929 16.737 0 25.604 7.517 25.588 21.704.029 3.821-.604 8.513-1.584 14.675-1.687 10.724-5.319 33.724-5.812 39.316zm261.38-88.592-3.191 19.767c-6.95-3.496-12-4.92-17.407-4.92-14.551 0-24.75 14.058-24.75 34.106 0 13.821 6.857 22.181 18.184 22.181 4.8 0 10.096-1.492 16.554-4.675l-3.421 20.75c-7.184 1.957-11.816 2.67-17.225 2.67-20.977 0-34.051-15.084-34.051-39.309 0-32.55 18.059-55.3 43.888-55.3 8.507.001 18.561 3.609 21.419 4.73m31.443 55.608c-2.041-.236-2.941-.299-4.347-.299-11.041 0-16.633 3.787-16.633 11.266 0 4.604 2.729 7.547 6.983 7.547 7.938-.001 13.663-7.559 13.997-18.514zm14.178 32.984h-16.15l.371-7.663c-4.925 6.054-11.5 8.95-20.421 8.95-10.563 0-17.804-8.25-17.804-20.229 0-18.032 12.596-28.542 34.212-28.542 2.213 0 5.042.2 7.941.571.601-2.441.763-3.487.763-4.808 0-4.909-3.393-6.729-12.495-6.729-9.533-.108-17.396 2.271-20.63 3.321.204-1.225 2.704-16.637 2.704-16.637 9.709-2.858 16.116-3.929 23.316-3.929 16.741 0 25.604 7.517 25.583 21.704.033 3.821-.596 8.513-1.579 14.675-1.682 10.724-5.323 33.724-5.811 39.316zm-220.39-1.121c-5.338 1.679-9.496 2.408-14 2.408-9.962 0-15.399-5.726-15.399-16.268-.138-3.279 1.438-11.88 2.675-19.736 1.12-6.926 8.445-50.534 8.445-50.534h19.368l-2.26 11.212h9.941l-2.646 17.788h-9.975c-2.25 14.092-5.463 31.62-5.496 33.95 0 3.83 2.041 5.482 6.671 5.482 2.221 0 3.938-.216 5.254-.691zm59.391-.592c-6.65 2.033-13.079 3.012-19.879 3-21.685-.021-32.987-11.346-32.987-33.033 0-25.321 14.379-43.95 33.899-43.95 15.971 0 26.171 10.429 26.171 26.8 0 5.434-.7 10.733-2.384 18.212h-38.574c-1.306 10.741 5.569 15.222 16.837 15.222 6.93 0 13.188-1.435 20.138-4.677zm-10.891-43.912c.116-1.538 2.06-13.217-9.013-13.217-6.167 0-10.579 4.717-12.375 13.217zm-123.42-5.005c0 9.367 4.542 15.818 14.842 20.675 7.892 3.709 9.112 4.812 9.112 8.172 0 4.616-3.483 6.699-11.188 6.699-5.816 0-11.225-.908-17.467-2.921 0 0-2.554 16.321-2.671 17.101 4.421.967 8.375 1.85 20.275 2.191 20.566 0 30.059-7.829 30.059-24.746 0-10.18-3.971-16.15-13.737-20.637-8.167-3.759-9.113-4.584-9.113-8.046 0-4 3.246-6.059 9.542-6.059 3.821 0 9.046.421 14.004 1.125l2.771-17.179c-5.042-.8-12.692-1.441-17.146-1.441-21.804 0-29.346 11.379-29.283 25.066m398.45 50.63h-18.438l.917-6.893c-5.347 5.717-10.825 8.18-17.968 8.18-14.166 0-23.528-12.213-23.528-30.726 0-24.63 14.521-45.392 31.708-45.392 7.559 0 13.279 3.087 18.604 10.096l4.325-26.308h19.221zm-28.746-17.109c9.075 0 15.45-10.283 15.45-24.953 0-9.405-3.629-14.509-10.325-14.509-8.837 0-15.115 10.315-15.115 24.875-.001 9.686 3.357 14.587 9.99 14.587zm-56.842-56.929c-2.441 22.917-6.773 46.13-10.162 69.063l-.892 4.976h19.491c6.972-45.275 8.658-54.117 19.588-53.009 1.742-9.267 4.982-17.383 7.399-21.479-8.163-1.7-12.721 2.913-18.688 11.675.471-3.788 1.333-7.467 1.162-11.225zm-160.42 0c-2.446 22.917-6.779 46.13-10.167 69.063l-.888 4.976h19.5c6.963-45.275 8.646-54.117 19.57-53.009 1.75-9.267 4.991-17.383 7.399-21.479-8.154-1.7-12.717 2.913-18.679 11.675.471-3.788 1.324-7.467 1.162-11.225zm254.57 68.241c-.004-3.199 2.586-5.795 5.784-5.799h.012c3.197-.004 5.793 2.586 5.796 5.783v.016c-.001 3.201-2.595 5.795-5.796 5.797-3.201-.002-5.795-2.596-5.796-5.797zm5.796 4.405c2.431.002 4.402-1.969 4.403-4.399v-.004c.003-2.433-1.968-4.406-4.399-4.408h-.004c-2.435.001-4.407 1.974-4.408 4.408.002 2.432 1.975 4.403 4.408 4.403zm-.784-1.871h-1.188v-5.082h2.153c.446 0 .909.009 1.296.254.417.283.654.767.654 1.274 0 .575-.337 1.112-.888 1.317l.941 2.236h-1.32l-.779-2.009h-.87zm0-2.879h.653c.246 0 .513.019.729-.1.196-.125.296-.361.296-.588-.009-.21-.114-.404-.287-.523-.204-.117-.542-.084-.763-.084h-.629z"
                              fill="#fff"
                            ></path>
                          </svg>
                          <span>••• 023</span>
                        </td>
                        <td class="p-4 whitespace-nowrap">
                          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                            Completed
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Card Footer --> */}
          <div class="flex items-center justify-between pt-3 sm:pt-6">
            <div>
              <button
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                type="button"
                data-dropdown-toggle="transactions-dropdown"
              >
                Last 7 days{" "}
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="transactions-dropdown"
                data-popper-placement="top"
                data-popper-reference-hidden=""
                data-popper-escaped=""
              >
                <div class="px-4 py-3" role="none">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                    role="none"
                  >
                    Sep 16, 2021 - Sep 22, 2021
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Yesterday
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Today
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Last 7 days
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Last 30 days
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Last 90 days
                    </a>
                  </li>
                </ul>
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Custom...
                  </a>
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <a
                href="#"
                class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
              >
                Transactions Report
                <svg
                  class="w-4 h-4 ml-1 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* New Templet */}
        <section
          id="home"
          class="rounded-b-[50px] relative overflow-hidden z-10 pb-15 pt-34"
        >
          <div>
            <div class="absolute bottom-0 left-0 rounded-b-[50px] w-full h-full bg-gray"></div>
            <div class="hidden lg:block absolute bottom-0 left-0 rounded-b-[50px] w-full h-full">
              <img src="images/hero-bg.svg" alt="hero" />
            </div>
          </div>

          <div class="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0 relative z-1">
            <div class="flex flex-wrap gap-x-7.5 gap-y-9">
              <div class="max-w-[1170px] w-full flex flex-col lg:flex-row lg:items-center gap-7.5 lg:gap-11 bg-white shadow-1 rounded-xl p-4 lg:p-2.5">
                <div class="lg:max-w-[536px] w-full">
                  <a href="blog-single.html">
                    <img class="w-full" src="images/hero-01.png" alt="hero" />
                  </a>
                </div>
                <div class="lg:max-w-[540px] w-full">
                  <a
                    href="category.html"
                    class="inline-flex text-purple-dark bg-purple/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4"
                  >
                    Lifestyle
                  </a>
                  <h1 class="font-bold text-custom-4 xl:text-heading-4 text-dark mb-4">
                    <a href="blog-single.html">
                      Begin here to obtain a brief summary encompassing all the
                      essential
                    </a>
                  </h1>
                  <p class="max-w-[524px]">
                    This comprehensive post serves as your cheat-sheet to
                    swiftly familiarize yourself with Ghost. Packed with
                    crucial...
                  </p>
                  <div class="flex items-center gap-2.5 mt-5">
                    <a href="author.html" class="flex items-center gap-3">
                      <div class="flex w-6 h-6 rounded-full overflow-hidden">
                        <img src="images/user-01.png" alt="user" />
                      </div>
                      <p class="text-sm">Adrio Devid</p>
                    </a>
                    <span class="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                    <p class="text-sm">Sep 10, 2025</p>
                  </div>
                </div>
              </div>

              <div class="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-1 rounded-xl p-2.5">
                <div class="lg:max-w-[238px] w-full">
                  <a href="blog-single.html">
                    <img class="w-full" src="images/hero-02.png" alt="hero" />
                  </a>
                </div>
                <div class="lg:max-w-[272px] w-full">
                  <a
                    href="category.html"
                    class="inline-flex text-blue bg-blue/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4"
                  >
                    Technology
                  </a>
                  <h2 class="font-semibold text-custom-lg text-dark mb-3">
                    <a href="blog-single.html">
                      14 Innovative Architectural Designs to Create a Vast
                      Interior Space
                    </a>
                  </h2>
                  <div class="flex items-center gap-2.5">
                    <p class="text-sm">
                      <a href="author.html">By Adrio Devid</a>
                    </p>
                    <span class="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                    <p class="text-sm">Sep 10, 2025</p>
                  </div>
                </div>
              </div>

              <div class="lg:max-w-[570px] w-full flex flex-col sm:flex-row sm:items-center gap-6 bg-white shadow-1 rounded-xl p-2.5">
                <div class="lg:max-w-[238px] w-full">
                  <a href="blog-single.html">
                    <img class="w-full" src="images/hero-03.png" alt="hero" />
                  </a>
                </div>
                <div class="lg:max-w-[272px] w-full">
                  <a
                    href="category.html"
                    class="inline-flex text-green-dark bg-green/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4"
                  >
                    Travel
                  </a>
                  <h2 class="font-semibold text-custom-lg text-dark mb-3">
                    <a href="blog-single.html">
                      Traveller Visiting Ice Cave With Amazing Eye-catching view
                      with nature
                    </a>
                  </h2>
                  <div class="flex items-center gap-2.5">
                    <p class="text-sm">
                      <a href="author.html">By Adrio Devid</a>
                    </p>
                    <span class="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                    <p class="text-sm">Sep 10, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DashNew;
