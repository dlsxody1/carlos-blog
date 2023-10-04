import React, { useEffect, useRef } from "react";

const EditorViewer = ({ htmlStr }: { htmlStr: string }) => {
  const viewContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (viewContainerRef.current) {
      viewContainerRef.current!.innerHTML = htmlStr;
      /**
       * 공백처리는 어떨게 할 것인가?
       */
    }
  }, [htmlStr]);
  return <div ref={viewContainerRef}></div>;
};

export const MemoizedEditorViewer = React.memo(EditorViewer);
