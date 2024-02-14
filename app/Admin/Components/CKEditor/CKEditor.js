import React, { useEffect, useRef } from "react";
export default function CKeditor({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
      UploadAdapter: require("@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter"),
    };
  }, []);
  return (
    <>
      {editorLoaded ? (
        <CKEditor
          name={name}
          editor={ClassicEditor}
          config={{
            plugins: [UploadAdapter],
            toolbar: {
              items: [
                "heading",
                "|",
                "fontFamily",
                "fontSize",
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "highlight",
                "|",
                "alignment",
                "outdent",
                "indent",
                "|",
                "bulletedList",
                "numberedList",
                "todoList",
                "|",
                "insertTable",
                // "imageUpload",
                "insertImage",
                "link",
                "blockQuote",
                "codeBlock",
                "mediaEmbed",
                "horizontalLine",
                "pageBreak",
                "|",
                "undo",
                "redo",
              ],
            },
          }}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}
