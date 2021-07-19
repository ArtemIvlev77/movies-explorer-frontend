import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import CurrentUserContext from "../../../utils/context/CurrentUserContext";

function MoviesCard({
  movie,
  cardName,
  cardDuration,
  postMovie,
  savedMovies,
  removeMovie,
  imageLink,
  trailerLink,
}) {
  const { pathname } = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  const [favoriteMovie, setFavoriteMovie] = useState(false);
  const likeIcon = favoriteMovie
    ? "card__favorite-btn_active"
    : "card__favorite-btn";

  const cardIcon = pathname === "/movies" ? likeIcon : "card__close-btn";

  function handleLikeMovie() {
    if (!favoriteMovie) {
      postMovie(movie);
      setFavoriteMovie(true);
    } else {
      const movieItem = savedMovies.filter(
        (savedMovie) => savedMovie.movieId === movie.id
      );

      removeMovie(movieItem[0]._id);
      setFavoriteMovie(false);
    }
  }

  function handleDeleteButton() {
    removeMovie(movie._id);
  }

  useEffect(() => {
    checkAddedCard();
  }, [savedMovies, pathname, currentUser]);

  function checkAddedCard() {
    if (savedMovies.length > 0) {
      if (savedMovies.length > 0) {
        if (!favoriteMovie) {
          setFavoriteMovie(
            savedMovies.some(
              (savedMovie) =>
                savedMovie.movieId === movie.id &&
                savedMovie.owner === currentUser._id
            )
          );
        }
      }
    }
  }

  const functionIcon =
    pathname === "/movies" ? handleLikeMovie : handleDeleteButton;

  return (
    <li className="card">
      <div className="card__wrap">
        <div className="card__description">
          <p className="card__name">{cardName}</p>
          <p className="card__duration">{cardDuration}</p>
        </div>
        <button
          className={cardIcon}
          type="button"
          onClick={() => {
            functionIcon();
          }}
        />
      </div>
      <a
        className="card__trailer-link"
        href={trailerLink || movie.trailer}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__image" src={imageLink} alt={cardName} />
      </a>
    </li>
  );
}

export default MoviesCard;
