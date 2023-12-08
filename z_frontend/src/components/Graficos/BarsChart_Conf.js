import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function Bars({ interes }) {
    if (!interes || !interes[1]) {
        return null;
    }
    var Medicion = [interes[1]["Interested"][0], interes[1]["Not Interested"][0]];
    var Interes = ["Interesados", "No Interesados"];

    var misoptions = {
        responsive: true,
        animation: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max: 30
            },
            x: {
                ticks: { color: 'rgba(0, 220, 195)' }
            }
        }
    };

    var midata = {
        labels: Interes,
        datasets: [
            {
                label: 'Rango',
                data: Medicion,
                backgroundColor: 'rgba(0, 220, 195, 0.5)'
            }
        ]
    };

    return <Bar data={midata} options={misoptions} />
}