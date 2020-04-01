import React, { useState, useMemo } from "react";
import randomColor from "randomcolor";

const fibonacci = n => {
  console.log(n);
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

export default () => {
  const [color, setColor] = useState("#000");
  const [num, setNum] = useState(0);
  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <>
      <h2
        onClick={() => setColor(randomColor())}
        style={{ color }}
        className="text-3xl font-bold cursor-pointer"
      >
        React useMemo
      </h2>
      <div>
        <h3 className="text-3xl text-blue-600">
          fibonacci of {num} is {fib}
        </h3>
        <button className="bg-gray-800 text-white py-2 p-4 rounded" onClick={() => setNum(num + 1)}>
          +1
        </button>
      </div>
    </>
  );
};
