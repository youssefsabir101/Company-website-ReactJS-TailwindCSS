import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import blog1 from "../images/blogs/image-01.jpg";
import blog2 from "../images/blogs/image-02.jpg";
import blog3 from "../images/blogs/image-03.jpg";
import { motion } from "framer-motion";
const Blogs = () => {
    useEffect(() => {
        document.title="SabMedia | Blogs";
    },[]);
    /* automatically scroll to the top of the page */
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <Navbar />
      <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gradient-to-br from-blue-100">
        <div class="container mx-auto">
          <motion.div
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: -75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }} 
                  class="-mx-4 flex flex-wrap justify-center">
            <div class="w-full px-4">
              <div className="mx-auto mb-12 text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                  Our Latest Insights
                </h2>
                <p className="text-lg text-gray-500">
                  In the ever-evolving world of web development, we share the latest trends and invaluable 
                  knowledge to keep you updated.
                </p>
              </div>
            </div>
          </motion.div>
          <div class="-mx-4 flex flex-wrap">
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0.20 }}  
              class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="mx-auto mb-10 max-w-[370px]">
                <div class="mb-8 overflow-hidden rounded">
                  <img
                    src={blog1}
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div>
                  <span class="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Oct 22, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      E-commerce Success Strategies
                    </a>
                  </h3>
                  <p class="text-body-color text-base">
                    Unlocking Online Sales: From Shopping Carts to Checkout Optimization. Tips for E-commerce Excellence.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0.40 }}  
              class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="mx-auto mb-10 max-w-[370px]">
                <div class="mb-8 overflow-hidden rounded">
                  <img
                    src={blog2}
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div>
                  <span class="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Mar 29, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Responsive Web Design
                    </a>
                  </h3>
                  <p class="text-body-color text-base">
                      Crafting Engaging User Experiences with Mobile-Friendly Web Designs. Learn the Essentials of Responsiveness.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0.60 }}  
              class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="mx-auto mb-10 max-w-[370px]">
                <div class="mb-8 overflow-hidden rounded">
                  <img
                    src={blog3}
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div>
                  <span class="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Jan 10, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      SEO Essentials for Webmasters
                    </a>
                  </h3>
                  <p class="text-body-color text-base">
                    Boosting Visibility and Ranking on Search Engines. Dive into the World of SEO for Web Development.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
        <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0.80 }}  
              className="flex justify-center space-x-1 dark:text-white">
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
        </motion.div>
      </section>
    <Footer />
    </>
  )
}
export default Blogs;