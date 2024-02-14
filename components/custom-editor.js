// components/custom-editor.js

import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ckEditorImageUpload } from "@/actions/uploadImageAction";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "imageUpload",
    // "insertImage",
    "blockQuote",
    "imageTextAlternative",
    "insertTable",
    "mediaEmbed",
    "resizeImage:50",
    "resizeImage:75",
    "resizeImage:original",
    "undo",
    "redo",
  ],
};
export const route = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
};

function CustomEditor(props) {
  function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      // Configure the URL to the upload script in your back-end here!
      return MyUploadAdapter(loader);
    };
  }
  function MyUploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then(async (newFile) => {
            try {
              const bodyForm = new FormData();
              bodyForm.append("file", newFile);
              const bufferData = await ckEditorImageUpload(bodyForm);
              if (bufferData) {
                resolve({ default: bufferData.secure_url });
              } else {
                reject("Unable to upload file");
              }
            } catch (error) {
              console.log("this is the error of upload image", error);
            }
          });
        });
      },
    };
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        ...editorConfiguration,

        extraPlugins: [MyCustomUploadAdapterPlugin],
        image: {
          insert: {
            type: "auto",
          },
        },
      }}
      data={props.initialData}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
    />
  );
}

export default CustomEditor;
