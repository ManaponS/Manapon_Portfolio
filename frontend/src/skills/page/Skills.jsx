import React, { useEffect, useState } from "react";
import SkillList from "../components/SkillList";
import ImageSlide from "../../shared/components/UIComponents/imageSlide";

function Skills() {
  const [loadedSkills, setLoadedSkills] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await fetch("http://localhost:5000/api/skills");
        const responseData = await response.json();
        setLoadedSkills(responseData.skills);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchSkills();
  }, []);

  if (loadedSkills.length === 0) {
    return (
      <section id="skills" className="bg-zinc-600 py-10 text-white ">
        <div className="text-5xl ">
          <h2>No Skills found</h2>
        </div>
      </section>
    );
  }

  const certImg = [
    <img
      src={require(`../../assets/images/Certifications/WebDevBootcamp_cert.jpg`)}
      alt="React, NodeJS, Express & MongoDB - The MERN Fullstack Guide Manapon Certificate"
    />,
    <img
      src={require(`../../assets/images/Certifications/MERN_cert.jpg`)}
      alt="The Complete 2023 Web Development Bootcamp Manapon Certificate"
    />,
  ];

  return (
    <React.Fragment>
      <section
        id="skills"
        className=" bg-neutral-900 px-14 py-10 pb-16 text-black"
      >
        <div className="mx-auto md:w-fit">
          <div className="mx-auto mt-5 w-fit flex-nowrap md:flex">
            <SkillList items={loadedSkills} />
          </div>

          <div className="mx-auto w-fit text-left">
            <h1 className="pb-6 font-Roboto_Slab text-4xl text-white">
              My Courese <span className="text-green-500">Certificate</span>
            </h1>
            <div className="flex items-center justify-center pt-5">
              <ImageSlide slideImage={certImg} />
            </div>
          </div>
        </div>

        <span id="toProjects" className="align-bottom" />
      </section>
    </React.Fragment>
  );
}

export default Skills;
