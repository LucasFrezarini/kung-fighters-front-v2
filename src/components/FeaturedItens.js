import React, { Component } from "react";

import Api            from "../api/Api";
import PanelSimple    from "../components/PanelSimple";

class FeaturedItens extends Component {
  _imgBaseUrl;

  constructor() {
    super();
    this._imgBaseUrl = Api.getBaseUrl() + "/public/product/images/";
  }

	render() {
		return (
			<div className="features_items">{/*features_items*/}
        <h2 className="title text-center">Itens em Destaque</h2>
        {
          this.props.products.map(product => <PanelSimple title={product.name} 
            price={product.price} 
            key={product._id} 
            id={product._id}
            img={product.photos.length > 0 ? this._imgBaseUrl + product.photos[0].file : null}/>)
        }
      </div>
		);
	}
}

export default FeaturedItens;