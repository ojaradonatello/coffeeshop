import React from 'react'
import {LoginBg, Logo} from "../assets"

const Login = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* backround image*/}
      <img src={LoginBg} className="w-full h-full object-cover absolute top-0 left-0" alt="" />

      {/*content box */}
      <div className="flex flex-col items-center bg-lightOverlay W-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12">

        <div className=" flex items-center justify-start gap-4 w-full">
          <img src={Logo}  className="W-8"alt="" />
          <p className="text-headingColor font-semibold text-2xl">city</p>

          {/*welcome text*/}
          <p className=" text-3xl font-semibold text-headingColor"  > Welcome Back</p>
          <p> Sign in With The follwwing</p>


        </div>
      </div>
    </div>
  )
}

export default Login
