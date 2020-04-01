import React from "react";
import Cell from "./Cell";

export default class extends React.Component {
  state = {
    level: 0.5,
    charging: true,
  };

  componentDidMount() {
    navigator.getBattery().then(battery => {
      this.battery = battery;
      this.battery.addEventListener("levelchange", this.handleChange);
      this.battery.addEventListener("chargingchange", this.handleChange);
      this.handleChange({ target: this.battery });
    });
  }

  componentWillUnmount() {
    this.battery.removeEventListener("levelchange", this.handleChange);
    this.battery.removeEventListener("chargingchange", this.handleChange);
  }

  handleChange = ({ target: { level, charging } }) => {
    this.setState({ level, charging });
  };

  render() {
    return <Cell {...this.state} />;
  }
}
