"use client";
import Image from "next/image";
import Link from "next/link";
import LetterLight from "../../../public/images/letterbox.svg";
import CDCLogo from "../../../public/images/Logo_New.svg";
import { FOOTERBLOCKS } from "@/app/data/data";

import { Facbook, Instagram } from "../../../public/images/social/icons";
import Img from "../Img/Img";
import { useState } from "react";
import { newsLetterData } from "@/actions/ipAddressAction";
import LogoCloudSection from "../LogoCloud/LogoCloud";

const FooterItem = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-black hover:font-semibold"
      >
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem = ({ title, items }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900 ">{title}</h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);
  const handleNewLetter = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please Enter your email...");
    if (!/\S+@\S+\.\S+/.test(email)) {
      return alert(
        "Please enter valid email address so we can get back to you"
      );
    }
    try {
      const response = await newsLetterData(email);
      if (response.success) {
        setMessage(true);
        setEmail("");
        setTimeout(() => {
          setMessage("");
        }, 2000);

        // alert("You have successfully subscribed to our Newsletter!");
      }
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <footer className="bg-[#9ED0E0] text-[#242A3D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 pt-20">
        <div className="space-y-6 col-span-2">
          <div className="flex items-center min-w-max">
            <Link
              href="/"
              className="text-xl font-semibold w-4/12 flex items-center gap-x-2"
            >
              <Img image={CDCLogo} cls="9/12" alt="cdc_logo" />
            </Link>
          </div>

          <div className="xl:max-w-lg w-fit ">
            <a
              className="group"
              target="_blank"
              rel="noopener"
              href="https://maps.app.goo.gl/qbBpiJ11NAzBEQHM9"
            >
              <div className="group flex gap-3 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h2 className="font-semibold group-hover:text-black">
                  595a Cranbrook Road, <br />
                  Ilford, IG2 6JZ, <br />
                  United Kingdom
                </h2>
              </div>
            </a>

            <a className="group" href="tel:02080043327">
              <div className="flex gap-3 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <h2 className="font-semibold group-hover:text-black">
                  020 8004 3327
                </h2>
              </div>
            </a>

            <a className="group" href="mailto:info@cdc.construction">
              <div className="flex gap-3 p-2">
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
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>

                <h2 className="font-semibold group-hover:text-black">
                  info@cdc.construction
                </h2>
              </div>
            </a>
          </div>
        </div>

        {FOOTERBLOCKS.map((footerBlock) => (
          <FooterBlockItem key={footerBlock.id} {...footerBlock} />
        ))}

        <div className="space-y-6 col-span-2 flex flex-col items-center justify-center">
          <Image
            className=" lg:w-7/12 md:w-6/12 w-6/12 xl:w-9/12 aspect-[5/3] object-cover dark:block hidden text-white"
            src={LetterLight}
            alt="letterbox for newsletter"
            height={100}
            width={100}
          />
          <h1 className="text-sm font-semibold text-gray-900 ">
            Want CDC updates sent straight to your inbox?
          </h1>
          <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-3">
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="We spot for your email"
              className="focus:border-[#242A3D] border-2 px-5 py-2.5 rounded-md text-sm font-medium  outline-none flex-1 bg-gray-200 "
            />
            <button
              onClick={handleNewLetter}
              className="outline-none w-full py-2.5 px-5 sm:w-max bg-[#242A3D] text-white rounded-md flex items-center justify-center"
            >
              Subscribe
            </button>
          </div>
          {message && (
            <div
              id="toast-default"
              className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
              role="alert"
            >
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                <svg
                  className="w-4 h-4"
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
                    d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
                  />
                </svg>
                <span className="sr-only">Fire icon</span>
              </div>
              <div className="ms-3 text-sm font-normal">
                Welcome to our Family...
              </div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-default"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
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
              </button>
            </div>
          )}
          {/* {message && message} */}
        </div>
      </div>
      <div>
        <LogoCloudSection />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-200 dark:border-t-gray-800 text-gray-700">
          <div className="flex text-center sm:text-left sm:min-w-max">
            <p>
              {`© ${new Date().getFullYear()} Creative Design & Construction Ltd. All right reserved`}
            </p>
          </div>
          <div className="flex justify-center sm:justify-end w-full gap-3">
            <a
              href="https://www.facebook.com/cdcconstructionltd"
              aria-label="social link"
              rel="noreferer"
            >
              <Facbook
                className={"transition ease-linear hover:text-pink-700"}
              />
            </a>
            <a
              href="https://www.instagram.com/cdc.constructionuk/"
              aria-label="social link"
              rel="noreferer"
              className="hover:text-white"
              style={{ color: "white" }}
            >
              <Instagram
                className={"transition ease-linear hover:text-pink-700"}
              />
            </a>
            {/* <a href="#" aria-label="social link" rel="noreferer">
              <Twitter
                className={"transition ease-linear hover:text-pink-700"}
              />
            </a>
            <a href="#" aria-label="social link" rel="noreferer">
              <Linkedin
                className={"transition ease-linear hover:text-pink-700"}
              />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
