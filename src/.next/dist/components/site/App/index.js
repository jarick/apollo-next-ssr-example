'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styled = require('./styled');

Object.keys(_styled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _styled[key];
    }
  });
});

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _AppContainer = require('../../../containers/site/AppContainer');

var _AppContainer2 = _interopRequireDefault(_AppContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _AppContainer2.default)(_App2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NpdGUvQXBwL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSxBQUFjOzs7Ozs7Ozs7O0FBSmQsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBa0IsQUFFekI7Ozs7OztrQkFBQSxBQUFlLEFBQWEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamFyaWNrL3VyaXN0NC9uZXh0LWdpdGh1YiJ9