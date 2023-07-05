"use client";
import React, { useState } from "react";
import { useInput } from "../hooks/useInput";
import { ManagerProps } from "../types/ManagerProps";
import { usePathname } from "next/navigation";

const Page = () => {
  const [managerInfo, setManagerInfo] = useState<ManagerProps>({
    email: "",
    password: "",
  });
  const currentUrl = usePathname() as string;
  const { onChange, onSubmit, values } = useInput(managerInfo);

  return (
    <div className="w-full h-screenHeight flex justify-center items-center">
      <div className="w-formWidth h-formHeight border border-gray-400">
        <div className="font-bold text-center text-largeFontSize p-9">
          관리자 로그인
        </div>
        <div className="font-bold text-center text-largeFontSize p-3">
          관리자가 아니라면 .. 나가주세요
        </div>
        <form
          className="text-center"
          onSubmit={(e) => onSubmit(e, currentUrl, values)}
        >
          <div className="w-4/5 text-center border  m-24">
            <label className="mr-5 text-middlFontSize">ID</label>
            <input
              onChange={onChange}
              className="w-inputWidth text-middlFontSize h-12 "
              type="text"
              placeholder="관리자만 로그인 할 수 있습니다."
              name="email"
            />
          </div>
          <div className="w-4/5 text-center border  m-24">
            <label className="mr-5 text-middlFontSize">PW</label>
            <input
              onChange={onChange}
              className="w-inputWidth text-middlFontSize h-12 "
              type="password"
              placeholder="관리자만 로그인 할 수 있습니다."
              name="password"
            />
          </div>
          <button className="border text-middlFontSize p-4 w-40">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
