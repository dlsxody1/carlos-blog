"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

interface IEditor {
  htmlStr: string;
  setHtmlStr: React.Dispatch<React.SetStateAction<string>>;
}

const BlogEditor = ({ htmlStr, setHtmlStr }: IEditor) => {
  const editorStyle = {
    height: "700px",
  };

  const toolbarSTyle = {};
  const toolbar = {
    list: { inDropdown: true },
    textAlign: { inDropdown: true },
    link: { inDropdown: true },
    history: { inDropdown: false },
  };

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(() => {
    const blocksFromHtml = htmlToDraft(htmlStr);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, []);
  /**
   * https://jforj.tistory.com/213
   * image를 관리하는 도메인을 만들어야함.
   */
  //   const uploadCallback = (file: Blob) => {
  //     return new Promise((resolve, reject) => {
  //         const reader = new FileReader();

  //         reader.onloadend = async () => {
  //             const formData = new FormData();
  //             formData.append("multipartFiles", file);
  //             const res = await axios.post('http://localhost:8080/uploadImage', formData);

  //             resolve({ data: { link: res.data } });
  //         };

  //         reader.readAsDataURL(file);
  //     });
  // };
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    setHtmlStr(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <Editor
      localization={{
        locale: "ko",
      }}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      editorStyle={editorStyle}
      toolbarStyle={toolbarSTyle}
      onEditorStateChange={onEditorStateChange}
      editorState={editorState}
      toolbar={toolbar}
    />
  );
};

export default BlogEditor;
