"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  ContentState,
  convertFromRaw,
  convertToRaw,
  EditorState,
} from "draft-js";
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
  const toolbar = {};
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
    />
  );
};

export default BlogEditor;
