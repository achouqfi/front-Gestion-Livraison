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
    if(window.location.pathname === '/admin/auth' || window.location.pathname === '/manager/auth' || window.location.pathname === '/livreur/auth' ||window.location.pathname === '/resLivraison/auth'  ){
      setPath({ url: window.location.pathname })
    }
  }, [])
  
  return (
    <div>
      <Router>
          {path?.url === '/admin/auth' && <Route exact path="/admin/auth"  component={Login} />}
          {path?.url === '/manager/auth' && <Route exact path="/manager/auth"  component={Login} />}
          {path?.url === '/livreur/auth' && <Route exact path="/livreur/auth"  component={Login} />}
          {path?.url === '/resLivraison/auth' && <Route exact path="/resLivraison/auth"  component={Login} />}
      </Router>
      <AdminRoutes />
      <ManagerRoutes />
      <ResLivraisonRoutes />
      <LivreurRoutes />
    </div>
  );
}

export default App;
