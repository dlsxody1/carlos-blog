import React from "react";
import { HeaderProps } from "../types/HeaderProps";

const Header = ({ type, event }: HeaderProps) => {
  const NAV_CLASS =
    "flex h-24  border-headerColor bg-defaultHeader text-largeFontSize items-center pl-4";
  const NAV_TEXT = "Carlos의 개발 블로그";
  const ARTICLE_CLASS =
    "flex h-24  border-headerColor bg-defaultHeader text-largeFontSize items-center pl-4 justify-between";
  const ARTICLE_TEXT = "hi";

  return (
    <>
      <header className={type === "nav" ? NAV_CLASS : ARTICLE_CLASS}>
        <div className="">{type === "nav" ? NAV_TEXT : ""}</div>
        {type === "article" ? (
          <button
            onClick={event}
            className="w-32 h-20 border border-blue-200 cursor-pointer hover:border-blue-600"
          >
            글쓰기
          </button>
        ) : (
          ""
        )}
      </header>
    </>
  );
};

export default Header;
