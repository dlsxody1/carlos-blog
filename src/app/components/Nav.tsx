"use client";
import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { supabase } from "../lib/supabase";

interface NavProps {
  toggle: boolean;
  className: string;
}
/*
 TODO : Navigation 깜빡거리는 것 수정하려고 노력해보자.
 ReactQuery에서 데이터를 받아서 Nav에 업데이트하자.
categoryToggle object 형식으로 바꿔야 여러 카테고리를 토글 할 수 있음.
*/
const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [categoryToggle, setCategoryToggle] = useState(false);
  const categoryToggleClick = () => {
    setCategoryToggle((prev) => !prev);
  };
  // const { data: article } = await supabase.from("article").select("*");
  return (
    <nav
      className={`${
        navToggle ? "hidden" : "block"
      } h-screenHeight w-96 bg-slate-500 flex justify-center pt-12 `}
    >
      <div className="bg-white border border-red-300 w-72 h-navHeight flex flex-col sticky top-0">
        <div className="h-11 bg-red-300 text-xl pl-3 pt-1 text-left">
          카테고리 x1
        </div>
        {/* 이것은 map을 돌린다. */}
        <div className="text-left pl-6 pt-1 border border-b-red-300 flex flex-col">
          <div>
            <div className="flex items-center">
              <GoChevronDown
                className="mr-3 cursor-pointer hover:text-red-400"
                onClick={categoryToggleClick}
              />
              메인 카테고리 예를들면 react{" "}
            </div>
            <ul className={`${categoryToggle ? "block" : "hidden"}`}>
              <li className="hover:text-purple-400">suspension</li>
              <li className="hover:text-purple-400">suspension</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
