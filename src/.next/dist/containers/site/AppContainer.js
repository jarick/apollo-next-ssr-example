'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _recompose = require('recompose');

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    query ($code: String!, $tag: String!) {\n      template(code: $code) {\n        _id\n        code\n        name\n        phone\n        thesis\n        email\n        footer\n      }\n      menu(tag: $tag) {\n        _id\n        code\n        label\n        url\n        exact\n        external\n      }\n    }\n  '], ['\n    query ($code: String!, $tag: String!) {\n      template(code: $code) {\n        _id\n        code\n        name\n        phone\n        thesis\n        email\n        footer\n      }\n      menu(tag: $tag) {\n        _id\n        code\n        label\n        url\n        exact\n        external\n      }\n    }\n  ']);

exports.default = (0, _recompose.compose)((0, _recompose.withState)('isOpen', 'setOpen', false), (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  options: function options() {
    return { variables: { code: 'main', tag: 'main' } };
  }
}), (0, _recompose.withProps)(function (_ref) {
  var _ref$data = _ref.data,
      template = _ref$data.template,
      menu = _ref$data.menu;
  return {
    template: template || {},
    menu: menu || []
  };
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250YWluZXJzL3NpdGUvQXBwQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbImNvbXBvc2UiLCJ3aXRoUHJvcHMiLCJ3aXRoU3RhdGUiLCJncmFwaHFsIiwiZ3FsIiwib3B0aW9ucyIsInZhcmlhYmxlcyIsImNvZGUiLCJ0YWciLCJkYXRhIiwidGVtcGxhdGUiLCJtZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsQUFBUSxBQUFTLEFBQVc7O0FBQzVCLEFBQVM7O0FBQ1QsQUFBTyxBQUdQOzs7Ozs7OzswQ0FDRSwwQkFBQSxBQUFVLFVBQVYsQUFBb0IsV0FEUCxBQUNiLEFBQStCLGtDQUMvQixBQUFRO1dBcUJHLG1CQUFBO1dBQU8sRUFBRSxXQUFXLEVBQUUsTUFBRixBQUFRLFFBQVEsS0FBcEMsQUFBTyxBQUFhLEFBQXFCO0FBdkJ2QyxBQUViLEFBb0JHO0FBQUEsQUFDRCxDQXJCRixDQUZhLDRCQXlCSCxnQkFBQTt1QkFBQSxBQUFHO01BQUgsQUFBVyxxQkFBWCxBQUFXO01BQVgsQUFBcUIsaUJBQXJCLEFBQXFCOztjQUNuQixZQURpQyxBQUNyQixBQUN0QjtVQUFNLFFBRkUsQUFBbUMsQUFFN0I7QUFGNkIsQUFDM0M7QUExQkosQUFBZSxBQXlCYixDQUFBIiwiZmlsZSI6IkFwcENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qYXJpY2svdXJpc3Q0L25leHQtZ2l0aHViIn0=