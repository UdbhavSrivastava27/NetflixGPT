import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import '@fortawesome/fontawesome-free/css/all.css'; // Import FontAwesome CSS
import lang from "../utils/languageConstants";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className=" absolute w-full px-2 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between  ">
      <img
        className=" w-48 mx-auto md:mx-0 transition-transform transform hover:scale-110 ${
          isHovered ? 'scale-110' : 'scale-100'}"
        src="
      https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className=" flex  justify-between">
          {showGptSearch && (
            <select
              className="  m-4 rounded-md bg-gray-800 text-white font-bold"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearchClick}
            className=" text-white hover:text-[#ccc] m-4 "
          >
            {showGptSearch ? (
            
            <i className="fa-solid fa-house fa-2xl  "></i>
         
            ) : (
              <div className="flex items-center gap-2 ">
                <i className="fa-solid fa-magnifying-glass "></i>
                <span className="text-[12px] md:text-lg ">GPTSearch</span>
              </div>
            )}
          </button>
         
          <span className=" align"></span>

          <button
            onClick={handleSignOut}
            className="text-lg font-semibold  mt-4 h-14 py-2 px-4   text-white hover:bg-[#E50914] border border-1px rounded"
          >
           {lang[langKey].signOut}
          </button>
          <img
            className=" hidden md:block w-14 h-14 m-4 rounded-md"
            alt=" usericon"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
