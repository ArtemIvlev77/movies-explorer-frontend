import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header bgColor="grey" textColor="white" />
          <Main />
          <Footer />
        </Route>  
        <Route exact path="/movies">
          <Header bgColor="white" textColor="black"/>
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
        <Header bgColor="white" textColor="black"/>
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/profile">
        <Header bgColor="white" textColor="black"/>
          <Profile />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
