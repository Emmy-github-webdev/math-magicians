/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [output, setOutput] = useState({
    total: 0,
    next: 0,
  });

  let val = 0;
  if (output.next) {
    val = output.next;
  } else if (output.total) {
    val = output.total;
  }

  const result = (val) => {
    const resultState = calculate(output, val);
    setOutput(resultState);
  };

  const clickHandler = (e) => {
    const ButtonName = e.target.innerText;
    result(ButtonName);
  };

    return (
      <div className="calc-content">
        <div className="calc-input">{val}</div>
        <div className="calc-row">
          <button className="calc-button" type="button" onClick={clickHandler}>AC</button>
          <button className="calc-button" type="button" onClick={clickHandler}>+/-</button>
          <button className="calc-button" type="button" onClick={clickHandler}>%</button>
          <button className="calc-operator" type="button" onClick={clickHandler}>÷</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" type="button" onClick={clickHandler}>7</button>
          <button className="calc-button" type="button" onClick={clickHandler}>8</button>
          <button className="calc-button" type="button" onClick={clickHandler}>9</button>
          <button className="calc-operator" type="button" onClick={clickHandler}>x</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" type="button" onClick={clickHandler}>4</button>
          <button className="calc-button" type="button" onClick={clickHandler}>5</button>
          <button className="calc-button" type="button" onClick={clickHandler}>6</button>
          <button className="calc-operator" type="button" onClick={clickHandler}>-</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" type="button" onClick={clickHandler}>1</button>
          <button className="calc-button" type="button" onClick={clickHandler}>2</button>
          <button className="calc-button" type="button" onClick={clickHandler}>3</button>
          <button className="calc-operator" type="button" onClick={clickHandler}>+</button>
        </div>
        <div className="calc-row">
          <button className="calc-zero" type="button" onClick={clickHandler}>0</button>
          <button className="calc-button" type="button" onClick={clickHandler}>.</button>
          <button className="calc-operator" type="button" onClick={clickHandler}>=</button>
        </div>
      </div>
    );
};

export default Calculator;
