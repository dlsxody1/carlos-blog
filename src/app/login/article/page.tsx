"use client";
import ArticleList from "@/app/components/ArticleList";
import Header from "@/app/components/Header";
import { usePath } from "@/app/hooks/usePath";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { getSession } from "@/api/ArticleAPI";

const Page = () => {
  // const session = await getSession();
  // console.log(session);
  //무한루프 이슈

  return (
    <>
      <ArticleList />{" "}
    </>
  );
};

export default Page;
