import AppConstants from '../constants/app-constants';
import AppDispatcher from '../dispatchers/app-dispatcher';

class AppActions {

  addItem(item) {

    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ITEM,
      item: item
    });
  }

  removeItem(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_ITEM,
      item: item
    });
  }

  decreaseItem(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DECREASE_ITEM,
      item: item
    });
  }

  increaseItem(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INCREASE_ITEM,
      item: item
    });
  }

}

export default new AppActions();
