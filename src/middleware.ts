import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  if (req.nextUrl.pathname.startsWith("/login/article")) {
    const { data } = await supabase.auth.getSession();
    console.log(data.session);
    if (data.session === null) {
      // return NextResponse.redirect(new URL("/", req.url));
    } else {
      console.log("로그인 되었습니다.");
      return data.session;
    }
  }
}

export const config = {
  matcher: "/login/:path*",
};
