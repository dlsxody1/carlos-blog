import React from "react";
import { ButtonProps } from "../types/ButtonProps";
import Link from "next/link";
/**
 * Link Tag를 붙여보자
 * @param  url, text, state, className
 * @returns  jsx.Element
 */
const Button = ({ url, text, state, className }: ButtonProps) => {
  return <button className={className}>{text}</button>;
};

export default Button;
