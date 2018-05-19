import React, { Component } from 'react';

import CategoryList   from "../components/CategoryList";
import FeaturedItens  from "../components/FeaturedItens";
import MainProducts   from "../components/MainProducts";
import Slider         from "../components/Slider";

class MainPage extends Component {
  render() {
    return (
      <section>
        <Slider/>
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
    );
  }
}

export default MainPage;
