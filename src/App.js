import React, { Component } from 'react';

import CategoryList   from "./components/CategoryList";
import FeaturedItens  from "./components/FeaturedItens";
import Footer         from "./components/Footer";
import Header         from "./components/Header";
import MainProducts   from "./components/MainProducts";
import Slider         from "./components/Slider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Slider/>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="left-sidebar">
                  <h2>Categoria</h2>
                  <CategoryList/>
                
                  <div className="shipping text-center">{/*shipping*/}
                    <img src="images/home/FimSideBar.jpg" alt="" />
                  </div>{/*/shipping*/}
                
                </div>
              </div>
              
              <div className="col-sm-9 padding-right">
                <FeaturedItens/>
                <MainProducts/>           
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
