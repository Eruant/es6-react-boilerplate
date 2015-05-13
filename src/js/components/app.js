import React from 'react';
import Router from 'react-router-component';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import CatalogDetail from './product/app-catalogdetail';
import Template from './app-template';

var Locations = Router.Locations;
var Location = Router.Location;

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Template>
        <Locations>
          <Location path="/" handler={Catalog} />
          <Location path="/cart" handler={Cart} />
          <Location path="/item/:item" handler={CatalogDetail} />
        </Locations>
      </Template>
    )
  }

}

export default App;
