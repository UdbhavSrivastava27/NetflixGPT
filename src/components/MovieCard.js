
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, movieName }) => {

 
  
  if (!posterPath) return null;

  return (
    <div className="{`w-36 md:w-48  pr-4   transition-transform transform hover:scale-110 ${
      isHovered ? 'scale-110' : 'scale-100'
    }
    `}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} ">
      <img  alt="Movie Card" className=" h-28 md:h-64  rounded-lg   " src={IMG_CDN_URL + posterPath} />
 
      <h2 className="hidden md:block text-white text-xs md:text-lg md:font-semibold m-2 -mb-8">{movieName}</h2> 
                    
</div>
              
  );
};
export default MovieCard;