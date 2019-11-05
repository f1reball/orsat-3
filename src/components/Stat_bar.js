import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Stat_bar extends Component{

    componentDidMount(){
        console.log("works");
    }

    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['this', 'is'],
                datasets: [
                    {
                        data:[8, 2],
                        pointBackgroundColor:['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                        pointBorderColor:['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                        borderColor: 'rgba(255, 255, 255, 1)',
                        backgroundColor: ['rgba(0, 123, 255, 1)', 'rgba(23, 162, 184, 1)'],
                        fill: true,
                        lineTension: '0.4'
                    }
                ]
            }
        }
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    <div>
                    <Doughnut data={this.state.chartData}
                    options={{
                        maintainAspectRatio: true,
                        responsive: true,
                        legend:{display: false},
                        events: false
                    }}
                    />
                    </div>
                    </Col>
                    <Col>2</Col>
                    <Col>3</Col>
                    <Col>4</Col>
                    <Col>5</Col>
                </Row>
            </Container>
        )
    }
}

export default Stat_bar;
