import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import style from './doughnutchart.module.css';

const CloudAccountRisk = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const dataValues = [1689, 681, 366, 7253];
  const labels = [
    `Failed (${dataValues[0]})`,
    `Warning (${dataValues[1]})`,
    `Not available (${dataValues[2]})`,
    `Passed (${dataValues[3]})`,
  ];

  const backgroundColors = [
    'rgb(159, 133, 255)',
    'rgb(54, 162, 235)',
    'rgb(61, 100, 255)',
    'rgb(75, 192, 192)',
  ];

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            data: dataValues,
            backgroundColor: backgroundColors,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [dataValues, labels]);

  return (
    <div className={style.chartContainer}>
      <h3 className={style.chartTitle}>Cloud Account Risk Assessment</h3>
      <div className={style.chartContent}>
        <div className={style.chartWrapper}>
          <canvas ref={chartRef} />
        </div>
        <div className={style.chartLabels}>
          {labels.map((label, index) => (
            <div key={index} className={style.labelItem}>
              <span
                className={style.labelColor}
                style={{
                  backgroundColor: backgroundColors[index],
                }}
              ></span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudAccountRisk;
