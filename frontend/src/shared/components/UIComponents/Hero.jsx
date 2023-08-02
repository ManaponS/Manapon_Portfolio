import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <React.Fragment>
      <section id="hero" className=" bg-black py-10 text-white">
        <div className=" mx-auto w-auto max-w-screen-lg px-4 py-44 md:flex md:h-screen md:items-center ">
          <div className="mx-auto text-center ">
            <div className="font-Roboto_Slab leading-10">
              <h1 className=" text-5xl sm:text-6xl">
                Hi, I'm <span className="text-green-500">Manapon </span>
                Sanguanklin
              </h1>
              <p className="mt-6 font-Roboto_Serif text-2xl">
                <span className="text-green-500">
                  <Typewriter
                    words={["Full-Stack", "Backend"]}
                    loop={0}
                    cursor={false}
                  />
                </span>{" "}
                Developer
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block rounded border border-green-500 px-4 py-2 font-Inter text-green-500 transition-colors duration-300 hover:bg-green-500 hover:text-white"
                href="#about"
              >
                My RESUME
              </a>
            </div>
          </div>
        </div>
        <span id="toAboutMe" className="align-bottom" />
      </section>
    </React.Fragment>
  );
}
