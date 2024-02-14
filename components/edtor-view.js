import React from "react";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

const CustomFroalaEditorView = ({ editorData }) => {
  return <FroalaEditorView model={editorData} />;
};

export default CustomFroalaEditorView;
