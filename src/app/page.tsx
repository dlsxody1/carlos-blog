"use client";
import { useQuery } from "@tanstack/react-query";
import ArticleCard from "./components/ArticleCard";
import { getArticle } from "@/api/ArticleAPI";
import { ArticleProps } from "./types/ArticleProps";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import Link from "next/link";

export default function Home() {
  const { data, isLoading } = useQuery<PostgrestSingleResponse<
    ArticleProps[]
  > | null>(["article"], getArticle);

  return (
    <>
      <div className="p-20 ">
        <div className="text-middlFontSize mb-16">최근에 올라온 글</div>
        <div className="flex mt-5 ">
          {/* 캐러셀 추가 */}
          {isLoading
            ? "loading 중입니다"
            : data?.data?.map((articleInfo) => {
                return (
                  <Link
                    prefetch={false}
                    href={`/article/${articleInfo.id}`}
                    key={articleInfo.id}
                  >
                    <ArticleCard articleInfo={articleInfo} />
                  </Link>
                );
              })}
        </div>
      </div>
    </>
  );
}
