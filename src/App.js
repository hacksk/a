import React from 'react';
import './App.css';
import './Store.css';
import './Employee.css';
import Navbar from './Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Location from './Location.js';
import CustomerService from './CustomerService.js';
import Accesories from './Accesories';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SignupForm from './SignupForm';
import Signin from './SignIn';
import Stripe from './StripeBtn';
import Steamcleaning from './Services/SteamCleaning';
import Ecuremapping from './Services/EcuRemapping';
import Serviceoffer from './Services/ServiceOffer';
import ServiceMain from './Services/ServiceMain';
import ServiceOffer from './Services/ServiceOffer';
import Feedback from './FeedBack';
import Status from './Status';
import Account from './Account/AccountMain';
import EcuCart from './Services/ECU/components/Cart';
import SteamCart from './Services/Steam/components/Cart';
import OfferCart from './Services/Offer/components/Cart';
import SteamComponent from './Services/Steam/SteamComponent';
import EcuComponent from './Services/ECU/EcuComponent';
import OfferComponent from './Services/Offer/OfferComponent';
import CeramicCoating from './Services/CeramicCoating';
import Connected from './Services/ConnectedSolutions';
import Inventory from './Inventory';
import Home from './Home';
import SignupTest from './SignupTest';
import Navbarnew from './NavbarNew';
import StoreHome from "./StoreComponents/StoreHome";
import Addemployee from "./StoreComponents/AddEmployee";
import VendorLists from "./StoreComponents/VendorLists";
import ProductLists from "./StoreComponents/ProductLists";
import InventoryLists from "./StoreComponents/InventoryLists";
import ServiceLists from "./StoreComponents/ServiceLists"
import EmployeeHome from "./EmployeeComponents/EmployeeHome";
import EmployeeSettings from "./EmployeeComponents/EmployeeSettings";

function App() {
  return (
    <div className="App">
        <Navbarnew />
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/map" component={Location} />
          <Route exact path="/service" component={CustomerService} />
          <Route exact path="/accesories" component={Accesories} />
          <Route
            exact
            path="/service/steamcleaning"
            component={Steamcleaning}
          />
          <Route exact path="/service/ecuremapping" component={Ecuremapping} />
          <Route
            exact
            path="/service/serviceoffering"
            component={ServiceOffer}
          />
          <Route exact path="/payment/feedback" component={Feedback} />
          <Route exact path="/payment/status" component={Status} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/steamhome" component={SteamComponent} />
          <Route exact path="/ecuhome" component={EcuComponent} />
          <Route exact path="/offerhome" component={OfferComponent} />
          <Route path="/steamcart" component={SteamCart} />
          <Route path="/ecucart" component={EcuCart} />
          <Route path="/offercart" component={OfferCart} />
          <Route exact path="/" component={Home} />
          <Route exact path="/service/ceramic" component={CeramicCoating} />
          <Route exact path="/service/connected" component={Connected} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="./storehome" component={StoreHome}/>
          <Route exact path="./storeproduct" component={ProductLists}/>
          <Route exact path="./storevendor" component={VendorLists}/>
          <Route exact path="./storeinventory" component={InventoryLists}/>
          <Route exact path="./storeservice" component={ServiceLists}/>
        </Switch>
      </BrowserRouter>
      {/* <SignupTest/> */}
      {/* <EmployeeHome/> */}
    </div>
  );
}
export default App;
