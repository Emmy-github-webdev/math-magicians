/* eslint-disable linebreak-style */
import React from 'react';
import './CalculatorScreen.css';
import Calculator from '../components/Calculator';

const CalculatorScreen = () => (
  <div className="calculatorscreen-container">
    <div className="calculatorscreen-text">
      <p>Let do some math!</p>
    </div>
    <div className="calculatorscreen-calc">
      <Calculator />
    </div>
  </div>
);

export default CalculatorScreen;
