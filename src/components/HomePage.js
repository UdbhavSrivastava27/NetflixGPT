
import { BG_URL } from "../utils/constants";
import Login from "./Login";
import Header from "./Header";
import { animateScroll as scroll } from 'react-scroll';



const Home = () => {
    const scrollToSection = () => {
        scroll.scrollToBottom();
      };
      
    
  return (
    <div >
    <Header />
    <div className="relative text-gray-500 min-h-screen">
      <div className="absolute -z-[1] min-h-screenf h-full">
        <img src={BG_URL} alt="NetflixGPT" className="w-screen h-full object-cover" />
      </div>
      <div className="flex items-center min-h-screen bg-black/60 pt-[70px]">
        <div className="px-4 md:px-24 py-6 text-white text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold max-w-5xl m-auto md:leading-[60px]">The biggest Indian hits. Ready to watch here from ₹ 149.</h1>
          <h3 className="text-1xl md:text-2xl my-4 text-gray-50">Join Today. Cancel Anytime.</h3>
          <h3 className="md:text-2xl my-4 mb-5">Ready to watch? Get Started to create or restart your membership.</h3>
          <div className='mt-4'>
            <button className="inline-block bg-red-700 px-12 py-4 text-white rounded-lg hover:bg-gray-700 transition-transform transform hover:scale-110 ${
      isHovered ? 'scale-110' : 'scale-100'} "
            onClick={scrollToSection}>
            GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div >
    <Login/>
    </div>
  )
}

export default Home;