import React from 'react';
import renderer from 'react-test-renderer';
<<<<<<< HEAD
import {Link} from '../Link.react';
=======
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
>>>>>>> 368a45ac4074e87e73098b85a7a9c62cb22b5827


test('renders correctly', () => {
  const Nav = renderer
    .create(<Router><Header /></Router>)
    .toJSON();
  expect(Nav).toMatchSnapshot();
});
