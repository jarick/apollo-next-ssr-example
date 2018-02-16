'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideNav = exports.Substrate = exports.FooterCol = exports.FooterRow = exports.ContentRow = exports.Menu = exports.Content = exports.View = exports.BorderLine1 = exports.BorderLine2 = exports.MenuIcon = exports.HeadRow = exports.EMail = exports.Thesis = exports.Phone = exports.Name = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../Grid/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: \'Open Sans\', sans-serif;\n  color: #231f20;\n  padding-left: 0.5em;\n  padding-right: 0.5em;  \n  line-height: 1.5;\n'], ['\n  font-family: \'Open Sans\', sans-serif;\n  color: #231f20;\n  padding-left: 0.5em;\n  padding-right: 0.5em;  \n  line-height: 1.5;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 16px;\n  @media ', ' {\n    font-size: 28px;\n  }\n  margin-bottom: .5em;\n'], ['\n  font-size: 16px;\n  @media ', ' {\n    font-size: 28px;\n  }\n  margin-bottom: .5em;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 16px;\n  @media ', ' {\n    font-size: 24px;\n  }\n  font-style: italic;\n'], ['\n  font-size: 16px;\n  @media ', ' {\n    font-size: 24px;\n  }\n  font-style: italic;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 1em;\n  align-items: center;\n  ', '\n'], ['\n  margin-bottom: 1em;\n  align-items: center;\n  ', '\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4QwDFhAXFzNoPAAAAFJJREFUWMPt1LEJgEAQAMHF6nzsvwG1D41MTUQDmYHLj3t+CwB4wVLt1fHybNV4suj2wZLXrHeLTH95+vHRVddq9tPQUR3VUR0FHdVRHQWAXzkBmWjwizlEZo4AAAAASUVORK5CYII=\');\n  margin-left: 5px;\n  margin-top: 5px;\n  width: 42px;\n  height: 42px;\n  @media ', ' {\n     display: none;\n  }\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  user-select: none;\n'], ['\n  background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4QwDFhAXFzNoPAAAAFJJREFUWMPt1LEJgEAQAMHF6nzsvwG1D41MTUQDmYHLj3t+CwB4wVLt1fHybNV4suj2wZLXrHeLTH95+vHRVddq9tPQUR3VUR0FHdVRHQWAXzkBmWjwizlEZo4AAAAASUVORK5CYII=\');\n  margin-left: 5px;\n  margin-top: 5px;\n  width: 42px;\n  height: 42px;\n  @media ', ' {\n     display: none;\n  }\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  user-select: none;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  height: 1px;\n  background-color: #f8a146;\n  margin-bottom: 2em;\n  @media ', ' {\n    margin-bottom: 3em;\n  }\n'], ['\n  height: 1px;\n  background-color: #f8a146;\n  margin-bottom: 2em;\n  @media ', ' {\n    margin-bottom: 3em;\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  height: 1px;\n  background-color: #f9b56d;\n'], ['\n  height: 1px;\n  background-color: #f9b56d;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  padding-top: 1em;\n  @media ', ' {\n    padding-top: 3em;\n  }\n  display: flex;\n  flex-flow: column nowrap;\n  min-height: 95vh;\n'], ['\n  padding-top: 1em;\n  @media ', ' {\n    padding-top: 3em;\n  }\n  display: flex;\n  flex-flow: column nowrap;\n  min-height: 95vh;\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  @media ', ' {\n    width: calc(100% - 285px);\n  }\n'], ['\n  width: 100%;\n  @media ', ' {\n    width: calc(100% - 285px);\n  }\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n  display: none;\n  width: 285px;\n  @media ', ' {\n    display: inherit;\n  }\n  font-family: \'Open Sans\', sans-serif;\n  font-size: 20px;\n  ul {\n    margin: 0;\n    padding: 0 0 0 0.5em;\n  }\n  li {\n    list-style: none;\n    line-height: 2; \n  }\n  a {\n    text-decoration: underline;\n    color: #231f20;  \n  }\n  .active {\n    padding: 4px 8px;\n    background-color: #f68712;\n    text-decoration: none;\n    color: #fff;\n    border-radius: 8px;\n    position: relative;\n    left: -8px;  \n  }\n'], ['\n  display: none;\n  width: 285px;\n  @media ', ' {\n    display: inherit;\n  }\n  font-family: \'Open Sans\', sans-serif;\n  font-size: 20px;\n  ul {\n    margin: 0;\n    padding: 0 0 0 0.5em;\n  }\n  li {\n    list-style: none;\n    line-height: 2; \n  }\n  a {\n    text-decoration: underline;\n    color: #231f20;  \n  }\n  .active {\n    padding: 4px 8px;\n    background-color: #f68712;\n    text-decoration: none;\n    color: #fff;\n    border-radius: 8px;\n    position: relative;\n    left: -8px;  \n  }\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n  margin-bottom: 2em;\n  @media ', ' {\n    margin-bottom: 5em;\n  }\n'], ['\n  margin-bottom: 2em;\n  @media ', ' {\n    margin-bottom: 5em;\n  }\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: auto;\n'], ['\n  margin-top: auto;\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 10px;\n  padding-left: 0.5em;\n  @media ', ' {\n    margin-bottom: 14px;\n  }\n  font-family: \'Open Sans\', sans-serif;\n  font-weight: lighter;\n  text-shadow: 1px 0 0 #979696;\n  color: #656263;\n  line-height: 2;\n'], ['\n  font-size: 10px;\n  padding-left: 0.5em;\n  @media ', ' {\n    margin-bottom: 14px;\n  }\n  font-family: \'Open Sans\', sans-serif;\n  font-weight: lighter;\n  text-shadow: 1px 0 0 #979696;\n  color: #656263;\n  line-height: 2;\n']);

