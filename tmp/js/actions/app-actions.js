'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _constantsAppConstants = require('../constants/app-constants');

var _constantsAppConstants2 = _interopRequireDefault(_constantsAppConstants);

var _dispatchersAppDispatcher = require('../dispatchers/app-dispatcher');

var _dispatchersAppDispatcher2 = _interopRequireDefault(_dispatchersAppDispatcher);

var AppActions = (function () {
  function AppActions() {
    _classCallCheck(this, AppActions);
  }

  _createClass(AppActions, [{
    key: 'addItem',
    value: function addItem(item) {
      _dispatchersAppDispatcher2['default'].handleViewAction({
        actionType: _constantsAppConstants2['default'].ADD_ITEM,
        item: item
      });
    }
  }, {
    key: 'removeItem',
    value: function removeItem(index) {
      _dispatchersAppDispatcher2['default'].handleViewAction({
        actionType: _constantsAppConstants2['default'].REMOVE_ITEM,
        index: index
      });
    }
  }, {
    key: 'decreaseItem',
    value: function decreaseItem(index) {
      _dispatchersAppDispatcher2['default'].handleViewAction({
        actionType: _constantsAppConstants2['default'].DECREASE_ITEM,
        index: index
      });
    }
  }, {
    key: 'increaseItem',
    value: function increaseItem(index) {
      _dispatchersAppDispatcher2['default'].handleViewAction({
        actionType: _constantsAppConstants2['default'].INCREASE_ITEM,
        index: index
      });
    }
  }]);

  return AppActions;
})();

exports['default'] = new AppActions();
module.exports = exports['default'];