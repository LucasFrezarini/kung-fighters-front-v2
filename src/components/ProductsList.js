import React, { Component } from "react";

import Panel        from "../components/Panel";
import Api          from "../api/Api";

class ProductsList extends Component {
  
  _imgBaseUrl;

  constructor() {
    super();
    this._imgBaseUrl = Api.getBaseUrl() + "/public/product/images/"
  }

	render() {
		return (
      <section>
        <div className="col-sm-9 padding-right">
            <div className="features_items">{/*features_items*/}
              <h2 className="title text-center">Features Items</h2>
              {this.props.products.map(product => <Panel title={product.name} 
                price={product.price} 
                key={product._id} 
                id={product._id}
                img={product.photos.length > 0 ? this._imgBaseUrl + product.photos[0].file : null}/>)
              }
            </div>
        </div>
        </section>
		);
	}
}

export default ProductsList;