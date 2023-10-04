import Header from "@/app/components/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default layout;