var Base = _index.Col.extend(_templateObject);

var Name = /*#__PURE__*/exports.Name = _styledComponents2.default.h1.withConfig({
  displayName: 'styled__Name',
  componentId: 's3dvu84-0'
})(['max-width:100%;box-sizing:border-box;flex:0 0 auto;font-family:\'Open Sans\',sans-serif;color:#231f20;padding-left:0.5em;padding-right:0.5em;line-height:1.5;font-weight:bold;font-size:22px;@media ', '{font-size:33px;text-shadow:1px 1px 0 #979696;}'], _index.smViewport);

var Phone = exports.Phone = Base.extend(_templateObject2, _index.smViewport);

var Thesis = exports.Thesis = Base.extend(_templateObject3, _index.smViewport);
var EMail = exports.EMail = Base.extend(_templateObject3, _index.smViewport);

var HeadRow = exports.HeadRow = _index.Row.extend(_templateObject4, _index.between);

var MenuIcon = exports.MenuIcon = _index.Col.extend(_templateObject5, _index.mdViewport);

var BorderLine2 = exports.BorderLine2 = _index.Row.extend(_templateObject6, _index.smViewport);

var BorderLine1 = exports.BorderLine1 = _index.Row.extend(_templateObject7);

var View = exports.View = _index.Container.extend(_templateObject8, _index.smViewport);

var Content = exports.Content = _index.Col.extend(_templateObject9, _index.mdViewport);

var Menu = exports.Menu = _index.Col.extend(_templateObject10, _index.mdViewport);

var ContentRow = exports.ContentRow = _index.Row.extend(_templateObject11, _index.smViewport);

var FooterRow = exports.FooterRow = _index.Row.extend(_templateObject12);

var FooterCol = exports.FooterCol = _index.Col.extend(_templateObject13, _index.smViewport);

var Substrate = /*#__PURE__*/exports.Substrate = _styledComponents2.default.div.withConfig({
  displayName: 'styled__Substrate',
  componentId: 's3dvu84-1'
})(['display:none;.open &{position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,0.4);top:0;display:initial;}']);

