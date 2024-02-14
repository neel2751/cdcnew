import React from "react";

const Buttons = ({ btnName, cls, onClick }) => {
  return (
    <button onClick={onClick} className={cls}>
      {btnName}
    </button>
  );
};

export default Buttons;
