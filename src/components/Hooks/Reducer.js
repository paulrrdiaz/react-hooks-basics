import React, { useReducer } from "react";

const Types = {
  INCREMENT: "counter/increment",
  DECREMENT: "counter/decrement",
};
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case Types.INCREMENT:
      return { ...state, count: state.count + 1 };
    case Types.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default () => {
  const [{ count }, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2 className="text-3xl font-bold">React useReducer</h2>
      <h3 className="text-6xl text-blue-600 font-bold">{count}</h3>
      <div>
        <button
          className="bg-gray-800 text-white py-2 px-4 rounded mr-2"
          onClick={() => dispatch({ type: Types.INCREMENT })}
        >
          +1
        </button>
        <button
          className="bg-gray-800 text-white py-2 p-4 rounded"
          onClick={() => dispatch({ type: Types.DECREMENT })}
        >
          -1
        </button>
      </div>
    </>
  );
};
