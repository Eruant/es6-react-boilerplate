'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsApp = require('./components/app');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

window.onload = function () {
  return _react2['default'].render(_react2['default'].createElement(_componentsApp2['default'], null), document.querySelector('body'));
};