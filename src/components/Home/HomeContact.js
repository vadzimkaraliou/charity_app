import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeContact = () => {
  const [success, setSuccess] = useState(false);
  const [nameValidation, setNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [textValidation, setTextValidation] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleError = (err) => {
    console.log("ERROR");
    console.error(err);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.length < 1 || form.name.includes(" ")) {
      setNameValidation(true);
    } else {
      setNameValidation(false);
    }

    if (!form.email.includes("@")) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }

    if (form.message.length < 120) {
      setTextValidation(true);
    } else {
      setTextValidation(false);
    }

    const getAnswer = async () => {
      const response = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const answer = await response.json();
      console.log(answer);
      if (answer.status === "success") {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }
    };
    getAnswer().catch(handleError);
  };

  return (
    <>
      <section className="contacts" id="contact">
        <section className="contacts__inner">
          <form onSubmit={handleSubmit} className="contacts__form">
            <div className="contact-header">Skontaktuj się z nami</div>

            <img
              className="contact-decoration"
              src={require("../../assets/Decoration.svg").default}
              alt="decoration"
            />

            {success === true ? (
              <p className="success-sent">
                Wiadomość została wysłana!<br></br>Wkrótce się skontaktujemy.
              </p>
            ) : null}

            <div className="contact-details">
              <div className="contact-detail">
                <label htmlFor="name">Wpisz swoję imię</label>
                <input
                  type="text"
                  placeholder="Krzysztof"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                {nameValidation === false ? null : (
                  <p className="contact-name-alert">
                    Podane imię jest nieprawidłowe!
                  </p>
                )}
              </div>

              <div className="contact-detail">
                <label htmlFor="email">Wpisz swój email</label>
                <input
                  type="email"
                  placeholder="abc@xyz.pl"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {emailValidation === false ? null : (
                  <p className="contact-email-alert">
                    Podany email jest nieprawidłowy!
                  </p>
                )}
              </div>
            </div>

            <label htmlFor="message" className="textArea-lable">
              Wpisz swoją wiadomość
            </label>
            <textarea
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            {textValidation === false ? null : (
              <p className="contact-text-alert">
                Wiadomość musi mieć conajmniej 120 znaków
              </p>
            )}

            <button type="submit" className="contact-btn">
              Wyślij
            </button>
          </form>

          <section className="footer container">
            <div></div>
            <p>Copyright by Coders Lab</p>
            <div className="socials">
              <Link to="/">
                {" "}
                <img
                  src={require("../../assets/Facebook.svg").default}
                  alt="facebook"
                />{" "}
              </Link>
              <Link to="/">
                {" "}
                <img
                  src={require("../../assets/Instagram.svg").default}
                  alt="instagram"
                />{" "}
              </Link>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default HomeContact;
