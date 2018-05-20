import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import LoginPage      from "./pages/LoginPage";
import LogoutPage     from "./pages/LogoutPage";
import MainPage       from "./pages/MainPage";
import ProductDetail  from "./pages/ProductDetailPage";
import ProductsPage   from "./pages/ProductsPage";

import { Router, Route, browserHistory, IndexRoute } from "react-router";

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage}/>
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/:id" component={ProductDetail}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/logout" component={LogoutPage}/>
    </Route>
  </Router>)
  ,document.getElementById('root'));
registerServiceWorker();
