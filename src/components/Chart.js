import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

class Chart extends Component{

    componentDidMount(){
        console.log("works");
    }

    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['this', 'is', 'a', 'test'],
                datasets: [
                    {
                        label: 'Test label',
                        data:[1, 5, 3, 8],
                        pointBackgroundColor:['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                        pointBorderColor:['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                        borderColor: 'rgba(255, 206, 86, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 1)',
                        fill: true,
                        lineTension: '0.4'
                    }
                ]
            }
        }
    }

    render(){
        return(
            <div className="chart">
                <Line
                data={this.state.chartData}
                height={500}
                width={900}
                options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    legend:{display: false},
                }}
                />
            </div>
        )
    }
}

export default Chart;
