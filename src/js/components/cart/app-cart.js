import React from 'react';
import RemoveFromCart from './app-removefromcart';
import Increase from './app-increase';
import Decrease from './app-decrease';
import StoreWatchMixin from '../../mixins/store-watch-mixin';

class Cart extends StoreWatchMixin {

    constructor(props) {
      super(props);
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
