// TODO: content
import React, { useRef, useState, useContext } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xzd0mom",
        "template_kzcn5vf",
        formRef.current,
        "user_YRGFEoMUxQtcIOPjpDfg9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Naam"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Onderwerp"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Bericht"
              name="message"
            />
            <button>Submit</button>
            {done &&
              "Dankuwel voor uw bericht! u zal zo snel mogelijk antwoord krijgen"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
