import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import ayroui from '../images/brands/ayroui.svg';
import graygrids from '../images/brands/graygrids.svg';
import uideck from '../images/brands/uideck.svg';
import SabMedia from '../images/About/SabMedia.png';
import profile1 from '../images/About/team/profile1.jpg';
import profile2 from '../images/About/team/profile2.png';
import profile3 from '../images/About/team/profile3.jpg';
const About = () => {
    const { innerWidth: Width } = window;
    const ref = useRef();
    const isInView = useInView(ref);
    const mainControlls = useAnimation();
    useEffect(() => {
      if (isInView) {
        mainControlls.start("visible");
      }
    }, [isInView]);
    useEffect(() => {
      document.title="SabMedia | About";
  },[]);
  /* automatically scroll to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <section className="pt-0 lg:pt-[100px] pb-20  overflow-hidden bg-gradient-to-br from-blue-100" >
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap items-center -mx-4">
            <motion.div
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="mx-auto mb-12 lg:pt-10 md:pt-20 sm:pt-40 max-sm:pt-20 text-center lg:mb-20 w-full">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                  Why Choose Us
                </h2>
                <p className="text-lg text-gray-500">
                    Find your Package that fits your needs, weather your a new company or
                    a Enterprise wee got you covered!
                </p>
            </motion.div>
            <div className="w-full px-4 lg:w-5/12 lg:pr-20 ">
              
              <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -120 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }} className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4">
                  <div className="py-3 sm:py-4">
                    <img
                      src={SabMedia}
                      alt=""
                      className="w-full rounded-2xl transition-all duration-300 transform hover:scale-110 " 
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-7/12 ">
              <motion.div
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 100 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }} className="mt-0 lg:mt-0">
                <span className="block mb-2 text-xl font-semibold text-primary">
                  About Us
                </span>
                <div className="w-[10%] h-[3px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                </h2>
                <p className="mb-8 text-base text-gray-500">
                  "At SabMedia, we are passionate about crafting exceptional web solutions that drive digital success. 
                  With a team of dedicated experts, we bring together creativity, innovation, and technical expertise 
                  to create web experiences that leave a lasting impression. Our commitment to delivering cutting-edge websites, 
                  e-commerce platforms, and web applications is matched only by our dedication to our clients. 
                  We take pride in understanding your unique business objectives and translating them into captivating online experiences. 
                  Whether you're a startup looking to establish a web presence or an established enterprise seeking to expand, 
                  we're here to empower your digital journey. Join us, and let's transform your web vision into reality."
                </p>
                <a
                  href="/#"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-blue-500 hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                </a>
              </motion.div>
              <motion.div
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 75 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.75, delay: 0.75 }}
                    class="clients pt-16"
                    >
                  <h6 class="text-body-color mb-2 flex items-center text-xs font-normal text-gray-500">
                      Some Of Our Clients
                      <span class="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                  </h6>
                  <div class="flex items-center">
                      <div class="mr-4 w-full py-3">
                      <img
                          src={ayroui}
                          alt="ayroui"
                      />
                      </div>
                      <div class="mr-4 w-full py-3">
                      <img
                          src={graygrids}
                          alt="graygrids"
                      />
                      </div>
                      <div class="mr-4 w-full py-3">
                      <img
                          src={uideck}
                          alt="uideck"
                      />
                      </div>
                  </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
      <section className="lg:pt-[100px] pb-12 lg:pb-[90px] overflow-hidden bg-gradient-to-tr from-blue-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
            <motion.div
                  ref={ref}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 75 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.75, delay: 0.25 }} 
                  className="mx-auto mb-12 text-center lg:mb-20 w-full">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                  Meet Our Team
                </h2>
                <p className="text-lg text-gray-500">
                  The skilled professionals driving innovation behind our digital solutions.
                </p>
            </motion.div>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
            <motion.div
              ref={ref}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.75, delay: 0.60 }} 
             className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-80 bg-white shadow-xl">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full border-2 border-blue-500" 
              src={profile3} />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Ammar Alaoui</p>
                <p>SEO Manager</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-blue-500">
                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.75, delay: 0.40 }} 
              className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-80 bg-white shadow-xl">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full border-2 border-blue-500" 
                          src={profile1} />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Leroy Jenkins</p>
                <p>Graphic Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-blue-500">
                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.75, delay: 0.20 }}  
              className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-80 bg-white shadow-xl">
              <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full border-2 border-blue-500" 
                    src={profile2}
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leadi">Sabir Youssef</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2 border-blue-500">
                <a rel="noopener noreferrer" href="#" title="Email" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="LinkedIn" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="GitHub" className="dark:text-blue-500 hover:scale-150 transition ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
