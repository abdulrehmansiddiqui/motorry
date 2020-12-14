import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../Redux/actions/auth";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,

      email: "",
      password: "",
      Error: ""
    };
  }

  Loginfunction = () => {
    this.props.history.push("Start")
  };


  render() {

    return (
      <div className="login animate__animated animate__fadeIn ">
      <div className="loginbg">
        <div class="row" style={{ height: '100%' }}>
          <div class="col-lg-7"></div>
          <div class="col-lg-5 bg-white p-5 animate__animated animate__fadeIn animate__delay-2s" >

            <p className="px-2 text-center">{this.state.Error ? this.state.Error : "Log in to your account"}</p>
            <div className="mt-5 animate__animated animate__fadeIn animate__delay-3s">
              <label>Email</label>
              <input onChange={val => { this.setState({ email: val.target.value }) }}
                value={this.state.email} placeholder="Enter email" type="email" className="form-control" required
              />
            </div>

            <div className="mt-4 animate__animated animate__fadeIn animate__delay-4s">
              <label>Password</label>
              <input onChange={val => { this.setState({ password: val.target.value }) }}
                value={this.state.password} placeholder="Password" type="password" className="form-control" required
              />
            </div>
            <div class="form-check mt-4 animate__animated animate__fadeIn animate__delay-4s">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>

            <button  onClick={this.Loginfunction.bind(this)} className="btn btn-dark btn-block p-2 mt-4 rounded-lg animate__animated animate__fadeIn animate__delay-5s">Login</button>


            <p className="text-center mt-4 animate__animated animate__fadeIn animate__delay-5s">Forgot password?</p>
            <div className="line"></div>
            <p className="text-center mt-4 animate__animated animate__fadeIn animate__delay-5s">Don't have an account? Sign up password?</p>

          </div>
        </div>

      </div>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getUser: () => { dispatch(get_personal()) }
  }
}
export default connect(null, mapDispatchToProps)(Login)
