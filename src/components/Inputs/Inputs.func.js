import React, { useState } from "react";

const initialState = {
  text: "",
  checked: false,
};

export default () => {
  const [{ text, checked }, setInputs] = useState(initialState);
  const handleChange = (name, value) => setInputs(prevState => ({ ...prevState, [name]: value }));

  return (
    <section>
      <div>
        <label htmlFor="label-input">Label input</label>
        <input
          id="label-input"
          className="w-full px-4 py-2 rounded border border-red-400 transition duration-300 ease-in-out outline-none focus:border-red-800"
          type="text"
          name="text"
          value={text}
          placeholder="Write something..."
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <ul className="flex items-stretch border border-blue-400 rounded p-2 mt-4">
        <li className="relative flex-1 border-dotted border-blue-300 border-2 rounded p-2 mr-2">
          {text}
          <span className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 text-xs rounded-br">
            Text
          </span>
        </li>
        <li className="relative flex-1 border-dotted border-blue-300 border-2 rounded p-2">
          {checked.toString()}
          <span className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 text-xs rounded-br">
            Checked
          </span>
        </li>
      </ul>
    </section>
  );
};
