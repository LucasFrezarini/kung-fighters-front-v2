import React, { Component } from 'react';
import Footer   from "./components/Footer";
import Header   from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div id="main" className="container">
          {this.props.children} {/* Vai ser o componente passado pelo react-router*/}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
