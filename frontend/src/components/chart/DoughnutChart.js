import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './DoughnutChart.scss'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['중립', '슬픔', '혐오', '분노', '놀람', '기쁨', '공포'],
    datasets: [
        {
            data: [0.2, 0.3, 0.1, 0.1, 0.03, 0.28],
            backgroundColor: [
                '#BFCBA8',
                '#5B8A72',
                '#56776C',
                '#464F41',
                '#F0BB62',
                '#F4EEA9',
                '#FCF8E8'
            ],

            borderWidth: 0,
        },
    ],
};

export const options = {
    animation: {
        duration: 2500
    },
    responsive: false,
    plugins: {
        legend: {
            maxWidth: 2,
            position: 'bottom',
            labels: {
                fontSize: 5,
                display: false,
                usePointStyle: true,
                padding: 15,
            }
        },
    },
}


export default function DoughnutChart() {
    return <div id='dough'>
        <Doughnut data={data} options={options} height={300} width={300} />
    </div>

}
