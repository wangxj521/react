import React from 'react';
import './App.css';
import { Calculator } from './components/calculator.js'
import { Game } from './components/game.js'
import { Pagenation } from './components/pagenation.js'
function App() {
  return (
    <div className="App">
      <Calculator />
      <Game />
      <Pagenation />
    </div>
  );
}

export default App;
