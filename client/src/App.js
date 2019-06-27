import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Orders } from './pages';
import { AppWrapper } from './components';

const App = () => {
  return (
    <AppWrapper id="AppWrapper">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/orders" component={Orders} />
      </Router>
    </AppWrapper>
  );
};

export default App;
