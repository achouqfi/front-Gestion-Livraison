import React from 'react'
// import {  LineChart, Line, Label, XAxis, YAxis, PieChart, Pie, ResponsiveContainer } from 'recharts'
import Chart from 'react-apexcharts'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from '@material-ui/styles';

function createData(time, amount){
    return {time, amount}
}

const data = [        
    {time: '00:00', amount: 0},
    {time: '03:00', amount: 300},
    {time: '06:00', amount: 600},
    {time: '09:00', amount: 800},
    {time: '12:00', amount: 1500},
    {time: '15:00', amount: 2000},
    {time: '18:00', amount: 2400},
    {time: '21:00', amount: 2400},
    {time: '03:00', amount: 300},
    {time: '06:00', amount: 600},
    {time: '09:00', amount: 800},
    {time: '24:00', amount: undefined}
];

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];
  
  const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
];
  
const state = {
    
    options: {
        chart: {
            id: "basic-bar"
        },
        colors: ["#00d9ff"],
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ["Janvier","Févrir","Mars","Avril","Mai","Juin","Juill","Août","Septe","Octo","Nove","Déce "]
        }, 
        stroke: {
            curve: 'smooth'
        }
        
    },
    series: [
        {
            name: "series-1",
            data: [30, 10, 45, 40, 49, 30, 70, 21,33,22,21,22]
        }
    ]
};


const optionsRadial = {
    series: [50],
    
    options: { 
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "60%",
                    background: "transparent",
                    image: undefined
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        show: false
                    }
                }
            }
        },
        colors: ["#00d9ff"],
        labels: ["Cricket"],
        legend: {
          show: false,
         
        },
      },
    series: [40]
};


const optionsRadial2 = {
    series: [50],
    
    options: { 
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "60%",
                    background: "transparent",
                    image: undefined
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        show: false
                    }
                }
            }
        },
        colors: ["#004030"],
        labels: ["Cricket"],
        legend: {
          show: false,
         
        },
      },
    series: [82]
};

function Stats() {
    const theme = useTheme()

    

    return (
       
        <div className="row">
            

            <div className="mb-4 mb-lg-0 col-lg-7">
                <div className="h-100 card">
                    <div className="card-header">
                        <h4 class="card-heading">Statistique des prime par mois</h4>
                    </div>
                    <div className="card-body">
                        <h4 className="header-title mb-3">Prime par mois :</h4>
                        <Chart
                            options={state.options}
                            series={state.series}
                            type="area"
                            width="100%"
                        />
                    
                    </div>
                </div>
            </div>
            <div className="mb-4 mb-lg-0 col-lg-5">
                
                <div className="h-50 pb-4 pb-lg-2">
                    <div className="h-100 card">
                        <div className="d-flex card-body">
                            
                            <div className="w-100 align-items-center row">
                                <div className="mb-4 mb-sm-0 col-sm-5">
                                    <h2 class="mb-0 d-flex align-items-center h1">
                                        <span>86.4</span>
                                        <span class="dot bg-green d-inline-block ms-3"></span>
                                    </h2>
                                    <span class="text-muted text-uppercase small">Commande acceptée par mois</span>
                                    <hr />
                                </div>
                                <div className="col-sm-7">
                                    <Chart 
                                        options = {optionsRadial.options}
                                        series = {optionsRadial.series}
                                        type = "radialBar"
                                        height = {290}
                                    />
                                </div>
                    
                            </div>
                        </div>
                    </div>
                </div>
             
                <div className="h-50 pb-4 pb-lg-2">
                    <div className="h-100 card">
                        <div className="d-flex card-body">
                            
                            <div className="w-100 align-items-center row">
                                <div className="mb-4 mb-sm-0 col-sm-5">
                                    <h2 class="mb-0 d-flex align-items-center h1">
                                        <span>86.4</span>
                                        <span class="dot bg-green d-inline-block ms-3"></span>
                                    </h2>
                                    <span class="text-muted text-uppercase small">kilometrage par mois</span>
                                    <hr />
                                </div>
                                <div className="col-sm-7">
                                    <Chart 
                                        options = {optionsRadial2.options}
                                        series = {optionsRadial2.series}
                                        type = "radialBar"
                                        height = {290}
                                    />
                                </div>
                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Stats
