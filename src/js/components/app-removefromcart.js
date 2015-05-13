import React from 'react';
import AppActions from '../actions/app-actions';

class RemoveFromCart extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    AppActions.removeItem(this.props.index);
  }

  render() {
    return (
      <button onClick={this.handleClick}>X</button>
    )
  }

}

export default RemoveFromCart;
