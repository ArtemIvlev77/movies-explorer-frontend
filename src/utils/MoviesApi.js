class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}`, { headers: this._headers }).then((res) =>
      this._checkRes(res)
    );
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка : ${res.status}`));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
