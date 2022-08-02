"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _loaderUtils = require("loader-utils");

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
  // 获取到用户给当前 loader 传入的 options
  // webpack v5 内置了这个方法，之前需要loader-utils这个包
  var options = (0, _loaderUtils.getOptions)(this) || {}; // 对loader传入的options做校验
  // validate(schema, options, {name:"index"});
  // 将我们传入的信息插入到source中

  return source;
}

;
