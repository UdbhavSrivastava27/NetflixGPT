import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";



const GptMovieSuggestions = () => {
  
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
 
  return (
    <div className=" w-full  mt-20 mr-4 bg-black text-white bg-opacity-90 rounded-lg overflow-x-hidden">
      <div>

           
      {!movieNames && <Shimmer />}
      {movieNames && 
        movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;