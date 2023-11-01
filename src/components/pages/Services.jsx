import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import {FcOrgUnit} from "react-icons/fc";
import {FcBullish} from "react-icons/fc";
import {FcBarChart} from "react-icons/fc";
import {FcSerialTasks} from "react-icons/fc";
import {FcMindMap} from "react-icons/fc";
import {FcFlowChart} from "react-icons/fc";
import map from "../images/map.png";
import mapbg from "../images/map-bg.png";
import Features from "../Features";
import Footer from "../Footer";
import {useAnimation, useInView, motion } from "framer-motion";
const Services = () => {
    useEffect(() => {
        document.title="SabMedia | Services";
    },[]);

    const { innerWidth: width, innerHeight: height } = window;
    const ref = useRef(null);
    const isInView = useInView(ref);
  
    const mainControlls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControlls.start("visible");
      }
    }, [isInView]);
    /* automatically scroll to the top of the page */
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <Navbar />
        <div className="bg-gradient-to-br from-blue-100">
            <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
                <div className="container mx-auto px-10">
                    <motion.div
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 75 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, delay: 0.25 }}
                            className="flex flex-wrap -mx-4"
                        >
                        <div className="w-full px-4">
                            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                                <span className="block mb-2 text-lg font-semibold text-gray-500">
                                    Our Services
                                </span>
                                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                                    What We Offer
                                </h2>
                                <p className="text-lg text-gray-500">
                                    In the world of web development, we offer a wide range of solutions to cater to your unique needs.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 75 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, delay: 0.25 }} 
                        className="flex flex-wrap -mx-4"
                        >
                        <ServiceCard
                            title="Custom Web Development"
                            details="Crafting unique web solutions tailored to your business, with a focus on innovation and functionality."
                            icon={<FcBarChart style={{ fontSize: '7rem' }}/>}
                        />
                        <ServiceCard
                            title="Responsive Web Design"
                            details="Designs that seamlessly adapt to any device, ensuring a consistent and engaging user experience."
                            icon={<FcSerialTasks style={{ fontSize: '7rem' }}/>}
                        />
                        <ServiceCard
                            title="E-commerce Solutions"
                            details="Elevate your online sales with secure, feature-rich e-commerce platforms that simplify shopping for your customers."
                            icon={<FcMindMap style={{ fontSize: '7rem' }}/>}
                        />
                    </motion.div>
                    <motion.div 
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -75 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, delay: 0.25 }} className="flex flex-wrap -mx-4"
                        >
                        <ServiceCard
                            title="Content Management Systems (CMS)"
                            details="Take the reins of your content with our user-friendly CMS, making updates and content management a breeze."
                            icon={<FcBullish style={{ fontSize: '7rem' }}/>}
                        />
                        <ServiceCard
                            title="SEO and Digital Marketing"
                            details="Increase your online presence and engage your audience through targeted SEO and effective digital marketing strategies."
                            icon={<FcOrgUnit style={{ fontSize: '7rem' }}/>}
                        />
                        <ServiceCard
                            title="Web Maintenance and Support"
                            details="Reliable web maintenance and technical support to keep your website running smoothly and secure, so you can focus on your business."
                            icon={<FcFlowChart style={{ fontSize: '7rem' }}/>}
                        />
                    </motion.div>
                </div>
            </section>
            <Features />
            <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
                <div className="mx-auto mb-12 text-center lg:mb-20">
                    <span className="block mb-2 text-lg font-semibold text-gray-500">
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                        More Than 10 Years We Provide Services
                        <br className="md:block hidden" />
                        All over the World
                    </h2>
                    <p className="text-lg text-gray-500">
                        There are many variations of passages of Lorem Ipsum available
                        but the majority have suffered alteration in some form
                    </p>
                </div>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img
                        src={map}
                        alt="world map image"
                        className="w-full xl:h-full h-80 sm:block hidden"
                    />
                    <img
                        src={mapbg}
                        alt="mobile-image"
                        className="sm:hidden -mt-10 block w-full h-96  absolute z-0"
                    />
                    <motion.div
                        ref={ref}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: -75 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 1, delay: 0.25 }} 
                        className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0  mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12"
                        >
                        <p className="text-3xl font-semibold text-gray-800">2K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                            Companies Helped
                        </p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 75 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 1, delay: 0.25 }} 
                        className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0 sm:mt-0 mt-4 xl:mt-80  xl:-ml-0 sm:-ml-12"
                        >
                        <p className="text-3xl font-semibold text-gray-800">25%</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                            Average Performance Increase
                        </p>
                    </motion.div>
                    <motion.div
                        ref={ref}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: 75 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 1, delay: 0.25 }} 
                        className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-0 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24"
                        >
                        <p className="text-3xl font-semibold text-gray-800">70%</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                            Companies Purchase Again
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
};
export default Services;


const ServiceCard = ({ icon, title, details }) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md cursor-pointer hover:shadow-lg  hover:-translate-y-4 transition ease-in-out duration-300 md:px-7 xl:px-10">
            <div
              className={`mb-8 flex h-[80px] w-[80px] p-0 items-center justify-center`}
            >
              {icon}
            </div>
            <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
            <p className="text-body-color max-words">{details}</p>
          </div>
        </div>
      </>
    );
  };