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

var _storesAppStore = require('../../stores/app-store');

var _storesAppStore2 = _interopRequireDefault(_storesAppStore);

var _appRemovefromcart = require('./app-removefromcart');

var _appRemovefromcart2 = _interopRequireDefault(_appRemovefromcart);

var _appIncrease = require('./app-increase');

var _appIncrease2 = _interopRequireDefault(_appIncrease);

var _appDecrease = require('./app-decrease');

var _appDecrease2 = _interopRequireDefault(_appDecrease);

var cartItems = function cartItems() {
  return {
    items: _storesAppStore2['default'].getCart()
  };
};

var Cart = (function (_React$Component) {
  function Cart(props) {
    _classCallCheck(this, Cart);

    _get(Object.getPrototypeOf(Cart.prototype), 'constructor', this).call(this, props);

    this.state = cartItems();

    this._onChange = this._onChange.bind(this);
  }

  _inherits(Cart, _React$Component);

  _createClass(Cart, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _storesAppStore2['default'].addChangeListener(this._onChange);
    }
  }, {
    key: '_onChange',
    value: function _onChange() {
      this.setState(cartItems());
    }
  }, {
    key: 'render',
    value: function render() {

      var total = 0;

      return _react2['default'].createElement(
        'table',
        null,
        _react2['default'].createElement(
          'thead',
          null,
          _react2['default'].createElement(
            'tr',
            null,
            _react2['default'].createElement('th', null),
            _react2['default'].createElement(
              'th',
              null,
              'Item'
            ),
            _react2['default'].createElement(
              'th',
              null,
              'Qty'
            ),
            _react2['default'].createElement('th', null),
            _react2['default'].createElement(
              'th',
              null,
              'Subtotal'
            )
          )
        ),
        _react2['default'].createElement(
          'tbody',
          null,
          this.state.items.map(function (item, i) {

            var subtotal = item.cost * item.qty;
            total += subtotal;

            return _react2['default'].createElement(
              'tr',
              { key: i },
              _react2['default'].createElement(
                'td',
                null,
                _react2['default'].createElement(_appRemovefromcart2['default'], { index: i })
              ),
              _react2['default'].createElement(
                'td',
                null,
                item.title
              ),
              _react2['default'].createElement(
                'td',
                null,
                item.qty
              ),
              _react2['default'].createElement(
                'td',
                null,
                _react2['default'].createElement(_appIncrease2['default'], { index: i }),
                _react2['default'].createElement(_appDecrease2['default'], { index: i })
              ),
              _react2['default'].createElement(
                'td',
                null,
                '£',
                subtotal
              )
            );
          })
        ),
        _react2['default'].createElement(
          'tfoot',
          null,
          _react2['default'].createElement(
            'tr',
            null,
            _react2['default'].createElement(
              'td',
              { colSpan: '4' },
              'Total'
            ),
            _react2['default'].createElement(
              'td',
              null,
              '£',
              total
            )
          )
        )
      );
    }
  }]);

  return Cart;
})(_react2['default'].Component);

exports['default'] = Cart;
module.exports = exports['default'];