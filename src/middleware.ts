import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  if (req.nextUrl.pathname.startsWith("/login/article")) {
    const { data } = await supabase.auth.getSession();

    if (data.session === null) {
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      console.log(data, "좋은..접근이다");
    }
  }
}

export const config = {
  matcher: "/login/:path*",
};
