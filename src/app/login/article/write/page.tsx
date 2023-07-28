"use client";
import BlogEditor from "@/app/components/BlogEditor";
import { MemoizedEditorViewer } from "@/app/components/EditorViewer";
import { MemoizedTitleViewer } from "@/app/components/TItleViewer";
import { CategoryProps } from "@/app/types/InputValueProps";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [title, setTitle] = useState("");
  const [htmlStr, setHtmlStr] = useState<string>("");
  const viewContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {

  //  if(titleRef.current){
  //  titleRef.current.inn....
  //}....
  //
  //   if (viewContainerRef.current) {
  //     viewContainerRef.current.innerHTML =
  //       "<p>html 코드를 이용하여 만들어진 코드</p>";
  //     viewContainerRef.current.innerHTML += htmlStr;
  //   }
  // }, [htmlStr]);

  const addCategory = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCategories([...categories, { category }]);
      setCategory("");
      console.log(categories);
    }
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    console.log(title);
  };
  return (
    <div className="flex">
      <div className="flex flex-col w-1/2 h-screenHeight ">
        <textarea
          className="border border-b-2 h-32 text-titleFontSize mb-8 resize-none pt-6 pl-6 font-black"
          placeholder="제목"
          name="title"
          onChange={onChangeText}
        ></textarea>
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
          <button className="border p-6 mt-3">출간하기</button>
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
