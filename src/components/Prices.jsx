import React, { useEffect, useRef } from "react";
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {FcBarChart} from "react-icons/fc";
import {FcMindMap} from "react-icons/fc";
import {FcFlowChart} from "react-icons/fc";
import { useAnimation, useInView, motion } from "framer-motion";

const Prices = () => {
  const { innerWidth: Width  } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <div className="w-full py-[10rem] px-4  -mt-28">
        <div className="mx-auto mb-12 text-center lg:mb-20">
            <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
              Our Web Development Packages
            </h2>
            <p className="text-lg text-gray-500">
              Discover the package that perfectly aligns with your requirements, 
              whether you're a startup or an enterprise. We have a 
              wide range of options 
            </p>
        </div>
        <>
          {Width < 631 ? (
            <>
              <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
                <div>
                  <Card
                    image={<FcBarChart style={{ fontSize: '5rem' }}/>}
                    Package={"Basic Package"}
                    Price={"$900"}
                    Feature1={"Modern Website Design"}
                    Feature2={"Mobile Responsiveness"}
                    Feature3={"Basic SEO Optimization"}
                    Feature4={"Contact Form Integration"}
                    Feature5={"Technical Support"}
                    Feature6={"Regular Updates"}
                    iconColor1={"text-blue-500"}
                    iconColor2={"text-blue-500"}
                    iconColor3={"text-blue-500"}
                    iconColor4={"text-blue-500"}
                    iconColor5={"text-blue-500"}
                    iconColor6={"text-blue-300"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </div>
                <div>
                  <Card
                    image={<FcMindMap style={{ fontSize: '5rem' }}/>}
                    Package={"Standard Package"}
                    Price={"$1500"}
                    Feature1={"Custom Web Development"}
                    Feature2={"Advanced SEO Optimization"}
                    Feature3={"E-commerce Integration"}
                    Feature4={"Content Management System"}
                    Feature5={"Analytics Setup"}
                    Feature6={"Regular Updates"}
                    iconColor1={"text-blue-500"}
                    iconColor2={"text-blue-500"}
                    iconColor3={"text-blue-500"}
                    iconColor4={"text-blue-500"}
                    iconColor5={"text-blue-500"}
                    iconColor6={"text-blue-500"}
                    buttonBg={"bg-blue-400"}
                    hoverBgButton={"hover:bg-blue-500"}
                    buttonTextColor={"text-white"}
                    standOutBg={"bg-blue-100/30"}
                    marginMiddle={"md:my-6"}
                  />
                </div>
                <div>
                  <Card
                    image={<FcFlowChart style={{ fontSize: '5rem' }}/>}
                    Package={"Premium Package"}
                    Price={"$2500"}
                    Feature1={"Bespoke Web Solutions"}
                    Feature2={"SEO & Content Strategy"}
                    Feature3={"E-commerce Development"}
                    Feature4={"CRM Integration"}
                    Feature5={"Performance Monitoring"}
                    Feature6={"Ongoing Innovation"}
                    iconColor1={"text-blue-500"}
                    iconColor2={"text-blue-500"}
                    iconColor3={"text-blue-500"}
                    iconColor4={"text-blue-500"}
                    iconColor5={"text-blue-500"}
                    iconColor6={"text-blue-500"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Card
                    image={<FcBarChart style={{ fontSize: '5rem' }}/>}
                    Package={"Basic Package"}
                    Price={"$900"}
                    Feature1={"Modern Website Design"}
                    Feature2={"Mobile Responsiveness"}
                    Feature3={"Basic SEO Optimization"}
                    Feature4={"Contact Form Integration"}
                    Feature5={"Technical Support"}
                    Feature6={"Regular Updates"}
                    iconColor1={"text-blue-500"}
                    iconColor2={"text-blue-500"}
                    iconColor3={"text-blue-500"}
                    iconColor4={"text-blue-500"}
                    iconColor5={"text-blue-500"}
                    iconColor6={"text-blue-300"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  <Card
                    image={<FcMindMap style={{ fontSize: '5rem' }}/>}
                    Package={"Standard Package"}
                    Price={"$1500"}
                    Feature1={"Custom Web Development"}
                    Feature2={"Advanced SEO Optimization"}
                    Feature3={"E-commerce Integration"}
                    Feature4={"Content Management System"}
                    Feature5={"Analytics Setup"}
                    Feature6={"Regular Updates"}
                    iconColor1={"text-blue-500"}
                    iconColor2={"text-blue-500"}
                    iconColor3={"text-blue-500"}
                    iconColor4={"text-blue-500"}
                    iconColor5={"text-blue-500"}
                    iconColor6={"text-blue-500"}
                    buttonBg={"bg-blue-400"}
                    hoverBgButton={"hover:bg-blue-500"}
                    buttonTextColor={"text-white"}
                    standOutBg={"border border-blue-500"}
                    marginMiddle={"md:my-2"}
                  />
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Card
                    image={<FcFlowChart style={{ fontSize: '5rem' }}/>}
                    Package={"Enterprise Package"}
                    Price={"$2500"}
                    Feature1={"Bespoke Web Solutions"}
                    Feature2={"SEO & Content Strategy"}
                    Feature3={"E-commerce Development"}
                    Feature4={"CRM Integration"}
                    Feature5={"Performance Monitoring"}
                    Feature6={"Ongoing Innovation"}
                    iconColor1={"text-blue-500"}
                    iconColor2={"text-blue-500"}
                    iconColor3={"text-blue-500"}
                    iconColor4={"text-blue-500"}
                    iconColor5={"text-blue-500"}
                    iconColor6={"text-blue-500"}
                    buttonBg={"bg-gray-300"}
                    hoverBgButton={"hover:bg-gray-200"}
                  />
                </motion.div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};
export default Prices;

/* Card */

const Card = ({ standOutBg, marginMiddle, Package, Price, 
    image,Feature1,Feature2,Feature3,Feature4,Feature5,
    Feature6, iconColor1,iconColor2,iconColor3,iconColor4,
    iconColor5,iconColor6, buttonBg,buttonTextColor,hoverBgButton  
  }) => {
    return (
      <div className={`w-full shadow-xl flex flex-col p-4 my-4 bg-white ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300`} >
        <div className="w-20 mx-auto mt-0">
          {image}
        </div>
        <h2 className="text-2xl font-bold text-center">{Package}</h2>
        <p className="py-2 mx-8 mb-6 -mt-2 flex justify-center text-3xl font-bold">{Price}</p>
        <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 flex justify-between">
            {Feature1}
            <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor1}`} />
          </p>
          <p className="py-2 border-b mx-8 flex justify-between">
            {Feature2}
            <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor2}`} />
          </p>
          <p className="py-2 border-b mx-8 flex justify-between">
            {Feature3}
            <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor3}`} />
          </p>
          <p className="py-2 border-b mx-8 flex justify-between">
            {Feature4}
            <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor4}`} />
          </p>
          <p className="py-2 border-b mx-8 flex justify-between">
            {Feature5}
            <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor5}`} />
          </p>
          <p className="py-2  mx-8 flex justify-between">
            {Feature6}
            <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor6}`} />
          </p>
        </div>
        <button className={`justify-center flex mx-auto w-[200px] ${buttonBg} ${hoverBgButton} ${buttonTextColor} rounded-md font-medium my-6 py-3`}>
          Contact Suport
        </button>
      </div>
    );
};