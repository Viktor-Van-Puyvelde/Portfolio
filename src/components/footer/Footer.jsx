import React, { useContext } from "react";
import "./footer.css";
import FooterCol from "./footerCol/FooterCol";
import { ThemeContext } from "../../context";

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="f" style={{ backgroundColor: darkMode && "#2f2f2c" }}>
        <div className="f-collumn">
          <h1 className="f-collumn-title">Viktor Van Puyvelde</h1>
          <p className="f-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos sit
            nostrum in eveniet excepturi sequi quo tenetur explicabo quam enim
            repellendus iste, ex mollitia ratione omnis perferendis? Dolorum,
            quisquam tempore?
          </p>
        </div>
        <div className="f-col2">
          <FooterCol
            heading="Contact info"
            links={[
              {
                title: "+32 489 41 78 04",
                path: "tel:+32 489 41 78 04",
              },
              {
                title: "viktorvp2002@gmail.com",
                path: "mailto:viktorvp2002@gmail.com ",
              },
            ]}
          />
        </div>
        <div className="f-col3">
          <FooterCol
            heading="Social links"
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/",
              },
            ]}
          />
        </div>
      </div>
      <div
        className="copyright"
        style={{ backgroundColor: darkMode && "#2f2f2c" }}
      >
        <p>
          &#169; 2022 - Viktor Van Puyvelde | designed by Viktor Van Puyvelde
        </p>
      </div>
    </>
  );
};

export default Footer;
