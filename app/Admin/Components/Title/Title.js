import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div class="mb-8">
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      <p class="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
};

export default Title;
