import { NextResponse } from "next/server";
import { supabase } from "../lib/supabase";

export async function GET() {
  const article = await supabase.from("article").select();
  return {
    message: "전송완료",
    article: article.data,
  };
}
