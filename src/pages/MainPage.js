import React, { Component } from 'react';

import Api            from "../api/Api";
import CategoryList   from "../components/CategoryList";
import FeaturedItens  from "../components/FeaturedItens";
import MainProducts   from "../components/MainProducts";
import Slider         from "../components/Slider";

class MainPage extends Component {

  constructor() {
    super();

    this.loadFeaturedProducts = this.loadFeaturedProducts.bind(this);
    this.state = {featuredProducts: []}
  }

  componentWillMount() {
    this.loadFeaturedProducts();
  }
  
  async loadFeaturedProducts() {
    const baseUrl = Api.getBaseUrl();

    try {
      const response = await fetch(`${baseUrl}/public/product?page=1&registersPerPage=3&featured=true&order=create_date`);

      if(!response.ok) {
        const txt = await response.text();
        throw new Error(`Erro ao buscar a listagem de produtos: ${txt} `);
      }

      const json = await response.json();

      this.setState({featuredProducts: json.products});
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
    <section>
      <Slider/>
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
            <FeaturedItens products={this.state.featuredProducts}/>
            <MainProducts/>           
          </div>
        </div>
    </section>
    );
  }
}

export default MainPage;
