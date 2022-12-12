import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://jtdscunjootjttyfzkjq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZHNjdW5qb290anR0eWZ6a2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA0MDQxNDEsImV4cCI6MTk4NTk4MDE0MX0.P6tHVTMU8YwNRx2hfIzzMLVsoJ7BVUDRgLszOYINTYU"
);

const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      navigate("/test");
    } else {
      navigate("/");
    }
  });

  const [passwordValidation, setPasswordValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
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

    // setForm(
    //     {
    //         email: "",
    //         password: ""
    //     })
  };

  return (
    <section className="loginPage">
      {/* <Auth 
    supabaseClient={supabase} 
    appearance={{theme: ThemeSupa}}
    theme="dark"
    /> */}
      <div className="loginPage-inner">
        <div className="loginPage-title">Zaloguj się</div>
        <img
          src={require("../assets/Decoration.svg").default}
          alt="decoration"
        />
        <form className="loginPage-form" onSubmit={handleSubmit}>
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
            <p className="contact-name-alert login-alert">Podane hasło jest za krótkie!</p>
          )}

          <section className="loginPage-btns">
            <Link to="/rejestracja">
              <button type="button" className="loginPage-register">
                Załóż konto
              </button>
            </Link>
            <button
              type="submit"
              className="loginPage-register loginPage-active"
            >
              Zaloguj się
            </button>
          </section>
        </form>
      </div>
    </section>
  );
};

export default Login;
