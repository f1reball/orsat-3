import React from 'react';
import logo from './logo.svg';
import './App.css';

import platform from 'platform';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Chart from './components/Chart'
import AddRunnerComponent from './components/AddRunnerComponent'

import SideBar from './components/BurgerStack';

import Button from 'react-bootstrap/Button';

import Stat_bar from './components/Stat_bar'


function App() {
const [modalShow, setModalShow] = React.useState(false);


    //scan through all ports and find the ID for the scanner on both mac and Windows
    //then connect to that port using windows or mac connection

    if(platform.os.family == "Windows"){
        console.log("fpps");
    }

    console.log(platform.os);

  return (
    <div className="App">
    <div className="boxWrapper">
    <SideBar/>
    </div>



      <header className="App-header">

        <Stat_bar/>
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
