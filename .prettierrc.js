/*
 * @Author: 陈静 xzchen65@126.com
 * @Date: 2023-08-18 00:56:17
 * @LastEditors: 陈静 xzchen65@126.com
 * @LastEditTime: 2023-08-18 00:56:19
 * @FilePath: /from-0-to-100/.prettierrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  printWidth: 100, //一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个 tab 代表几个空格数，默认为 2 个
  useTabs: false, //是否使用 tab 进行缩进，默认为false，表示用空格进行缩减
  singleQuote: false, // 字符串是否使用单引号，默认为 false，使用双引号
  semi: true, // 行尾是否使用分号，默认为true
  trailingComma: "none", // 是否使用尾逗号
  htmlWhitespaceSensitivity: "strict", // HTML空白敏感度
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为 true，效果： { key: 'value' }
  proseWrap: "never", // 换行设置
  arrowParens: "always" // 默认箭头函数单参数要括号
};
