"use client";
import React from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/image.min.js";
import FroalaEditor from "react-froala-wysiwyg";
import {
  ckEditorImageUpload,
  removeEditorImage,
} from "@/actions/uploadImageAction";

const FroalaEditorComponent = ({ editorData, setEditorData }) => {
  const handleEditorInitialized = (e) => {
    console.log("Editor from function initialized.", e);
  };

  const uploadImageActionFroala = (images) => {
    // Your custom logic for handling image uploads

    return new Promise(async (resolve, reject) => {
      try {
        const bodyForm = new FormData();
        bodyForm.append("file", images[0]);
        const data = await ckEditorImageUpload(bodyForm);
        const response = { link: data.data.mainUrl };
        if (data) {
          resolve(response);
        }
      } catch (e) {
        console.log("Error: ", e);
        reject(e);
      }
    });
  };

  return (
    <FroalaEditor
      model={editorData}
      onModelChange={(e) => setEditorData(e)}
      config={{
        saveInterval: 2000,
        placeholderText: "Start your",
        events: {
          initialized: function () {
            handleEditorInitialized(this);
          },
          "save.before": function (html) {
            // Store the data into local storage
            localStorage.setItem("editor_data", html);
          },
          "image.beforeUpload": async function (image) {
            // Upload image and get the URL back.
            console.log("this is the image file", image);
            const newData = await uploadImageActionFroala(image);
            this.image.insert(newData.link, null, null, this.image.get());
          },
          "image.removed": async function ($img) {
            console.log("image remove from editor", $img[0].currentSrc);
            const imageRemoved = await removeEditorImage($img[0].currentSrc);
            console.log("this is the main data of the user get", imageRemoved);
            if (imageRemoved) {
              alert("Image has been deleted successfully");
            }
          },
        },
      }}
      tag="textarea"
    />
  );
};

export default FroalaEditorComponent;
