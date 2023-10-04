import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Input = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <input
          className="p-10 w-inputWidth text-middlFontSize h-24  border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="게시물을 검색해보세요!"
        ></input>
      </div>
    </div>
  );
};

export default Input;
