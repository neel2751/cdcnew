import { handleTeamMemberData } from "@/actions/teamAction";
import React, { useState, useRef } from "react";

const Team = () => {
  //   const { pending } = useFormStatus();
  const formRef = useRef();
  const [mainImage, setMainImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [socialLink, setSocialLink] = useState([]);
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");

  // Main Function Handle all formdata to send to server...
  const handleFormData = async () => {
    if (!mainImage) return alert("upload Team Member Image");
    // let data = new FormData(formRef.current);
    const formData = new FormData();
    formData.append("mainImage", mainImage);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", currentPassword);
    formData.append("socialLinks", JSON.stringify(socialLink));
    formData.append("department", department);
    formData.append("role", role);
    formData.append("position", position);
    formData.append("description", description);
    const resposne = await handleTeamMemberData(formData);
    console.log("show to user response", resposne);
  };

  // Add image handle file
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    console.log(file);
    setMainImage(file);
  };

  // Add New Social Media input field
  const addSocialMedia = () => {
    setSocialLink((prev) => {
      return [...prev, { socialName: "", socailValue: "" }];
    });
  };

  // Onchange Method on Social Media name change like facebook, instagram
  const updatePropertyName = (index, link, newName) => {
    setSocialLink((prev) => {
      const prop = [...prev];
      prop[index].socialName = newName;
      return prop;
    });
  };
  // OnChange Method for Social Media Link value
  const updatePropertyValue = (index, link, newValue) => {
    setSocialLink((prev) => {
      const prop = [...prev];
      prop[index].socailValue = newValue;
      return prop;
    });
  };
  // Remove Field From Array using index in social media formfield
  const removeSocialLink = (i) => {
    setSocialLink((prev) => {
      return [...prev].filter((p, pIndex) => {
        return i !== pIndex;
      });
    });
    // socialLink.length > 1 &&
    //   setSocialLink(socialLink.filter((_, j) => i !== j));
  };
  return (
    // <!-- Card Section -->
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Card --> */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 ">Team Member</h2>
          <p className="text-sm text-gray-600 ">
            Add Team Member Details, and account settings.
          </p>
        </div>

        <form action={handleFormData} ref={formRef}>
          {/* <!-- Grid --> */}
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
            <div className="sm:col-span-3">
              <label className="inline-block text-sm text-gray-800 mt-2.5 ">
                Member Image
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              <div className="flex items-center gap-5">
                <img
                  className="inline-block h-16 w-16 rounded-full ring-2 ring-gray-200 "
                  src={
                    mainImage
                      ? URL.createObjectURL(mainImage)
                      : "/images/Logo_New.svg"
                  }
                  alt="Image Description"
                />
                <div className="flex gap-x-2">
                  <div>
                    <label
                      for="imageUpload"
                      className="hover:cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                    >
                      <input
                        onChange={onSelectFile}
                        id="imageUpload"
                        name="forimageUpload"
                        type="file"
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
                      Choose Image
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label
                for="af-account-full-name"
                className="inline-block text-sm text-gray-800 mt-2.5 "
              >
                Full name
              </label>
              {/* ToolTip active after... */}
              {/* <div className="hs-tooltip inline-block">
                <button type="button" className="hs-tooltip-toggle ms-1">
                  <svg
                    className="inline-block w-3 h-3 text-gray-400 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </button>
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-100 transition-opacity inline-block absolute w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm "
                  role="tooltip"
                >
                  Displayed on Our Website, such as CDC
                </span>
              </div> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="af-account-full-name"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border border-gray-600 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="jhon Doe"
                />
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label
                for="af-account-email"
                className="inline-block text-sm text-gray-800 mt-2.5 "
              >
                Email
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="af-account-email"
                type="email"
                className="py-2 px-3 pe-11 block w-full border border-gray-600 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                placeholder="maria@site.com"
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label
                for="af-account-password"
                className="inline-block text-sm text-gray-800 mt-2.5 "
              >
                Password
              </label>
              <span className="text-sm text-gray-400">(Optional)</span>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              <div className="space-y-2">
                <input
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  id="af-account-password"
                  type="password"
                  className="py-2 px-3 pe-11 block w-full border border-gray-600 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Enter New password"
                />
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <div className="inline-block">
                <label
                  for="af-account-phone"
                  className="inline-block text-sm text-gray-800 mt-2.5 "
                >
                  Social Links
                </label>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              {socialLink &&
                socialLink.map((social, index) => (
                  <div
                    key={index}
                    className={`sm:flex ${
                      socialLink.length > 1 ? "mt-2" : "mt-o"
                    }`}
                  >
                    <input
                      id="SocialName"
                      type="text"
                      value={social.SocailName}
                      onChange={(e) =>
                        updatePropertyName(index, social, e.target.value)
                      }
                      placeholder="Facebook"
                      className="py-2 px-3 pe-9 block w-full sm:w-auto border border-gray-600 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                    />
                    <input
                      value={social.SocialValue}
                      onChange={(e) =>
                        updatePropertyValue(index, social, e.target.value)
                      }
                      id="SocialValue"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border border-gray-600 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="https://facebook.com/xyz"
                    />
                    <button
                      type="button"
                      onClick={() => removeSocialLink(index)}
                      className="flex items-center justify-center ml-4 p-2 rounded-full bg-red-600 text-white hover:bg-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              <p className="mt-3">
                <button
                  onClick={addSocialMedia}
                  type="button"
                  disabled={socialLink.length >= 4 ? true : ""}
                  className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium "
                >
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  Add Link
                </button>
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label
                for="role"
                className="inline-block text-sm text-gray-800 mt-2.5 "
              >
                Role
              </label>
            </div>
            <div className="sm:col-span-9">
              <div className="space-y-2">
                <input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  id="role"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border border-gray-600 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Civil, Electric Enginner."
                />
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label
                for="position"
                className="inline-block text-sm text-gray-800 mt-2.5 "
              >
                Position
              </label>
            </div>
            <div className="sm:col-span-9">
              <div className="space-y-2">
                <input
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  id="position"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border border-gray-600 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="CEO,MD,Director"
                />
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label
                for="department"
                className="inline-block text-sm text-gray-800 mt-2.5 "
              >
                Department
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              <div className="space-y-2">
                <input
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  id="department"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border border-gray-600 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Leadership,ProjectManagement"
                />
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-3">
              <label
                for="bio"
                className="inline-block text-sm text-gray-800 mt-2.5 "
              >
                BIO
              </label>
            </div>
            {/* <!-- End Col --> */}

            <div className="sm:col-span-9">
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                id="bio"
                className="py-2 px-3 block w-full border border-gray-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                rows="6"
                placeholder="Type your quote..."
              ></textarea>

              {/* {description.split(/\s+/).length} */}

              {description.replace(/[^a-zA-Z]/g, "").length > 500
                ? "bad"
                : description.replace(/[^a-zA-Z]/g, "").length > 200
                ? "good"
                : "bad"}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="submit"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Add Team Member
            </button>
          </div>
        </form>
      </div>
      {/* <!-- End Card --> */}
    </div>
    /* <!-- End Card Section --> */
  );
};

export default Team;
