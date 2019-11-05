import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class Stat_bar extends Component{

    componentDidMount(){
        console.log("works");
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col><CircularProgressbar value={66} text={`${66} km`} /></Col>
                    <Col><CircularProgressbar
  value={80}
  text={`${80}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',
    width: 50,
    // Colors
    pathColor: `rgba(62, 152, 199, ${80 / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/></Col>
                    <Col>3</Col>
                    <Col>4</Col>
                    <Col>5</Col>
                </Row>
            </Container>
        )
    }
}

export default Stat_bar;
