'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _dispatchersAppDispatcher = require('../dispatchers/app-dispatcher');

var _dispatchersAppDispatcher2 = _interopRequireDefault(_dispatchersAppDispatcher);

var _constantsAppConstants = require('../constants/app-constants');

var _constantsAppConstants2 = _interopRequireDefault(_constantsAppConstants);

var _events = require('events');

var CHANGE_EVENT = 'change';

var _catalog = [{ id: 1, title: 'widget #1', cost: 1 }, { id: 2, title: 'widget #2', cost: 2 }, { id: 3, title: 'widget #3', cost: 3 }];

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

var AppStore = (function (_EventEmitter) {
  function AppStore() {
    _classCallCheck(this, AppStore);

    if (_EventEmitter != null) {
      _EventEmitter.apply(this, arguments);
    }
  }

  _inherits(AppStore, _EventEmitter);

  _createClass(AppStore, [{
    key: 'emitChange',
    value: function emitChange() {
      this.emit(CHANGE_EVENT);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }, {
    key: 'getCart',
    value: function getCart() {
      return _cartItems;
    }
  }, {
    key: 'getCatalog',
    value: function getCatalog() {
      return _catalog;
    }
  }, {
    key: 'dispatcherIndex',
    value: function dispatcherIndex() {
      _dispatchersAppDispatcher2['default'].register(function (payload) {

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
      });
      this.emitChange();

      return true;
    }
  }]);

  return AppStore;
})(_events.EventEmitter);

exports['default'] = new AppStore();
module.exports = exports['default'];