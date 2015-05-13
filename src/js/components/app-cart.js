import React from 'react';
import AppStore from '../stores/app-store';
import RemoveFromCart from '../components/app-removefromcart';
import Increase from '../components/app-increase';
import Decrease from '../components/app-decrease';

var cartItems = function () {
  return {
    items: AppStore.getCart()
  };
};

class Cart extends React.Component {

    constructor(props) {
      super(props);

      this.state = cartItems();

      this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
      AppStore.addChangeListener(this._onChange);
    }

    _onChange() {
      this.setState(cartItems());
    }

    render() {

        var total = 0;

        return (
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Qty</th>
                <th></th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              { this.state.items.map(function (item, i) {

                let subtotal = item.cost * item.qty;
                total += subtotal;

                return (
                  <tr key={i}>
                    <td><RemoveFromCart index={i} /></td>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>
                      <Increase index={i} />
                      <Decrease index={i} />
                    </td>
                    <td>&pound;{subtotal}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">Total</td>
                <td>&pound;{total}</td>
              </tr>
            </tfoot>
          </table>
        )
    }

}

export default Cart;
