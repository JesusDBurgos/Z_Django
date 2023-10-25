//Librerías de estados en React
import React from 'react';
import { useState } from "react";

//Librerías de Data
//import { Data } from "./Data";
import DataUser from './DataUser';
//import "./styles.css";

//Librerías de graficas en React
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//const labels = ['Masculino', 'Femenino'];

function RData () {
  const [chartData, setChartData] = useState({
    labels: DataUser.map((data) => data.DateCreated), 
    datasets: 
    [
      {
        label: "Users Gained ",
        data: DataUser.map((data) => data.Age),
        backgroundColor: 
        [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
       <div>
            {/* Aquí incluiré las gráficas (un componente por cada ejemplo). */}
            <h1 className="bg-info text-center font-monospace fw-bold lh-base">Gráficas ChartJS</h1>
            <div>
                <p className="m-2"><b>Ejemplo #1: </b>Gráfico de líneas básico</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"230px"}}>
                </div>
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b>Ejemplo #2: </b>Gráfico de barras</p>
                <div className="bg-light mx-auto px-2 border border-2 border-primary" style={{width:"450px", height:"225px"}}>
                </div>
            </div>
            <hr className="mt-3 mb-2"/>
            <div>
                <p className="m-2"><b>Ejemplo #3: </b>Gráfico circular</p>
                <div className="bg-light mx-auto border border-2 border-primary" style={{width:"450px", height:"250px"}}>
                    <div style={{width:"100%", height:"100%", padding:"10px 0"}}>                      
                    </div>
                </div>
            </div>
        </div>
  );
}

export default RData;

/*
import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};


function RData() {
  return (
    <div>
        <h2>Grafico de Dona Example</h2>
        <Doughnut data={data} />
    </div>
  );
}

export default RData;



/*

//Chart.register(CategoryScale);
 
export default function App() 
{
  const [chartData, setChartData] = useState(
    {
    labels: DataUser.map((data) => data.DateCreated), 
    datasets: [
      {
        label: "Users Gained ",
        data: DataUser.map((data) => data.Age),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
    <div>
      <p>Using Chart.js in React</p>
    </div>
  );
}





*/