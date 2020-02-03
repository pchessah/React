import React, { Component } from "react";

const BoilingVerdict = props => {
  if (props.celsius >= 100) {
    return <p>The water is going to boil</p>;
  }
  return <p> The water will not boil</p>;
};

const scaleNames = {
  c: "Celsius",
  f: "Farenheit"
};

class TempInput extends Component {
  handleChange = e => {
    this.props.onTempChange(e.target.value);
  };

  render() {
    const temp = this.props.temp;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter the temperature in {scaleNames[scale]}: </legend>
        <input value={temp} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class LiftState extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: "", scale: "c" };
  }

  handleCelsiusChange = temp => {
    this.setState({
      scale: "c",
      temp
    });
  };

  handleFarenheitChange = temp => {
    this.setState({
      scale: "f",
      temp
    });
  };
  render() {
    const scale = this.state.scale;
    const temp = this.state.temp;
    const celsius = scale === "f" ? tryConvert(temp, toCelsius) : temp;
    const farenheit = scale === "c" ? tryConvert(temp, toFarenheit) : temp;
    return (
      <div>
        <TempInput
          scale="c"
          temp={celsius}
          onTempChange={this.handleCelsiusChange}
        />
        <TempInput
          scale="f"
          temp={farenheit}
          onTempChange={this.handleFarenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

const toCelsius = farenheit => {
  return ((farenheit - 32) * 5) / 9;
};

const toFarenheit = celsius => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temp, convert) => {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return "";
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

export default LiftState;
