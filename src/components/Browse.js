
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTvShows from "../hooks/useTvShows";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SceondaryContainer from "./SecondaryContainer";
import useAll from "../hooks/useAll";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";


const Browse = () => {

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies);

 
     useNowPlayingMovies();
     usePopularMovies();
     useTopRatedMovies();
     useUpcomingMovies();
     useTvShows();
     useAll();
    
    return (
      <>
    
      {!nowPlayingMovies && <Shimmer/>}
       {nowPlayingMovies && <div>
        <Header />
        {
        showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SceondaryContainer />
        </>
      )}
        </div>
        }

        </>
    )
}

export default Browse;