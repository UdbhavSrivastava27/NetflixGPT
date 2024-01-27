const VideoTitle = ({title, overview }) => {

    return (
    <div className="  w-full aspect-video pl-6 md:pl-16 pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black "> 

      <h2 className="text-xl md:text-5xl w-2/4 md:w-full font-bold text-white">{title}</h2>


      <p className=" py-6    w-1/4 pb-5 text-sm md:text-lg  hidden md:inline-block text-white">{overview}</p>
      <div className="flex mt-2 ">
        <button className=" mt-2flex items-center bg-white text-black  py-2 px-2 md:px-9 text-sm md:text-xl font-bold  rounded-md  
        hover:bg-opacity-80 transition-transform transform hover:scale-110 ${
      isHovered ? 'scale-110' : 'scale-100'">
        <i className="fa-solid fa-play"></i> Play
          </button>

        
        <button className=" hidden md:block mx-2 bg-gray-500 text-white py-2 px-8 text-xl font-bold  rounded-md bg-opacity-50   transition-transform transform hover:scale-110 ${
      isHovered ? 'scale-110' : 'scale-100'}">
        <i className="fa-solid fa-circle-info"></i> More Info
          </button>
            
            
            </div>
    </div>
    );
}

export default VideoTitle;