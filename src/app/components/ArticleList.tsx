import React from "react";
import { supabase } from "../lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { Session } from "@supabase/supabase-js";

const ArticleList = (sessionData: { sessionData: string | undefined }) => {
  return (
    
    <div className="h-screenHeight bg-stone-300 flex items-center justify-center flex-col">
      <div className="flex items-center border border-red-300 w-3/4 h-4/6 bg-white m-10">
        <Image
          alt="이미지가 없어요"
          src=""
          className="ml-6 w-imageWidth h-imageHeight border border-black "
        />
        <div className="ml-8 w-3/5 h-imageHeight">
          <div className="text-titleFontSize">타이틀</div>
          
        </div>
        <div className="h-full flex items-end ">
          <button className="mb-6 hover:cursor-pointer border border-black w-24 h-16">
            <Link href={"/modify"}>수정하기</Link>
          </button>
        </div>
      </div>
      <div className="border border-red-300 w-3/4 h-2/4 bg-white"></div>
      <div className="border border-red-300 w-3/4 h-2/4 bg-white"></div>
      <div className="border border-red-300 w-3/4 h-2/4 bg-white"></div>
    </div>
  );
};

export default ArticleList;
