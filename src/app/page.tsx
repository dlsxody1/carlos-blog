import { Header } from "@/stories/Header";
import Input from "@/stories/Input";
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <div className="w-inputWidth text-2xl pl-10 h-24 text-middlFontSize">
        폰트설정완료1
      </div>

      <Header />
      <Input />
    </>
  );
}
