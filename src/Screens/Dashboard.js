import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,

      email: "",
      password: "",
      Error: ""
    };
  }


  render() {

    return (

      <label>Password</label>
      
    );
  }
}

export default connect(null)(Dashboard)
