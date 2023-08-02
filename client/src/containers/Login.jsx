import React, { useState } from 'react';
import { LoginBg, Logo } from "../assets";
import { LoginInput } from '../components';
import { FaEnvelope, FaLock } from "react-icons/fa";
import {motion} from "framer-motion"

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

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
        <p className="text-xl text-textColor mt-1">Sign in With The following</p>

        {/* input section */}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeholder={"Email Here"}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignup={isSignUp}
          />
          <LoginInput
            placeholder={"Password Here"}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignup={isSignUp}
          />

          {/* Conditional rendering of Confirm Password */}
          {isSignUp && (
            <LoginInput
              placeholder={"Confirm Password Here"}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirm_password}
              inputStateFunc={setConfirm_password}
              type="password"
              isSignup={isSignUp}
            />
          )}
          {!isSignUp ? <p>Doesnot have an account ?:<motion.button whileTap={{scale: 0.95}}> Create One</motion.button> </p>: <p></p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
