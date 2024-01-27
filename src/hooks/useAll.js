
//fetch data form TMDB API and update redux store 

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addAll } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useAll = ()=>{


    const dispatch = useDispatch();

    const getAll = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS
        );
        const json = await data.json();
       
        dispatch(addAll(json.results));
    }

    useEffect(()=>{
        getAll();
    },[]);
}

export default useAll;