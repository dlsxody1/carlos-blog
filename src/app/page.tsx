"use client";
import { useQuery } from "@tanstack/react-query";
import ArticleCard from "./components/ArticleCard";
import { supabase } from "./lib/supabase";
import { getArticle } from "@/api/AticleAPI";
import { useEffect, useState } from "react";
import { ArticleProps } from "./types/ArticleProps";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
// import { getArticle } from "@/api/AticleAPI";

export default function Home() {
  const [serverData, setServerData] =
    useState<PostgrestSingleResponse<any[]>>();
  const getAt = async () => {
    const article = await supabase.from("article").select();
    return article;
  };
  useEffect(() => {
    getAt().then((res) => {
      setServerData(res);
    });
  }, []);

  // const { data, isLoading } = useQuery(["article"], getArticle);
  // console.log(data, "data");
  return (
    <>
      <div className="p-20 ">
        <div className="text-middlFontSize mb-16">최근에 올라온 글</div>
        <div className="flex mt-5 ">
          {/* 캐러셀 추가 */}
          <ArticleCard serverData={serverData?.data} />
          <ArticleCard serverData={serverData?.data} />
          <ArticleCard serverData={serverData?.data} />
        </div>
      </div>
    </>
  );
}
