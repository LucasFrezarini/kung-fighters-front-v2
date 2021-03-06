import React, { Component } from "react";

import { Link } from "react-router";
import PubSub 	from "pubsub-js";

class Header extends Component {

	constructor() {
		super();
		
		this.state = {clientName: "", clientToken: ""}

		this.updateClientCredentials = this.updateClientCredentials.bind(this);
	}

	componentWillMount() {
		this.updateClientCredentials();

		PubSub.subscribe('client credentials changed', this.updateClientCredentials);
	}

	updateClientCredentials() {
		this.setState({
			clientName: localStorage.getItem('client_name'), 
			clientToken: localStorage.getItem('client_token')
		});
	}

	render() {
		return (
			<header id="header">{/*header*/}
				<div className="header_top">{/*header_top*/}
					<div className="container">
						<div className="row">
							<div className="col-sm-6">
								<div className="contactinfo">
									<ul className="nav nav-pills">
										<li><a><i className="fa fa-phone"></i> +55 011 98472-9387</a></li>
										<li><a><i className="fa fa-envelope"></i> contato@kungfighters.com </a></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="social-icons pull-right">
									<ul className="nav navbar-nav">
										<li><a><i className="fa fa-facebook"></i></a></li>
										<li><a><i className="fa fa-twitter"></i></a></li>
										<li><a><i className="fa fa-linkedin"></i></a></li>
										<li><a><i className="fa fa-google-plus"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>{/*/header_top*/}
				
				<div className="header-middle">{/*header-middle*/}
					<div className="container">
						<div className="row">
							<div className="col-sm-4">
								<div className="logo pull-left">
									<Link to="/"><img src="/images/home/Logo.png" alt="" /></Link>
								</div>
								
							</div>
							<div className="col-sm-8">
								<div className="shop-menu pull-right">
									<ul className="nav navbar-nav">
										<li><a><i className="fa fa-user"></i> {this.state.clientName ? this.state.clientName : "Conta"}</a></li>
										<li><a href="cart.html"><i className="fa fa-shopping-cart"></i> Carrinho</a></li>
										<li>
											{this.state.clientToken ? <Link to="/logout"><i className="fa fa-lock"></i> Sair</Link> : <Link to="/login"><i className="fa fa-lock"></i> Login</Link>}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>{/*/header-middle*/}
			
				<div className="header-bottom">{/*header-bottom*/}
					<div className="container">
						<div className="row">
							<div className="col-sm-7">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
								</div>
								<div className="mainmenu pull-left">
									<ul className="nav navbar-nav collapse navbar-collapse">
										
										<li><Link to="/" className="active">Home</Link></li>
										
										<li className="dropdown"><a>Produtos<i className="fa fa-angle-down"></i></a>
											<ul role="menu" className="sub-menu">
												<li><Link to="/products?category=Trajes">Trajes</Link></li>
												<li><Link to="/products?category=Armas">Armas</Link></li> 
												<li><Link to="/products?category=Equipamentos">Equipamentos</Link></li> 
											</ul>
										</li> 
										
										<li><Link to="/new/product">Cadastros</Link></li>                                    
																		
										<li><a href="404.html">Debug</a></li>
									
									</ul>
								</div>
							</div>
							<div className="col-sm-5">
								<div className="search_box pull-right">
									<input type="text" placeholder="Você Procura?"/>
								</div>
							</div>
						</div>
					</div>
				</div>{/*/header-bottom*/}
			</header>
		);
	}
}

export default Header;