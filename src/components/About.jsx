import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { faCircleUp } from "@fortawesome/free-regular-svg-icons";

import { AiOutlineSafety } from "react-icons/ai";

import { MdSafetyDivider } from "react-icons/md";

import img1 from "../assets/images/about-img1.png";

import img2 from "../assets/images/vision-img.png";

import img3 from "../assets/images/about-img-2.png";

// import ImageAndTextContainer from "./ImageAndTextContainer";

const About = () => {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">About</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">About</h6>
        </div>
      </div>

      {/* ----------------------------------- */}

      <div className=" container mx-auto p-5 m-5">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-[700px] ">
          <div className="max-w-screen-x2 bg-white overflow-hidden p-10 mt-16 ml-10">
            <span className="text-blue-500 font-semibold text-base leading-6 text-left">
              {" "}
              About Us{" "}
            </span>

            <h2 className="text-blue-900 font-bold text-2xl md:text-3xl mb-2 mt-2">
              We have been Thriving for 37 Years in the Area
            </h2>

            <p className="font-normal text-base leading-6  text-left text-gray-500 mb-2 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            </p>

            <p className="font-normal text-base leading-6  text-left text-gray-500 mb-2 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus aliqua suspendris.
            </p>

            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <ul className="list-disc list-inside text-blue-900 mt-4 md:mt-20">
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleUp}
                      rotation={90}
                      className="text-blue-500 mr-2"
                    />
                    Save Money
                  </li>

                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleUp}
                      rotation={90}
                      className="text-blue-500 mr-2"
                    />
                    Flexible Insurance
                  </li>

                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleUp}
                      rotation={90}
                      className="text-blue-500 mr-2"
                    />
                    Investment Planning
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2">
                <ul className="list-disc list-inside text-blue-900 mt-4 md:mt-20">
                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleUp}
                      rotation={90}
                      className="text-blue-500 mr-2"
                    />
                    Fast Application
                  </li>

                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleUp}
                      rotation={90}
                      className="text-blue-500 mr-2"
                    />
                    No Brokers, No Upselling
                  </li>

                  <li className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCircleUp}
                      rotation={90}
                      className="text-blue-500 mr-2"
                    />
                    Professional Advisor
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="w-full h-80 md:h-auto bg-fit bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          ></div>
        </div>
      </div>

      {/* //2nd About div */}

      <div className=" container mx-auto ">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-[700px] ">
          <div
            className="w-full h-auto md:h-auto bg-fit bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${img2})`,

              backgroundSize: "80%", // Add this line for responsiveness
            }}
          ></div>

          <div className="max-w-screen-x2 bg-white overflow-hidden p-4 m-10">
            <span className="text-blue-500 font-semibold mt-100 ">
              {" "}
              Our Vision{" "}
            </span>

            <h2 className="text-blue-900 font-bold text-2xl md:text-3xl mb-2 mt-2">
              We are Committed to Help Clients to Reach The Goals
            </h2>

            <p className="font-normal text-base leading-6  text-left text-gray-500 mb-2 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            </p>

            <p className="font-normal text-base leading-6  text-left text-gray-500 mb-2 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus aliqua suspendris.
            </p>

            <div className="flex">
              <div className="md:w-1/2">
                <ul className="list-disc list-inside text-blue-900 mt-20">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="" />
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                    Save Money
                  </li>

                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="" />
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                    Flexible Insurance
                  </li>

                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="" />
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                    Investment Planning
                  </li>
                </ul>
              </div>

              <div className="md:w-1/2">
                <ul className="list-disc list-inside text-blue-900 mt-20">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="" />
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                    Fast Application
                  </li>

                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="" />
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                    No Brokers, No Upselling
                  </li>

                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faChevronRight} className="" />
                    <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                    Professional Advisor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" container mx-auto pl-10 mt-1 ">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-[700px] ">
          <div className="max-w-screen-x2 bg-white overflow-hidden p-4 mt-20 ml-10">
            <span className="text-blue-500 font-semibold text-base leading-6 text-left">
              {" "}
              About Us{" "}
            </span>

            <h2 className="text-blue-900 font-bold text-2xl md:text-3xl mb-2 mt-2">
              Insurance Always Ready to Protect your Life & Business
            </h2>

            <p className="font-normal text-base leading-6  text-left text-gray-500 mb-2 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            </p>

            <p className="font-normal text-base leading-6  text-left text-gray-500 mb-2 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus aliqua suspendris.
            </p>

            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <ul className="list-disc list-inside text-blue-900 mt-4 md:mt-19">
                  <li className="flex items-center">
                    <AiOutlineSafety className="text-blue-900 text-6xl mr-2" />

                    <p className="text-1xl font-bold">
                      We Are Always Care About Client Satisfy
                    </p>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2">
                <ul className="list-disc list-inside text-blue-900 mt-4 md:mt-19">
                  <li className="flex items-center">
                    <MdSafetyDivider className="text-blue-900 text-6xl mr-2" />

                    <p className="text-1xl font-bold">
                      100+ Community Involvement
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="w-full h-80 md:h-auto bg-fit bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${img3})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default About;
