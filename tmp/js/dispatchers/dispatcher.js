'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _callbacks = [];
var _promises = [];

var _addPromise = function _addPromise(callback, payload) {

  _promises.push(new Promise(function (resolve, reject) {
    if (callback(payload)) {
      resolve(payload);
    } else {
      reject(new Error('Dispatcher callback unsuccessful'));
    }
  }));
};

var _clearPromises = function _clearPromises() {
  _promises = [];
};

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);
  }

  _createClass(Dispatcher, [{
    key: 'register',
    value: function register(callback) {
      _callbacks.push(callback);

      return _callbacks.length - 1;
    }
  }, {
    key: 'dispatch',
    value: function dispatch(payload) {
      _callbacks.forEach(function (callback) {
        _addPromise(callback, payload);
      });

      Promise.all(_promises).then(_clearPromises);
    }
  }]);

  return Dispatcher;
})();

exports['default'] = Dispatcher;
module.exports = exports['default'];