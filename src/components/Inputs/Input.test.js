import React from "react";
import ReactDOM from "react-dom";
import Inputs from "./Inputs.func";

test("render Input component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Inputs />, div);
  expect(div.querySelector("input").type).toBe("text");
  expect(div.querySelector("label").textContent).toBe("Label input");
});
