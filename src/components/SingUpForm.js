import React, { Component } from "react";
import Api from "../api/Api";

class SingUpForm extends Component {

  constructor() {
    super();
    this.state = {email: "", name: "", password: ""}
  }

  async newClient(event) {
    event.preventDefault();

    const opts = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({
        client: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }
      })
    }

    try {
      const res = await fetch(`${Api.getBaseUrl()}/public/client`, opts);

      if(!res.ok) {
        const err = await res.text();
        throw new Error(`Erro ao cadastrar o usuário: ${err}`);
      }

      this.setState({email: "", name: "", password: ""});
      alert('Cadastro efetuado com sucesso!');
    } catch (error) {
      console.error(error);
    }
  }

  updateValue(state, event) {
    this.setState({[state]: event.target.value});
  }


  render() {
    return (
      <div className="signup-form">
        <h2>Cadastre-se</h2>
        <form onSubmit={this.newClient.bind(this)}>
          <input type="email" placeholder="Email Address" value={this.state.email} onChange={this.updateValue.bind(this, "email")}/>
          <input type="text" placeholder="Nome" value={this.state.name} onChange={this.updateValue.bind(this, "name")} required={true}/>
          <input type="password" placeholder="Senha" value={this.state.password} onChange={this.updateValue.bind(this, "password")} required={true}/>
          <button type="submit" className="btn btn-default">Cadastrar</button>
        </form>
      </div>
    );
  }

}

export default SingUpForm;