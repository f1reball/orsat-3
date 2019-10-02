import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Chart from './components/Chart'
import AddRunnerComponent from './components/AddRunnerComponent'

import SideBar from './components/BurgerStack';

import Button from 'react-bootstrap/Button';



function App() {
const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="App">
    <div className="boxWrapper">
    <SideBar/>
    </div>

      <header className="App-header">

        <Chart />


        <Button variant="danger" onClick={(e) => setModalShow(true)}>
            Add New Runner
        </Button>
        <AddRunnerComponent
          show={modalShow}
          onHide={() => setModalShow(false)}
        />



      </header>
    </div>
  );
}


export default App;
