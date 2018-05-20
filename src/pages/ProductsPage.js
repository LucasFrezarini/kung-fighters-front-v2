import React, { Component } from 'react';

import Api          from "../api/Api";
import CategoryList from "../components/CategoryList";
import ProductsList from "../components/ProductsList";

class ProductsPage extends Component {

  constructor() {
    super();

    this.getProducts = this.getProducts.bind(this);
    this.state = {products: [], actualPage: 1, totalPages: 0, category: ""}
  }

  async componentWillMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps) {
    const oldCategory = prevProps.location.query.category;
    const newCategory = this.props.location.query.category;

    if(oldCategory !== newCategory) {
      this.getProducts();
    }
  }

  async getProducts(page = 1) {
    const baseUrl = Api.getBaseUrl();
    const category = this.props.location.query.category;

    try {
      const response = await fetch(`${baseUrl}/public/product?page=${page}&registersPerPage=12&category=${category}`);

      if(!response.ok) {
        const txt = await response.text();
        throw new Error(`Erro ao buscar a listagem de produtos: ${txt} `);
      }

      const json = await response.json();

      this.setState({products: json.products, totalPages: json.totalPages});
    } catch (err) {
      console.error(err);
    }
  }

  changePage(page) {
    this.setState({actualPage: page});
    this.getProducts(page);
  }

  mountPaginationNumbers() {
    let numbers = [];

    for(let i = 1; i <= this.state.totalPages; i++) {
      numbers.push((
        <li className={this.state.actualPage === i ? "active" : ""} onClick={this.changePage.bind(this, i)} key={i}><a>{i}</a></li>
      ))
    }

    return numbers;
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
            {this.state.products.length > 0 ? <ProductsList products={this.state.products}/> : <h1>Nenhum registro encontrado!</h1>}                  
          </div>
          <ul className="pagination">
            {
              this.mountPaginationNumbers()
            }
            {
              this.state.totalPages > 0 ? <li><a href="">&raquo;</a></li> : ""
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default ProductsPage;