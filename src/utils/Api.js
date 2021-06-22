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
    return fetch(`$this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `'Bearer ${jwt}`,
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
    return fetch(`${this._baseUrl}/signup`, {
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

  getMovies(jwt) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer  + ${jwt}`,
      },
    }).then((res) => this._addResult(res));
  }

  addMovie(movie, jwt) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer + ${jwt}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://movies-ivlev.nomoredomains.club${movie.image.url}`,
        trailer: movie.trailerLink,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://movies-ivlev.nomoredomains.club${movie.image.url}`,
      }),
    }).then((res) => this._addResult(res));
  }

  deleteMovie(movieId, jwt) {
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

const api = new Api({
  // baseUrl: 'https://movies-ivlev.nomoredomains.club',
  baseUrl: "https://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export default api;