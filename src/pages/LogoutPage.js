import React, { Component } from "react";
import PubSub from "pubsub-js";

class Logout extends Component {

  componentWillMount() {
    localStorage.removeItem('client_token');
    localStorage.removeItem('client_name');
    localStorage.removeItem('client_email');

    PubSub.publish('client credentials changed', {});
    this.props.router.push('/'); //Redireciona para a Index
  }

  render() {
    return null;
  }

}

export default Logout;