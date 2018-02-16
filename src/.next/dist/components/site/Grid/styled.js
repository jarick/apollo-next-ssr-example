'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = exports.first = exports.between = exports.around = exports.bottom = exports.middle = exports.top = exports.end = exports.center = exports.start = exports.getColOffset = exports.getColWidth = exports.ColReverse = exports.Col = exports.RowReverse = exports.Row = exports.ContainerFluid = exports.Container = exports.lgViewport = exports.mdViewport = exports.smViewport = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _grid = require('../../../constants/site/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding-right: ', ';\n  padding-left: ', ';  \n'], ['\n  padding-right: ', ';\n  padding-left: ', ';  \n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  flex-direction: row-reverse;\n'], ['\n  flex-direction: row-reverse;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  flex-direction: column-reverse;\n'], ['\n  flex-direction: column-reverse;\n']);

var smViewport = exports.smViewport = 'only screen and (min-width: ' + _grid.smMin + ')';
var mdViewport = exports.mdViewport = 'only screen and (min-width: ' + _grid.mdMin + ')';
var lgViewport = exports.lgViewport = 'only screen and (min-width: ' + _grid.lgMin + ')';

var Container = /*#__PURE__*/exports.Container = _styledComponents2.default.div.withConfig({
  displayName: 'styled__Container',
  componentId: 'vbrkl-0'
})(['@media ', '{width:', ';}@media ', '{width:', ';}@media ', '{width:', '}margin-right:auto;margin-left:auto;min-width:', ';'], smViewport, _grid.smMin, mdViewport, _grid.mdMin, lgViewport, _grid.lgMin, _grid.min);

var ContainerFluid = exports.ContainerFluid = Container.extend(_templateObject, _grid.outerMargin, _grid.outerMargin);

var Row = /*#__PURE__*/exports.Row = _styledComponents2.default.div.withConfig({
  displayName: 'styled__Row',
  componentId: 'vbrkl-1'
})(['box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;']);

var RowReverse = exports.RowReverse = Row.extend(_templateObject2);

var Col = /*#__PURE__*/exports.Col = _styledComponents2.default.div.withConfig({
  displayName: 'styled__Col',
  componentId: 'vbrkl-2'
})(['max-width:100%;box-sizing:border-box;flex:0 0 auto;']);

var ColReverse = exports.ColReverse = Col.extend(_templateObject3);

var getColWidth = exports.getColWidth = function getColWidth(columns) {
  var width = columns > 11 && columns < 1 ? 100 : 100 / (12 - columns);
  return (0, _styledComponents.css)(['flex-basis:', '%;max-width:', '%;'], width, width);
};

var getColOffset = exports.getColOffset = function getColOffset(columns) {
  var offset = columns > 11 && columns < 1 ? 0 : 100 / columns;
  return (0, _styledComponents.css)(['flex-basis:', '%;max-width:', '%;'], offset, offset);
};

var start = /*#__PURE__*/exports.start = (0, _styledComponents.css)(['justify-content:flex-start;text-align:start;']);

var center = /*#__PURE__*/exports.center = (0, _styledComponents.css)(['justify-content:center;text-align:center;']);

var end = /*#__PURE__*/exports.end = (0, _styledComponents.css)(['justify-content:flex-end;text-align:end;']);

var top = /*#__PURE__*/exports.top = (0, _styledComponents.css)(['align-items:flex-start;']);

var middle = /*#__PURE__*/exports.middle = (0, _styledComponents.css)(['align-items:center;']);

var bottom = /*#__PURE__*/exports.bottom = (0, _styledComponents.css)(['align-items:flex-end;']);

var around = /*#__PURE__*/exports.around = (0, _styledComponents.css)(['justify-content:space-around;']);

var between = /*#__PURE__*/exports.between = (0, _styledComponents.css)(['justify-content:space-between;']);

var first = /*#__PURE__*/exports.first = (0, _styledComponents.css)(['order:-1;']);

