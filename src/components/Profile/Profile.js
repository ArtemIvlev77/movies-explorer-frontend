import React from "react";
import "./Profile.css";

import Header from "../Header/Header";
import CurrentUserContext from "../../utils/context/CurrentUserContext";
import CallbackValidation from "../../utils/CallbackValidation";

function Profile({
  handleLogout,
  editProfile,
  isLogin,
  isEditError,
  isEditDone,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const formWithValidation = CallbackValidation();
  const { email, name } = formWithValidation.values;

  React.useEffect(() => {
    formWithValidation.setValues({
      email: currentUser.email,
      name: currentUser.name,
    });
  }, [currentUser]);

  const submitEditProfile = (event) => {
    event.preventDefault();
    editProfile(name, email);
  };

  return (
    <div>
      <Header isLogin={isLogin} bgColor="white" textColor="black" />
      <section className="profile">
        <h1 className="profile__title">
          Привет, {currentUser && currentUser.name}!
        </h1>
        <form
          noValidate
          className="profile__form"
          onSubmit={submitEditProfile}
          name="edit-form"
        >
          <fieldset className="profile__fieldset">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input
              type="text"
              onChange={formWithValidation.handleChange}
              value={name || ""}
              required
              minLength="2"
              maxLength="30"
              className="profile__input"
              name="name"
              autoComplete="off"
            />
          </fieldset>
          <fieldset className="profile__fieldset">
            <label className="profile__label" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              onChange={formWithValidation.handleChange}
              value={email || ""}
              required
              className="profile__input"
              name="email"
              autoComplete="off"
            />
          </fieldset>
          <p className="profile__form-error">
            {formWithValidation.errors.name || formWithValidation.errors.email}
          </p>
          {isEditError && (
            <p className="profile__form-error">Ошибка обновления данных</p>
          )}
          {isEditDone && (
            <p className="profile__form-done">Данные успешно обновлены</p>
          )}
          <button
            className="profile__btn-edit"
            type="submit"
            disabled={
              (currentUser &&
                name === currentUser.name &&
                email === currentUser.email) ||
              !formWithValidation.isValid
            }
          >
            Редактировать
          </button>
          <button
            className="profile__btn-logout"
            type="button"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </div>
  );
}

export default Profile;
