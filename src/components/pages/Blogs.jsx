import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
function Blogs() {
    useEffect(() => {
        document.title="SabirSolutions | Blogs";
    },[]);
  return (
    <>
    <Navbar />

    
      <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gradient-to-br from-blue-100">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap justify-center">
            <div class="w-full px-4">
              <div className="mx-auto mb-12 text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                Our Recent News
                </h2>
                <p className="text-lg text-gray-500">
                  There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div class="-mx-4 flex flex-wrap">

            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="mx-auto mb-10 max-w-[370px]">
                <div class="mb-8 overflow-hidden rounded">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div>
                  <span class="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Meet AutoManage, the best AI management tools
                    </a>
                  </h3>
                  <p class="text-body-color text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="mx-auto mb-10 max-w-[370px]">
                <div class="mb-8 overflow-hidden rounded">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div>
                  <span class="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Mar 15, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      How to earn more money as a wellness coach
                    </a>
                  </h3>
                  <p class="text-body-color text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="mx-auto mb-10 max-w-[370px]">
                <div class="mb-8 overflow-hidden rounded">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div>
                  <span class="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Jan 05, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      The no-fuss guide to upselling and cross selling
                    </a>
                  </h3>
                  <p class="text-body-color text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center space-x-1 dark:text-white">
            <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md dark:bg-blue-500">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold rounded shadow-md dark:bg-blue-700 dark:text-white">1</button>
            <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm  rounded shadow-md dark:bg-blue-500" title="Page 2">2</button>
            <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md dark:bg-blue-500">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
      </section>

    <Footer />
    </>
  )
}

export default Blogs