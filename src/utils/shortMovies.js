export default function shortMoviesHandle(movies){
  return movies.filter((movie) => movie.duration <= 40);
}