import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
    responsive: true,
    maintainAspectRatio: false,
};

export default function Pies({ emociones }) {

    if (!emociones || !emociones[1]) {
        return null;
    }
    var data = {
        labels: Object.keys(emociones[1]).filter(key => key !== 'Interested' && key !== 'Not Interested'),
        datasets: [
            {
                label: 'Emociones de los usuarios',
                data: Object.keys(emociones[1]).filter(key => key !== 'Interested' && key !== 'Not Interested').map(key => emociones[1][key][0]),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(0, 0, 192, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} options={options} />
}