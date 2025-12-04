// "use client";

// import {
//   MDXEditor,
//   UndoRedo,
//   BoldItalicUnderlineToggles,
//   toolbarPlugin,
//   CodeToggle,
//   InsertCodeBlock,
//   codeBlockPlugin,
//   headingsPlugin,
//   listsPlugin,
//   linkPlugin,
//   quotePlugin,
//   markdownShortcutPlugin,
//   ListsToggle,
//   linkDialogPlugin,
//   CreateLink,
//   InsertImage,
//   InsertTable,
//   tablePlugin,
//   imagePlugin,
//   codeMirrorPlugin,
//   ConditionalContents,
//   ChangeCodeMirrorLanguage,
//   Separator,
//   InsertThematicBreak,
//   diffSourcePlugin,
//   MDXEditorMethods,
// } from "@mdxeditor/editor";
// import { basicDark } from "cm6-theme-basic-dark";
// import { useTheme } from "next-themes";
// import { Ref } from "react";

// import "@mdxeditor/editor/style.css";
// import "./dark-editor.css";

// interface Props {
//   value: string;
//   editorRef: Ref<MDXEditorMethods> | null;
//   fieldChange: (value: string) => void;
// }

// const Editor = ({ value, editorRef, fieldChange }: Props) => {
//   const { resolvedTheme } = useTheme();

//   const themeExtension = resolvedTheme === "dark" ? [basicDark] : [];

//   return (
//     <MDXEditor
//       key={resolvedTheme}
//       markdown={value}
//       ref={editorRef}
//       onChange={fieldChange}
//       className="background-light800_dark200 light-border-2 markdown-editor dark-editor grid w-full border"
//       plugins={[
//         headingsPlugin(),
//         listsPlugin(),
//         linkPlugin(),
//         linkDialogPlugin(),
//         quotePlugin(),
//         markdownShortcutPlugin(),
//         tablePlugin(),
//         imagePlugin(),
//         codeBlockPlugin({ defaultCodeBlockLanguage: "" }),
//         codeMirrorPlugin({
//           codeBlockLanguages: {
//             css: "css",
//             txt: "txt",
//             sql: "sql",
//             html: "html",
//             sass: "sass",
//             scss: "scss",
//             bash: "bash",
//             json: "json",
//             js: "javascript",
//             ts: "typescript",
//             "": "unspecified",
//             tsx: "TypeScript (React)",
//             jsx: "JavaScript (React)",
//           },
//           autoLoadLanguageSupport: true,
//           codeMirrorExtensions: themeExtension,
//         }),
//         diffSourcePlugin({ viewMode: "rich-text", diffMarkdown: "" }),
//         toolbarPlugin({
//           toolbarContents: () => (
//             <ConditionalContents
//               options={[
//                 {
//                   when: (editor) => editor?.editorType === "codeblock",
//                   contents: () => <ChangeCodeMirrorLanguage />,
//                 },
//                 {
//                   fallback: () => (
//                     <>
//                       <UndoRedo />
//                       <Separator />

//                       <BoldItalicUnderlineToggles />
//                       <CodeToggle />
//                       <Separator />

//                       <ListsToggle />
//                       <Separator />

//                       <CreateLink />
//                       <InsertImage />
//                       <Separator />

//                       <InsertTable />
//                       <InsertThematicBreak />
//                       <Separator />

//                       <InsertCodeBlock />
//                     </>
//                   ),
//                 },
//               ]}
//             />
//           ),
//         }),
//       ]}
//     />
//   );
// };

// export default Editor;

"use client";

import {
  MDXEditor,
  MDXEditorMethods,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  headingsPlugin,
  listsPlugin,
  linkPlugin,
  quotePlugin,
  markdownShortcutPlugin,
  ListsToggle,
  linkDialogPlugin,
  CreateLink,
  InsertImage,
  InsertTable,
  tablePlugin,
  imagePlugin,
  Separator,
  InsertThematicBreak,
  diffSourcePlugin,
  BlockTypeSelect, // Added: Allows choosing H1, H2, H3 easily
} from "@mdxeditor/editor";
import { useTheme } from "next-themes";
import { Ref } from "react";

import "@mdxeditor/editor/style.css";
import "./dark-editor.css"; // Keep this if it handles your basic dark borders

interface Props {
  value: string;
  editorRef: Ref<MDXEditorMethods> | null;
  fieldChange: (value: string) => void;
}

const Editor = ({ value, editorRef, fieldChange }: Props) => {
  const { resolvedTheme } = useTheme();

  return (
    <MDXEditor
      key={resolvedTheme}
      markdown={value}
      ref={editorRef}
      onChange={fieldChange}
      // Added 'p-4' for better padding inside the text area
      className="background-light800_dark200 light-border-2 markdown-editor dark-editor grid w-full border rounded-md overflow-hidden"
      placeholder="Type your clinical findings, patient history, or vitals here..."
      plugins={[
        // 1. Text Formatting (Essential for Doctors)
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),

        // 2. Media & Data (X-Rays & Lab Tables)
        imagePlugin(),
        tablePlugin(),

        // 3. Links
        linkPlugin(),
        linkDialogPlugin(),

        // 4. Diff View (Optional: Good for seeing changes in patient history)
        diffSourcePlugin({ viewMode: "rich-text", diffMarkdown: "" }),

        // 5. The Toolbar (Simplified: No Code Blocks)
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <Separator />
              <BlockTypeSelect /> {/* Replaces CodeToggle with Headings */}
              <Separator />
              <BoldItalicUnderlineToggles />
              <Separator />
              <ListsToggle />
              <Separator />
              <CreateLink />
              <InsertImage />
              <Separator />
              <InsertTable />
              <InsertThematicBreak />
            </>
          ),
        }),
      ]}
    />
  );
};

export default Editor;
