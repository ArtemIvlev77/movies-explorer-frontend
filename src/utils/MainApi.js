class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInfo(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._addResult(res));
  }

  setInfo(name, email, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._addResult(res));
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((res) => this._addResult(res));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => this._addResult(res));
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      headers: this._headers,
    }).then((res) => this._addResult(res));
  }

  getSavedMovies(jwt) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._addResult(res));
  }

  postMovie(movie, jwt) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
      }),
    }).then((res) => this._addResult(res));
  }

  removeMovie(movieId, jwt) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._addResult(res));
  }

  errorHandler(err) {
    console.log(err);
  }

  _addResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const mainApi = new Api({
  // baseUrl: "https://api.movies-ivlev.nomoredomains.club",
  // baseUrl: "https://localhost:3001",
  baseUrl: "https://git.heroku.com/safe-eyrie-18429.git",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export default mainApi;
