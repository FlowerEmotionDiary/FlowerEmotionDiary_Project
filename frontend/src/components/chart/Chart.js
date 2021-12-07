import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
    labels: ['중립', '슬픔', '혐오', '분노', '놀람', '기쁨', '공포'],
    datasets: [
        {
            label: '# of Votes',
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
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderWidth: 0.05,
        },
    ],
};

export const options = {
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: '감정차트'
        }
    },
    animateRotate: true,
}

export default function Chart() {
    return <Doughnut data={data} options={options} />

}
