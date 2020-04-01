import React, { useState } from "react";

export default ({ handleChange }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    handleChange();
  };

  return (
    <div
      onClick={() => handleClick()}
      className={`flex justify-${
        active ? "start" : "end"
      } w-16 h-8 mx-auto border border-gray-700 rounded-lg p-2 cursor-pointer`}
    >
      <div className={`right-0 h-4 w-4 bg-${active ? "green" : "blue"}-600 rounded-lg`} />
    </div>
  );
};
