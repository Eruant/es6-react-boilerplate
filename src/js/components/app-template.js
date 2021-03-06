import React from 'react';
import Header from './header/app-header';

class Template extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
        return (
          <section>
            <Header />
            {this.props.children}
          </section>
        )
    }

}

export default Template;
