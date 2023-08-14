import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/belowNavbarimg.jpg";
import Business from "../assets/images/business.png";
import Blog1 from "../assets/images/blog1.png";
import Blog2 from "../assets/images/blog2.png";
import Blog3 from "../assets/images/blog3.png";
import Team1 from "../assets/images/team1.png";
import Team2 from "../assets/images/team2.png";
import Team3 from "../assets/images/team3.png";
import "../components/Style.css";
import { AiOutlineSafety } from "react-icons/ai";
import { MdSafetyDivider } from "react-icons/md";

const Homepage = () => {
  return (
    <>
      <div class="relative h-screen w-screen flex items-center justify-center font-sans">
        <img src={img3} alt="Image" class="h-full w-full object-cover" />

        <div class="absolute inset-y-0 left-0 flex flex-col justify-center h-full w-1/2 bg-blue-700 bg-opacity-60">
          <div class="mx-8 text-white font-roboto">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              Need Instant Loan !!
            </h1>
            <p className="mt-4 text-xl">
              "Need cash now? Get an instant loan for urgent expenses. Simple
              online application, quick approval, and funds deposited fast."
            </p>
          </div>
        </div>
      </div>

      {/* part 2 */}

      <div className="section-title text-center mt-32">
        <span className="text-xs md:text-sm lg:text-base font-semibold text-blue-500 mb-2 md:mb-4 lg:mb-6">
          Our Features
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 lg:mb-6 font-bold text-[#050b2a] mt-5">
          We are Award Winning Company
        </h2>

        <p className="text-sm md:text-base font-sans mt-3">
          "Distinguished by our multiple awards, we exemplify excellence and
          innovation,
          <br /> a testament to our dedication and exceptional performance."
        </p>
      </div>

      <div className="md:block lg:flex lg:justify-between flex flex-col md:flex-row justify-center items-center p-8 space-y-4 md:space-y-0 md:space-x-4 mt-[100px]">
        <div className="mx-2 max-w-sm bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden h-96 hover:bg-[#262566] hover:text-white">
          <div className="w-20 justify-center ml-[39%] ">
            <img
              src={img2}
              alt="Card 3"
              className="p-2 w-full h-20 object-cover justify-center rounded-[100%] m"
            />
          </div>
          <div className="p-5">
            <p class="text-black hover:text-white text-roboto,sens-serif  text-xl text-center font-bold  ">
              Loan Amount
            </p>

            <div className="text-center ">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-grey-700 hover:text-white text-xl">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="mt-6 ">
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    size="2xl"
                    className="text-blue-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 max-w-sm bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden h-96 hover:bg-[#262566] hover:text-white">
          <div className="w-20 justify-center ml-[39%] ">
            <img
              src={img2}
              alt="Card 3"
              className="p-2 w-full h-20 object-cover justify-center rounded-[100%] m"
            />
          </div>
          <div className="p-5">
            <p class="text-black text-roboto,sens-serif hover:text-white text-xl text-center font-bold">
              Monthly Payment
            </p>

            <div className="text-center ">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-grey-700 hover:text-white text-xl">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="mt-6 ">
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    size="2xl"
                    className="text-blue-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 max-w-sm bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden h-96 hover:bg-[#262566] hover:text-white">
          <div className="w-20 justify-center ml-[39%] ">
            <img
              src={img2}
              alt="Card 3"
              className="p-2 w-full h-20 object-cover justify-center rounded-[100%] m"
            />
          </div>
          <div className="p-5">
            <p class="text-black text-roboto,sens-serif hover:text-white text-xl text-center font-bold">
              Collateral
            </p>

            <div className="text-center ">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-grey-700 hover:text-white text-xl">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="mt-6 ">
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    size="2xl"
                    className="text-blue-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 max-w-sm bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden h-96 hover:bg-[#262566] hover:text-white ">
          <div className="w-20 justify-center ml-[39%] ">
            <img
              src={img2}
              alt="Card 3"
              className="p-2 w-full h-20 object-cover justify-center rounded-[100%] m"
            />
          </div>
          <div className="p-5">
            {/* <h3 className='text-xl font-semibold mb-2'>Card 3 Title</h3> */}
            <p class="text-black text-roboto,sens-serif hover:text-white text-xl text-center font-bold">
              Approval Time
            </p>

            <div className="text-center ">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-grey-700 hover:text-white text-xl">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="mt-6 ">
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    size="2xl"
                    className="text-blue-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 2 end */}

      {/* part 3  About us*/}

      <div className=" container mx-auto pl-10 mt-20 ">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-[700px] ">
          <div className="max-w-screen-x2 bg-white overflow-hidden p-4 mt-20 ml-10">
            <span className="text-blue-500 font-semibold text-base leading-6 text-left">
              {" "}
              About Us{" "}
            </span>

            <h2 className="text-[#050b2a] font-bold text-2xl md:text-3xl mb-2 mt-2">
              Insurance Always Ready to Protect your Life & Business
            </h2>

            <p className="font-normal text-base leading-6  text-left text-gray-500 mb-2 mt-6">
              We offer tailored financial solutions with transparency,
              expertise, and efficiency. Your success is our commitment. Partner
              with us for a brighter financial future.
            </p>

            <p className="font-normal text-base leading-6  text-left text-gray-500 mb-2 mt-6">
              We offer tailored financial solutions with transparency,
              expertise, and efficiency. Your success is our commitment. Partner
              with us for a brighter financial future."
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
              backgroundImage: `url('https://flexa-react.envytheme.com/images/about-img-2.jpg')`,
            }}
          ></div>
        </div>
      </div>

      {/* part 3  About us end*/}

      {/* part 8 number contact start */}

      <div className="bg-[#050b2a] rounded-md min-h-[250px] w-[100%] p-4 flex flex-col md:flex-row justify-evenly items-center mt-10 font-roboto">
        {/* First nested div */}
        <div className="text-white font-bold text-xl p-4 rounded md:m-4 md:w-1/2 lg:w-1/3">
          <p>Have you any question? Ask Us anything, we’d love to answer!</p>
        </div>

        {/* Second nested div */}
        <div className="w-full md:w-auto m-3 p-3">
          <button className="p-3 bg-white text-xl rounded-md w-full md:w-full lg:w-[200px]">
            Contact Us
          </button>
        </div>
      </div>

      {/* part 8 end */}

      {/* part 4  Our Services*/}

      <div className="section-title text-center mt-28">
        <span className="text-xs md:text-sm lg:text-base font-semibold text-blue-500 mb-2 md:mb-4 lg:mb-6">
          Our Services
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 lg:mb-6 font-bold text-[#050b2a] mt-5">
          Types of Loans
        </h2>

        <p className="text-sm md:text-base font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-9 mt-16">
        <div className="flex justify-center p-8  ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-xl flex items-center ">
            <div className="text-center">
              <h3 className="flex justify-center p-5">
                {/* <AiFillCar size='5rem' color="blue" /> */}
              </h3>

              <h3 className="text-xl font-semibold mb-2">Personal Loans</h3>

              <p className="text-gray-600">
              Flexible funding for various personal expenses, from medical bills to vacations.
              </p>

              <a
                href="/insurance-details/"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center  p-8 ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-md flex items-center ">
            <div className="text-center">
              {/* <h3 className="flex justify-center p-5">
      <MdOutlineHomeWork size='5rem' color="blue" /></h3> */}

              <h3 className="text-xl font-semibold mb-2">Home Mortgages</h3>

              <p className="text-gray-600">
              Turn your dream of homeownership into reality with our competitive mortgage options.
              </p>

              <a
                href="/insurance-details/"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center  p-8 ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-md flex items-center">
            <div className="text-center">
              {/* <h3 className="flex justify-center p-3"><AiFillInsurance size='5rem' color="blue" /></h3> */}

              <h3 className="text-xl font-semibold mb-2">Business Loans</h3>

              <p className="text-gray-600">
              Fuel your business growth with our tailored financing for startups and established enterprises.
              </p>

              <a
                href="/insurance-details/"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-8 ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-xl flex items-center ">
            <div className="text-center">
              {/* <h3 className="flex justify-center p-5"><SiYourtraveldottv size='5rem' color="blue" /></h3> */}

              <h3 className="text-xl font-semibold mb-2">Travel Insurance</h3>

              <p className="text-gray-600">
                Leader ipsum dolor sit amet consuring lised faisism dolor sit
                amet.
              </p>

              <a
                href="/insurance-details/"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center  p-8 ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-md flex items-center ">
            <div className="text-center">
              {/* <h3 className="flex justify-center p-5"><GiHealthNormal size='5rem' color="blue" /></h3> */}

              <h3 className="text-xl font-semibold mb-2">Health Insurance</h3>

              <p className="text-gray-600">
                Leader ipsum dolor sit amet consuring lised faisism dolor sit
                amet.
              </p>

              <a
                href="/insurance-details/"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center  p-8 ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-md flex items-center ">
            <div className="text-center">
              {/* <h3 className="flex justify-center p-5"><GiLifeBar size='5rem' color="blue" /></h3> */}

              <h3 className="text-xl font-semibold mb-2">Life Insurance</h3>

              <p className="text-gray-600">
                Leader ipsum dolor sit amet consuring lised faisism dolor sit
                amet.
              </p>

              <a
                href="/insurance-details/"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* part 4 end Our Services*/}

      {/* part 5 sofa-image */}
      {/* <div className=" container mx-auto pl-10 mt-1 ">
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
          </div>

          <div
            className="w-full h-80 md:h-auto bg-fit bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://flexa-react.envytheme.com/images/about-img-2.jpg')`,
            }}
          ></div>
        </div>
      </div> */}

      <div className="flex justify-center mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 bg-[#262566] w-10/12 rounded-[15px]">
          <div>
            {" "}
            <img
              src={Business}
              className="w-full h-auto rounded-[15px]"
              alt="Business Image"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-sm  md:text-medium lg:text-3xl text-white">
              {" "}
              Save up to 30% when you buy small <br></br>business insurance in
              online
            </h1>

            <button className="rounded-[5px] bg-[#31abfc] p-2 mt-5 text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* part 5 sofa-image */}

      {/* part 6 start our team */}

      <div className="mt-28">
        <div className="text-center">
          <span className="text-[#12b48b] font-bold text-base"> Team</span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            Our Expert Team
          </h1>

          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>{" "}
            Quis ipsum suspendisse ultrices gravida. Risus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-20">
          <div className="text-center">
            <a href="#">
              <img src={Team1} className="w-full h-auto"></img>
            </a>

            <div className="team-content">
              <h3 className="text-[#262566] font-bold text-xl">
                David Jon Korola
              </h3>

              <span className="text-[#31abfc] text-sm font-semibold">
                Marketer
              </span>
            </div>
          </div>

          <div className="text-center">
            <a href="#">
              <img src={Team2} className="w-full h-auto"></img>
            </a>

            <div className="team-content">
              <h3 className="text-[#262566] font-bold text-xl">Merris Polar</h3>

              <span className="text-[#31abfc] text-sm font-semibold">CEO</span>
            </div>
          </div>

          <div className="text-center">
            <a href="#">
              <img src={Team3} className="w-full h-auto"></img>
            </a>

            <div className="team-content">
              <h3 className="text-[#262566] font-bold text-xl">Deck Dew</h3>

              <span className="text-[#31abfc] text-sm font-semibold">
                Founder
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* part 6  our team end */}

      {/* part 7  start*/}
      <div className="mt-28 font-roboto flex  items-center justify-evenly bg-[#050b2a]   py-50 min-h-[200px] w-full">
        <div className="p-4  rounded m-4">
          <h3 className="text-white font-bold text-3xl">950 +</h3>
          <h3 className="text-white font-bold text-xl">Completed Project</h3>
        </div>

        <div className="p-4  rounded m-4">
          <h3 className="text-white font-bold text-3xl">850 +</h3>
          <h3 className="text-white font-bold text-xl">Winning Awards</h3>
        </div>

        <div className="p-4  rounded m-4">
          <h3 className="text-white font-bold text-3xl">550 +</h3>
          <h3 className="text-white font-bold text-xl">Clients</h3>
        </div>

        <div className="p-4  rounded m-4">
          <h3 className="text-white font-bold text-3xl">440 +</h3>
          <h3 className="text-white font-bold text-xl">Countries</h3>
        </div>
      </div>
      {/* part 7  end*/}

      {/* part 9 start */}

      <div className="mt-28">
        <div className="text-center">
          <span className="text-[#12b48b] font-bold text-base">Blog</span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            Latest News From Our Blog
          </h1>

          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>{" "}
            Quis ipsum suspendisse ultrices gravida. Risus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-10">
          <div>
            <a href="#">
              <img src={Blog1} className="w-full h-auto"></img>
            </a>

            <div className="p-8 shadow-2xl">
              <ul className="flex space-x-4">
                <li className="text-[#12b48b]">10 April 2020</li>

                <li className="text-[#12b48b]">
                  <a href="#">By admin</a>
                </li>
              </ul>

              <h3 className="text-[#204066] text-xl mt-4 mb-4 font-bold">
                2020 Insurance Trends And Possible Challenge
              </h3>

              <a href="#" className="text-[#12b48b] font-medium">
                Read More
              </a>
            </div>
          </div>

          <div>
            <a href="#">
              <img src={Blog2} className="w-full h-auto"></img>
            </a>

            <div className="p-8 shadow-2xl">
              <ul className="flex space-x-4">
                <li className="text-[#12b48b]">10 April 2020</li>

                <li className="text-[#12b48b]">
                  <a href="#">By admin</a>
                </li>
              </ul>

              <h3 className="text-[#204066] text-xl mt-4 mb-4 font-bold">
                2020 Insurance Trends And Possible Challenge
              </h3>

              <a href="#" className="text-[#12b48b] font-medium">
                Read More
              </a>
            </div>
          </div>

          <div>
            <a href="#">
              <img src={Blog3} className="w-full h-auto"></img>
            </a>

            <div className="p-8 shadow-2xl">
              <ul className="flex space-x-4">
                <li className="text-[#12b48b]">10 April 2020</li>

                <li className="text-[#12b48b]">
                  <a href="#">By admin</a>
                </li>
              </ul>

              <h3 className="text-[#204066] text-xl mt-4 mb-4 font-bold">
                2020 Insurance Trends And Possible Challenge
              </h3>

              <a href="#" className="text-[#12b48b] font-medium">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* part 9 end */}
    </>
  );
};

export default Homepage;
