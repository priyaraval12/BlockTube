import React from "react";
import Link from "next/link";

export default function VideoCard({ id, img, title, description, category }) {
  console.log(img);
  return (
    <Link href={`/videopage/${encodeURIComponent(id)}`}>
      <div class="container px-5 py-10">
        {/* <div class="flex flex-wrap -m-4 bg-slate-400 justify-center"> */}
        <div class="p-2">
          <div class="h-full  border-2 border-zinc-900 border-zinc-900  rounded-lg overflow-hidden  p-6 shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)]">
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src={img}
              alt="blog"
            />
            <div class="p-6 bg-[rgba(0,0,0,0.85)] ">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                {category}
              </h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">
                {title}
              </h1>
              <p class="leading-relaxed mb-3"> {description} </p>
              <div class="flex items-center flex-wrap ">
                <a class="text-white-400  inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">
                  Play
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span class="text-gray-500 inline-flex items-center leading-none text-sm ">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
