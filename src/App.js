import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router, } from "react-router-dom";
import Login from "./Screens/Login";
import Start from "./Screens/Start";
import { connect } from "react-redux";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <TransitionGroup>
            <CSSTransition
              key={Math.random()}
              timeout={500}
              classNames="fade"
            >
              <Switch>
                <Route path="/Start" component={Start} />
                <Route path="/Login" component={Login} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Router>
      </React.Fragment >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
  }
}


export default connect(mapStateToProps)(App)
