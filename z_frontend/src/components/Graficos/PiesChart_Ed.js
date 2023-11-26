import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive : true,
    maintainAspectRatio: false,
};

var data = {
    labels: ['15-20', '20-25', '25-30', '35-40', '40-45','45-50'],
    datasets: [
        {
            label: 'Edades de los usuarios',
            data: [10, 7, 5, 3, 3, 2],
            backgroundColor: [
                'rgba(255, 0, 0, 0.2)',
                'rgba(255, 206, 10, 0.2)',
                'rgba(255, 22, 255, 0.2)',
                'rgba(0, 0, 192, 0.2)',
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 255, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function Pies() {
    return <Pie data={data} options={options} />
}