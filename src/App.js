import React from 'react';
import {CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, Chart as ChartJS} from 'chart.js'
import { Line } from 'react-chartjs-2';
import { externalTooltipHandler } from './helpers';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



// custom tooltip block


// 1 trigger part
const getExternal = (context) => {
 const {chart, tooltip} = context;
//  const tooltipEl = getOrCreateTooltip()
}

const ChartComponent = () => {
  const data = {
    labels: ['dinesh', 'vinay', 'arjun'],
    datasets: [
      {
        label: 'Age',
        data: [23, 25, 56],
        year: [2023,2024,2025],
        fill: false,
        backgroundColor: ['red','blue','yellow'],
        borderColor: '#aaa',
        borderWidth: 1
      }
    ]
  };

  const options = {
    // interaction: {
    //   mode: 'index'
    // },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Year'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Name'
        }
      }
    },
    plugins: {
      tooltip: {
        enabled: false,
        external: externalTooltipHandler
      }
    }
  };

  return (
    <div style={{padding: "250px", paddingTop: "0px"}} >
      <h2>Age Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
