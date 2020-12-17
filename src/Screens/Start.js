import React, { Component } from "react";
import { connect } from "react-redux";

class Start extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.props.history.push("Login") 
    }, 5000)
  }

  render() {

    return (
      <div className="start animate__animated animate__fadeIn ">
      <div className="startbg">
        <div className="loginbtn animate__animated animate__fadeIn animate__delay-2s">
          <span onClick={() => { this.props.history.push("Login") }} className="abcd btn btn-dark">login</span>
        </div>

        <div className="logo animate__animated animate__fadeIn animate__delay-1s">
        </div>


        <h1 className="stxt animate__animated animate__fadeIn animate__delay-3s">Welcome</h1>
        <h1 className="stxt animate__animated animate__fadeIn animate__delay-4s">To</h1>
        <h1 className="stxt animate__animated animate__fadeIn animate__delay-5s">Motorry</h1>


      </div>
      </div>
    );
  }
}

export default connect(null)(Start)
