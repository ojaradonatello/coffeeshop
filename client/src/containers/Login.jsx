import React, { useState } from 'react';
import { LoginBg, Logo } from '../assets';
import { LoginInput } from '../components';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { buttonClick } from '../animations';
import { FcGoogle } from 'react-icons/fc';
import {getAuth, signInWithPopup,  GoogleAuthProvider} from "firebase/auth";
import {app} from "../config/firebase.config"

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider(); 
  const loginWithGoogle = async() =>{

   await signInWithPopup(firebaseAuth,provider).then(userCred =>{
    firebaseAuth.onAuthStateChanged(cred => {
      if(cred) {
                  cred.getIdToken().then(token =>{
                    console.log(token);
                  })
      }
    })
   })
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-start justify-start">
      {/* background image */}
      <img src={LoginBg} className="w-full h-full object-cover absolute top-0 left-0" alt="" />

      {/* content box */}
      <div className="flex flex-col items-start bg-lightOverlay max-w-screen-md h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
        {/* logo and city */}
        <div className="flex items-center gap-4">
          <img src={Logo} className="w-8" alt="" />
          <p className="text-headingColor font-semibold text-2xl">city</p>
        </div>

        {/* welcome text */}
        <p className="text-3xl font-semibold text-headingColor">Welcome Back</p>
        <p className="text-xl text-textColor -mt-6">
          {isSignUp ? 'Sign Up ' : 'Sign-In '}
          With The Following
        </p>

        {/* input section */}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeholder={'Email Here'}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignup={isSignUp}
          />
          <LoginInput
            placeholder={'Password Here'}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignup={isSignUp}
          />

          {/* Conditional rendering of Confirm Password */}
          {isSignUp && (
            <LoginInput
              placeholder={'Confirm Password Here'}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirm_password}
              inputStateFunc={setConfirm_password}
              type="password"
              isSignup={isSignUp}
            />
          )}
          {!isSignUp ? (
            <p>
              Doesn't have an account ?:{" "}
              <motion.button {...buttonClick} className="text-red-400 underline cursor-pointer bg-transparent">
                Create One
              </motion.button>
            </p>
          ) : (
            <p>
              Already have an account ?:{" "}
              <motion.button {...buttonClick} className="text-red-400 underline cursor-pointer bg-transparent"
              onClick={() => setIsSignUp(false)}
              
              >
                
                Sign-In Here
              </motion.button>
            </p>
          )}

          {/* button section*/}
          {isSignUp ? (
            <motion.button {...buttonClick} className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150">
              Sign Up
            </motion.button>
          ) : (
            <motion.button {...buttonClick} className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150">
              Sign In
            </motion.button>
          )}
        </div>

        {/* "or" section */}
        <div className="flex items-center justify-between gap-16">
          <div className="w-24 h-1 rounded-md bg-pink-300"></div>
          <p className="text-black ">or</p>
          <div className="w-24 h-1 rounded-md bg-pink-300"></div>
        </div>

        {/* "Signin With Google" button */}
        <motion.div {...buttonClick} className="flex items-center justify-center px-20 py-2 bg-pink-400  backdrop-blur-md cursor-pointer rounded-3xl gap-4"
        onClick={loginWithGoogle}
        >

          <FcGoogle className="text-3xl" />
          <p className="capitalize text-base text-black">Sign in With Google</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
