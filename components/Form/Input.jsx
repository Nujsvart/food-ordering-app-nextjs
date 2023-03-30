import React from "react";

const Input = ({ type, text, ...inputProps }) => {
  return (
    <div className="w-full mb-5">
      <label
        className={`relative block ${
          type === "datetime-local" ? "cursor-pointer" : "cursor-text"
        }`}
      >
        <input
          type={type}
          className="focus:outline-none  px-3 py-2 w-full border border-primary peer h-full "
          required
          {...inputProps}
        />
        <span className="absolute top-0 left-0  px-4 text-sm flex w-full items-center peer-focus:-top-7 peer-valid:-top-7 h-full transition-all duration-500 peer-focus:cursor-default peer-focus:text-xs peer-valid:text-xs">
          {text}
        </span>
      </label>
    </div>
  );
};

export default Input;
