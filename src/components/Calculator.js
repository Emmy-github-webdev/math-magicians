/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((previousState) => calculate(previousState, e.target.innerText));
  }

  render() {
    let val = 0;
    const { total, next } = this.state;
    if (next) {
      val = next;
    } else if (total) {
      val = total;
    }

    return (
      <div className="calc-content">
        <div className="calc-input">{val}</div>
        <div className="calc-row">
          <button className="calc-button" type="button" onClick={this.clickHandler}>AC</button>
          <button className="calc-button" type="button" onClick={this.clickHandler}>+/-</button>
          <button className="calc-button" type="button" onClick={this.clickHandler}>%</button>
          <button className="calc-operator" type="button" onClick={this.clickHandler}>÷</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" type="button" onClick={this.clickHandler}>7</button>
          <button className="calc-button" type="button" onClick={this.clickHandler}>8</button>
          <button className="calc-button" type="button" onClick={this.clickHandler}>9</button>
          <button className="calc-operator" type="button" onClick={this.clickHandler}>X</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" type="button" onClick={this.clickHandler}>4</button>
          <button className="calc-button" type="button" onClick={this.clickHandler}>5</button>
          <button className="calc-button" type="button" onClick={this.clickHandler}>6</button>
          <button className="calc-operator" type="button" onClick={this.clickHandler}>-</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" type="button" onClick={this.clickHandler}>1</button>
          <button className="calc-button" type="button" onClick={this.clickHandler}>2</button>
          <button className="calc-button" type="button" onClick={this.clickHandler}>3</button>
          <button className="calc-operator" type="button" onClick={this.clickHandler}>+</button>
        </div>
        <div className="calc-row">
          <button className="calc-zero" type="button" onClick={this.clickHandler}>0</button>
          <button className="calc-button" type="button" onClick={this.clickHandler}>.</button>
          <button className="calc-operator" type="button" onClick={this.clickHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
