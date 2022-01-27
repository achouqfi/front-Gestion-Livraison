import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from '@material-ui/styles';
import axios from "axios"


function Stats() {
    // const theme = useTheme()
    // const [kilometrage , setkilometrage] = useState([]);
    // const [primePrix , setprimePrix] = useState([]);
    // const [commandeAccepte , setcommandeAccepte] = useState([]);

    // function getData(){
    //     axios
    //         .get('http://localhost:4000/api/commande/')
    //         .then(res=>res.data.forEach(element => {
    //             // if( == "accepte"){
    //                 setcommandeAccepte(element.status)
    //             // }
    //         }))
    //         .catch(err=>console.log(err))
    
    //     axios.get('http://localhost:4000/api/prime/')
    //         .then(res=>res.data.forEach(element => {
    //             setkilometrage(element.chauffeur)
    //         }))
    //         .catch(err=>console.log(err))
    // }

    // useState(()=>{
    //     getData();
    // }, [])


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
                name: "montant total de prime",
                data: [30, 10, 45, 40, 49, 30, 30, 21,33,22,21,22]
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
        series: [10]
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
        series: [2]
    };


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
                                        <span>{optionsRadial.series}</span>
                                        <span class="dot bg-green d-inline-block ms-3"></span>
                                    </h2>
                                    <span class="text-muted text-uppercase small">Commande acceptée</span>
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
                                        <span>{optionsRadial2.series}</span>
                                        <span class="dot bg-green d-inline-block ms-3"></span>
                                    </h2>
                                    <span class="text-muted text-uppercase small">kilometrage</span>
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
