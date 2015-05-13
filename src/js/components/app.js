import React from 'react';
import Catalog from '../components/catalog/app-catalog';
import Cart from '../components/cart/app-cart';

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
