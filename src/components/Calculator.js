/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-content">
        <div className="calc-input">0</div>
        <div className="calc-row">
          <button className="calc-button" type="button">AC</button>
          <button className="calc-button" type="button">+/-</button>
          <button className="calc-button" type="button">%</button>
          <button className="calc-operator" type="button">÷</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" type="button">7</button>
          <button className="calc-button" type="button">8</button>
          <button className="calc-button" type="button">9</button>
          <button className="calc-operator" type="button">X</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" type="button">4</button>
          <button className="calc-button" type="button">5</button>
          <button className="calc-button" type="button">6</button>
          <button className="calc-operator" type="button">-</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" type="button">1</button>
          <button className="calc-button" type="button">2</button>
          <button className="calc-button" type="button">3</button>
          <button className="calc-operator" type="button">+</button>
        </div>
        <div className="calc-row">
          <button className="calc-zero" type="button">0</button>
          <button className="calc-button" type="button">.</button>
          <button className="calc-operator" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
