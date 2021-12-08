import React from 'react';
import Calculator from './Calculator';
import {shallow} from "enzyme";

it('Calculator should render without error', () => {
  const calculator = shallow(<Calculator />);
  const calculatorWrapper = calculator.find(`[data-test='calculatorWrapper']`);
  expect(calculatorWrapper.length).toBe(1);
});