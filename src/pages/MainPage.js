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
    this.state = {featuredProducts: [], newProducts: [], activeCategory: ""}
  }

  componentWillMount() {
    this.loadFeaturedProducts();
    this.loadMainProducts();
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

  async loadMainProducts(category = null) {
    const baseUrl = Api.getBaseUrl();

    try {
      const response = await fetch(`${baseUrl}/public/product?page=1&registersPerPage=4&order=create_date${
        category ? `&category=${category}` : ''}`);

      if(!response.ok) {
        const txt = await response.text();
        throw new Error(`Erro ao buscar a listagem de produtos: ${txt} `);
      }

      const json = await response.json();

      this.setState({newProducts: json.products});
    } catch (err) {
      console.error(err);
    }
  }

  setCategory(category) {
    this.setState({activeCategory : category});
    this.loadMainProducts(category);
  }

  render() {
    return (
    <section className="container">
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
            <div className="category-tab">
              <div className="col-sm-12">
                <ul className="nav nav-tabs">
                  <li className="active"><a href="#Novidades" data-toggle="tab" onClick={this.setCategory.bind(this, "")}>Novidades</a></li>
                  <li><a href="#Trajes" data-toggle="tab" onClick={this.setCategory.bind(this, "Trajes")}>Trajes</a></li>
                  <li><a href="#Equipamentos" data-toggle="tab" onClick={this.setCategory.bind(this, "Equipamentos")}>Equipamentos</a></li>
                  <li><a href="#Armas" data-toggle="tab" onClick={this.setCategory.bind(this, "Armas")}>Armas</a></li>
                </ul>
              </div>
              <MainProducts products={this.state.newProducts} category={this.state.activeCategory}/>    
            </div>       
          </div>
        </div>
    </section>
    );
  }
}

export default MainPage;
