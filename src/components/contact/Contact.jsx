// TODO: content
import React, { useRef, useState, useContext } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import validator from "validator";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailError) {
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
    }
  };

  const validateEmail = () => {
    if (validator.isEmail(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
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
            Mocht u vragen hebben voor mij, aarzal dan zeker niet om mij een
            bericht te sturen via onderstaand formulier!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Naam*"
              name="user_name"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Onderwerp*"
              name="user_subject"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="E-mail*"
              name="user_email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Bericht*"
              name="message"
              required
            />
            <button onClick={() => validateEmail()}>Indienen</button>
            {done &&
              "\tDankuwel voor uw bericht! U zal zo snel mogelijk antwoord krijgen"}
            {emailError && "\tGeef een geldig E-mailadres in."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
