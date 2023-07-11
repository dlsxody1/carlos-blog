import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface HeaderProps {
  type: "nav" | "article";
  event: MouseEventHandler<HTMLButtonElement>;
}
