import React from "react";

const MainHeader = ({ children, ...prop }) => {
  return (
    <main
      className={`${prop?.class} relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900`}
    >
      <div className="mb-4 lg:mb-0">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {prop.title}
        </h3>
        <span className="text-base font-normal text-gray-500 dark:text-gray-400">
          {prop.desc}
        </span>
      </div>

      {children}
    </main>
  );
};

export default MainHeader;
