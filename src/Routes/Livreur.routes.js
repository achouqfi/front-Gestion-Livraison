import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useCookies } from "react-cookie";
import LivreurPage from '../Pages/Livreur';

export default function Livreur() {
    const [cookies, setCookie] = useCookies();
    const [path, setPath] = useState({ url: 'dashboard' });
  
    return <div>
        {cookies?.role === 'livreur' && (
          <Router>
           <div className="App">
                <div className="d-flex align-items-stretch">
                  <div className="page-holder bg-gray-100">
                    <Route exact path="/livreur" component={LivreurPage} />
                  </div>
                </div> 
            </div>
          </Router>
      )}
    </div>;
}
