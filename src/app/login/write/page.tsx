import ArticleList from "@/app/components/ArticleList";
import { supabase } from "@/app/lib/supabase";
import React from "react";

const page = async () => {
  return (
    <div className="w-full">
      <ArticleList />
    </div>
  );
};

export default page;
