import { getTeamMembers, teamStatus } from "@/actions/teamAction";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TeamMember = ({ data, onUpdate }) => {
  function changeDateToString(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  }
  const handleStatus = async (id) => {
    if (
      !window.confirm(
        `Are you sure want to Chnage Status of this service item?`
      )
    )
      return;
    const response = await teamStatus(id);

    if (response.success) {
      window.alert(`Service Item Updated Successfully!`);
      onUpdate();
    }
  };

  return (
    <>
      <tr>
        <td class="h-px w-px whitespace-nowrap">
          <div class="ps-6 py-3">
            <label for="hs-at-with-checkboxes-1" class="flex">
              <input
                type="checkbox"
                class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="hs-at-with-checkboxes-1"
              />
              <span class="sr-only">Checkbox</span>
            </label>
          </div>
        </td>
        <td class="h-px w-px whitespace-nowrap">
          <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
            <div class="flex items-center gap-x-3">
              {data?.mainImage?.mainImageUrl ? (
                <img
                  src={data?.mainImage?.mainImageUrl}
                  alt="teamMember"
                  className="h-[2.375rem] w-[2.375rem] object-contain rounded-full"
                />
              ) : (
                <span class="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-300 dark:bg-gray-700">
                  <span class="font-medium text-gray-800 leading-none dark:text-gray-200">
                    {data?.name.split(" ")[0]}
                  </span>
                </span>
              )}
              <div class="grow">
                <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {data?.name}
                </span>
                <span class="block text-sm text-gray-500">
                  {data?.email || "info@cdc.construction"}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td class="h-px w-72 whitespace-nowrap">
          <div class="px-6 py-3">
            <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">
              {data?.company?.role}
            </span>
            <span class="block text-sm text-gray-500">
              {data?.company?.department}
            </span>
          </div>
        </td>
        <td
          onClick={() => handleStatus(data._id)}
          class="h-px w-px whitespace-nowrap"
        >
          <div class="px-6 py-3">
            {data.isActive ? (
              <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                <svg
                  class="w-2.5 h-2.5"
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
              <span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
                <svg
                  class="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                Inactive
              </span>
            )}
          </div>
        </td>
        <td class="h-px w-px whitespace-nowrap">
          <div class="px-6 py-3">
            <div class="flex justify-center items-center gap-x-3">
              <span class="text-md text-gray-500">
                {data?.socialLinks?.length}
              </span>
            </div>
          </div>
        </td>
        <td class="h-px w-px whitespace-nowrap">
          <div class="px-6 py-3">
            <span class="text-sm text-gray-500">
              {changeDateToString(data.createdAt)}
            </span>
          </div>
        </td>
        <td class="h-px w-px whitespace-nowrap">
          <div class="px-6 py-1.5">
            <a
              class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Edit
            </a>
          </div>
        </td>
      </tr>
    </>
  );
};

const AllTeam = () => {
  const [teamData, setTeamData] = useState([]);
  // Handle get all team member
  const showAllTeamMembers = async () => {
    const response = await getTeamMembers();
    setTeamData(response.data);
    console.log(response);
  };

  useEffect(() => {
    showAllTeamMembers();
  }, []);
  return (
    // <!-- Table Section -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Card --> */}
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              {/* <!-- Header --> */}
              <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Teams
                  </h2>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Add Team, edit and more.
                  </p>
                </div>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Table --> */}
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" class="ps-6 py-3 text-start">
                      <label for="hs-at-with-checkboxes-main" class="flex">
                        <input
                          type="checkbox"
                          class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-at-with-checkboxes-main"
                        />
                        <span class="sr-only">Checkbox</span>
                      </label>
                    </th>

                    <th
                      scope="col"
                      class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                    >
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Name
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Position
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Status
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Portfolio
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-start">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Created
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-6 py-3 text-end"></th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  {/* Add map function to all team member */}
                  {teamData &&
                    teamData.map((team) => (
                      <TeamMember
                        key={team._id}
                        data={team}
                        onUpdate={showAllTeamMembers}
                      />
                    ))}
                </tbody>
              </table>
              {/* <!-- End Table --> */}

              {/* <!-- Footer --> */}
              <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <span class="font-semibold text-gray-800 dark:text-gray-200">
                      {teamData.length}
                    </span>{" "}
                    results
                  </p>
                </div>

                <div>
                  <div class="inline-flex gap-x-2">
                    <button
                      type="button"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        class="flex-shrink-0 w-4 h-4"
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
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Prev
                    </button>

                    <button
                      type="button"
                      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Next
                      <svg
                        class="flex-shrink-0 w-4 h-4"
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
  );
};

export default AllTeam;
