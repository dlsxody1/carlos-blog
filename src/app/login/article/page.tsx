"use client";
import ArticleList from "@/app/components/ArticleList";
import Header from "@/app/components/Header";
import { usePath } from "@/app/hooks/usePath";
import React, { SetStateAction, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getSession } from "@/api/ArticleAPI";
import { SessionProps } from "@/app/types/SessionProps";
import { supabase } from "@/app/lib/supabase";
import { Session } from "@supabase/supabase-js";

const Page = ({ session }: { session: string }) => {
  console.log(session);
  navigator.geolocation.getCurrentPosition(function (pos) {
    console.log(pos);
    var latitude = pos.coords.latitude;
    var longitude = pos.coords.longitude;
    alert("현재 위치는 : " + latitude + ", " + longitude);
  });
  return (
    <>
      {/* {sessionData?.session?.access_token.length === undefined ? (
        "nothing"
      ) : (
        <>
          <ArticleList sessionData={sessionData?.session?.access_token} />
        </>
      )} */}
    </>
  );
};

export default Page;
