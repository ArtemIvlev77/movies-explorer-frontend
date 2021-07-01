import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./Movies.css";

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import Preloader from "../Preloader/Preloader";

// import MainApi from "../MainApi/MainApi";
// import MoivesApi from "../MoivesApi/MoivesApi";
// import { screenSize, countCards } from "../../utils/ScreenSize";

function Movies({ isLogin }) {
//   const { pathname } = useLocation();
//   const [inputError, setInputError] = useState("");
//   const [searchValue, setSearchValue] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [savedMovies, setSavedMovies] = useState([]);
//   const [renderedFilms, setRenderedFilms] = useState([]);
//   const [moviesVisability, setMoviesVisability] = useState("");
//   const [countMoreFilms, setCountMoreFilms] = useState(1);
//   const [isPreloaderOpen, setIsPreloaderOpen] = useState("");
//   const [buttonMore, setButtonMore] = useState("movies_button_hidden");
//   const [shortMovie, setShortMovie] = useState(false);

//   useEffect(() => {
//     const jwt = localStorage.getItem("jwt");
//     if (jwt) {
//       MainApi.getSaveMovies(jwt)
//         .then((data) => {
//           if (data) {
//             setMovies(data);
//           }
//         })
//         .catch((err) => console.log(err));

//       if (pathname === "/saved-movies") {
//         setMoviesVisability("movies_visability");
//       }
//     }
//   }, []);

  return (
    <div>
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}


export default Movies;

