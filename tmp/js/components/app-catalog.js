'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storesAppStore = require('../stores/app-store');

var _storesAppStore2 = _interopRequireDefault(_storesAppStore);

var _componentsAppAddtocart = require('../components/app-addtocart');

var _componentsAppAddtocart2 = _interopRequireDefault(_componentsAppAddtocart);

var Catalog = (function (_React$Component) {
  function Catalog(props) {
    _classCallCheck(this, Catalog);

    _get(Object.getPrototypeOf(Catalog.prototype), 'constructor', this).call(this, props);

    this.state = {
      items: _storesAppStore2['default'].getCatalog()
    };
  }

  _inherits(Catalog, _React$Component);

  _createClass(Catalog, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'table',
        null,
        this.state.items.map(function (item) {
          return _react2['default'].createElement(
            'tr',
            { key: item.id },
            _react2['default'].createElement(
              'td',
              null,
              item.title
            ),
            _react2['default'].createElement(
              'td',
              null,
              '£',
              item.cost
            ),
            _react2['default'].createElement(
              'td',
              null,
              _react2['default'].createElement(_componentsAppAddtocart2['default'], { item: item })
            )
          );
        })
      );
    }
  }]);

  return Catalog;
})(_react2['default'].Component);

exports['default'] = Catalog;
module.exports = exports['default'];