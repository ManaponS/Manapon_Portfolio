import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typewriter } from "react-simple-typewriter";

export default function MainHeader() {
  const anchorList = [
    { name: "Home", link: "#" },
    { name: "About", link: "#toAboutMe" },
    { name: "Skills", link: "#toSkills" },
    { name: "Projects", link: "#toProjects" },
  ];

  const [navOpen, setNavOpen] = useState(false);
  const [isTopPage, setIsTopPage] = useState(true);

  const handleResize = useCallback(() => {
    if (navOpen && window.matchMedia("(min-width: 767px)").matches) {
      setNavOpen(false);
    }
  }, [navOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const scrollTopPage = useCallback(() => {
    const scorllPosition = window.scrollY || document.documentElement.scrollTop;
    if (scorllPosition === 0) {
      setIsTopPage(true);
    } else {
      setIsTopPage(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollTopPage);
  }, [scrollTopPage]);

  return (
    <React.Fragment>
      <header id="header" className=" sticky top-0 z-50 w-full">
        <nav>
          <div
            className={`absolute w-full items-center justify-between px-7 py-4  transition-all duration-500 md:flex md:px-10 ${
              isTopPage ? "bg-black text-white" : "bg-gray-300 text-black"
            }`}
          >
            <div className="flex text-3xl ">
              <a href="#hero">
                <span className="font-Roboto_Slab decoration-8">
                  <Typewriter words={["Manapon.S"]} loop={1} cursor={false} />
                </span>
              </a>
            </div>

            <div
              onClick={() => setNavOpen(!navOpen)}
              className={`${
                navOpen
                  ? "animate-spin animate-normal animate-duration-[500ms] animate-once"
                  : ""
              } absolute right-8 top-6 h-7 w-7 cursor-pointer md:hidden`}
            >
              {navOpen ? (
                <FontAwesomeIcon icon="fa-solid fa-xmark" size="xl" />
              ) : (
                <FontAwesomeIcon
                  icon="fa-solid fa-bars"
                  size="xl"
                  className="animate-spin animate-reverse animate-duration-[500ms] animate-once"
                />
              )}
            </div>

            <ul
              className={`absolute left-0 z-[-1] w-full  
            bg-opacity-75 ease-in md:static md:z-auto 
            md:flex md:w-auto md:items-center md:pb-0 md:pl-0
            ${
              navOpen
                ? "top-16 bg-gray-400 transition-all duration-500"
                : "top-[-490px] transition-all duration-500"
            }`}
            >
              {anchorList.map((anchor) => (
                <a href={anchor.link}>
                  <li
                    className={`${
                      navOpen && "border border-gray-900 hover:bg-slate-400 "
                    } p-5 text-left font-Inter md:my-0 md:py-0 md:pr-0 md:hover:text-green-500`}
                  >
                    {anchor.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      {navOpen ? (
        <div
          className="fixed z-40 h-screen w-screen cursor-pointer bg-black opacity-60"
          onClick={() => setNavOpen(false)}
        ></div>
      ) : null}
    </React.Fragment>
  );
}
