import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import Form from "../Form/Form";
import CallbackValidation from "../../utils/CallbackValidation";

function Register({ handleRegister, registeredError }) {
  const formCallbackValidation = CallbackValidation();
  const { email, password, name } = formCallbackValidation.values;
  const { values, onFocus, handleChange, isFocused, errors } =
    formCallbackValidation;
  const submitHandle = (event) => {
    event.preventDefault();
    handleRegister(name, email, password);
    formCallbackValidation.resetForm();
  };

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register">Добро пожаловать!</h1>
        <Form
          submitText={{
            buttonText: "Зарегистрироваться",
            promt: "Уже зарегистрированы?",
            route: "/signin",
            linkText: "Войти",
          }}
          registeredError={registeredError}
          submitHandle={submitHandle}
          validation={formCallbackValidation}
          formName="register"
        >
          <fieldset className="form__fieldset">
            <label htmlFor="name" className="form__label">
              Имя
            </label>
            <input
              required
              id="name"
              name="name"
              className={`form__input ${errors.name && "form__input-invalid"}`}
              minLength="2"
              maxLength="30"
              type="text"
              value={values.name || ""}
              onFocus={onFocus}
              onChange={handleChange}
            />
            <span className="form__input-error">
              {isFocused && errors.name}
            </span>
          </fieldset>
        </Form>
      </div>
    </section>
  );
}

export default Register;
