/*
 * @Author: 陈静 xzchen65@126.com
 * @Date: 2023-08-18 00:26:48
 * @LastEditors: 陈静 xzchen65@126.com
 * @LastEditTime: 2023-08-18 01:01:26
 * @FilePath: /from-0-to-100/stylelintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  extends: [
    "stylelint-config-standard", //官方推荐配置规则
    "stylelint-config-standard-less", //（标准化配置/less/scss）
    // "stylelint-config-prettier", //stylelint和prettier的冲突覆盖 v15已经去掉了
    "stylelint-config-recess-order" //插件规范css书写顺序，减少回流
  ]
};
