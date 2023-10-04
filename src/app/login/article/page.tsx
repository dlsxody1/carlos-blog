"use client";
import ArticleList from "@/app/components/ArticleList";
import Header from "@/app/components/Header";
import { usePath } from "@/app/hooks/usePath";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Header type="article" event={() => router.push(`${pathname}/write`)} />
      <ArticleList />;
    </>
  );
};

export default Page;
