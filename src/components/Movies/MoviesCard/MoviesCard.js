import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import card from "../../../images/card.png";

function MoviesCard() {
  const { pathname } = useLocation();

  const [favoriteMovie, setFavoriteMovie] = useState(false);
  const likeIcon = favoriteMovie
    ? "card__favorite-btn_active"
    : "card__favorite-btn";

  const cardIcon = pathname === "/movies" ? likeIcon : "card__close-btn";

  return (
    <li className="card">
      <div className="card__wrap">
        <div className="card__description">
          <p className="card__name">33 слова о дизайне</p>
          <p className="card__duration">1ч 47мин</p>
        </div>
        <button
          className={(cardIcon)}
          type="button"
          onClick={setFavoriteMovie}
        ></button>
      </div>
      <img className="card__image" src={card} alt="карточка фильма" />
    </li>
  );
}

export default MoviesCard;
