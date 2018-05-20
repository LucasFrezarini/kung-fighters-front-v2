import React, { Component } from "react";

import Api from "../api/Api";

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
                    <img src={product.photos.length > 0 ? Api.getEndpointForImages() + product.photos[0].file : null} alt="" />
                    <h2>R$ {product.price}</h2>
                    <p>{product.name}</p>
                    <a className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
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