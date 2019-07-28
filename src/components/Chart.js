import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

class Chart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['this', 'is', 'a', 'test'],
                datasets: [
                    {
                        label: 'Test label',
                        data:[1, 5, 3, 8],
                        backgroundColor:['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)']
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
                    legend:{display: false}
                }}
                />
            </div>
        )
    }
}

export default Chart;
