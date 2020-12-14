import React, { Component } from "react";
import { connect } from "react-redux";


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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(header)