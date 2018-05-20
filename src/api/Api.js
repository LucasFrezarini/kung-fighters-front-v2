class Api {

	getBaseUrl() {
		return 'http://localhost:4000';
	}

	getEndpointForImages() {
		return `${this.getBaseUrl()}/public/product/images/`
	}
}

export default new Api();