import React from "react";

const Input = ({ type, text, errorMessage, touched, ...inputProps }) => {
  console.log(errorMessage);

  return (
    <div className="w-full">
      <label
        className={`relative block ${
          type === "datetime-local" ? "cursor-pointer" : "cursor-text"
        }`}
      >
        <input
          type={type}
          className={`focus:outline-none  px-3 py-2 w-full border ${
            touched && errorMessage ? "border-danger" : "border-primary"
          } peer h-full `}
          required
          {...inputProps}
        />
        <span className="absolute -top-3 left-0  px-4 text-sm flex w-full items-center peer-focus:left-[15rem] peer-valid:hidden  h-full transition-all duration-500 peer-focus:cursor-default peer-focus:text-xs peer-valid:text-xs">
          {text}
        </span>
        <div
          className={`mt-2 mb-2 cursor-default text-xs text-danger ${
            touched && errorMessage ? "opacity-100" : "opacity-0"
          }`}
        >
          {errorMessage}!
        </div>
      </label>
    </div>
  );
};

export default Input;
