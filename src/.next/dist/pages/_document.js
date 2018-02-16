'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jarick/urist4/next-github/src/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', { lang: 'ru', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, this.props.styleTags), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('script', { src: 'https://cdn.polyfill.io/v2/polyfill.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, (0, _extends3.default)({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          })));
        };
      });
      var styleTags = sheet.getStyleElement();

      return (0, _extends3.default)({}, page, { styleTags: styleTags });
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9fZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIlNlcnZlclN0eWxlU2hlZXQiLCJNeURvY3VtZW50IiwicHJvcHMiLCJzdHlsZVRhZ3MiLCJyZW5kZXJQYWdlIiwic2hlZXQiLCJwYWdlIiwiY29sbGVjdFN0eWxlcyIsImdldFN0eWxlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBUzs7Ozs7OztJLEFBRVk7Ozs7Ozs7Ozs7OzZCQVNULEFBQ1I7NkJBQ0UsY0FBQSxVQUFNLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFGVixBQUNFLEFBQ2MsQUFFZCw0QkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLGtEQUNNLE1BQU4sQUFBVyxzRUFBcUUsS0FBaEYsQUFBb0Y7b0JBQXBGO3NCQUZGLEFBRUUsQUFDQTtBQURBO29EQUNRLEtBQVIsQUFBWTtvQkFBWjtzQkFIRixBQUdFLEFBQ0E7QUFEQTswQkFDQSxBQUFDOztvQkFBRDtzQkFUTixBQUNFLEFBSUUsQUFJRSxBQUlQO0FBSk87QUFBQTs7OzswQ0FsQmdDO1VBQWQsQUFBYyxrQkFBZCxBQUFjLEFBQ3RDOztVQUFNLFFBQU4sQUFBYyxBQUFJLEFBQ2xCO1VBQU0sa0JBQWtCLGVBQUE7ZUFBTyxpQkFBQTt1QkFBUyxBQUFNLDRDQUFjLEFBQUMsZ0NBQUQsQUFBUzs7d0JBQVQ7MEJBQTdCLEFBQVMsQUFBb0I7QUFBQTtBQUFBLFlBQUEsQ0FBcEI7QUFBaEI7QUFBeEIsQUFBYSxBQUNiLE9BRGE7VUFDUCxZQUFZLE1BQWxCLEFBQWtCLEFBQU0sQUFFeEI7O3dDQUFBLEFBQVksUUFBTSxXQUFsQixBQUNEOzs7OztBQVBxQyxBOztrQkFBbkIsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvamFyaWNrL3VyaXN0NC9uZXh0LWdpdGh1YiJ9