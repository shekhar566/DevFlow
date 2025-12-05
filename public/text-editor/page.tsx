"use client";

import { useRef } from "react";
import { MDXEditor, type MDXEditorMethods } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

export default function TestEditor() {
  const ref = useRef<MDXEditorMethods>(null);

  const inject = () => {
    if (ref.current) {
      console.log("Injecting text...");
      ref.current.setMarkdown("# Hello World\nThis is a test.");
    }
  };

  return (
    <div className="p-10">
      <button className="p-3 bg-blue-500 text-white rounded" onClick={inject}>
        Inject Markdown
      </button>

      <div className="mt-4 border">
        <MDXEditor markdown="" ref={ref} onChange={() => {}} />
      </div>
    </div>
  );
}
