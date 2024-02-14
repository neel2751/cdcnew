"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialFormData);
  const [errorMsg, setErrorMsg] = useState({});
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (Object.keys(data).some((key) => data[key])) {
      validateForm();
    }
  }, [data]);

  //   Check the Validation
  const validateForm = () => {
    let newErrorMsg = {};

    if (!data.username) {
      newErrorMsg.username = "UserName is required.";
    }
    if (!data.email) {
      newErrorMsg.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrorMsg.email =
        "Please include a valid email address so we can get back to you";
    }
    if (!data.password) {
      newErrorMsg.password = "Password is required.";
    } else if (data.password.length < 8) {
      newErrorMsg.password = "8+ characters required";
    }

    setErrorMsg(newErrorMsg);
    setIsFormValid(!Object.keys(newErrorMsg).length);
  };

  setTimeout(() => {
    setMsg(false);
  }, 10000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();
    if (isFormValid) {
      try {
        setLoading(true);
        ("use server");
        // Send form data to the server
        const response = await axios.post("/api/Admin/Register", data);
        //   console.log("check this email--->", response.data);
        console.log("chcek the response->", response);
        if (response.data) {
          // Handle success (optional)
          console.log("Form submitted successfully!");
          setData(initialFormData);
          setMsg(true);
        } else {
          // Handle error (optional)
          console.error("Error submitting form");
        }
      } catch (error) {
        console.log("Mail Sent Failed", error.message);
      } finally {
        console.log("Done Finally");
        setLoading(false);
      }
    } else {
      console.warn("Please fill this form");
    }
  };
  return (
    <div class="h-full">
      <div class="flex h-full items-center py-16">
        <main class="w-full max-w-md mx-auto p-6">
          <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
            <div class="p-4 sm:p-7">
              <div class="text-center">
                <h1 class="block text-2xl font-bold text-gray-800 ">
                  Register
                </h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  if you have Account
                  <Link
                    href="/Admin"
                    class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Login here
                  </Link>
                </p>
              </div>
              <div class="mt-5">
                {/* <!-- Form --> */}

                <div class="grid gap-y-4">
                  <div>
                    <label for="email" class="block text-sm mb-2">
                      UserName
                    </label>
                    <div class="relative">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="jhon123"
                        value={data.username}
                        onChange={handleChange}
                        class="py-3 px-4 block w-full border border-gray-800 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        aria-describedby="username-error"
                      />
                      <div
                        class={`absolute inset-y-0 end-0 items-center pointer-events-none pe-3 ${
                          errorMsg.username ? "flex" : "hidden"
                        }`}
                      >
                        <svg
                          className={`h-5 w-5 text-red-500`}
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    {errorMsg.username && (
                      <p
                        id="username-error"
                        className="text-xs text-red-600 mt-2"
                      >
                        {errorMsg.username}
                      </p>
                    )}
                  </div>
                  {/* <!-- Form Group --> */}
                  <div>
                    <label for="email" class="block text-sm mb-2">
                      Email address
                    </label>
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={handleChange}
                        class="py-3 px-4 block w-full border border-gray-800 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        aria-describedby="email-error"
                      />
                      <div
                        class={`absolute inset-y-0 end-0 items-center pointer-events-none pe-3 ${
                          errorMsg.email ? "flex" : "hidden"
                        }`}
                      >
                        <svg
                          class="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    {errorMsg.email && (
                      <p
                        id="username-error"
                        className="text-xs text-red-600 mt-2"
                      >
                        {errorMsg.email}
                      </p>
                    )}
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Form Group --> */}
                  <div>
                    <div class="flex justify-between items-center">
                      <label for="password" class="block text-sm mb-2">
                        Password
                      </label>
                    </div>
                    <div class="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={data.password}
                        onChange={handleChange}
                        class="py-3 px-4 block w-full border border-gray-800 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        aria-describedby="password-error"
                      />
                      <div
                        class={`absolute inset-y-0 end-0 items-center pointer-events-none pe-3 ${
                          errorMsg.password ? "flex" : "hidden"
                        }`}
                      >
                        <svg
                          class="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    {errorMsg.password && (
                      <p
                        id="username-error"
                        className="text-xs text-red-600 mt-2"
                      >
                        {errorMsg.password}
                      </p>
                    )}
                  </div>
                  {/* <!-- End Form Group --> */}
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    class={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none 
                    loading ? "opacity-50 ointer-events-none" : ""`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`${loading ? "animate-spin block" : "hidden"}`}
                    >
                      <path
                        d="M5.12 13.89C5.04029 13.8996 4.95971 13.8996 4.88 13.89H4.75L4.6 13.81L4.49 13.75L2.05 11.75C1.85772 11.5975 1.73389 11.3749 1.70576 11.1311C1.67763 10.8873 1.7475 10.6423 1.9 10.45C2.0525 10.2577 2.27514 10.1339 2.51894 10.1058C2.76273 10.0776 3.00772 10.1475 3.2 10.3L3.97 10.93C4.17695 9.35475 4.8426 7.87513 5.8841 6.67531C6.92559 5.4755 8.29695 4.60847 9.82747 4.18213C11.358 3.7558 12.9801 3.789 14.4919 4.27759C16.0037 4.76618 17.3385 5.68859 18.33 6.93001C18.4131 7.0323 18.4751 7.14999 18.5125 7.27633C18.55 7.40267 18.5621 7.53516 18.5481 7.66619C18.5342 7.79722 18.4945 7.9242 18.4313 8.03984C18.3681 8.15547 18.2827 8.25748 18.18 8.34001C18.0771 8.42252 17.9589 8.48385 17.8322 8.52048C17.7055 8.55711 17.5728 8.56832 17.4417 8.55344C17.3106 8.53857 17.1838 8.49792 17.0685 8.43383C16.9533 8.36974 16.8518 8.28348 16.77 8.18001C16.0246 7.26112 15.028 6.57887 13.9016 6.21636C12.7753 5.85386 11.5679 5.82675 10.4264 6.13835C9.28492 6.44995 8.25872 7.0868 7.4728 7.97131C6.68688 8.85582 6.17516 9.94981 6 11.12L7 10.31C7.1862 10.2096 7.40183 10.1779 7.60904 10.2206C7.81625 10.2633 8.00178 10.3777 8.13307 10.5436C8.26436 10.7095 8.333 10.9163 8.32696 11.1278C8.32091 11.3393 8.24056 11.5419 8.1 11.7L5.66 13.7C5.60547 13.7339 5.54867 13.7639 5.49 13.79C5.39344 13.8305 5.29289 13.8606 5.19 13.88L5.12 13.89ZM22 12.3L19.56 10.3C19.5021 10.266 19.4419 10.236 19.38 10.21L19.08 10.12H19C18.9203 10.1104 18.8397 10.1104 18.76 10.12H18.62L18.48 10.2L18.37 10.26L15.93 12.26C15.7457 12.4125 15.6295 12.632 15.607 12.8702C15.5845 13.1083 15.6575 13.3457 15.81 13.53C15.9625 13.7143 16.182 13.8305 16.4201 13.853C16.6583 13.8755 16.8957 13.8025 17.08 13.65L18.08 12.84C17.9212 14.0295 17.4157 15.1459 16.6264 16.05C15.8371 16.954 14.7991 17.6055 13.6419 17.9234C12.4847 18.2412 11.2595 18.2112 10.1193 17.8372C8.97897 17.4631 7.97409 16.7615 7.23 15.82C7.1482 15.7165 7.04674 15.6303 6.93146 15.5662C6.81618 15.5021 6.68936 15.4614 6.5583 15.4466C6.42724 15.4317 6.29454 15.4429 6.16783 15.4795C6.04112 15.5162 5.92291 15.5775 5.82 15.66C5.71728 15.7425 5.63187 15.8445 5.5687 15.9602C5.50552 16.0758 5.46583 16.2028 5.45189 16.3338C5.43795 16.4649 5.45004 16.5973 5.48747 16.7237C5.5249 16.85 5.58694 16.9677 5.67 17.07C6.66154 18.3114 7.99628 19.2338 9.50808 19.7224C11.0199 20.211 12.642 20.2442 14.1725 19.8179C15.7031 19.3915 17.0744 18.5245 18.1159 17.3247C19.1574 16.1249 19.8231 14.6453 20.03 13.07L20.81 13.71C20.997 13.8678 21.239 13.9449 21.4828 13.9242C21.7266 13.9036 21.9522 13.787 22.11 13.6C22.2678 13.413 22.3449 13.171 22.3242 12.9272C22.3036 12.6834 22.187 12.4578 22 12.3Z"
                        fill="#fff"
                      />
                    </svg>
                    {loading ? "Loading...." : "Register"}
                  </button>
                </div>
                {/* <!-- End Form --> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
