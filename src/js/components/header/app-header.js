import React from 'react';
import CartSummary from './app-cartsummary';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
        return (
          <section>
            <div>
              <h1>Lets Shop</h1>
            </div>
            <div>
              <CartSummary />
            </div>
          </section>
        )
    }

}

export default Header;
