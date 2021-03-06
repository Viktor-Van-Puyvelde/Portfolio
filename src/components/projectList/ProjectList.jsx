// TODO: fix img size
import React, { useContext } from "react";
import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";
import { ThemeContext } from "../../context";

const ProjectList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="pl" style={{ backgroundColor: darkMode && "#2f2f2c" }}>
      <div className="pl-texts">
        <h1 className="pl-title">Projecten</h1>
        <p className="pl-desc">
          Hieronder vindt u al de projecten die ik al gemaakt heb in mijn
          carrière. Doordat ik nu nog bezig ben met studeren zijn de volgende
          projecten allemaal schoolopdrachten.
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
