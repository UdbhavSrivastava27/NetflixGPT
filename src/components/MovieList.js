import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pt-4">
      <h1 className="  mx-auto md:mx-0 text-2xl md:text-3xl py-3 text-white text-opacity-60 font-semibold  ">{title}</h1>
      <div className="flex no-scrollbar overflow-x-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard 
            key={movie.id} 
            posterPath={movie?.poster_path}
            movieName={
                movie.original_title
                  ? movie.original_title
                  : movie.original_name
              }
              id={movie.id}
             />
          ))}
        </div>
      </div>



    </div>
  );
};
export default MovieList;