import React from "react";
import "./App.css";
import "./Store.css";
import "./Employee.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Location from "./Location.js";
import Accesories from "./Accesories";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Signin from "./Auth/SignIn";
import Feedback from "./FeedBack";
import Status from "./Status";
import Signup from "./SignupForm";
import Account from "./Account/AccountMain";
import SteamCart from "./Services/Steam/components/Cart";
import SteamComponent from "./Services/Steam/SteamComponent";
import Inventory from "./Inventory";
import Home from "./Home";
import Payment from "./Payment/Payment";
import AccesoriesExpanded from "./AccesoriesExpanded";
import Navbarnew from "./NavbarNew";
import BottomNavbar from "./BottomNavbar";
import Header from "./HeaderCustomer";
import ForumHome from "./Forum/ForumHome";
import Threadexpand from "./Forum/ThreadExpand";
import NewsExpanded1 from "./Forum/NewsExpand1";
import ProductHome from "./Services/Steam/components/ProductHome";
import otp from "./otpVerify";
import Forumcreate from "./Forum/ForumCreate";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor:
          "linear-gradient(144.37deg, rgba(240, 92, 45, 0.08) 0%, rgba(255, 255, 255, 0) 60.15%), #121212"
      }}
    >
      <Header />
      <BrowserRouter>
        <Navbarnew />

        <Switch>
          <Route exact path="/navbarnew" component={Navbarnew} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/map" component={Location} />
          <Route exact path="/accesories" component={Accesories} />
          <Route
            exact
            path="/services/:detail"
            component={AccesoriesExpanded}
          />
          <Route exact path="/payment/feedback" component={Feedback} />
          <Route exact path="/payment/status" component={Status} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/services" component={SteamComponent} />
          <Route path="/steamcart" component={SteamCart} />
          <Route exact path="/" component={Home} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/bill/payment" component={Payment} />
          <Route exact path="/forum" component={ForumHome} />
          <Route exact path="/forum/thread" component={Threadexpand} />
          <Route
            exact
            path="/forum/thread/:content"
            component={NewsExpanded1}
          />
          <Route exact path="/products" component={ProductHome} />
          <Route exact path="/signin/verify" component={otp} />
          <Route exact path="/forumcreate" component={Forumcreate} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <BottomNavbar />
      </BrowserRouter>
    </div>
  );
}
export default App;