var SideNav = /*#__PURE__*/exports.SideNav = _styledComponents2.default.div.withConfig({
  displayName: 'styled__SideNav',
  componentId: 's3dvu84-2'
})(['height:100%;width:0;font-family:"Lato",sans-serif;position:fixed;z-index:1;top:0;left:0;background-color:#111;overflow-x:hidden;transition:0.5s;padding-top:60px;&.open{width:250px;}a{padding:8px 8px 8px 32px;text-decoration:none;font-size:20px;color:#818181;display:block;transition:0.3s;width:200px;}a:hover{color:#f1f1f1;}.closebtn:hover{color:#f1f1f1;}.closebtn{color:#818181;position:absolute;top:0;right:25px;font-size:36px;margin-left:50px;}@media screen and (max-height:450px){padding-top:15px;a{font-size:18px;}}']);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL3NpdGUvQXBwL3N0eWxlZC5qcyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb2wiLCJSb3ciLCJiZXR3ZWVuIiwiQ29udGFpbmVyIiwic21WaWV3cG9ydCIsIm1kVmlld3BvcnQiLCJCYXNlIiwiZXh0ZW5kIiwiTmFtZSIsImgxIiwiUGhvbmUiLCJUaGVzaXMiLCJFTWFpbCIsIkhlYWRSb3ciLCJNZW51SWNvbiIsIkJvcmRlckxpbmUyIiwiQm9yZGVyTGluZTEiLCJWaWV3IiwiQ29udGVudCIsIk1lbnUiLCJDb250ZW50Um93IiwiRm9vdGVyUm93IiwiRm9vdGVyQ29sIiwiU3Vic3RyYXRlIiwiZGl2IiwiU2lkZU5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFLLEFBQUssQUFBUyxBQUFXLEFBQVksQUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRSxJQUFNLE9BQU8sV0FBUCxBQUFXLE9BQWpCLEFBUUE7O0FBQU8sSUFBTSw4REFBQSxBQUFjO2VBQWQ7ZUFBQTtBQUFBLENBQU8sMk1BQWIsQUFBTSxBQVdGLEFBTVg7O0FBQU8sSUFBTSx3QkFBUSxLQUFSLEFBQWEsT0FBbkIsQUFBTSxBQUVGLEFBTVg7O0FBQU8sSUFBTSwwQkFBUyxLQUFULEFBQWMsT0FBcEIsQUFBTSxBQUVGLEFBS1g7QUFBTyxJQUFNLHdCQUFRLEtBQVIsQUFBYSxPQUFuQixBQUFNLEFBRUYsQUFNWDs7QUFBTyxJQUFNLDRCQUFVLFdBQVYsQUFBYyxPQUFwQixBQUFNLEFBR1QsQUFHSjs7QUFBTyxJQUFNLDhCQUFXLFdBQVgsQUFBZSxPQUFyQixBQUFNLEFBTUYsQUFVWDs7QUFBTyxJQUFNLG9DQUFjLFdBQWQsQUFBa0IsT0FBeEIsQUFBTSxBQUlGLEFBS1g7O0FBQU8sSUFBTSxvQ0FBYyxXQUFkLEFBQWtCLE9BQXhCLEFBS1A7O0FBQU8sSUFBTSxzQkFBTyxpQkFBUCxBQUFpQixPQUF2QixBQUFNLEFBRUYsQUFRWDs7QUFBTyxJQUFNLDRCQUFVLFdBQVYsQUFBYyxPQUFwQixBQUFNLEFBRUYsQUFLWDs7QUFBTyxJQUFNLHNCQUFPLFdBQVAsQUFBVyxPQUFqQixBQUFNLEFBR0YsQUE0Qlg7O0FBQU8sSUFBTSxrQ0FBYSxXQUFiLEFBQWlCLE9BQXZCLEFBQU0sQUFFRixBQUtYOztBQUFPLElBQU0sZ0NBQVksV0FBWixBQUFnQixPQUF0QixBQUlQOztBQUFPLElBQU0sZ0NBQVksV0FBWixBQUFnQixPQUF0QixBQUFNLEFBR0YsQUFVWDs7QUFBTyxJQUFNLHdFQUFBLEFBQW1CO2VBQW5CO2VBQUE7QUFBQSxDQUFZLEdBQWxCLEFBYVA7O0FBQU8sSUFBTSxvRUFBQSxBQUFpQjtlQUFqQjtlQUFBO0FBQUEsQ0FBVSxHQUFoQiIsImZpbGUiOiJzdHlsZWQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamFyaWNrL3VyaXN0NC9uZXh0LWdpdGh1YiJ9