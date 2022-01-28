import SideBar from './Components/SideBar';
import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import Home from './Pages/Home';
import Commande from './Pages/Commande'
import ResLivraison from './Pages/ResLivraison';
import Manager from './Pages/Manager';
import Vehicule from './Pages/Vehicule';
import Livreur from './Pages/Livreurs';
import Historique from './Pages/Historique';
import Prime from './Pages/Primes';
import Login from './Pages/Login';

function App() {
  const [path, setPath] = useState({ url: 'dashboard' });
  useEffect(() => {
    if(window.location.pathname === '/RouteManager' || window.location.pathname === '/admin' || window.location.pathname === '/RouteLivreur' ||window.location.pathname === '/RouteResLivraison'  ){
      setPath({ url: window.location.pathname })
    }
  }, [])
  
  return (
    <div>
      <Router>
        <div className="App">
            <div className="d-flex align-items-stretch">
            {path?.url === 'dashboard' && <SideBar /> }
              <div className="page-holder bg-gray-100">
              {path?.url === '/admin' && <Route exact path="/admin"  component={Login} />}
              {path?.url === '/RouteManager' && <Route exact path="/RouteManager"  component={Login} />}
              {path?.url === '/RouteLivreur' && <Route exact path="/RouteLivreur"  component={Login} />}
              {path?.url === '/RouteResLivraison' && <Route exact path="/RouteResLivraison"  component={Login} />}
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

    </div>
  );
}

export default App;
