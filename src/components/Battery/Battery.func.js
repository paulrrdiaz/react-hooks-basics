import React, { useState, useEffect } from "react";
import Cell from "./Cell";

export default () => {
  const [data, setData] = useState({ level: 0, charging: false });

  useEffect(() => {
    let battery;
    navigator.getBattery().then(b => {
      battery = b;
      battery.addEventListener("levelchange", handleChange);
      battery.addEventListener("chargingchange", handleChange);
      handleChange({ target: battery });
    });

    return () => {
      battery.removeEventListener("levelchange", handleChange);
      battery.removeEventListener("chargingchange", handleChange);
    };
  }, []);

  const handleChange = ({ target: { level, charging } }) => setData({ level, charging });

  return <Cell {...data} />;
};
