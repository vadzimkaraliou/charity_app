import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [repeatPasswordValidation, setRepeatPasswordValidation] =
    useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setPasswordValidation(form.password.length < 6);
    setEmailValidation(!form.email.includes("@"));
    setRepeatPasswordValidation(form.password !== form.repeatPassword);
  };

  return (
    <section className="loginPage">
      <div className="loginPage-inner">
        <div className="loginPage-title">Załóż konto</div>
        <img
          src={require("../assets/Decoration.svg").default}
          alt="decoration"
        />
        <form className="loginPage-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          ></input>
          {emailValidation === false ? null : (
            <p className="contact-email-alert login-alert">
              Podany email jest nieprawidłowy!
            </p>
          )}

          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          ></input>
          {passwordValidation === false ? null : (
            <p className="contact-email-alert login-alert">
              Hasło musi mieć conajmniej 6 znaków!
            </p>
          )}

          <label htmlFor="repeatPassword">Powtórz hasło</label>
          <input
            type="password"
            name="repeatPassword"
            value={form.repeatPassword}
            onChange={handleChange}
          ></input>
          {repeatPasswordValidation === false ? null : (
            <p className="contact-email-alert login-alert">
              Podane hasło jest nieprawidłowe!
            </p>
          )}
          <section className="loginPage-btns">
            <Link to="/logowanie">
              <button type="button" className="loginPage-register">
                Zaloguj się
              </button>
            </Link>
            <button
              type="submit"
              className="loginPage-register loginPage-active"
              onClick={handleSubmit}
            >
              Załóż konto
            </button>
          </section>
        </form>
      </div>
    </section>
  );
};

export default Register;
