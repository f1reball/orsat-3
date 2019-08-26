import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'

import Button from 'react-bootstrap/Button';




function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Chart />

        <Button variant="danger">Primary</Button>

      </header>
    </div>
  );
}




export default App;
