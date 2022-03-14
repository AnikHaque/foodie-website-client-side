import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Register from './components/login/Register';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/About';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/privateroute/PrivateRoute';
import MenuDetails from './components/menudetails/MenuDetails';
import MakeAdmin from './components/makeadmin/MakeAdmin';
import MyOrders from './components/myorders/MyOrders';
import Orders from './components/orders/Orders';
import Details from './components/details/Details';
import Menu from './components/menu/Menu';
import Gallary from './components/gallary/Gallary';
import Contact from './components/contact/Contact';
import AddMenu from './components/addmenu/AddMenu';
import Footer from './components/footer/Footer';
import Reservation from './components/reservation/Reservation';
import MyReservation from './components/myreservation/MyReservation';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path="/">
<Home></Home>
       </Route>
       <Route exact path="/home">
<Home></Home>
       </Route>
       <Route exact path="/login">
<About></About>
       </Route>
       <Route exact path="/menu">
<Menu></Menu>
       </Route>
       <Route exact path="/addmenu">
<AddMenu></AddMenu>
       </Route>
       <Route exact path="/gallary">
<Gallary></Gallary>
       </Route>
       <Route exact path="/contact">
<Contact></Contact>
       </Route>
       
       <Route exact path="/register">
<Register></Register>
       </Route>
       <Route exact path="/makeadmin">
<MakeAdmin></MakeAdmin>
       </Route>
       <Route exact path="/orders">
<Orders></Orders>
       </Route>
       <Route exact path="/myorders">
<MyOrders></MyOrders>
       </Route>
       <Route exact path="/reservation">
<Reservation></Reservation>
       </Route>
       <Route exact path="/myreservation">
<MyReservation></MyReservation>
       </Route>
       <PrivateRoute exact path ="/details">
<Details></Details>
       </PrivateRoute>
       <PrivateRoute exact path="/menudetails/:id">
          <MenuDetails></MenuDetails>
        </PrivateRoute>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
