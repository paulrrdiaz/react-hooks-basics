import React, { useState } from "react";
import randomColor from "randomcolor";

export default () => {
  const [color, setColor] = useState("#000");

  return (
    <>
      <h2
        onClick={() => setColor(randomColor())}
        style={{ color }}
        className="text-3xl font-bold cursor-pointer"
      >
        React useState
      </h2>
    </>
  );
};
