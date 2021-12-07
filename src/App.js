import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import QuoteScreen from './screens/QuoteScreen';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} exact />
      <Route path="/calculator" element={<CalculatorScreen />} exact />
      <Route path="/quotes" element={<QuoteScreen />} exact />
    </Routes>
  </BrowserRouter>
);

export default App;
