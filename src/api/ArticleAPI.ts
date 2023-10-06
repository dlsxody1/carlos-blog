import { supabase } from "@/app/lib/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export const getArticle = async () => {
  const article = await supabase.from("article").select();
  return article;
};

export const getArticleById = async (id: string) => {
  const article = await supabase.from("article").select().eq("id", id).single();
  return article;
};
