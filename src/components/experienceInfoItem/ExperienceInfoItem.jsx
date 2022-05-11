import React from "react";
import PText from "../pText/PText";
import "./experienceInfoItem.css";

const ExperienceInfoItem = ({ title, items, darkMode, long }) => {
  return (
    <div className="eit">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div
            className="item"
            key={index}
            style={{ backgroundColor: darkMode && "#333" }}
            id={long ? "itemLong" : ""}
          >
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceInfoItem;
