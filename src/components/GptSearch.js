import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
const GptSearch = ()=>{
  
    return(
      <>
        <div >
            <div className="absolute -z-10">
        <img className=" h-screen  w-full object-cover bg-black fixed " src={BG_URL} alt="logo" />
       
        
      </div >
        <GptSearchBar />
        <GptMovieSuggestions />
        </div>
        </>
    

)};

export default GptSearch;