import React, { useEffect, useRef } from "react";
import {FcGenealogy} from "react-icons/fc";
import {FcMindMap} from "react-icons/fc";
import {FcPositiveDynamic} from "react-icons/fc";
import {FcComboChart} from "react-icons/fc";
import {FcLineChart} from "react-icons/fc";
import {FcRadarPlot} from "react-icons/fc";
import image1 from "./images/Features/fb11.jpg";
import image2 from "./images/Features/fb22.jpg";
import {useAnimation, useInView, motion } from "framer-motion";

const Features = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-500 to-blue-200"></div>
      <div className="max-w-screen overflow-x-hidden font-poppins ">
        {/* features section */}
        {width < 631 ? (
          <>
            <section className=" text-gray-700">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                
                <div className="mx-auto mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                      Empowering Business
                    </h2>
                    <p className="text-lg text-gray-500">
                        Growth Through Advanced Technology Solutions, Analytics and
                        Professionaly Trained Personnel
                    </p>
                </div>
                
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                      Inovation Begins Here
                    </h3>
                    <p className="mt-3 text-lg ">
                      Unleash business growth with advanced technology
                      solutions, optimizing operations, integrating innovative
                      technologies, and receiving personalized support.
                    </p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <FcGenealogy size={"4rem"}/>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Advanced Algorithmic Solutions
                          </h4>
                          <p className="mt-2 ">
                            Our advanced algorithms optimize your operations,
                            boosting efficiency and profitability. Make
                            data-driven decisions with actionable insights.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                            <FcMindMap size={"4rem"}/>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Innovative Technology Integration
                          </h4>
                          <p className="mt-2 ">
                            Seamlessly integrate cutting-edge technologies like
                            AI, IoT, and cloud computing. Automate tasks,
                            improve communication, and unlock growth potential.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                            <FcComboChart size={"4rem"}/>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Trained Personnel Support
                          </h4>
                          <p className="mt-2 ">
                            Our trained experts ensure smooth implementation and
                            ongoing guidance. Leverage our software effectively
                            with personalized assistance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                      <img
                        src={image1}
                        alt="image1"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                        Data-Driven Decisions, Personalized Solutions
                      </h3>
                      <p className="mt-3 text-lg ">
                        Data-driven decisions. Personalized solutions.
                        Continuous innovation. Propel your business forward with
                        our powerful analytics, tailored to your needs, and
                        future-proofed by our commitment to innovation.
                      </p>
                      <div className="mt-12 space-y-12">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <FcPositiveDynamic size={"4rem"}/>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Powerful Analytics Capabilities
                            </h4>
                            <p className="mt-2 ">
                              Extract valuable insights from your data with
                              comprehensive visualizations. Monitor KPIs, track
                              trends, and identify areas for improvement.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <FcLineChart size={"4rem"}/>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6  text-blue-700">
                              Personalized Solutions
                            </h4>
                            <p className="mt-2 ">
                              Tailored software solutions to address your unique
                              needs. Achieve sustainable growth by aligning with
                              your business objectives.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <FcRadarPlot size={"4rem"}/>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Continuous Innovation and Upgrades
                            </h4>
                            <p className="mt-2 ">
                              Stay ahead with the latest features and
                              functionalities. Adapt to market dynamics and gain
                              a competitive edge through continuous innovation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                      <img
                        src={image2}
                        alt="image2"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className=" text-gray-700 gap-8">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                
                <div className="mx-auto mb-12 text-center lg:mb-20">
                    <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                      Empowering Digital Advancement
                    </h2>
                    <p className="text-lg text-gray-500">
                      Drive the growth of your online presence through our advanced 
                      technology solutions, robust analytics, and a team of professionally trained experts. 
                    </p>
                </div>
                
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                      Innovation Starts Here
                    </h3>
                    <p className="mt-3 text-lg ">
                    Foster business growth by harnessing cutting-edge technology solutions. 
                    We specialize in optimizing operations, integrating innovative technologies, 
                    and delivering personalized support
                    </p>
                    <div className="mt-12 space-y-12 ">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                            <FcGenealogy size={"4rem"}/>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                          Cutting-Edge Web Development Solutions 
                          </h4>
                          <p className="mt-2 ">
                            Our cutting-edge web development solutions are designed to enhance your online presence, 
                            and driving digital success.
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                            <FcMindMap size={"4rem"}/>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Innovative Technology Integration
                          </h4>
                          <p className="mt-2 ">
                            Seamlessly integrate cutting-edge technologies like
                            AI,cloud computing. Automate tasks,
                            improve communication, and unlock growth potential.
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.55 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                            <FcComboChart size={"4rem"}/>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 text-blue-700">
                            Experienced Web Development Support
                          </h4>
                          <p className="mt-2 ">
                            Our team of seasoned web development experts is here to ensure 
                            a seamless implementation of your digital projects. 
                            </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div ref={ref}>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      aria-hidden="true"
                      className="mt-10 lg:mt-0"
                    >
                      <img
                        src={image1}
                        alt="image1"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </motion.div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-blue-500">
                        Data-Driven Strategy, Tailored Excellence
                      </h3>
                      <p className="mt-3 text-lg ">
                        A data-driven strategy. Tailored excellence. 
                        Continuous innovation. Propel your web presence 
                        forward with our powerful analytics solutions, 
                        customized to your unique need
                      </p>
                      <div className="mt-12 space-y-12">
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 0.5, delay: 0.15 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                              <FcPositiveDynamic size={"4rem"}/>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Robust Analytical Capabilities
                            </h4>
                            <p className="mt-2 ">
                            Unlock valuable insights within your web projects using our 
                            powerful analytics tools. With comprehensive visualizations
                            </p>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 0.5, delay: 0.35 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                              <FcLineChart size={"4rem"}/>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Customized Web Solutions
                            </h4>
                            <p className="mt-2 ">
                            We specialize in crafting bespoke web solutions that precisely 
                            address your distinct requirements. By aligning with your business objectives.
                            </p>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 0.5, delay: 0.55 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-16 h-12 rounded-md  dark:text-gray-900">
                              <FcRadarPlot size={"4rem"}/>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 text-blue-700">
                              Ongoing Innovation and Enhancements
                            </h4>
                            <p className="mt-2 ">
                              Maintain your competitive edge by keeping your web 
                              solutions up to date with the latest features and functionalities.
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                    >
                      <img
                        src={image2}
                        alt="image2"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* end */}
      </div>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-200 to-blue-500"></div>
    </>
  );
};

export default Features;
