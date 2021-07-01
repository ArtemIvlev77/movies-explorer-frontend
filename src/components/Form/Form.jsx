import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Form({
  formName,
  submitText,
  children,
  registeredError,
  submitHandle,
  validation,
}) {
  const { values, handleChange, errors, isValid, isFocused, onFocus } =
    validation;
  return (
    <form
      className="form"
      autoComplete="off"
      onSubmit={submitHandle}
      name={`${formName}-form`}
    >
      {children}
      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className={`form__input ${errors.mail && "form__input-invalid"}`}
          type="email"
          id="email"
          name="email"
          required
          minLength="2"
          value={values.email || ""}
          onFocus={onFocus}
          onChange={handleChange}
        />
        <span className="form__input-error">{isFocused && errors.email}</span>
      </fieldset>
      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="password">
          Пароль
        </label>
        <input
          className={`form__input ${errors.password && "form__input-invalid"}`}
          type="password"
          id="password"
          name="password"
          required
          minLength="2"
          value={values.password || ""}
          onFocus={onFocus}
          onChange={handleChange}
        />
        <span className="form__input-error">
          {isFocused && errors.password}
        </span>
      </fieldset>
      {registeredError && (
        <p className="form__input-error">Произошла ошибка при регистрации</p>
      )}
      <button className="form__button" type="submit" disabled={!isValid}>
        {submitText.buttonText}
      </button>
      <p className="form_subtitle">
        {`${submitText.promt}`}
        <Link className="form__link" to={submitText.route}>
          {submitText.linkText}
        </Link>
      </p>
    </form>
  );
}

export default Form;
