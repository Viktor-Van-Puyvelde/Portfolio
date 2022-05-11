//TODO: writing content (a-sub and a-desc)
import React, { useContext } from "react";
import "./about.css";
import About2Img from "../../img/about2.png";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="a" style={{ backgroundColor: darkMode && "#2f2f2c" }}>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={About2Img} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Over mij</h1>
        <p className="a-sub">
          Ik ben Viktor van Puyvelde, student Toegepaste Informatica aan HOGENT
          te Gent. Ik zit momenteel in mijn tweede jaar in de
          specialisatierichting "Web development".
        </p>
        <p className="a-desc">
          Ik ben afkomstig uit Sint-Pauwels, waar ik ook mijn lager onderwijs
          heb gedaan in de plaatselijke lagere school "De Zandloper." <br />
          In het Sint-Jozef-Klein-Seminarie te Sint-Niklaas, heb ik met glans
          het secundair onderwijs doorlopen. Daar heb ik mijn diploma
          Economie-Moderne Talen behaald. <br />
          Momenteel ben ik bezig met mijn studies in Toegepaste Informatica aan
          HoGent. <br /> <br />
          Naast mijn schoolcarrière ben ik ook nog full-time leider bij de
          scouts Mgr. Bermijn in mijn thuisdorp Sint-Pauwels.
        </p>
      </div>
    </div>
  );
};

export default About;
