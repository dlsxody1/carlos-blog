"use client";
import BlogEditor from "@/app/components/BlogEditor";
import { CategoryProps } from "@/app/types/InputValueProps";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [htmlStr, setHtmlStr] = useState<string>("");

  const addCategory = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCategories([...categories, { category }]);
      setCategory("");
      console.log(categories);
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col w-1/2 h-screenHeight ">
        <textarea
          className="border border-b-2 h-32 text-titleFontSize mb-8 resize-none pt-6 pl-6 font-black"
          placeholder="제목"
          name="title"
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

        {/* 
        <BlogEditor />
        <div
          contentEditable="true"
          datatype="content"
          className="resize-none text-middlFontSize border border-b-2 h-2/3 pt-6 pl-6"
          placeholder="내용을 입력하세요!"
        ></div> */}
        <div>
          <button className="border p-6 mt-3">출간하기</button>
        </div>
      </div>

      <div className="w-1/2 bg-blogColor h-screenHeight">1</div>
    </div>
  );
};

export default Page;
