"use client";
import ArticleCard from "./components/ArticleCard";

export default function Home() {
  return (
    <>
      <div className="p-20 ">
        <div className="text-middlFontSize mb-16">최근에 올라온 글</div>
        <div className="flex mt-5 ">
          {/* 캐러셀 추가 */}
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </>
  );
}
