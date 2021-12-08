import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import QuoteScreen from './screens/QuoteScreen';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <main className="app-wrapper">
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/calculator" element={<CalculatorScreen />} exact />
        <Route path="/quote" element={<QuoteScreen />} exact />
      </Routes>
    </main>
  </Router>
);

export default App;
