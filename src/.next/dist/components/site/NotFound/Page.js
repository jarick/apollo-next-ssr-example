'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _error = require('next/dist/lib/error.js');

var _error2 = _interopRequireDefault(_error);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _App = require('../App');

var _NotFound = require('./NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jarick/urist4/next-github/src/components/site/NotFound/Page.js';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return parseInt(this.props.statusCode, 10) === 404 ? _react2.default.createElement(_App.View, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('script', { src: 'https://cdn.polyfill.io/v2/polyfill.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement(_App.ContentRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_NotFound2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }))) : _react2.default.createElement(_error2.default, { statusCode: this.props.statusCode, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;

      var statusCode = res ? res.statusCode : err ? err.statusCode : null;

      return { statusCode: statusCode };
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NpdGUvTm90Rm91bmQvUGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkVycm9yUGFnZSIsIkhlYWQiLCJWaWV3IiwiQ29udGVudFJvdyIsIk5vdEZvdW5kIiwicGFyc2VJbnQiLCJwcm9wcyIsInN0YXR1c0NvZGUiLCJyZXMiLCJlcnIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBUyxBQUFNLEFBQWtCOztBQUNqQyxBQUFPLEFBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQVVWLEFBQ1A7c0JBQWdCLEtBQUEsQUFBSyxNQUFkLEFBQW9CLFlBQXBCLEFBQWdDLFFBQWhDLEFBQXdDLHNCQUUzQyxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFERixBQUNFLEFBQ0E7QUFEQTtvREFDUSxLQUFSLEFBQVk7b0JBQVo7c0JBRkYsQUFFRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLHNFQUFxRSxLQUFoRixBQUFvRjtvQkFBcEY7c0JBSkosQUFDRSxBQUdFLEFBRUY7QUFGRTsyQkFFRixBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFURCxBQUVILEFBTUUsQUFDRTtBQUFBO0FBQUEsVUFURCxtQkFhSCxBQUFDLGlDQUFVLFlBQVksS0FBQSxBQUFLLE1BQTVCLEFBQWtDO29CQUFsQztzQkFiSixBQWFJLEFBQ0w7QUFESztPQUFBOzs7OzBDQXBCMEY7VUFBdkUsQUFBdUUsV0FBdkUsQUFBdUU7VUFBbEUsQUFBa0UsV0FBbEUsQUFBa0UsQUFDOUY7O1VBQU0sYUFBYSxNQUFNLElBQU4sQUFBVSxhQUFhLE1BQU0sSUFBTixBQUFVLGFBQXBELEFBQWlFLEFBRWpFOzthQUFPLEVBQUUsWUFBVCxBQUFPLEFBQ1I7Ozs7O0VBTDBCLGdCQUFNLEEiLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXJpY2svdXJpc3Q0L25leHQtZ2l0aHViIn0=