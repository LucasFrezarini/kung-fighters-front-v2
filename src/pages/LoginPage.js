import React, { Component } from "react";

import SingOnForm from "../components/SingOnForm";
import SingUpForm from "../components/SingUpForm";

class LoginPage extends Component {
  render() {
    return (
      <section id="form">
        <div className="container">
          <div className="row">
              <SingOnForm/>
            <div className="col-sm-1">
              <h2 className="or">OU</h2>
            </div>
            <div className="col-sm-4">
              <SingUpForm/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginPage;