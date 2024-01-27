
//fetch data form TMDB API and update redux store 

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTvShows } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTvShows= ()=>{



    const dispatch = useDispatch();

    const getTvShows = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', API_OPTIONS
        );
        const json = await data.json();
       
        dispatch(addTvShows(json.results));
    }

    useEffect(()=>{
        getTvShows();
    },[]);
}

export default useTvShows;