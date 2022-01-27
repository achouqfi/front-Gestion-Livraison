import React from 'react';
import SideBar from './Components/SideBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Commande from './Pages/Commande'
import ResLivraison from './Pages/ResLivraison';
import Manager from './Pages/Manager';
import Vehicule from './Pages/Vehicule';
import Livreur from './Pages/Livreurs';
import Historique from './Pages/Historique';
import Prime from './Pages/Primes';

export default function routes() {
  return <div>
    <Router>
        <div className="App">
            <div className="d-flex align-items-stretch">
            <SideBar />
              <div className="page-holder bg-gray-100">
                <Route exact path="/" component={Home} />
                <Route exact path="/manager" component={Manager} />
                <Route exact path="/commande" component={Commande} />
                <Route exact path="/vehicule" component={Vehicule} />
                <Route exact path="/livreur" component={Livreur} />
                <Route exact path="/reslivraison" component={ResLivraison} />
                <Route exact path="/historique" component={Historique} />
                <Route exact path="/prime" component={Prime} />
              </div>
            </div>
        </div>
      </Router>
  </div>;
}
