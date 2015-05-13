import Dispatcher from './dispatcher';

class AppDispatcher extends Dispatcher {

  constructor(props) {
    super(props);
    this.handleViewAction = this.handleViewAction.bind(this);
  }

  handleViewAction(action) {

    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }

}

export default new AppDispatcher();
