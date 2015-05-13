var _callbacks = [];
var _promises = [];

var _addPromise = (callback, payload) => {

  _promises.push(new Promise((resolve, reject) => {
    if (callback(payload)) {
      resolve(payload);
    } else {
      reject(new Error('Dispatcher callback unsuccessful'));
    }
  }));

};

var _clearPromises = () => {
  _promises = [];
};

class Dispatcher {

  register(callback) {
    _callbacks.push(callback);

    return _callbacks.length - 1;
  }

  dispatch(payload) {
    _callbacks.forEach((callback) => {
      _addPromise(callback, payload);
    });

    Promise.add(_promises)
      .then(_clearPromises);
  }

}

export default Dispatcher;
