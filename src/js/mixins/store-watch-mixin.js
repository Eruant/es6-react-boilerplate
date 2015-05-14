import React from 'react';
import AppStore from '../stores/app-store';

var cartItems = function () {
  return {
    items: AppStore.getCart()
  };
};

class StoreWatchMixin extends React.Component {

  constructor(props) {
    super(props);

    this.state = cartItems();

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(cartItems());
  }
}

export default StoreWatchMixin;
