import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive: true,
    maintainAspectRatio: false,
};

export default function Pies({ edades }) {
    if (!edades || !edades[0]) {
        return null;
    }

    var data = {
        labels: Object.keys(edades[0]).filter(key => key !== 'users'),
        datasets: [
            {
                label: 'Edades de los usuarios',
                data: Object.keys(edades[0]).filter(key => key !== 'users').map(key => edades[0][key][0]),
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


    return <Pie data={data} options={options} />
}