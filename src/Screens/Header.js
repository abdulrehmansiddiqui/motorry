import React, { Component } from "react";
import { connect } from "react-redux";
import { get_personal } from "../Redux/actions/user";


class header extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }


  render() {
    return (

      <div>

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    userdata: state.user

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => { dispatch(get_personal()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(header)