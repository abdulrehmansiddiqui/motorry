import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router, } from "react-router-dom";
// import Navigation from "./Routes/Navigation";
import Login from "./Screens/Login";
import Start from "./Screens/Start";
import Dashboard from "./Screens/Dashboard";
import Form from "./Screens/Form";
import { connect } from "react-redux";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


class App extends Component {
  state = {
    splash: true,
    auth: false
  };

  async componentDidMount() {
    setTimeout(() => {
      this.setState({ splash: false })
    }, 5000)
  }

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
                {this.state.splash ?
                  <Route path="/" component={Start} />
                  : null
                }
                <Route path="/Login" component={Login} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Form" component={Form} />
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
