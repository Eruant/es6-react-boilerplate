import React from 'react';
import Catalog from '../components/app-catalog';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
        return (
          <section>
            <h1>Lets shop</h1>
            <Catalog />
          </section>
        )
    }

}

export default App;
