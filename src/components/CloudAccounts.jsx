import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import style from './doughnutchart.module.css';

const CloudAccounts = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const dataValues = [2, 2];
  const labels = [
    `Connected (${dataValues[0]})`,
    `Not Connected (${dataValues[1]})`,
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
            backgroundColor: ['rgb(61, 100, 255)', 'rgb(29, 167, 222)'],
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
      <h3 className={style.chartTitle}>Cloud Accounts</h3>
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
                  backgroundColor:
                    index === 0 ? 'rgb(61, 100, 255)' : 'rgb(29, 167, 222)',
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

export default CloudAccounts;
