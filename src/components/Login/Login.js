import React from "react";
import "./Login.css";

import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Form from "../Form/Form";
import CallbackValidation from "../../utils/CallbackValidation";

function Login({ handleLogin, loginError }) {
  const formCallbackValidation = CallbackValidation();
  const { email, password } = formCallbackValidation.values;

  const submitHandle = (evt) => {
    evt.preventDefault();
    handleLogin(email, password);
    formCallbackValidation.resetForm();
  };

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <Form
          submitText={{
            buttonText: " Войти ",
            promt: " Зарегистрироваться ",
            route: "/signup",
            linkText: " Регистрация ",
          }}
          submitHandle={submitHandle}
          validation={formCallbackValidation}
          formName="login"
          loginError={loginError}
        />
      </div>
    </section>
  );
}

export default Login;
