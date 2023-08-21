/*
 * @Author: 陈静 xzchen65@126.com
 * @Date: 2023-08-15 00:48:18
 * @LastEditors: 陈静 xzchen65@126.com
 * @LastEditTime: 2023-08-22 00:00:14
 * @FilePath: /from-0-to-100/webpack/online.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { merge } = require("webpack-merge");

const baseWebpackConfig = require("./base");
const onlineWebpackConfig = merge(baseWebpackConfig, {});
module.exports = onlineWebpackConfig;
