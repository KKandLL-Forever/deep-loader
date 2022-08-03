// import {getOptions} from 'loader-utils';
// import util from 'util'
import {parse, stringify} from 'scss-parser'
import createQueryWrapper from 'query-ast'
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

export default function (source) {
  if (source.includes('/deep/')) {
    // parse scss code to ast
    let ast = parse(source)
    // console.log(util.inspect(ast, false, null, true))
    let $ = createQueryWrapper(ast, {})
    let insert = [
      {
        type: 'punctuation',
        value: ':',
      },
      {
        type: 'pseudo_class',
        value: [
          {
            type: 'identifier',
            value: 'v-deep',
          }
        ],
      },
    ]
    // find target node
    let firstNode = $(n => n.node.value === '/').first()
    // insert node before oldNode
    for (const obj of insert) {
      firstNode.before(obj)
    }
    // remove oldNode
    $(n => n.node.value === '/').remove()
    $(n => n.node.value === 'deep').remove()
    console.log(firstNode, 'node')
    let res = stringify($().get(0))
    console.log(res)
    
    return stringify($().get(0))
  }else{
    return source
  }
}
