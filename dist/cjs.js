"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _scssParser = require("scss-parser");

var _queryAst = _interopRequireDefault(require("query-ast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {getOptions} from 'loader-utils';
// import util from 'util'
// 校验loader传入的options
// const { validate } = require("schema-utils");
// loader options的校验规则
// options是一个object类型，有一个text属性，这属性是string类型
// const schema = {
//   type: "object",
//   properties: {
//     text: {
//       type: "string",
//     },
//   },
// };
function _default(source) {
  if (source.includes('/deep/')) {
    // parse scss code to ast
    var ast = (0, _scssParser.parse)(source); // console.log(util.inspect(ast, false, null, true))

    var $ = (0, _queryAst["default"])(ast, {});
    var insert = [{
      type: 'punctuation',
      value: ':'
    }, {
      type: 'pseudo_class',
      value: [{
        type: 'identifier',
        value: 'v-deep'
      }]
    }]; // find target node

    var firstNode = $(function (n) {
      return n.node.value === '/';
    }).first(); // insert node before oldNode

    for (var _i = 0, _insert = insert; _i < _insert.length; _i++) {
      var obj = _insert[_i];
      firstNode.before(obj);
    } // remove oldNode


    $(function (n) {
      return n.node.value === '/';
    }).remove();
    $(function (n) {
      return n.node.value === 'deep';
    }).remove();
    console.log(firstNode, 'node');
    var res = (0, _scssParser.stringify)($().get(0));
    console.log(res);
    return (0, _scssParser.stringify)($().get(0));
  } else {
    return source;
  }
}
