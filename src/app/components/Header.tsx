import React from "react";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex h-24 justify-between border-headerColor bg-defaultHeader text-largeFontSize items-center p-9">
        <Link href="/">
          <div className="">Carlos의 개발 블로그</div>
        </Link>
        <div className="flex items-center">
          <div className="mr-6 ">
            <Link
              href="/article"
              className="border-b hover:border-red-500 hover:border-b-2 hover:text-red-500"
            >
              기록들
            </Link>
          </div>
          <div className="border-b hover:border-red-500 hover:border-b-2 hover:text-red-500">
            <Link href="/profile">프로필</Link>
          </div>
          <div className="ml-6 hover:text-red-500 cursor-pointer">
            <BsSearch />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
