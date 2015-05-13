import React from 'react';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
        return (
          <section>
            <h1>Lets shop</h1>
            <Catalog />
            <h1>Cart</h1>
            <Cart />
          </section>
        )
    }

}

export default App;
