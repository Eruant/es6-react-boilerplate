import React from 'react';
import AppStore from '../stores/app-store';
import AddToCart from '../components/app-addtocart';

class Catalog extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        items: AppStore.getCatalog()
      };
    }

    render() {
        return (
          <table>
            { this.state.items.map(function (item) {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>&pound;{item.cost}</td>
                  <td><AddToCart item={item} /></td>
                </tr>
              );
            })}
          </table>
        )
    }

}

export default Catalog;
