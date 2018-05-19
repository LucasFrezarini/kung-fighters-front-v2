import React, { Component } from 'react';

import Api          from "../api/Api";
import CategoryList from "../components/CategoryList";
import ProductsList from "../components/ProductsList";

class ProductsPage extends Component {

  constructor() {
    super();
    this.state = {products: [], page: 1}
  }

  async componentWillMount() {
    const baseUrl = Api.getBaseUrl();
    
    try {
      const response = await fetch(`${baseUrl}/public/product?page=${this.state.page}&registersPerPage=12`);

      if(!response.ok) {
        const txt = await response.text();
        throw new Error(`Erro ao buscar a listagem de produtos: ${txt} `);
      }

      const json = await response.json();

      this.setState({products: json.products});
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <section>
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
            <ProductsList products={this.state.products}/>         
          </div>
          <ul className="pagination">
            <li className="active"><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">&raquo;</a></li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductsPage;