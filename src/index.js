import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MainPage     from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";

import { Router, Route, browserHistory, IndexRoute } from "react-router";

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage}/>
      <Route path="/products" component={ProductsPage} />
    </Route>
  </Router>)
  ,document.getElementById('root'));
registerServiceWorker();
