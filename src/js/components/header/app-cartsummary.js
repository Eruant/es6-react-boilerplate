import React from 'react';
import Router from 'react-router-component';

var Link = Router.Link;

class CartSummary extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
        return (
          <section>
            <Link href="/cart">
              Cart Items: QTY / &pound;COST
            </Link>
          </section>
        )
    }

}

export default CartSummary;
