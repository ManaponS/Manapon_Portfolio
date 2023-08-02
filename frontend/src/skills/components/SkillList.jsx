import React from "react";

import SkillItem from "./SkillItem";

function SkillList(props) {
  const catagoriesSort = [
    ...new Set(props.items.map((skill) => skill.catagory)),
  ];

  return (
    <React.Fragment>
      <div className="mx-auto">
        <h1 className="font-Roboto_Slab text-4xl text-green-500">Skills</h1>
        <div className=" flex flex-col items-center md:flex-row md:flex-nowrap md:items-start">
          {catagoriesSort.map((catagory) => (
            <div
              key={catagory}
              className="m-2  h-full w-2/3 rounded p-5 text-white md:w-auto "
            >
              <h2 className="font-Roboto_Serif text-xl">{catagory}</h2>
              <ul>
                {props.items
                  .filter((skill) => skill.catagory === catagory)
                  .map((skill) => (
                    <SkillItem
                      key={skill._id}
                      id={skill._id}
                      name={skill.name}
                      iconName={skill.iconName}
                      iconConfig={skill.iconConfig}
                    />
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SkillList;
