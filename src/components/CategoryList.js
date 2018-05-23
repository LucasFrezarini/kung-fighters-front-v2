import React, { Component } from "react";
import { Link } from "react-router";

class CategoryList extends Component {
	render() {
		return (
			<div className="panel-group category-products" id="accordian">{/*category-products*/}
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <Link to="/products?category=Trajes">
                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                Trajes
              </Link>
            </h4>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <Link to="/products?category=Armas">
                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                Armas
              </Link>
            </h4>
          </div>
        </div>
        
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <Link to="/products?category=Equipamentos">
                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                Equipamentos
              </Link>
            </h4>
          </div>
        </div>
        
      </div>
		);
	}
}

export default CategoryList;