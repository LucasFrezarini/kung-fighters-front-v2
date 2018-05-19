import React, { Component } from "react";

class FeaturedItens extends Component {
	render() {
		return (
			<div className="features_items">{/*features_items*/}
        <h2 className="title text-center">Itens em Destaque</h2>
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
                <div className="productinfo text-center">
                  <img src="images/home/product1.jpg" alt="" />
                  <h2>R$ 180</h2>
                  <p>Lança - Kwan Tao</p>
                  <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                </div>
            </div>
            <div className="choose">
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/product2.jpg" alt="" />
                <h2>R$ 80</h2>
                <p>Punhal Duplo</p>
                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/product3.jpg" alt="" />
                <h2>R$210</h2>
                <p>Facão Longo</p>
                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default FeaturedItens;