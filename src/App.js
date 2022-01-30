import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useCookies } from "react-cookie";
import Login from './Pages/Login';
import './App.css';

import AdminRoutes from './Routes/Admin.routes';
import ManagerRoutes from './Routes/Manager.routes';
import ResLivraisonRoutes from './Routes/ResLivraison.routes';
import LivreurRoutes from './Routes/Livreur.routes';


function App() {
  const [cookies, setCookie] = useCookies();
  const [path, setPath] = useState({ url: 'dashboard' });
  useEffect(() => {
    if(window.location.pathname === '/RouteManager' || window.location.pathname === '/admin' || window.location.pathname === '/RouteLivreur' ||window.location.pathname === '/RouteResLivraison'  ){
      setPath({ url: window.location.pathname })
    }
  }, [])
  
  return (
    <div>
      <Router>
          {path?.url === '/admin' && <Route exact path="/admin"  component={Login} />}
          {path?.url === '/RouteManager' && <Route exact path="/RouteManager"  component={Login} />}
          {path?.url === '/RouteLivreur' && <Route exact path="/RouteLivreur"  component={Login} />}
          {path?.url === '/RouteResLivraison' && <Route exact path="/RouteResLivraison"  component={Login} />}
      </Router>
      <AdminRoutes />
      <ManagerRoutes />
      <ResLivraisonRoutes />
      <LivreurRoutes />
    </div>
  );
}

export default App;
