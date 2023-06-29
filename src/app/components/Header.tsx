"use client";
import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle((prev) => {
      return !prev;
    });
  };
  console.log(toggle);
  return (
    <>
      <header className="flex h-24  border-headerColor bg-defaultHeader text-largeFontSize items-center pl-4">
        <AiOutlineBars onClick={onToggle} className="mr-4 cursor-pointer" />
        <div className="">Carlos의 개발 블로그</div>
      </header>
      <nav
        className={`${toggle ? "hidden" : "block"} h-screen w-96 bg-slate-500`}
      ></nav>
    </>
  );
};

export default Header;
