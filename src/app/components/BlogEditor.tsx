"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "@/css/quill-custom-css.css";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { uploadImage } from "@/api/ArticleAPI";

const BlogEditor = ({
  htmlStr,
  setHtmlStr,
}: {
  htmlStr: string;
  setHtmlStr: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const quillRef = useRef(null);
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("name", "image");
    input.click();

    input.onchange = async () => {
      if (!input.files || input.files.length === 0) return;
      const file = input.files[0];
      const fileName = new Date().getTime().toString();
      console.log(file, fileName);
      // const result = await uploadImage(
      //   `contents/${auth.user?.id}/${fileName}.png`,
      //   file,
      // )

      // const url = `https://ycuajmirzlqpgzuonzca.supabase.co/storage/v1/object/public/artinfo/${
      //   result.data!.path
      // }`
      // const quill = quillRef?.current?.getEditor()
      // const range = quill.getSelection()?.index
      // if (typeof range !== "number") return
      // quill.setSelection(range, 1)

      // quill.clipboard.dangerouslyPasteHTML(
      //   range,
      //   `<img src=${url} alt="image" />`,
      // )
    };
  }, [quillRef]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ["image"],
        ],
        //handlers: { image: imageHandler },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "image",
  ];

  return (
    <ReactQuill
      ref={quillRef}
      onChange={setHtmlStr}
      modules={modules}
      formats={formats}
      value={htmlStr || ""}
      placeholder={"작성할 내용을 입력해주세요!"}
      theme="snow"
    />
  );
};

export default BlogEditor;
