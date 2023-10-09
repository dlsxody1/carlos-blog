"use client";
import { useQuery } from "@tanstack/react-query";
import ArticleCard from "./components/ArticleCard";
import { getArticle } from "@/api/ArticleAPI";
import { ArticleProps } from "./types/ArticleProps";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const { data, isLoading } = useQuery<PostgrestSingleResponse<
    ArticleProps[]
  > | null>(["article"], getArticle);

  return (
    <>
      <div className="p-20 ">
        <div className="text-middlFontSize mb-16">최근에 올라온 글</div>
        <div className="flex mt-5 "></div>
        {/* 캐러셀 추가 */}
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
        >
          {isLoading
            ? "loading 중입니다"
            : data?.data?.map((articleInfo) => {
                return (
                  <SwiperSlide key={articleInfo.id}>
                    <Link prefetch={false} href={`/article/${articleInfo.id}`}>
                      <ArticleCard articleInfo={articleInfo} />
                    </Link>
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </>
  );
}
