'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _dispatchersAppDispatcher = require('../dispatchers/app-dispatcher');

var _dispatchersAppDispatcher2 = _interopRequireDefault(_dispatchersAppDispatcher);

var _constantsAppConstants = require('../constants/app-constants');

var _constantsAppConstants2 = _interopRequireDefault(_constantsAppConstants);

var EventEmitter = _events2['default'].EventEmitter;

var CHANGE_EVENT = 'change';

var _catalog = [];

for (var i = 1; i < 9; i++) {
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

var _removeItem = function _removeItem(index) {
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
};

var _increaseItem = function _increaseItem(index) {
  _cartItems[index].qty++;
};

var _decreaseItem = function _decreaseItem(index) {
  if (_cartItems[index].qty > 1) {
    _cartItems[index].qty--;
  } else {
    _removeItem(index);
  }
};

var _addItem = function _addItem(item) {

  if (!item.inCart) {
    item.qty = 1;
    item.inCart = true;
    _cartItems.push(item);
  } else {
    _cartItems.forEach(function (cartItem, i) {
      if (cartItem.id == item.id) {
        _increaseItem(i);
      }
    });
  }
};

var AppStore = _objectAssign2['default'](EventEmitter.prototype, {

  emitChange: function emitChange() {
    AppStore.emit(CHANGE_EVENT);
  },

  addChangeListener: function addChangeListener(callback) {
    AppStore.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function removeChangeListener(callback) {
    AppStore.removeListener(CHANGE_EVENT, callback);
  },

  getCart: function getCart() {
    return _cartItems;
  },

  getCatalog: function getCatalog() {
    return _catalog;
  },

  dispatcherIndex: _dispatchersAppDispatcher2['default'].register(function (payload) {

    var action = payload.action;

    switch (action.actionType) {

      case _constantsAppConstants2['default'].ADD_ITEM:
        _addItem(action.item);
        break;

      case _constantsAppConstants2['default'].REMOVE_ITEM:
        _removeItem(action.index);
        break;

      case _constantsAppConstants2['default'].INCREASE_ITEM:
        _increaseItem(action.index);
        break;

      case _constantsAppConstants2['default'].DECREASE_ITEM:
        _decreaseItem(action.index);
        break;

    }

    AppStore.emitChange();

    return true;
  })

});

exports['default'] = AppStore;
module.exports = exports['default'];