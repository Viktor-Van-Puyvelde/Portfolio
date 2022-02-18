import React, { useRef } from "react";
import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +32 489 41 78 04
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              viktorvp2002@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aliquam officia maiores perferendis ex tempore alias
            reiciendis pariatur atque necessitatibus, adipisci possimus unde.
            Totam earum quia exercitationem cumque maxime iste!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Naam" name="user_name" />
            <input type="text" placeholder="Onderwerp" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Bericht" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
