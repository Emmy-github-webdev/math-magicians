import React from 'react';
import Header from './Header';
import {shallow} from "enzyme";

it('Header should render without error', () => {
  const headerItems = shallow(<Header />);
  const headerItemWrapper = headerItems.find(`[data-test='header-item']`);
  expect(headerItemWrapper.length).toBe(4);
});
