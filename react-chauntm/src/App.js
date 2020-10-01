import React from 'react';
import HomePage from './containers/homePage';
import TopNav from './components/navigationBar/topNav';
import './fontawesome';
import './App.css';

function App() {
  return (  
    <div className="page-container">
      <TopNav />
      <HomePage />
    </div>
  );
}

export default App;
