import React from "react";
import {
  PiTextHOneBold,
  PiTextHTwoBold,
  PiTextHThreeBold,
  PiTextHFourBold,
  PiTextItalicBold,
  PiTextBBold,
} from "react-icons/pi";
import { MdOutlineFormatColorText } from "react-icons/md";

const Toolbar = () => {
  return (
    <div>
      <div className="flex text-largeFontSize">
        <PiTextHOneBold className="mr-3 hover:bg-slate-200" />
        <PiTextHTwoBold className="mr-3 hover:bg-slate-200" />
        <PiTextHThreeBold className="mr-3 hover:bg-slate-200" />
        <PiTextHFourBold className="mr-3 hover:bg-slate-200" />
        <PiTextItalicBold className="mr-3 hover:bg-slate-200" />
        <PiTextBBold className="mr-3 hover:bg-slate-200" />
        <MdOutlineFormatColorText className="mr-3 hover:bg-slate-200" />
      </div>
    </div>
  );
};

export default Toolbar;