var last = /*#__PURE__*/exports.last = (0, _styledComponents.css)(['order:1;']);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NpdGUvR3JpZC9zdHlsZWQuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiY3NzIiwibWluIiwibGdNaW4iLCJtZE1pbiIsIm91dGVyTWFyZ2luIiwic21NaW4iLCJzbVZpZXdwb3J0IiwibWRWaWV3cG9ydCIsImxnVmlld3BvcnQiLCJDb250YWluZXIiLCJkaXYiLCJDb250YWluZXJGbHVpZCIsImV4dGVuZCIsIlJvdyIsIlJvd1JldmVyc2UiLCJDb2wiLCJDb2xSZXZlcnNlIiwiZ2V0Q29sV2lkdGgiLCJjb2x1bW5zIiwid2lkdGgiLCJnZXRDb2xPZmZzZXQiLCJvZmZzZXQiLCJzdGFydCIsImNlbnRlciIsImVuZCIsInRvcCIsIm1pZGRsZSIsImJvdHRvbSIsImFyb3VuZCIsImJldHdlZW4iLCJmaXJzdCIsImxhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBSyxBQUFPLEFBQU8sQUFBYSxBQUFhLEFBRXREOzs7Ozs7OztBQUFPLElBQU0sa0NBQUEsQUFBb0QsK0NBQTFELEFBQ1A7QUFBTyxJQUFNLGtDQUFBLEFBQW9ELCtDQUExRCxBQUNQO0FBQU8sSUFBTSxrQ0FBQSxBQUFvRCwrQ0FBMUQsQUFFUDs7QUFBTyxJQUFNLHdFQUFBLEFBQW1CO2VBQW5CO2VBQUE7QUFBQSxDQUFZLGlJQUFaLEFBQ0YsQUFDRSx5QkFGQSxBQUlGLEFBQ0UseUJBTE4sQUFBTSxBQU9GLEFBQ0UsQUFJRSxBQUdmOztBQUFPLElBQU0sMENBQWlCLFVBQWpCLEFBQTJCLE9BQWpDLEFBQU0sQUFDTSxBQUNELEFBR2xCOztBQUFPLElBQU0sNERBQUEsQUFBYTtlQUFiO2VBQUE7QUFBQSxDQUFNLEdBQVosQUFRUDs7QUFBTyxJQUFNLGtDQUFhLElBQWIsQUFBaUIsT0FBdkIsQUFJUDs7QUFBTyxJQUFNLDREQUFBLEFBQWE7ZUFBYjtlQUFBO0FBQUEsQ0FBTSxHQUFaLEFBTVA7O0FBQU8sSUFBTSxrQ0FBYSxJQUFiLEFBQWlCLE9BQXZCLEFBSVA7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsWUFBQSxBQUFDLFNBQW9CLEFBQzlDO01BQU0sUUFBUSxVQUFBLEFBQVUsTUFBTSxVQUFoQixBQUEwQixJQUExQixBQUNWLE1BQ0EsT0FBTyxLQUZYLEFBRUksQUFBWSxBQUNoQjtTQUFBLEFBQU8sa0VBQVAsQUFDZ0IsT0FEaEIsQUFFZSxBQUVoQjtBQVJNLEFBVVA7O0FBQU8sSUFBTSxzQ0FBZSxTQUFmLEFBQWUsYUFBQSxBQUFDLFNBQW9CLEFBQy9DO01BQU0sU0FBUyxVQUFBLEFBQVUsTUFBTSxVQUFoQixBQUEwQixJQUExQixBQUNYLElBQ0EsTUFGSixBQUVVLEFBQ1Y7U0FBQSxBQUFPLGtFQUFQLEFBQ2dCLFFBRGhCLEFBRWUsQUFFaEI7QUFSTSxBQVVQOztBQUFPLElBQU0scUNBQUEsQUFBUSw0QkFBZCxBQUtQOztBQUFPLElBQU0sdUNBQUEsQUFBUyw0QkFBZixBQUtQOztBQUFPLElBQU0saUNBQUEsQUFBTSw0QkFBWixBQUtQOztBQUFPLElBQU0saUNBQUEsQUFBTSw0QkFBWixBQUlQOztBQUFPLElBQU0sdUNBQUEsQUFBUyw0QkFBZixBQUlQOztBQUFPLElBQU0sdUNBQUEsQUFBUyw0QkFBZixBQUlQOztBQUFPLElBQU0sdUNBQUEsQUFBUyw0QkFBZixBQUlQOztBQUFPLElBQU0seUNBQUEsQUFBVSw0QkFBaEIsQUFJUDs7QUFBTyxJQUFNLHFDQUFBLEFBQVEsNEJBQWQsQUFJUDs7QUFBTyxJQUFNLG1DQUFBLEFBQU8sNEJBQWIiLCJmaWxlIjoic3R5bGVkLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2phcmljay91cmlzdDQvbmV4dC1naXRodWIifQ==