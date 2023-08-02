import React, { useState } from "react";
import * as icons from "react-icons/si";

function SkillItem(props) {
  const [isHover, setIsHover] = useState(false);

  function iconHoverIn() {
    setIsHover(true);
  }

  function iconHoverOut() {
    setIsHover(false);
  }

  const IconComponent = icons[props.iconName];
  return (
    <li>
      <div className={`my-3 flex items-center justify-center space-x-2 `}>
        <div
          onMouseEnter={iconHoverIn}
          onMouseLeave={iconHoverOut}
          style={{
            color: isHover ? props.iconConfig : "inherit",
          }}
          className={`mt-5`}
        >
          <div className={`flex items-center justify-center`}>
            <IconComponent size="50" />
          </div>
          <h1 className="mt-2 font-Inter">{props.name}</h1>
        </div>
      </div>
    </li>
  );
}

export default SkillItem;
