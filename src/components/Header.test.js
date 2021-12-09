import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

it('renders correctly', () => {
  const Nav = renderer
    .create(<Router><Header /></Router>)
    .toJSON();
  expect(Nav).toMatchSnapshot();
});
