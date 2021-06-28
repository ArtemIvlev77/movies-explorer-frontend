import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ bgColor, textColor }) {
  const { pathname } = useLocation();
  const text = `${pathname === "/" ? "Регистрация" : "Аккаунт"}`;

  const [activeBurger, setActiveBurger] = React.useState(false);

  function handleActiveBurger() {
    setActiveBurger(!activeBurger);
  }

  return (
    <header className={`header header_bg-color_${bgColor}`}>
      <div className="header__wrapper">
        <Link className="header__link" to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        {pathname === "/" ? "" : <Navigation />}
      </div>
      <div
        className={`header__wrapper header__wrapper_porifle
          ${pathname === "/" ? "" : "header__wrapper_burger"} ${
          !activeBurger ? "header__profile" : ""
        }`}
      >
        <ul className="header__list-links">
          <li className="header__item">
            <Link
              className={`header__list-link header__textColor-${textColor}`}
              to={`${pathname === "/" ? "/signup" : "/profile"}`}
            >
              {text}
            </Link>
          </li>
          <li className="header__item">
            {pathname === "/" ? (
              <Link className="header__list-link" to="/signin">
                Войти
              </Link>
            ) : (
              <button className="header__btn-account" type="button" />
            )}
          </li>
        </ul>
      </div>
      {pathname === "/" ? (
        ""
      ) : (
        <div>
          <div
            className={`header__burger ${
              activeBurger ? "header__burger_active" : ""
            }`}
            onClick={handleActiveBurger}
          >
            <div className="header__burger-line" />
            <div className="header__burger-line" />
            <div className="header__burger-line" />
          </div>
          <div
            className={`header__burger-menu-wrap ${
              activeBurger ? "header__burger-menu-wrap_active" : ""
            }`}
            onClick={handleActiveBurger}
          >
            <nav className="header__burger-nav">
              <ul className="header__burger-list">
                <li className="header__burger-item">
                  <Link className="header__burger-link" to="/">
                    Главная
                  </Link>
                </li>
                <li className="header__burger-item">
                  <Link className="header__burger-link" to="/movies">
                    Фильмы
                  </Link>
                </li>
                <li className="header__burger-item">
                  <Link className="header__burger-link" to="/saved-movies">
                    Сохранённые фильмы
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className={`header__wrapper header__wrapper_burger-menu ${
                pathname === "/" ? "header__wrapper_burger" : ""
              }`}
            >
              <Link
                className={`header__sign-text header__textColor-${textColor}`}
                to={`${pathname === "/" ? "/signup" : "/profile"}`}
              >
                {text}
              </Link>
              {pathname === "/" ? (
                <Link to="/signin" className="header__btn-signin" type="button">
                  Войти
                </Link>
              ) : (
                <button className="header__btn-account" type="button" />
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
