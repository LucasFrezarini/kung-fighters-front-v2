import React, { Component } from "react";

import Api            from "../api/Api";
import CategoryList   from "../components/CategoryList";

class ProductDetailPage extends Component {

  constructor() {
    super();
    this.state = {product: {photos: [], createdAt: ''}};
  }

  componentWillMount() {
    this.loadProduct();
  }

  async loadProduct() {
    const baseUrl = Api.getBaseUrl();

    try {
      const response = await fetch(`${baseUrl}/public/product/${this.props.params.id}`);

      if(!response.ok) {
        const txt = await response.text();
        throw new Error(`Erro ao buscar os detalhes do produto: ${txt} `);
      }

      const product = await response.json();

      this.setState({product: product});
    } catch (err) {
      console.error(err);
    }
  }
  
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-sm-3">
            <div className="left-sidebar">
              <h2>Categoria</h2>
              <CategoryList/>

              <div className="shipping text-center">{/*shipping*/}
                <img src="/images/home/FimSideBar.jpg" alt="" />
              </div>{/*/shipping*/}
            </div>
          </div>
          <div className="col-sm-9 padding-right">
            <div className="product-details">
              <div className="col-sm-5">
                <div className="view-product">
                  <img src={this.state.product.photos.length > 0 ? Api.getEndpointForImages() + this.state.product.photos[0].file : null} alt="" />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="product-information">
                  <img src="/images/product-details/new.jpg" className="newarrival" alt="" />
                  <h2>{this.state.product.name}</h2>
                  <img src="/images/product-details/rating.png" alt="" />
                  <span>
                    <span>R$ {this.state.product.price}</span>
                    <label>Quantity:</label>
                    <input type="text" value="1" />
                    <button type="button" className="btn btn-fefault cart">
                      <i className="fa fa-shopping-cart"></i>
                      Add to cart
                    </button>
                  </span>
                  <p><b>Modelo:</b> {this.state.product.model} </p>
                  <p><b>Categoria:</b> {this.state.product.category}</p>
                  <a href=""><img src="/images/product-details/share.png" className="share img-responsive"  alt="" /></a>
                </div>
              </div>
              <div class="tab-pane fade active in" id="reviews" >
								<div class="col-sm-12">
									<p>{this.state.product.description}</p>
									<p><b>Write Your Review</b></p>
									
									<form action="#">
										<span>
											<input type="text" placeholder="Your Name"/>
											<input type="email" placeholder="Email Address"/>
										</span>
										<textarea name="" ></textarea>
										<b>Rating: </b> <img src="images/product-details/rating.png" alt="" />
										<button type="button" class="btn btn-default pull-right">
											Submit
										</button>
									</form>
								</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetailPage;