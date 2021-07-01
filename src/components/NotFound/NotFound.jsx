import React from "react";
import "./NotFound.css";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  return (
    <section className="not-found">
      <div className="not-found__container">
        <p className="not-found__error">404</p>
        <p className="not-found__text">Страница не найдена</p>
        <p className="not-found__back" onClick={() => history.goBack()}>
          Назад
        </p>
      </div>
    </section>
  );
}

export default NotFound;
