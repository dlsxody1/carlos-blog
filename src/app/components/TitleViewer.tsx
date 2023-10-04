import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const TitleViewer = ({ title }: { title: string }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.innerHTML = title;
    }
  }, [title]);
  return (
    <div
      className=" h-32 text-titleFontSize  resize-none pt-6 pl-6 font-black overflow-auto"
      ref={titleRef}
    ></div>
  );
};

export const MemoizedTitleViewer = React.memo(TitleViewer);
