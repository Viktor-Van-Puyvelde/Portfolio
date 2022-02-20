import React, { useContext } from "react";
import "./footerCol.css";
import { ThemeContext } from "../../../context";

const FooterCol = ({ heading, links }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {
              <a
                href={item.path}
                target="_blank"
                rel="noreferrer"
                style={{ color: darkMode && "white" }}
              >
                {item.title}
              </a>
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterCol;
