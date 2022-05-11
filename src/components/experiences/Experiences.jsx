import React, { useContext } from "react";
import "./experiences.css";
import ExperiencesImg from "../../img/experiences.png";
import ExperienceInfoItem from "../experienceInfoItem/ExperienceInfoItem";
import { ThemeContext } from "../../context";
import CV from "../../filesToDownload/cv.pdf";

const Experiences = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="e">
      <div className="e-left">
        <h1 className="e-title">Ervaringen - CV</h1>
        <p className="e-desc">
          Hieronder vindt u kort alle info over mijn carrière tot nu toe. <br />
          Wenst u een meer gedetailleerd document, aarzal dan zeker niet om mijn
          Curriculum Vitae te donwloaden via de knop onderaan.
        </p>
        <div className="info-items">
          <div className="info-item">
            <h1 className="info-heading">Onderwijs</h1>

            <ExperienceInfoItem
              title="Lager onderwijs"
              items={["De Zandloper, Sint-Pauwels"]}
              darkMode={darkMode}
              long={true}
            />
            <ExperienceInfoItem
              title="Secundair onderwijs"
              items={["Sint-Jozef-Klein-Seminarie, Sint-Niklaas"]}
              darkMode={darkMode}
              long={true}
            />
            <ExperienceInfoItem
              title="Hoger onderwijs"
              items={["HOGENT, Gent"]}
              darkMode={darkMode}
              long={false}
            />
          </div>
          <div className="info-item">
            <h1 className="info-heading">Mijn skills</h1>

            <ExperienceInfoItem
              title="Front-end"
              items={["HTML", "CSS", "JavaScript", "REACT", "Java"]}
              darkMode={darkMode}
              long={false}
            />
            <ExperienceInfoItem
              title="Back-end"
              items={["Node", "MongoDB", "MySQL"]}
              darkMode={darkMode}
              long={false}
            />
          </div>
          <div className="info-item">
            <h1 className="info-heading">Ervaringen</h1>

            <ExperienceInfoItem
              title="Studentenjobs"
              items={["B-Post, Sint-Niklaas", "COOP Apotheek Sint-Pauwels"]}
              darkMode={darkMode}
              long={false}
            />
          </div>
        </div>
        <button className="dCV">
          <a href={CV} download>
            Download CV
          </a>
        </button>
      </div>
      <div className="e-right">
        <div className="e-card bg"></div>
        <div className="e-card">
          <img src={ExperiencesImg} alt="" className="e-img" />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
