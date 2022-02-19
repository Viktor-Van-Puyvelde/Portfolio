// TODO: fix img size
import React from "react";
import "./projectList.css";
import Project from "../project/Project"
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projecten</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          quia fugit laudantium consequuntur, quam cum! Sequi enim porro odio
          quaerat ab quis. Esse omnis nam, id nulla ab repellat perspiciatis?
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
