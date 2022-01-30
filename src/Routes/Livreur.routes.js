import React, { useState, useEffect } from 'react';
import SideBar from '../Components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Commande from '../Pages/Commande'
import ResLivraison from '../Pages/ResLivraison';
import Manager from '../Pages/Manager';
import Vehicule from '../Pages/Vehicule';
import Historique from '../Pages/Historique';
import { useCookies } from "react-cookie";
import Prime from '../Pages/Primes';

export default function Livreur() {
    const [cookies, setCookie] = useCookies();
    const [path, setPath] = useState({ url: 'dashboard' });
  
    return <div>
        {cookies?.role === 'livreur' && (
          <Router>
           <div className="App">
                <div className="d-flex align-items-stretch">
                {path?.url === 'dashboard'  && <SideBar /> }
                  <div className="page-holder bg-gray-100">
                    <Route exact path="/commande" component={Commande} />
                    <Route exact path="/prime" component={Prime} /> 
                  </div>
                </div> 
            </div>
          </Router>
      )}
    </div>;
}
