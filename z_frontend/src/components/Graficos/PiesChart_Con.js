import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive: true,
    maintainAspectRatio: false,
};

export default function Pies({ usuarios }) {
    var data = {
        labels: ['Numero usuarios'],
        datasets: [
            {
                label: 'Usuarios que han tomado sesión',
                data: [usuarios],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return <Pie data={data} options={options} />
}