import React, { useContext } from "react";
import { ThemeContext } from "components/Theme";
import Switch from "components/Switch";
export default () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h2 className="text-3xl font-bold">React useContext</h2>
      <Switch handleChange={toggleTheme} />
    </>
  );
};
