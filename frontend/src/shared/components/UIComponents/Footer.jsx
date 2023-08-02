import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-black p-5 text-white">
      <div className="items-center md:flex md:justify-between  md:px-5 ">
        <h1 className="text-center">@2023 Manapon Sanguanklin</h1>

        <div className="center flex items-center justify-center space-x-6 py-5 md:py-0">
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
    </footer>
  );
}
