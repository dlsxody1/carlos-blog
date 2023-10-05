import { NextResponse } from "next/server";
import { supabase } from "../lib/supabase";

export async function GET() {
  try {
    const article = await supabase.from("article").select();
    return NextResponse.json({
      message: "데이터 페칭 완료",
      article,
    });
  } catch (err) {
    return NextResponse.json({
      message: "완료",
      err,
    });
  }
}
