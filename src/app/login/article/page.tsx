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

const Page = () => {
  const [sessionData, setSessionData] = useState<
    { session: Session } | { session: null }
  >();
  const router = useRouter();
  useEffect(() => {
    getSession().then((session : any) => {
      setSessionData(session);
    });
    console.log('how have you been')
  }, []);

  return (
    <>
      {sessionData?.session?.access_token.length === undefined ? (
        "nothing"
      ) : (
        <>
          <ArticleList sessionData={sessionData?.session?.access_token} />
        </>
      )}
    </>
  );
};

export default Page;
