import React, { Component } from "react";
import { Link } from "react-router";

class Panel extends Component {
  constructor() {
    super();
  }
	render() {
		return (
			<div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
                <div className="productinfo text-center">
                  <Link to={`/products/${this.props.id}`} >
                    <img src={this.props.img} alt="" style={{maxHeight:170}}/>
                  </Link>
                  <h2>R$ {this.props.price}</h2>
                  <p>{this.props.title}</p>
                  <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                </div>
            </div>
          </div>
        </div>
		);
	}
}

export default Panel;