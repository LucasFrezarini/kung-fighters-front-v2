import React, { Component } from 'react';

import CategoryList from "../components/CategoryList";
import ProductsList from "../components/ProductsList";


class ProductsPage extends Component {
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
            <ProductsList/>         
          </div>
        </div>
      </section>
    );
  }
}

export default ProductsPage;