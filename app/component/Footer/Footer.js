"use client";
import Image from "next/image";
import Link from "next/link";
import LetterDark from "../../../public/images/letterbox.svg";
import LetterLight from "../../../public/images/letterlight.svg";
import CDCLogo from "../../../public/images/cdc_logo.png";
import { FOOTERBLOCKS } from "@/app/data/data";

import {
  FooterFacbook,
  FooterInstagram,
  Twitter,
  Linkedin,
} from "../../../public/images/social/icons";
import Img from "../Img/Img";

const FooterItem = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-blue-600 dark:hover:text-blue-500"
      >
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem = ({ title, items }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 py-20">
        <div className="space-y-6 col-span-2">
          <Link href="#">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-indigo-400 font-bold text-2xl">
              <Img
                image={CDCLogo}
                alt="CDC LOGO"
                cls="xl:w-9/12 md:w-7/12 sm:w-6/12"
              />
            </span>
          </Link>

          <div className="max-w-lg">
            <a
              target="_blank"
              rel="noopener"
              href="https://maps.app.goo.gl/qbBpiJ11NAzBEQHM9"
            >
              <div className="flex gap-3 p-1">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h2>
                  595a Cranbrook Road, <br />
                  Ilford, IG2 6JZ, <br />
                  United Kingdom
                </h2>
              </div>
            </a>
            <a href="tel:07515058788">
              <div className="flex gap-3 p-1">
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <h2>+44 7515058788</h2>
              </div>
            </a>
            <a href="mailto:info@cdc.construction">
              <div className="flex gap-3 p-1">
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

                <h2>info@cdc.construction</h2>
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
          <h1 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Want CDC updates sent straight to your inbox?
          </h1>
          <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="We saved a spot for your email"
              className="px-5 py-2.5 rounded-md outline-none flex-1 bg-gray-200 dark:bg-gray-800"
            />
            <button className="outline-none w-full py-2.5 px-5 sm:w-max bg-blue-600 text-white rounded-md flex items-center justify-center">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-200 dark:border-t-gray-800 text-gray-700 dark:text-gray-300">
          <div className="flex text-center sm:text-left sm:min-w-max">
            <p>
              {" "}
              © 2023 Creative Design & Construction Ltd. All right reserved{" "}
            </p>
          </div>
          <div className="flex justify-center sm:justify-end w-full gap-3">
            <a
              href="https://www.facebook.com/cdcconstructionltd"
              aria-label="social link"
              rel="noreferer"
            >
              <FooterFacbook
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
              <FooterInstagram
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
