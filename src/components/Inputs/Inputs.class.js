import React from "react";

export default class extends React.Component {
  state = {
    text: "",
    checked: false,
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleChecked = e => {
    this.setState({ checked: e.target.checked });
  };

  render() {
    const { text, checked } = this.state;

    return (
      <section>
        <div>
          <input
            className="w-full px-4 py-2 rounded border border-red-400 transition duration-300 ease-in-out outline-none focus:border-red-800"
            type="text"
            value={text}
            placeholder="Write something..."
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>
            <input
              className="mr-2 leading-tight"
              checked={checked}
              type="checkbox"
              onChange={this.handleChecked}
            />
            <span className="text-sm">React Developer(?)</span>
          </label>
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
  }
}
