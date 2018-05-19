import React, { Component } from "react";

class CategoryList extends Component {
	render() {
		return (
			<div className="panel-group category-products" id="accordian">{/*category-products*/}
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                Trajes
              </a>
            </h4>
          </div>
          <div id="sportswear" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li><a href="#">Yi-Fus </a></li>
                <li><a href="#">Uniformes Tradicionais </a></li>
                <li><a href="#">Trajes de Combate </a></li>
                <li><a href="#">Faixas</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                Armas
              </a>
            </h4>
          </div>
          <div id="mens" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li><a href="#">Bastões</a></li>
                <li><a href="#">Lançãs</a></li>
                <li><a href="#">Armas Cortantes</a></li>
                <li><a href="#">Armas Articuladas</a></li>
                <li><a href="#">Armas do Jackie Chan</a></li>
                <li><a href="#">Armas Saotome</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                Equipamentos
              </a>
            </h4>
          </div>
          <div id="womens" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li><a href="#">Luvas</a></li>
                <li><a href="#">Ataduras</a></li>
                <li><a href="#">Protetores</a></li>
                <li><a href="#">Aparadores</a></li>
                <li><a href="#">Sacos de Pancada</a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
		);
	}
}

export default CategoryList;