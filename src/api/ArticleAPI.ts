import { supabase } from "@/app/lib/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export const getArticle = async () => {
  const article = await supabase.from("article").select();
  return article;
};

export const getArticleById = async (id: string) => {
  const article = await supabase.from("article").select().eq("id", id).single();
  let images = "";
  // image url 매개변수 추가 예정
  if (article.data.image_url !== undefined) {
    images = supabase.storage.from("blog-image").getPublicUrl("이미지url", {
      //1. 블로그 이미지 크기 조정할 것.
      //2 .썸네일 이미지를 type을 매개변수로 받아서 처리할지 생각해볼 것.
      transform: {
        width: 500,
        height: 500,
      },
    }).data.publicUrl;
  }
  //return 할 때 오브젝트 형태로 넘겨야함 {aritcle, imageUrl}
  return article;
};

export const uploadImage = async (path: string, file: string) => {
  const { data } = await supabase.storage.from("blog-image").upload(path, file);
  return data;
};

export const getSession = async () => {
  const { data } = await supabase.auth.getSession();
  return data;
};
