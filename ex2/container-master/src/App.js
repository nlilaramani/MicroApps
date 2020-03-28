import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';
import About from './About';

const {
  REACT_APP_ORDER_HOST: orderHost,
  REACT_APP_PRODUCT_HOST: productHost,
} = process.env;

let numProducts = 0;
/*fetch(`${process.env.REACT_APP_CONTENT_HOST}/products.json`)
  .then(prod => prod.json())
  .then(products => {
    numProducts = products.length;
  });*/
/*const getRandomProductId = () =>
  Math.floor(Math.random() * numProducts) + 1;
*/
const Order = ({ history }) => (
  <MicroFrontend history={history} host={orderHost} name="Order" />
);
const Product = ({ history }) => (
  <MicroFrontend history={history} host={productHost} name="Product" />
);
//const Random = () => <Redirect to={`/product/${getRandomProductId()}`} />;
//const Product  = () => <Redirect to={`{productHost}/product`}/>

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" render={Product} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/about" render={About} />
        <Route exact path="/order" render={Order} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
