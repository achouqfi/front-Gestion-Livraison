import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Manager from './Pages/Manager'
import ResLivraison from './Pages/ResLivraison';
import Livreurs from './Pages/Livreurs';
import Commande from './Pages/Commandes';
import Vehicule from './Pages/Vehucules';
import Primes from './Pages/Primes';
import NavBar from './Component/Navbar';
import SideBar from './Component/SideBar';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
        <div className="d-flex align-items-stretch">
        <SideBar />
          <div className="page-holder bg-gray-100">
            <Route exact path="/" component={Home} />
            <Route exact path="/manager" component = {Manager} />
            <Route exact path="/resLivraison" component={ResLivraison} />
            <Route exact path="/livreurs" component={Livreurs} />
            <Route exact path="/commande" component={Commande} />
            <Route exact path="/vehicule" component={Vehicule} />
            <Route exact path="/primes" component={Primes} />
          </div> 
        </div>
    </div>
  </Router>
  );
}

export default App;
