import React, { useState } from "react";
import * as icons from "react-icons/si";
// import { useInView } from "react-intersection-observer";
import ImageSlide from "../../shared/components/UIComponents/imageSlide";

function ProjectItem(props) {
  const [isClick, setIsClick] = useState({});
  // const { ref, inview, entry } = useInView();

  console.log(isClick);

  function skillClickHandle(skillId) {
    setIsClick((prevState) => ({
      ...prevState,
      [skillId]: !prevState[skillId],
    }));
    console.log(isClick);
  }
  let IconComponent;

  const projectImages = props.images.map((image) => (
    <img
      src={require(`../../assets/images/Projects/${image}`)}
      alt={image.split(".")[0]}
      className="border border-black "
    ></img>
  ));

  return (
    <React.Fragment>
      <div className=" w-full rounded bg-gray-300 p-3 font-Inter leading-6 opacity-80 hover:bg-black hover:text-white hover:shadow-xl">
        <li className="">
          <div className={`${props.id} `}>
            <div>
              <ImageSlide slideImage={projectImages} />
            </div>
            <div>
              <h1 className="mt-2 font-Roboto_Slab text-2xl">{props.name}</h1>
              <h2>{props.description}</h2>
            </div>
            <div className=" my-3 flex flex-wrap items-center justify-center gap-2 ">
              {props.useSkills.map((useSkill) => (
                <button
                  key={useSkill._id}
                  onClick={() => {
                    skillClickHandle(useSkill._id);
                  }}
                  className={`${
                    isClick[useSkill._id]
                      ? "animate-rotate-y"
                      : "animate-rotate-x"
                  } relative rounded border border-black bg-slate-300 p-3 text-black hover:bg-gray-700 hover:text-white`}
                >
                  {(IconComponent = icons[useSkill.iconName])}
                  <IconComponent
                    size="40"
                    className={`${
                      isClick[useSkill._id]
                        ? "invisible"
                        : "visible animate-fade"
                    } `}
                    style={{ color: useSkill.iconConfig }}
                  />
                  <h3
                    className={`${
                      isClick[useSkill._id]
                        ? "visible animate-fade"
                        : "invisible"
                    } absolute bottom-0 left-0 right-0 top-0 grid place-items-center font-Roboto_Slab text-xs`}
                  >
                    {useSkill.name}
                  </h3>
                </button>
              ))}
            </div>
            <a
              href={props.link}
              className="mx-auto flex w-fit items-center justify-center"
            >
              <icons.SiGithub size="40" />
            </a>
          </div>
        </li>
      </div>
    </React.Fragment>
  );
}

export default ProjectItem;
