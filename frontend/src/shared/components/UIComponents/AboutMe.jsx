import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe() {
  const [isClick, setIsClick] = useState(false);

  function imgClickHandler() {
    setIsClick(!isClick);
  }

  return (
    <React.Fragment>
      <section className="bg-neutral-950 px-14 py-10 text-white">
        <div className=" mx-auto w-fit pb-5 leading-7">
          <h1 className="text-left font-Roboto_Slab text-4xl text-white">
            About <span className="text-green-500">Me</span>
          </h1>
          <div className="my-5 flex-nowrap md:flex">
            <div className=" w-full md:w-5/12">
              <div className="mb-3 rounded border border-white p-3 hover:bg-gray-300 hover:text-black">
                <div className="overflow-hidden ">
                  <img
                    onClick={imgClickHandler}
                    src={
                      isClick
                        ? require("../../../assets/images/Profile/myPic_Grad.jpg")
                        : require("../../../assets/images/Profile/myPic.jpg")
                    }
                    alt="manapon_img"
                    className={`${
                      isClick ? "animate-rotate-y" : "animate-rotate-x"
                    }
                    mx-auto h-48 w-auto self-center rounded border border-black animate-duration-200`}
                  />
                </div>
                <div className="mt-3  md:text-left">
                  <h1 className="font-Roboto_Slab text-xl">
                    Manapon Sanguanklin (Fill)
                  </h1>
                  <h2 className="text-md font-Inter">
                    New Graduate Web Developer
                  </h2>
                  <h3 className="font-Inter text-sm">Bangkok, Thailand</h3>
                </div>
              </div>

              <div className="mb-3 rounded border border-white p-3 hover:bg-gray-300 hover:text-black">
                <div className="flex items-center space-x-2 ">
                  <FontAwesomeIcon icon="fa-solid fa-address-book" size="xl" />
                  <h1 className="font-Roboto_Slab text-2xl">Contact</h1>
                </div>
                <div className="divide-y-2 divide-gray-500">
                  <ul className="my-2 flex-col text-left font-Inter">
                    <li>
                      <span className="font-Roboto_Serif">Tel: </span>{" "}
                      0897600611
                    </li>
                    <li>
                      <span className="font-Roboto_Serif">Email: </span>
                      manapon7330@gmail.com
                    </li>
                  </ul>
                  <div className="flex justify-center space-x-4 pb-2 pt-4">
                    <a href="#aboutMe">
                      <FontAwesomeIcon
                        icon="fa-brands fa-github"
                        size="2xl"
                        className="hover:text-[#24292E]"
                      />
                    </a>
                    <a href="#aboutMe">
                      <FontAwesomeIcon
                        icon="fa-brands fa-facebook"
                        size="2xl"
                        className="hover:text-[#1877F2]"
                      />
                    </a>
                    <a href="#aboutMe">
                      <FontAwesomeIcon
                        icon="fa-brands fa-line"
                        size="2xl"
                        className="hover:text-[#00C300]"
                      />
                    </a>
                    <a href="#aboutMe">
                      <FontAwesomeIcon
                        icon="fa-brands fa-linkedin"
                        size="2xl"
                        className="hover:text-[#2867B2]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-cover md:ml-5 md:w-8/12">
              <div className="mb-3 rounded border border-white p-3 hover:bg-gray-300 hover:text-black">
                <div className="mb-3">
                  <div className="flex items-center space-x-2 ">
                    <FontAwesomeIcon
                      icon="fa-solid fa-graduation-cap"
                      size="xl"
                    />
                    <h1 className="font-Roboto_Slab text-2xl">Education</h1>
                  </div>
                </div>

                <ul className="flex-nowrap divide-y-2 divide-gray-500 text-left">
                  <li className="mb-3 font-Inter">
                    <h1 className="mt-3 font-Roboto_Serif text-xl">
                      Srinakharinwirot University
                    </h1>
                    <h2 className="text-md">
                      Bachelor of Science in Computer Science
                    </h2>
                    <p className="text-sm">2019 - 2023</p>
                  </li>
                  <li className="mb-3 font-Inter">
                    <h1 className="mt-3 font-Roboto_Serif text-xl">
                      The Demonstration School of Bansomdejchaopraya Rajabhat
                      University
                    </h1>
                    <h2 className="text-md">Math-English Program</h2>
                    <p className="text-sm">2016 - 2019</p>
                  </li>
                </ul>
              </div>

              <div className="mb-3 rounded border border-white p-3 hover:bg-gray-300 hover:text-black">
                <div className="flex items-center space-x-2 ">
                  <FontAwesomeIcon icon="fa-solid fa-briefcase" size="xl" />
                  <h1 className="font-Roboto_Slab text-2xl">Work Experience</h1>
                </div>
                <ul className="flex-nowrap divide-y-4 divide-black text-left">
                  <li className="mb-3 font-Inter">
                    <h1 className="mt-3 font-Roboto_Slab text-xl">
                      Internship - Software Tester
                    </h1>
                    <h2 className="text-md">Muang Thai Life Assurance PCL.</h2>
                    <p className="text-sm">June 2022 - July 2022</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span id="toSkills" className="align-bottom" />
      </section>
    </React.Fragment>
  );
}
