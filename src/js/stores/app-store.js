import events from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';

var EventEmitter = events.EventEmitter;

const CHANGE_EVENT = 'change';

var _catalog = [];

for (let i = 1; i < 9; i++) {
  _catalog.push({
    id: 'Widget' + i,
    title: 'Widget #' + i,
    summary: 'This is great!',
    description: 'Lorem ipsum dolor sit amet consectetur...',
    img: 'http://placehold.it/195x195',
    cost: i
  });
}

var _cartItems = [];

var _removeItem = (index) => {
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
};

var _increaseItem = (index) => {
  _cartItems[index].qty++;
};

var _decreaseItem = (index) => {
  if (_cartItems[index].qty > 1) {
    _cartItems[index].qty--;
  } else {
    _removeItem(index);
  }
};

var _addItem = (item) => {

  if (!item.inCart) {
    item.qty = 1;
    item.inCart = true;
    _cartItems.push(item);
  } else {
    _cartItems.forEach((cartItem, i) => {
      if (cartItem.id == item.id) {
        _increaseItem(i);
      }
    });
  }
};

var AppStore = assign(EventEmitter.prototype, {

  emitChange: () => {
    AppStore.emit(CHANGE_EVENT);
  },

  addChangeListener: (callback) => {
    AppStore.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: (callback) => {
    AppStore.removeListener(CHANGE_EVENT, callback);
  },

  getCart: () => {
    return _cartItems;
  },

  getCatalog: () => {
    return _catalog;
  },

  dispatcherIndex: AppDispatcher.register((payload) => {

    var action = payload.action;

    switch(action.actionType) {

      case AppConstants.ADD_ITEM:
        _addItem(action.item);
        break;

      case AppConstants.REMOVE_ITEM:
        _removeItem(action.index);
        break;

      case AppConstants.INCREASE_ITEM:
        _increaseItem(action.index);
        break;

      case AppConstants.DECREASE_ITEM:
        _decreaseItem(action.index);
        break;

    }

    AppStore.emitChange();

    return true;
  })

});

export default AppStore;
