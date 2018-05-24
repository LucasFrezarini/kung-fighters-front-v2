import React, { Component } from "react";

import Api from "../api/Api";
import { Link } from "react-router";

class MainProducts extends Component {

  render() {
    return (
        <div className="tab-content">
          <div className="tab-pane fade active in" id={this.props.category}>
          {
            this.props.products.map(product => (
              <div className="col-sm-3" key={product._id}>
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <Link to={`/products/${product._id}`}>
                      <img src={product.photos.length > 0 ? Api.getEndpointForImages() + product.photos[0].file : null} alt="" />
                    </Link>
                    <h2>R$ {product.price}</h2>
                    <p>{product.name}</p>
                    <Link to={`/products/${product._id}`}>
                      <span className="btn btn-default add-to-cart"><i className="glyphicon glyphicon-th-list"></i>Detalhes</span>
                    </Link>
                  </div>              
                </div>
              </div>
            </div>  
            ))
          }        
          </div>
        </div>
    );
  }

}

export default MainProducts;