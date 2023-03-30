import React from "react";

const Input = () => {
  return (
    <div className="w-full">
      <label className="relative cursor-text block">
        <input
          type="email"
          className="focus:outline-none  px-3 py-2 w-full border border-primary peer h-full"
          required
        />
        <span className="absolute top-0 left-0  px-4 text-sm flex w-full items-center peer-focus:-top-8 peer-valid:-top-8 h-full transition-all duration-500 peer-focus:cursor-default">
          Email
        </span>
      </label>
    </div>
  );
};

export default Input;
