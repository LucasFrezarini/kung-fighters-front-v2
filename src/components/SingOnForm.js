import React, { Component } from "react";

import Api    from "../api/Api";
import PubSub from "pubsub-js";

class SingOnForm extends Component {

  constructor() {
    super();
    this.state = {email: "", password: ""}
  }

  componentWillMount() {
    if(localStorage.getItem('client_token')) {
      return this.props.router.push('/');
    }
  }

  async login(event) {
    event.preventDefault();

    const opts = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }

    try {
      const res = await fetch(`${Api.getBaseUrl()}/public/client/login`, opts);

      if(!res.ok) {
        const err = await res.text();
        throw new Error(`Erro ao realizar o login do usuário: ${err}`);
      }

      this.setState({email: "", password: ""});

      const json = await res.json();
      
      localStorage.setItem('client_token', json.token);
      localStorage.setItem('client_name', json.client.name);
      localStorage.setItem('client_email', json.client.email);

      PubSub.publish('client credentials changed', {});
      
      alert('Login realizado com sucesso!');

      const redirect = this.props.location.query.redirectedFrom;

      if(redirect)  {
        this.props.router.push(redirect);
      } else {
        this.props.router.push('/');
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  updateValue(state, event) {
    this.setState({[state]: event.target.value});
  }


  render() {
    return (
      <div className="col-sm-4 col-sm-offset-1">
        <div className="login-form">
          <h2> Acesse sua Conta</h2>
          <form onSubmit={this.login.bind(this)}>
            <input type="email" placeholder="Email Address" value={this.state.email} onChange={this.updateValue.bind(this, 'email')}/>
            <input type="password" placeholder="Senha" value={this.state.password} onChange={this.updateValue.bind(this, 'password')}/>
            <button type="submit" className="btn btn-default">Entrar</button>
          </form>
        </div>
      </div>
    );
  }

}

export default SingOnForm;