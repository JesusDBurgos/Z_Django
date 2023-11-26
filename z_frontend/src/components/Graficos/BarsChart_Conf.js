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

var Medicion = [18, 7];
var Interes = ["Interesados", "No Interesados"];

var misoptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 0,
            max : 30
        },
        x: {
            ticks: { color: 'rgba(0, 220, 195)'}
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

export default function Bars() {
    return <Bar data={midata} options={misoptions} />
}