import React, { useContext } from "react";
import Inputs from "components/Inputs/Inputs.func";
import Battery from "components/Battery/Battery.func";
import Hooks from "components/Hooks";

import { ThemeContext } from "components/Theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ minHeight: "100vh" }} className={`bg-${theme.background}-400 text-gray-700`}>
      <div className="container m-auto pt-4">
        {/* <Inputs /> */}
        {/* <Battery /> */}
        <Hooks />
      </div>
    </div>
  );
}

export default App;
