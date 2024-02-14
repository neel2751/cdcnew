import React from "react";

const HeaderStatic = ({ children }) => {
  return (
    <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  );
};

export default HeaderStatic;
