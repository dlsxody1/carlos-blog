"use client";
import dynamic from "next/dynamic";
import { MemoizedEditorViewer } from "@/app/components/EditorViewer";
import { MemoizedTitleViewer } from "@/app/components/TitleViewer";
import { CategoryProps } from "@/app/types/InputValueProps";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";

const BlogEditor = dynamic(() => import("@/app/components/BlogEditor"), {
  ssr: false,
});

const Page = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [title, setTitle] = useState("");
  const [htmlStr, setHtmlStr] = useState<string>("");
  const viewContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const addArticle = async () => {
    try {
      const { data: article } = await supabase.from("article").insert({
        title,
        content: htmlStr,
        category: categories,
      });
      alert("출간이 완료되었습니다.");
      router.push("/");
      return article;
    } catch (err) {
      alert(err);
    }
  };

  const addCategory = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCategories([...categories, { category }]);
      setCategory("");
      console.log(categories);
    }
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(title);
  };

  return (
    <div className="flex">
      <div
        className="flex flex-col w-1/2 h-screenHeight"
        //onSubmit={addArticle(title,htmlStr, categories)}
      >
        <input
          className="border border-b-2 h-32 text-titleFontSize mb-8 resize-none pt-6 pl-6 font-black"
          placeholder="제목"
          name="title"
          onChange={onChangeText}
        />
        <input
          className="h-16  pl-6 text-middlFontSize"
          type="text"
          placeholder="카테고리를 입력하세요"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onKeyDown={(e) => addCategory(e)}
        />
        <div className="flex m-5 mb-24">
          {categories?.map(({ category }) => {
            return (
              <div key={uuidv4()}>
                <div className="p-4 pl-6 pr-6 mr-3  border border-green-200 bg-green-200  rounded-3xl text-defaultFontSize">
                  {category}
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          {" "}
          <BlogEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
        </div>

        <div>
          <button
            type="button"
            onClick={() => addArticle()}
            className="border p-6 mt-3"
          >
            출간하기
          </button>
        </div>
      </div>
      <div className="flex flex-col border-1-2 border w-1/2 h-screenHeight  border border-">
        <MemoizedTitleViewer title={title} />

        <div className="flex h-16 m-5 mb-24">
          {categories?.map(({ category }) => {
            return (
              <div key={uuidv4()}>
                <div className="p-4 pl-6 pr-6 mr-3  border border-green-200 bg-green-200  rounded-3xl text-defaultFontSize">
                  {category}
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          {" "}
          <MemoizedEditorViewer htmlStr={htmlStr} />
        </div>
      </div>
    </div>
  );
};

export default Page;
