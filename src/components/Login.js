  import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {  USER_AVATAR } from "../utils/constants";
import { Eye, EyeOff } from "lucide-react";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage( errorCode +"-"+ errorMessage );
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  
  return (
    <div>
      <div className="absolute bg-gradient-to-b from-red-800">
        <img className=" h-screen  w-full object-cover blur-sm" src="https://petapixel.com/assets/uploads/2023/03/Netflix-Sued-for-a-Privacy-Invading-Drone-Shot-it-Used-in-an-Ad-800x420.jpg" alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 mb-4 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <div className="relative">
        <input
          ref={password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
          <div
        className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
        onClick={togglePasswordVisibility}
      >
           {showPassword ? (
                <Eye
                  color="gray"
                 
                  onClick={togglePasswordVisibility}
                  size={20}
                />
              ) : (
                <EyeOff
                  size={20}
                  color="gray"
  
                  onClick={togglePasswordVisibility}
                />
              )}
               </div>
    </div>

        <p className="text-red-500 font-bold text-lg py-2 -mb-4">{errorMessage}</p>
        <button
          className="p-4 my-5 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        
        <div className="-mt-4 my-2 flex justify-between">
            <p className="text-gray-400">
              <input type="checkbox" />
              Remmeber Me
            </p>
            <p className="cursor-pointer text-gray-400 hover:underline">
          Need Help ?
            </p>
          </div>
          <p className=" mt-8 -mb-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
     
    </div>
  );
};
export default Login;