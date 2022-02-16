//TODO: writing content (a-sub and a-desc)
import React from "react";
import "./about.css";
import About2Img from "../../img/about2.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={About2Img} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Over mij</h1>
        <p className="a-sub">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia vero
          aut nam sapiente labore alias debitis tempora ratione, officiis
          consequatur perferendis magni ipsa recusandae quis delectus voluptates
          eius optio itaque!
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis aut,
          quod consectetur repellendus ipsam perferendis eum quas dolor est vel
          culpa voluptate reprehenderit porro dignissimos fuga deleniti esse qui
          laudantium?
        </p>
      </div>
    </div>
  );
};

export default About;
