import React, { useState } from "react";
import "./App.css";
// import { withRouter } from "react-router";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// Component
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Service from "./components/service/service";
import Login from "./components/login/login";

function App(props) {
  const [isLogIn, setIsLogIn] = useState(false);

  const userSignProcess = () => {
    setIsLogIn(true);
    // this.props.history.push("/Home");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {!isLogIn ? (
            <div>
              <Route exact path="/">
                <Login changeIsLogedIn={() => userSignProcess()} />
              </Route>
            </div>
          ) : (
            <div>
              <Header />
              <Route exact path="/Home">
                <Home />
              </Route>
              <Route exact path="/Service">
                <Service />
              </Route>
              <Footer />
            </div>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
