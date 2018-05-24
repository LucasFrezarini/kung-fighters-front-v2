import React, { Component } from "react";

import Api from "../api/Api";

class NewProductPage extends Component {

	constructor() {
		super();

		this.state = {
			name: "", 
			price: "", 
			category: "", 
			featured: false, 
			model: "", 
			description: "",
			photo: {
				title: "",
				file: ""
			}
		};

		this.submit = this.submit.bind(this);
	}

	updateState(state, event) {
		this.setState({[state]: event.target.value});
	}

	async uploadFile(event) {
		const file = event.target.files[0];

    const data = new FormData();
		data.append('image', file);
		
		const opts = {
			method: 'POST',
			mode: 'cors',
			body: data
		}

		try {
      const res = await fetch(`${Api.getBaseUrl()}/product/upload/image`, opts);

      if(!res.ok) {
        const err = await res.text();
        throw new Error(`Erro ao realizar o upload da foto: ${err}`);
			}
			
			const json = await res.json();

      this.setState({
				photo: {
					title: json.filename,
					file: json.uploadName
				}
			});
    } catch (error) {
      console.error(error);
    }
	}

	async submit(event) {
		event.preventDefault();

		const opts = {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({
        product: {
          name: this.state.name,
          price: this.state.price,
					category: this.state.category,
					featured: this.state.featured,
					model: this.state.model,
					description: this.state.description,
					photos: [{
						title: this.state.photo.title,
						file: this.state.photo.file
					}]
        }
      })
		}

		console.log(this.state);
		
		try {
      const res = await fetch(`${Api.getBaseUrl()}/product`, opts);

      if(!res.ok) {
        const err = await res.text();
        throw new Error(`Erro ao cadastrar o produto: ${err}`);
      }

      this.setState({
				name: "", 
				price: "", 
				category: "", 
				featured: false, 
				model: "", 
				description: "",
				photo: {
					title: "",
					file: ""
				}
			});

			const json = await res.json();

			alert('Cadastro efetuado com sucesso!');
			this.props.router.push(`/products/${json.product._id}`);
    } catch (error) {
      console.error(error);
    }
	}

	render() {
		return (
			<section id="form">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-1">
							<div className="login-form">
								<h2> Novo Produto</h2>
								<form onSubmit={this.submit}>
									<input type="text" placeholder="Nome do Produto" onChange={this.updateState.bind(this, 'name')} value={this.state.name}/>
									<input type="text" placeholder="Preço" onChange={this.updateState.bind(this, 'price')} value={this.state.price} />
									<input type="text" placeholder="Categoria" onChange={this.updateState.bind(this, 'category')} value={this.state.category}/>
									<span>
										<input type="checkbox" className="checkbox" onChange={this.updateState.bind(this, 'featured')} value={this.state.featured}/> 
										Destaque?
									</span>
									<input type="text" placeholder="Modelo" onChange={this.updateState.bind(this, 'model')} value={this.state.model} />
									<input type="text" placeholder="Descrição" onChange={this.updateState.bind(this, 'description')} value={this.state.description} />
									<h4> Foto</h4>
									<input type="file" onChange={this.uploadFile.bind(this)} />
									<button type="submit" className="btn btn-default">Cadastrar</button>
								</form>
							</div>
						</div>
						<div className="col-sm-4 col-sm-offset-1">
								<img src="/images/shop/hajime.jpg" alt="" />
						</div>
					</div>
				</div>
			</section>
		);	
	}
}	

export default NewProductPage;