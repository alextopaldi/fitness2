import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar, Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

interface WeightChartProps {
    start : number,
    current : number,
    point : number
}

export function WeightChart({start, current, point} : WeightChartProps) {

    const data = {
        labels: ['Прогресс веса'],

        datasets: [
            {
                label: 'Начальное значение',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [start, start],
            },
            {
                label: 'Текущее значение',
                backgroundColor: ['rgba(255, 182, 193, 0.2)', 'rgba(255, 182, 193, 0.2)', 'rgba(255, 182, 193, 0.2)'],
                borderColor: ['rgba(255, 182, 193, 1)', 'rgba(255, 182, 193, 1)', 'rgba(255, 182, 193, 1)'],
                borderWidth: 1,
                hoverBackgroundColor: ['rgba(255, 182, 193, 0.4)', 'rgba(255, 182, 193, 0.4)', 'rgba(255, 182, 193, 0.4)'],
                hoverBorderColor: ['rgba(255, 182, 193, 1)', 'rgba(255, 182, 193, 1)', 'rgba(255, 182, 193, 1)'],
                data: [ current, point],
            },
        ],
      };
    
      // Опции для графика
      const options = {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            max: point,
            min : start - 10
          },
        },
      };

    return(
        <>
        <div className='weight-bar'>
            <Bar data={data} options={options} />
        </div>
        </>
    )
}