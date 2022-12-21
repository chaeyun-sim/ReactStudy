import React from "react";

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(data => data.value);
    const maxValue = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {props.dataPoints.map((data, index) => 
                <ChartBar
                    key={index}
                    // data에 id가 없어서 그런지 key가 없다는 에러가 떠서 index로 바꿔줌
                    value={data.value}
                    maxValue={maxValue}
                    label={data.label}
            />)}
        </div>
    )
};

export default Chart;