import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

it('Calculator should render without error', () => {
  const calculator = shallow(<Calculator />);
  const calculatorWrapper = calculator.find('[data-test=\'calculatorWrapper\']');
  expect(calculatorWrapper.length).toBe(1);
});
