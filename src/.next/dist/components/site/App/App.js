'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/jarick/urist4/next-github/src/components/site/App/App.js';

exports.default = function (_ref) {
  var children = _ref.children,
      template = _ref.template,
      menu = _ref.menu,
      isOpen = _ref.isOpen,
      setOpen = _ref.setOpen,
      pageCode = _ref.pageCode;

  if (typeof window !== 'undefined') {
    _reactGa2.default.initialize('UA-20228206-1');
    _reactGa2.default.pageview(window.location.pathname + window.location.search);
  }

  return _react2.default.createElement(_styled.View, { className: isOpen ? 'open' : '', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement('link', { href: '/favicon.ico', rel: 'icon', type: 'image/x-icon', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  })), _react2.default.createElement(_styled.SideNav, { className: isOpen ? 'open' : '', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('span', { className: 'closebtn', onClick: function onClick() {
      return setOpen(false);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, '\xD7'), menu.map(function (item) {
    return _react2.default.createElement('a', { key: item._id, className: item.code === pageCode ? 'active' : '', href: item.url, __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }, item.label);
  })), _react2.default.createElement(_styled.HeadRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(_styled.HeadRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement(_styled.MenuIcon, { onClick: function onClick() {
      return setOpen(true);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), _react2.default.createElement(_styled.Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, template.name)), _react2.default.createElement(_styled.Phone, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, template.phone)), _react2.default.createElement(_styled.HeadRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, _react2.default.createElement(_styled.Thesis, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, template.thesis), _react2.default.createElement(_styled.EMail, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, template.email)), _react2.default.createElement(_styled.BorderLine1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), _react2.default.createElement(_styled.BorderLine2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), _react2.default.createElement(_styled.ContentRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(_styled.Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, menu.map(function (item) {
    return _react2.default.createElement('li', { key: item._id, __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      }
    }, _react2.default.createElement('a', { href: item.url, className: item.code === pageCode ? 'active' : '', __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      }
    }, item.label));
  }))), _react2.default.createElement(_styled.Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, children)), _react2.default.createElement(_styled.FooterRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, _react2.default.createElement(_styled.FooterCol, { dangerouslySetInnerHTML: { __html: template.footer }, __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  })), _react2.default.createElement(_styled.Substrate, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NpdGUvQXBwL0FwcC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0R0EiLCJIZWFkIiwiTmFtZSIsIlBob25lIiwiSGVhZFJvdyIsIk1lbnVJY29uIiwiVmlldyIsIlRoZXNpcyIsIkVNYWlsIiwiQm9yZGVyTGluZTEiLCJCb3JkZXJMaW5lMiIsIkNvbnRlbnQiLCJGb290ZXJSb3ciLCJGb290ZXJDb2wiLCJDb250ZW50Um93IiwiTWVudSIsIk1lbnVDb21wb25lbnQiLCJTaWRlTmF2IiwiU3Vic3RyYXRlIiwiY2hpbGRyZW4iLCJ0ZW1wbGF0ZSIsIm1lbnUiLCJpc09wZW4iLCJzZXRPcGVuIiwicGFnZUNvZGUiLCJ3aW5kb3ciLCJpbml0aWFsaXplIiwicGFnZXZpZXciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwibWFwIiwiaXRlbSIsIl9pZCIsImNvZGUiLCJ1cmwiLCJsYWJlbCIsIm5hbWUiLCJwaG9uZSIsInRoZXNpcyIsImVtYWlsIiwiX19odG1sIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUNFLEFBQU0sQUFBTyxBQUFTLEFBQVUsQUFBTSxBQUFRLEFBQU8sQUFBYSxBQUFhLEFBQy9FLEFBQVcsQUFBVyxBQUFZLEFBQVEsQUFBZSxBQUFTLEFBQzdELEFBYVA7Ozs7OztrQkFBZSxnQkFBZ0Y7TUFBN0UsQUFBNkUsZ0JBQTdFLEFBQTZFO01BQW5FLEFBQW1FLGdCQUFuRSxBQUFtRTtNQUF6RCxBQUF5RCxZQUF6RCxBQUF5RDtNQUFuRCxBQUFtRCxjQUFuRCxBQUFtRDtNQUEzQyxBQUEyQyxlQUEzQyxBQUEyQztNQUFsQyxBQUFrQyxnQkFBbEMsQUFBa0MsQUFDN0Y7O01BQUksT0FBQSxBQUFPLFdBQVgsQUFBc0IsYUFBYSxBQUNqQztzQkFBQSxBQUFRLFdBQVIsQUFBbUIsQUFDbkI7c0JBQUEsQUFBUSxTQUFTLE9BQUEsQUFBTyxTQUFQLEFBQWdCLFdBQVcsT0FBQSxBQUFPLFNBQW5ELEFBQTRELEFBQzdEO0FBRUQ7O3lCQUNFLEFBQUMsOEJBQUssV0FBVyxTQUFBLEFBQVMsU0FBMUIsQUFBbUM7Z0JBQW5DO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDZDQUNRLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2dCQUE5QjtrQkFERixBQUNFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsZ0JBQWUsS0FBMUIsQUFBOEIsUUFBTyxNQUFyQyxBQUEwQztnQkFBMUM7a0JBSEosQUFDRSxBQUVFLEFBRUY7QUFGRTt1QkFFRixBQUFDLGlDQUFRLFdBQVcsU0FBQSxBQUFTLFNBQTdCLEFBQXNDO2dCQUF0QztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxVQUFNLFdBQU4sQUFBZ0IsWUFBVyxTQUFTLG1CQUFBO2FBQU0sUUFBTixBQUFNLEFBQVE7QUFBbEQ7Z0JBQUE7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQyxjQUFBLEFBQUssSUFBSSxVQUFBLEFBQUMsTUFBRDsyQkFDUixjQUFBLE9BQUcsS0FBSyxLQUFSLEFBQWEsS0FBSyxXQUFXLEtBQUEsQUFBSyxTQUFMLEFBQWMsV0FBZCxBQUF5QixXQUF0RCxBQUFpRSxJQUFJLE1BQU0sS0FBM0UsQUFBZ0Y7a0JBQWhGO29CQUFBLEFBQ0c7QUFESDtLQUFBLE9BRFEsQUFDUixBQUNRO0FBVGQsQUFLRSxBQUVHLEFBTUgsdUJBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxrQ0FBUyxTQUFTLG1CQUFBO2FBQU0sUUFBTixBQUFNLEFBQVE7QUFBakM7Z0JBQUE7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRztBQURIO0FBQUEsY0FISixBQUNFLEFBRUUsQUFDWSxBQUdkLHdCQUFBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0c7QUFESDtBQUFBLGNBcEJKLEFBYUUsQUFPRSxBQUNZLEFBR2QseUJBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRztBQURIO0FBQUEsY0FERixBQUNFLEFBQ1ksQUFFWix5QkFBQSxBQUFDOztnQkFBRDtrQkFBQSxBQUNHO0FBREg7QUFBQSxjQTVCSixBQXdCRSxBQUlFLEFBQ1ksQUFHZCx5QkFBQSxBQUFDOztnQkFBRDtrQkFoQ0YsQUFnQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBakNGLEFBaUNFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLFVBQ0csQUFBSyxJQUFJLFVBQUEsQUFBQyxNQUFEOzJCQUNSLGNBQUEsUUFBSSxLQUFLLEtBQVQsQUFBYztrQkFBZDtvQkFBQSxBQUNFO0FBREY7S0FBQSxrQkFDRSxjQUFBLE9BQUcsTUFBTSxLQUFULEFBQWMsS0FBSyxXQUFXLEtBQUEsQUFBSyxTQUFMLEFBQWMsV0FBZCxBQUF5QixXQUF2RCxBQUFrRTtrQkFBbEU7b0JBQUEsQUFDRztBQURIO1lBRk0sQUFDUixBQUNFLEFBQ1E7QUFObEIsQUFDRSxBQUNFLEFBQ0csQUFTTCx3QkFBQSxBQUFDOztnQkFBRDtrQkFBQSxBQUNHO0FBREg7QUFBQSxLQTlDSixBQWtDRSxBQVlFLEFBSUYsNEJBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxtQ0FBVSx5QkFBeUIsRUFBRSxRQUFRLFNBQTlDLEFBQW9DLEFBQW1CO2dCQUF2RDtrQkFuREosQUFrREUsQUFDRSxBQUVGO0FBRkU7dUJBRUYsQUFBQzs7Z0JBQUQ7a0JBdERKLEFBQ0UsQUFxREUsQUFHTDtBQUhLO0FBQUE7QUE1RE4iLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2phcmljay91cmlzdDQvbmV4dC1naXRodWIifQ==