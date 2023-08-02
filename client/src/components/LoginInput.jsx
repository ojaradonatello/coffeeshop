import React, { useState } from 'react';

const LoginInput = ({ placeholder, icon, inputState, inputStateFunc, type, isSignup }) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleInputChange = (e) => {
    inputStateFunc(e.target.value);
  };

  return (
    <div
      className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md w-full px-4 py-2 ${
        isFocus ? "shadow-md shadow-red-400" : "shadow-none"
      }`}
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none"
        value={inputState}
        onChange={handleInputChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  );
};

export default LoginInput;