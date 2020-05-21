import React, { Component } from "react";
import "./App.css";
import "./Store.css";
import "./Employee.css";
import Navbar from "./Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Location from "./Location.js";
import CustomerService from "./CustomerService.js";
import Accesories from "./Accesories";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SignupForm from "./SignupForm";
import Signin from "./SignIn";
import Stripe from "./StripeBtn";
import Steamcleaning from "./Services/SteamCleaning";
import Ecuremapping from "./Services/EcuRemapping";
import Serviceoffer from "./Services/ServiceOffer";
import ServiceMain from "./Services/ServiceMain";
import ServiceOffer from "./Services/ServiceOffer";
import Feedback from "./FeedBack";
import Status from "./Status";
import Account from "./Account/AccountMain";
import EcuCart from "./Services/ECU/components/Cart";
import SteamCart from "./Services/Steam/components/Cart";
import OfferCart from "./Services/Offer/components/Cart";
import SteamComponent from "./Services/Steam/SteamComponent";
import EcuComponent from "./Services/ECU/EcuComponent";
import OfferComponent from "./Services/Offer/OfferComponent";
import CeramicCoating from "./Services/CeramicCoating";
import Connected from "./Services/ConnectedSolutions";
import Inventory from "./Inventory";
import Home from "./Home";
import Payment from "./Payment/Payment";
import AccesoriesExpanded from "./AccesoriesExpanded";
import Navbarnew from "./NavbarNew";
import BottomNavbar from "./BottomNavbar";
import Header from "./HeaderCustomer";
import ForumHome from "./Forum/ForumHome";
import Threadexpand from "./Forum/ThreadExpand";
import ForumCreate from "./Forum/ForumCreate";
import ForumClub from "./Forum/ForumClubHome";
import NewsExpanded from "./Forum/NewsExpanded";
import NewsExpanded1 from "./Forum/NewsExpand1";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Navbarnew />

        <Switch>

          <Route exact path="/navbarnew" component={Navbarnew}/>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/map" component={Location} />
          <Route exact path="/service" component={CustomerService} />
          <Route exact path="/accesories" component={Accesories} />
          <Route
            exact
            path="/accesoriesexpanded"
            component={AccesoriesExpanded}
          />
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
          <Route exact path="/bill/payment" component={Payment} />
          <Route exact path="/forum" component={ForumHome} />
          <Route exact path="/forum/thread" component={Threadexpand} />
          <Route exact path="/forum/create" component={ForumCreate}/>
          <Route exact path="/forum/clubhome" component={ForumClub}/>
          <Route exact path="/forum/thread/news" component={NewsExpanded}/>
          <Route exact path="/forum/thread/news1" component={NewsExpanded1}/>
        </Switch>
        <BottomNavbar/>
      </BrowserRouter>
    </div>
  );
}
export default App;
