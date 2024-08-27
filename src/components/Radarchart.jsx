import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const RadarChart = () => {
  const totalVulnerabilities = 1000;

  const dataValues = [400, 300, 200, 100];

  const dataLabels = [
    `Critical (${dataValues[0]})`,
    `High (${dataValues[1]})`,
    `Medium (${dataValues[2]})`,
    `Low (${dataValues[3]})`,
  ];

  const data = {
    labels: dataLabels,
    datasets: [
      {
        label: `${totalVulnerabilities} Vulnerability Distribution`,
        data: dataValues,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: Math.max(...dataValues),
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.label}: ${tooltipItem.raw} (${(
              (tooltipItem.raw / totalVulnerabilities) *
              100
            ).toFixed(2)}%)`,
        },
      },
    },
  };

  return (
    <div style={{ width: '300px', padding: '20px' }}>
      <h3>Image Risk Assessment</h3>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
