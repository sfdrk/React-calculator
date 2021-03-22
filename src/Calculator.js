import { useState } from "react";
import React from "react";

export default function Calculator() {
  const [result, setResult] = useState("");
  // const findIndex = () => {};

  const buttonPressed = (e) => {
    const val = e.target.value;

    if (val === "=") {
      calculate();
    } else if (val === "clear") {
      clear();
    } else if (val === "backspace") {
      // setResult(result.slice(0, -1));
      backspace();
    } else if (val === ".") {
      // let newResult = result.split(/(?=[-+*\/])/);
      if (result.indexOf(".") == -1) {
        setResult(result + val);
      }
    } else if (val === "0") {
      if (result === "") {
        setResult("");
      } else {
        setResult(result + val);
      }
    } else {
      setResult(result + val);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (e) {
      setResult("error");
    }
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div
      className="calculator-contanier"
      style={{ border: "2px solid #8b8686", marginTop: "15vh" }}
    >
      <Display result={result} />
      <div className="keypad-section">
        <div>
          <button className="btn-bg2" value="clear" onClick={buttonPressed}>
            C
          </button>
          <button
            className="btn-bg2"
            id="back"
            value="backspace"
            onClick={buttonPressed}
          >
            CE
          </button>
          <button className="btn-bg2" value="%" onClick={buttonPressed}>
            %
          </button>
          <button className="btn-bg" value="/" onClick={buttonPressed}>
            /
          </button>
        </div>
        <div>
          <button value="1" onClick={buttonPressed}>
            1
          </button>
          <button value="2" onClick={buttonPressed}>
            2
          </button>
          <button value="3" onClick={buttonPressed}>
            3
          </button>
          <button className="btn-bg" value="+" onClick={buttonPressed}>
            +
          </button>
        </div>
        <div>
          <button value="4" onClick={buttonPressed}>
            4
          </button>
          <button value="5" onClick={buttonPressed}>
            5
          </button>
          <button value="6" onClick={buttonPressed}>
            6
          </button>
          <button className="btn-bg" value="-" onClick={buttonPressed}>
            -
          </button>
        </div>
        <div>
          <button value="7" onClick={buttonPressed}>
            7
          </button>
          <button value="8" onClick={buttonPressed}>
            8
          </button>
          <button value="9" onClick={buttonPressed}>
            9
          </button>
          <button className="btn-bg" value="*" onClick={buttonPressed}>
            *
          </button>
        </div>
        <div>
          <button
            value="0"
            onClick={buttonPressed}
            style={{ width: "120px", borderRadius: "27px" }}
          >
            0
          </button>
          <button value="." onClick={buttonPressed}>
            .
          </button>
          <button className="btn-bg" value="=" onClick={buttonPressed}>
            =
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
const Display = (props) => {
  return (
    <div className="display">
      {/* <form>
        <input type="text" value={props.result}>  
        </input>
      </form> */}
      <p>{props.result}</p>
    </div>
  );
};
