import React from "react";
import { NEWS } from "@/app/data/data";

const Blog = () => {
  function calculateReadingTime(content, wordsPerMinute = 200) {
    const words = content.split(/\s+/).length; // Split by spaces to count words
    const readingTime = Math.ceil(words / wordsPerMinute);

    return readingTime;
  }
  return (
    <section>
      {/* <!-- Container --> */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* <!-- Component --> */}
        <div className="flex flex-col items-center">
          {/* <!-- Heading Div --> */}
          <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-semibold md:text-5xl">
              The latest and greatest news
            </h2>
            <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
              Lorem ipsum dolor sit amet elit ut aliquam
            </p>
          </div>
          {/* <!-- Blog Div --> */}
          <div className="mb-8 grid w-full grid-cols-1 md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16">
            {/* <!-- Blog Item --> */}
            {NEWS.filter((item) => item.tag).map((news, index) => (
              <a
                key={index}
                href="#"
                className="relative mb-12 flex h-[560px] max-w-full grid-cols-1 flex-col gap-4 overflow-hidden rounded-xl border border-solid border-black bg-white font-bold text-black [box-shadow:rgb(0,_0,_0)_9px_9px] [grid-area:1/1/2/2] md:[grid-area:1/1/2/4]"
              >
                <div className="absolute bottom-0 left-0 right-0 top-auto z-20 flex w-full max-w-[800px] flex-col items-start justify-start rounded-xl bg-white p-6 md:bottom-2 md:left-2">
                  <p className="mb-4 rounded-md bg-white py-1.5 text-sm font-semibold text-[#1353fe]">
                    Business
                  </p>
                  <p className="mb-4 text-xl font-bold md:text-2xl">
                    {news.title}
                  </p>
                  <div className="flex items-start max-[991px]:flex-col lg:items-center">
                    <p className="text-sm text-[#636262]">{news.category}</p>
                    <p className="ml-2 mr-2 text-sm text-[#636262] max-[991px]:hidden">
                      {news.date}
                    </p>
                    <p className="text-sm text-[#636262]">
                      {calculateReadingTime(news.content)} min Read
                    </p>
                  </div>
                </div>
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6398109366582969f5e9c1a5_Rectangle%2040049.png"
                  alt=""
                  className="inline-block h-full w-full object-cover"
                />
              </a>
            ))}
            {/* <!-- Blog Item --> */}
            <a
              href="#"
              className="max-[767px]: flex max-w-full grid-cols-1 flex-col gap-4 rounded-md bg-white py-4 font-bold text-black lg:px-2"
            >
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980defd9d4a1fd1cf20a3d_Rectangle%20801.jpg"
                alt=""
                className="inline-block h-60 w-full rounded-xl object-cover"
              />
              <div className="flex w-full flex-col items-start justify-start py-4">
                <div className="mb-4 rounded-md bg-white py-1.5">
                  <p className="text-sm font-semibold text-[#1353fe]">
                    CATEGORY NAME
                  </p>
                </div>
                <p className="mb-4 text-xl font-bold md:text-2xl">
                  The latest news with Flowspark
                </p>
                <p className="font-normal text-[#636262]">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam,
                </p>
              </div>
            </a>
            {/* <!-- Blog Item --> */}
            <a
              href="#"
              className="flex max-w-full grid-cols-1 flex-col gap-4 rounded-md bg-white py-4 font-bold text-black lg:px-2"
            >
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980df03e820073f8125fb5_Rectangle%20801-2.jpg"
                alt=""
                className="inline-block h-60 w-full rounded-xl object-cover"
              />
              <div className="flex w-full flex-col items-start justify-start py-4">
                <div className="mb-4 rounded-md bg-white py-1.5">
                  <p className="text-sm font-semibold text-[#1353fe]">
                    CATEGORY NAME
                  </p>
                </div>
                <p className="mb-4 text-xl font-bold md:text-2xl">
                  The latest news with Flowspark
                </p>
                <p className="font-normal text-[#636262]">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam,
                </p>
              </div>
            </a>
            {/* <!-- Blog Item --> */}
            <a
              href="#"
              className="flex max-w-full grid-cols-1 flex-col gap-4 rounded-md bg-white py-4 font-bold text-black lg:px-2"
            >
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63980df0bd7f152c341ab985_Rectangle%20801-1.jpg"
                alt=""
                className="inline-block h-60 w-full rounded-xl object-cover"
              />
              <div className="flex w-full flex-col items-start justify-start py-4">
                <div className="mb-4 rounded-md bg-white py-1.5">
                  <p className="text-sm font-semibold text-[#1353fe]">
                    CATEGORY NAME
                  </p>
                </div>
                <p className="mb-4 text-xl font-bold md:text-2xl">
                  The latest news with Flowspark
                </p>
                <p className="font-normal text-[#636262]">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam,
                </p>
              </div>
            </a>
          </div>
          <a
            href="#"
            className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
