"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ContactUsImage } from "../About/AboutImage";
import Link from "next/link";
import { ContactUs } from "../data/data";

const Contact = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
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

    if (!data.firstName) {
      newErrorMsg.firstName = "Name is required.";
    }
    if (!data.email) {
      newErrorMsg.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrorMsg.email = "Email is invalid.";
    }
    if (data.phone.length != 10) {
      newErrorMsg.phone = "Phone Number must be 10 digit.";
    }

    setErrorMsg(newErrorMsg);
    setIsFormValid(!Object.keys(newErrorMsg).length);
  };

  setTimeout(() => {
    setMsg(false);
  }, 10000);

  const handleSubmit = async (e) => {
    validateForm();
    e.preventDefault();
    if (isFormValid) {
      try {
        setLoading(true);
        ("use server");
        // Send form data to the server
        const response = await axios.post("/api/ContactUs", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        //   console.log("check this email--->", response.data);
        console.log("chcek the response->", response.data);
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
    <>
      <section className="min-h-max">
        <div className="w-full flex items-center relative">
          <div className="absolute top-1/4 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5]" />
          <div className="min-h-max relative mx-auto pt-20 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
            <Link
              href="#"
              className="flex items-center text-[#EAF3F5] mx-auto w-max px-2  py-1 rounded-full bg-[#242A3D] border border-gray-300"
            >
              {ContactUs.company}
            </Link>
            <h1 className="text-[#242A3D] mx-auto max-w-5xl font-semibold text-4xl/tight sm:text-5xl/tight lg:text-5xl/tight after:content-[url('/images/team/TeamLine.svg')] xl:lg:after:flex after:-my-12 after:mx-36 after:justify-end after:hidden items-center ">
              {ContactUs.title}
            </h1>
            {/* This is bug after check using mx-auto and provide some margin top to get better change */}
            <p
              className={`text-[#242A3D] max-w-2xl opacity-60 mx-auto m-[0px]`}
            >
              {ContactUs.desc}
            </p>
            <div className="mx-auto max-w-full rounded-2xl aspect-[5/2.3] overflow-hidden px-2 pt-2 ">
              <ContactUsImage />
            </div>
          </div>
        </div>
        {/* <!-- Contact Us --> */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-2xl lg:max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-[#242A3D] sm:text-4xl">
                Contact us
              </h1>
              <p className="mt-1 text-gray-600">
                We'd love to talk about how we can help you.
              </p>
            </div>

            <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
              {/* <!-- Card --> */}
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                <h2 className="mb-8 text-xl font-semibold text-[#242A3D] ">
                  Fill in the form
                </h2>

                <form>
                  <div className="grid gap-4">
                    {/* <!-- Grid --> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="hs-firstname-contacts-1"
                          className="sr-only"
                        >
                          First Name
                        </label>

                        <input
                          type="text"
                          name="firstName"
                          id="hs-firstname-contacts-1"
                          value={data.firstName}
                          onChange={handleChange}
                          className="py-3 px-4 block w-full border-gray-800 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-800"
                          placeholder="First Name"
                          required
                        />
                        {errorMsg.firstName && (
                          <p className="text-red-500 font-medium mt-2 ml-2 text-sm">
                            {errorMsg.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="hs-lastname-contacts-1"
                          className="sr-only"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="hs-lastname-contacts-1"
                          value={data.lastName}
                          onChange={handleChange}
                          className="py-3 px-4 block w-full border-gray-800 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-800"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    {/* <!-- End Grid --> */}

                    <div>
                      <label htmlFor="hs-email-contacts-1" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="hs-email-contacts-1"
                        value={data.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className="py-3 px-4 block w-full border-gray-800 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-800"
                        placeholder="Email"
                        required
                      />
                      {errorMsg.email && (
                        <p className="text-red-500 font-medium mt-2 ml-2 text-sm">
                          {errorMsg.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="hs-phone-number-1" className="sr-only">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="hs-phone-number-1"
                        value={data.phone}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full border-gray-800 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-800"
                        placeholder="Phone Number"
                        maxLength={10}
                        minLength={10}
                      />
                      {errorMsg.phone && (
                        <p className="text-red-500 font-medium mt-2 ml-2 text-sm">
                          {errorMsg.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="hs-about-contacts-1" className="sr-only">
                        Details
                      </label>
                      <textarea
                        id="hs-about-contacts-1"
                        name="message"
                        value={data.message}
                        onChange={handleChange}
                        rows="4"
                        className="py-3 px-4 block w-full border-gray-800 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-800"
                        placeholder="What can we do for your write it here..."
                      ></textarea>
                    </div>
                  </div>
                  {/* <!-- End Grid --> */}

                  <div className="mt-4 grid">
                    <motion.button
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700  focus:outline-none ${
                        loading ? "opacity-50 ointer-events-none" : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`${
                          loading ? "animate-spin block" : "hidden"
                        }`}
                      >
                        <path
                          d="M5.12 13.89C5.04029 13.8996 4.95971 13.8996 4.88 13.89H4.75L4.6 13.81L4.49 13.75L2.05 11.75C1.85772 11.5975 1.73389 11.3749 1.70576 11.1311C1.67763 10.8873 1.7475 10.6423 1.9 10.45C2.0525 10.2577 2.27514 10.1339 2.51894 10.1058C2.76273 10.0776 3.00772 10.1475 3.2 10.3L3.97 10.93C4.17695 9.35475 4.8426 7.87513 5.8841 6.67531C6.92559 5.4755 8.29695 4.60847 9.82747 4.18213C11.358 3.7558 12.9801 3.789 14.4919 4.27759C16.0037 4.76618 17.3385 5.68859 18.33 6.93001C18.4131 7.0323 18.4751 7.14999 18.5125 7.27633C18.55 7.40267 18.5621 7.53516 18.5481 7.66619C18.5342 7.79722 18.4945 7.9242 18.4313 8.03984C18.3681 8.15547 18.2827 8.25748 18.18 8.34001C18.0771 8.42252 17.9589 8.48385 17.8322 8.52048C17.7055 8.55711 17.5728 8.56832 17.4417 8.55344C17.3106 8.53857 17.1838 8.49792 17.0685 8.43383C16.9533 8.36974 16.8518 8.28348 16.77 8.18001C16.0246 7.26112 15.028 6.57887 13.9016 6.21636C12.7753 5.85386 11.5679 5.82675 10.4264 6.13835C9.28492 6.44995 8.25872 7.0868 7.4728 7.97131C6.68688 8.85582 6.17516 9.94981 6 11.12L7 10.31C7.1862 10.2096 7.40183 10.1779 7.60904 10.2206C7.81625 10.2633 8.00178 10.3777 8.13307 10.5436C8.26436 10.7095 8.333 10.9163 8.32696 11.1278C8.32091 11.3393 8.24056 11.5419 8.1 11.7L5.66 13.7C5.60547 13.7339 5.54867 13.7639 5.49 13.79C5.39344 13.8305 5.29289 13.8606 5.19 13.88L5.12 13.89ZM22 12.3L19.56 10.3C19.5021 10.266 19.4419 10.236 19.38 10.21L19.08 10.12H19C18.9203 10.1104 18.8397 10.1104 18.76 10.12H18.62L18.48 10.2L18.37 10.26L15.93 12.26C15.7457 12.4125 15.6295 12.632 15.607 12.8702C15.5845 13.1083 15.6575 13.3457 15.81 13.53C15.9625 13.7143 16.182 13.8305 16.4201 13.853C16.6583 13.8755 16.8957 13.8025 17.08 13.65L18.08 12.84C17.9212 14.0295 17.4157 15.1459 16.6264 16.05C15.8371 16.954 14.7991 17.6055 13.6419 17.9234C12.4847 18.2412 11.2595 18.2112 10.1193 17.8372C8.97897 17.4631 7.97409 16.7615 7.23 15.82C7.1482 15.7165 7.04674 15.6303 6.93146 15.5662C6.81618 15.5021 6.68936 15.4614 6.5583 15.4466C6.42724 15.4317 6.29454 15.4429 6.16783 15.4795C6.04112 15.5162 5.92291 15.5775 5.82 15.66C5.71728 15.7425 5.63187 15.8445 5.5687 15.9602C5.50552 16.0758 5.46583 16.2028 5.45189 16.3338C5.43795 16.4649 5.45004 16.5973 5.48747 16.7237C5.5249 16.85 5.58694 16.9677 5.67 17.07C6.66154 18.3114 7.99628 19.2338 9.50808 19.7224C11.0199 20.211 12.642 20.2442 14.1725 19.8179C15.7031 19.3915 17.0744 18.5245 18.1159 17.3247C19.1574 16.1249 19.8231 14.6453 20.03 13.07L20.81 13.71C20.997 13.8678 21.239 13.9449 21.4828 13.9242C21.7266 13.9036 21.9522 13.787 22.11 13.6C22.2678 13.413 22.3449 13.171 22.3242 12.9272C22.3036 12.6834 22.187 12.4578 22 12.3Z"
                          fill="#fff"
                        />
                      </svg>
                      {loading ? "Loading...." : "Send inquiry"}
                    </button>
                  </div>
                  {/* Mail Sent SuccessFully */}
                  <div
                    id="toast-simple"
                    className={`mx-auto flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow ${
                      msg ? "block" : "hidden"
                    }`}
                    role="alert"
                  >
                    <svg
                      className={`w-5 h-5 text-blue-600 rotate-45`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                      />
                    </svg>
                    <div
                      className={`ps-4 text-sm font-normal text-black
                      }`}
                    >
                      Message sent successfully.
                    </div>
                  </div>
                  {/* Mail Sent Div End */}
                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500">
                      We'll get back to you in 1-2 business days.
                    </p>
                  </div>
                </form>
              </div>
              {/* <!-- End Card --> */}

              <div className="divide-y divide-gray-200 dark:divide-gray-800">
                {/* <!-- Icon Block --> */}
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=+44 7515058788&text=Hello%20CDC%20I'm%20like%20Your%20Services."
                  className=" group flex gap-x-7 py-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 ttransition ease-in-out group-hover:-rotate-45"
                  >
                    <path
                      d="M23 12C22.9659 11.1528 22.6079 10.351 22 9.76C21.4269 9.16962 20.7486 8.69143 20 8.35C20 8.35 19.95 8.35 19.91 8.29L6.26001 2.54C5.8625 2.36603 5.43392 2.27419 5.00001 2.27C4.56509 2.26337 4.13319 2.34332 3.72945 2.50518C3.32571 2.66704 2.9582 2.9076 2.64831 3.21284C2.33842 3.51807 2.09234 3.8819 1.92438 4.28315C1.75643 4.68439 1.66996 5.11503 1.67001 5.55C1.68719 6.13258 1.82689 6.70501 2.08001 7.23L3.93001 12L2.08001 16.78C1.82939 17.3059 1.68982 17.8778 1.67001 18.46C1.66998 18.8954 1.75639 19.3265 1.92422 19.7283C2.09205 20.1301 2.33798 20.4946 2.64773 20.8006C2.95749 21.1067 3.32491 21.3482 3.7287 21.5111C4.13249 21.6741 4.56461 21.7553 5.00001 21.75C5.44066 21.7485 5.87632 21.6566 6.28001 21.48L19.89 15.73C19.9371 15.7059 19.9808 15.6756 20.02 15.64C20.7767 15.2686 21.4556 14.7561 22.02 14.13C22.296 13.8331 22.5253 13.4959 22.7 13.13C22.881 12.7797 22.9834 12.394 23 12ZM5.00001 4.27C5.21996 4.27082 5.43633 4.32577 5.63001 4.43C5.67434 4.45261 5.7214 4.46941 5.77001 4.48L18.6 9.92C19.2599 10.1691 19.8696 10.535 20.4 11H5.69001L3.77001 6.06C3.71272 5.89942 3.68231 5.73049 3.68001 5.56C3.67858 5.38765 3.71197 5.21679 3.77819 5.05766C3.8444 4.89852 3.94207 4.7544 4.06534 4.63394C4.1886 4.51347 4.33493 4.41914 4.49554 4.3566C4.65615 4.29407 4.82774 4.26461 5.00001 4.27ZM3.67001 18.46C3.67572 18.3029 3.70609 18.1477 3.76001 18L5.69001 13H20.32C19.8189 13.4614 19.2354 13.8244 18.6 14.07L5.72001 19.53H5.58001C5.38896 19.6419 5.17142 19.7006 4.95001 19.7C4.61811 19.6977 4.29987 19.5675 4.06147 19.3366C3.82307 19.1056 3.68287 18.7917 3.67001 18.46Z"
                      fill="#222221"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Speak to our friendly team
                    </p>
                    <div className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 group-hover:text-blue-800 focus:outline-none ">
                      Chat US
                      <svg
                        className="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <a href="tel:07515058788" className="group flex gap-x-7 py-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 transition-transform ease-in-out delay-100 group-hover:animate-bounce"
                  >
                    <path
                      d="M20.1 17.35C20.0941 16.5664 19.7818 15.8163 19.23 15.26L19 15C18.1378 14.1379 16.9692 13.6525 15.75 13.65C15.0554 13.6552 14.3713 13.8194 13.75 14.13L12.9 14.55C12.1765 14.1996 11.5172 13.7297 10.95 13.16C10.3815 12.5751 9.91504 11.8991 9.57001 11.16L9.99001 10.31C10.3057 9.69017 10.4734 9.00558 10.48 8.31C10.4696 7.70135 10.3388 7.10079 10.0951 6.54298C9.85134 5.98516 9.49955 5.48114 9.06001 5.06L8.78001 4.79C8.21794 4.22723 7.45539 3.9107 6.66001 3.91H5.82001C5.02436 3.91 4.2613 4.22607 3.69869 4.78868C3.13608 5.35129 2.82001 6.11435 2.82001 6.91V7C2.85157 8.64043 3.10727 10.2688 3.58001 11.84C4.19477 13.875 5.29265 15.7311 6.78001 17.25C8.2935 18.7415 10.1466 19.8431 12.18 20.46C13.7499 20.9396 15.3788 21.1988 17.02 21.23H17.09C17.8857 21.23 18.6487 20.9139 19.2113 20.3513C19.7739 19.7887 20.09 19.0256 20.09 18.23V17.39L20.1 17.35ZM17.1 19.21C15.6484 19.1867 14.2074 18.9578 12.82 18.53C11.0944 18.0089 9.51986 17.0792 8.23001 15.82C6.97344 14.5298 6.04717 12.9551 5.53001 11.23C5.10969 9.83779 4.88421 8.39407 4.86001 6.94C4.86001 6.67478 4.96536 6.42043 5.1529 6.23289C5.34044 6.04536 5.59479 5.94 5.86001 5.94H6.70001C6.83161 5.93924 6.96208 5.96446 7.08391 6.01423C7.20575 6.06399 7.31657 6.13732 7.41001 6.23L7.68001 6.5C8.14488 6.98359 8.40313 7.62921 8.40001 8.3C8.40007 8.70022 8.30405 9.0946 8.12001 9.45L7.49001 10.72C7.43058 10.8503 7.39983 10.9918 7.39983 11.135C7.39983 11.2782 7.43058 11.4197 7.49001 11.55C7.95204 12.6722 8.63179 13.6919 9.49001 14.55C10.3478 15.4086 11.3675 16.0884 12.49 16.55C12.6203 16.6094 12.7618 16.6402 12.905 16.6402C13.0482 16.6402 13.1897 16.6094 13.32 16.55L14.59 15.91C15.0772 15.662 15.6307 15.5758 16.1702 15.6639C16.7097 15.752 17.2071 16.0099 17.59 16.4L17.86 16.68C18.0448 16.8663 18.1489 17.1177 18.15 17.38V18.21C18.1503 18.3465 18.1225 18.4817 18.0686 18.6071C18.0146 18.7325 17.9355 18.8455 17.8362 18.9392C17.7369 19.0329 17.6195 19.1052 17.4911 19.1518C17.3628 19.1984 17.2263 19.2182 17.09 19.21H17.1ZM12.44 7.4C12.4029 7.13744 12.4716 6.8709 12.631 6.659C12.7904 6.44709 13.0275 6.30717 13.29 6.27C13.4564 6.257 13.6236 6.257 13.79 6.27C14.2207 6.27608 14.6483 6.34343 15.06 6.47C15.6483 6.65777 16.1831 6.98359 16.6198 7.42025C17.0564 7.85691 17.3822 8.39171 17.57 8.98C17.699 9.39087 17.7631 9.81936 17.76 10.25C17.7765 10.4163 17.7765 10.5837 17.76 10.75C17.7242 11.0152 17.5845 11.2553 17.3717 11.4176C17.1588 11.5798 16.8902 11.6508 16.625 11.615C16.3598 11.5792 16.1197 11.4395 15.9574 11.2266C15.7952 11.0138 15.7242 10.7452 15.76 10.48C15.76 10.48 15.76 10.38 15.76 10.25C15.765 10.0226 15.7312 9.79602 15.66 9.58C15.5741 9.29673 15.4196 9.03902 15.2103 8.8297C15.001 8.62039 14.7433 8.46593 14.46 8.38C14.2431 8.31137 14.0175 8.27432 13.79 8.27C13.7168 8.26353 13.6432 8.26353 13.57 8.27C13.4385 8.28822 13.3047 8.28009 13.1764 8.24606C13.0481 8.21204 12.9278 8.15281 12.8227 8.07183C12.7175 7.99085 12.6295 7.88974 12.5638 7.77439C12.4981 7.65905 12.456 7.53178 12.44 7.4ZM21.61 9.28V9.42C21.61 9.68522 21.5047 9.93957 21.3171 10.1271C21.1296 10.3146 20.8752 10.42 20.61 10.42C20.3448 10.42 20.0904 10.3146 19.9029 10.1271C19.7154 9.93957 19.61 9.68522 19.61 9.42V9.32C19.6065 8.83919 19.5358 8.36124 19.4 7.9C19.1823 7.118 18.7686 6.4045 18.1982 5.82703C17.6277 5.24956 16.9193 4.82722 16.14 4.6C15.6788 4.46418 15.2008 4.3935 14.72 4.39H14.63C14.4987 4.39328 14.368 4.37067 14.2454 4.32345C14.1228 4.27622 14.0108 4.20532 13.9156 4.11478C13.8204 4.02425 13.744 3.91585 13.6907 3.79578C13.6374 3.67571 13.6083 3.54632 13.605 3.415C13.6017 3.28368 13.6243 3.15299 13.6716 3.03041C13.7188 2.90783 13.7897 2.79575 13.8802 2.70057C13.9708 2.60539 14.0792 2.52897 14.1992 2.47569C14.3193 2.4224 14.4487 2.39328 14.58 2.39H14.72C15.3977 2.39266 16.0714 2.49372 16.72 2.69C17.8118 3.00798 18.8057 3.59622 19.6097 4.40028C20.4138 5.20434 21.002 6.19825 21.32 7.29C21.5133 7.93561 21.611 8.60606 21.61 9.28Z"
                      fill="#222221"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800">Call US</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Mon-Fri from 8am to 5pm
                    </p>
                    <div className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 group-hover:text-blue-800 focus:outline-none ">
                      Call Us
                      <svg
                        className="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <a
                  href="mailto:info@cdc.construction"
                  className="group flex gap-x-7 py-6 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0 w-6 h-6 mt-1.5 transition-transform ease-in-out text-gray-800 group-hover:origin-top-left group-hover:rotate-12 "
                  >
                    <path
                      d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V17ZM17.78 9.38C17.9435 9.58723 18.0184 9.85071 17.9885 10.113C17.9585 10.3752 17.826 10.615 17.62 10.78L13.87 13.78C13.3387 14.2035 12.6794 14.4341 12 14.4341C11.3206 14.4341 10.6613 14.2035 10.13 13.78L6.38 10.78C6.19782 10.608 6.08682 10.3739 6.06897 10.1241C6.05112 9.87416 6.12771 9.62667 6.2836 9.43056C6.43949 9.23444 6.66332 9.10397 6.91079 9.06498C7.15827 9.02599 7.41136 9.08131 7.62 9.22L11.38 12.22C11.5565 12.3595 11.775 12.4354 12 12.4354C12.225 12.4354 12.4435 12.3595 12.62 12.22L16.38 9.22C16.5872 9.05649 16.8507 8.98155 17.113 9.01153C17.3752 9.0415 17.615 9.17395 17.78 9.38Z"
                      fill="#222221"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800">
                      Contact us by email
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      If you wish to write us an email instead please use
                    </p>
                    <div className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 group-hover:text-blue-800 focus:outline-none ">
                      info@cdc.construction
                    </div>
                  </div>
                </a>
                {/* <!-- End Icon Block --> */}

                {/* <!-- Icon Block --> */}
                <a className="group flex gap-x-7 py-6 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 group-hover:origin-top-left group-hover:-rotate-12 "
                  >
                    <path
                      d="M15 15C15.7956 15 16.5587 14.6839 17.1213 14.1213C17.6839 13.5587 18 12.7956 18 12V6C18 5.20435 17.6839 4.44129 17.1213 3.87868C16.5587 3.31607 15.7956 3 15 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V12C2 12.7956 2.31607 13.5587 2.87868 14.1213C3.44129 14.6839 4.20435 15 5 15H6V17C5.99651 17.1769 6.04003 17.3516 6.12612 17.5062C6.2122 17.6608 6.33777 17.7898 6.49 17.88C6.64202 17.9678 6.81446 18.014 6.99 18.014C7.16554 18.014 7.33798 17.9678 7.49 17.88L12.27 15H15ZM8 15.22V14C8.00209 13.8667 7.97751 13.7344 7.92771 13.6107C7.87791 13.4871 7.80389 13.3746 7.71 13.28C7.51966 13.0965 7.26438 12.9958 7 13H5C4.73478 13 4.48043 12.8946 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H15C15.2652 5 15.5196 5.10536 15.7071 5.29289C15.8946 5.48043 16 5.73478 16 6V12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13H12C11.8205 13.0001 11.6444 13.0484 11.49 13.14L8 15.22ZM23 12V16C23 16.7956 22.6839 17.5587 22.1213 18.1213C21.5587 18.6839 20.7956 19 20 19H19V21C19 21.1857 18.9483 21.3678 18.8507 21.5257C18.753 21.6837 18.6133 21.8114 18.4472 21.8944C18.2811 21.9775 18.0952 22.0126 17.9102 21.996C17.7252 21.9793 17.5486 21.9114 17.4 21.8L13.67 19H12C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18C11 17.7348 11.1054 17.4804 11.2929 17.2929C11.4804 17.1054 11.7348 17 12 17H14C14.123 17.0039 14.2445 17.0276 14.36 17.07L14.46 17.13L14.6 17.2L17 19V18C17 17.7348 17.1054 17.4804 17.2929 17.2929C17.4804 17.1054 17.7348 17 18 17H20C20.2652 17 20.5196 16.8946 20.7071 16.7071C20.8946 16.5196 21 16.2652 21 16V12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11C19.7348 11 19.4804 10.8946 19.2929 10.7071C19.1054 10.5196 19 10.2652 19 10C19 9.73478 19.1054 9.48043 19.2929 9.29289C19.4804 9.10536 19.7348 9 20 9C20.7956 9 21.5587 9.31607 22.1213 9.87868C22.6839 10.4413 23 11.2044 23 12Z"
                      fill="#222221"
                    />
                  </svg>
                  <div className="grow">
                    <h3 className="font-semibold text-gray-800">FAQ</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Search our FAQ for answers to anything you might ask.
                    </p>
                    <div className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 group-hover:text-blue-800 focus:outline-none ">
                      Visit FAQ
                      <svg
                        className="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
                {/* <!-- End Icon Block --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Contact Us --> */}
        <iframe
          className="mx-auto w-full h-96 p-2 sm:p-6 lg:px-8 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4959.288052815907!2d0.064312!3d51.574759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7cd2cbb166d%3A0xfa83bba109fff6ff!2sSaffron%20Street!5e0!3m2!1sen!2sus!4v1702300480743!5m2!1sen!2sus"
          style={{ borderRadius: "30px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
