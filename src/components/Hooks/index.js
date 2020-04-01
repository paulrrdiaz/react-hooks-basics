import React, { useContext } from "react";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";
import Memo from "./Memo";
import { ThemeContext } from "components/Theme";

export default () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="text-center">
      <State />
      <div className={`w-full border-t border-${theme.background}-800 mt-4 mb-2`} />
      <Effect />
      <div className={`w-full border-t border-${theme.background}-800 mt-4 mb-2`} />
      <Context />
      <div className={`w-full border-t border-${theme.background}-800 mt-4 mb-2`} />
      <Ref />
      <div className={`w-full border-t border-${theme.background}-800 mt-4 mb-2`} />
      <Reducer />
      <div className={`w-full border-t border-${theme.background}-800 mt-4 mb-2`} />
      <Memo />
      <div className={`w-full border-t border-${theme.background}-800 mt-4 mb-2`} />
    </div>
  );
};
