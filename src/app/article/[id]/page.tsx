"use client";
import { getArticleById } from "@/api/ArticleAPI";
import { ArticleProps } from "@/app/types/ArticleProps";
import { dateFormatter } from "@/util/DateFormat";
import { PostgrestError, PostgrestSingleResponse } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useQuery<
    PostgrestSingleResponse<ArticleProps | null>,
    PostgrestError
  >(["post", params.id], () => getArticleById(params.id));

  const { formattedDate } = dateFormatter(data?.data?.created_at as Date);

  return (
    <div className="p-3">
      <div className="text-largeFontSize mt">{data?.data?.title}</div>
      <div className="text-middlFontSize text-gray-400">{formattedDate}</div>
      <div
        className="mt-11"
        dangerouslySetInnerHTML={{ __html: data?.data?.content as string }}
      ></div>
    </div>
  );
};

export default Page;
