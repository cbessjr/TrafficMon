import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewReport from "./pages/NewReport";
import NewUser from "./pages/NewUser";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import './App.css';
import AppContext from './AppContext'

class App extends Component {
  state ={
    user: { anonymous: true },
  }

  setUser = user => this.setState({ user })

  render() {
    return (
      <AppContext.Provider value={{ 
        setUser: this.setUser,
        user: this.state.user,
      }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new-report" component={NewReport} />
            <Route exact path="/new-user" component={NewUser} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
