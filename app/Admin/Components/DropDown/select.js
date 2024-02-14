// Select.js
import React from "react";
import Option from "./options";

const Select = ({ options, onChange }) => (
  <select onChange={onChange}>
    {options.map(({ tag }) => (
      <Option key={tag._id} value={tag._id} label={tag.tagName} />
    ))}
  </select>
);

export default Select;
