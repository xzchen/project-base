/*
 * @Author: 陈静 xzchen65@126.com
 * @Date: 2023-08-14 00:11:29
 * @LastEditors: 陈静 xzchen65@126.com
 * @LastEditTime: 2023-08-22 00:01:10
 * @FilePath: /from-0-to-100/src/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ENV = "dev" } = process.env;
const isProd = ENV === "prod";
console.log("iss", isProd);
module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.jsx", //入口文件
  output: {
    clean: true, //移除之前打包的结果
    filename: "index.[hash:8].js", //打包出来的文件名
    path: path.resolve(__dirname, "../dist") //放在哪个文件下
  },
  resolve: {
    extensions: [".jsx", "..."] //webpack默认会按序查找后缀名的文件。默认值[string] = ['.js', '.json', '.wasm'] https://webpack.js.org/configuration/resolve/#resolveextensions .因为此是覆盖项配置，webpack提供...写入默认配置
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
            // preset-react 预处理jsx preset-env 预设了一些方法处理es6+->es5
          }
        }
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource" //还可以通过 loader 或内置的 Asset Modules 引入任何其他类型的文件
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })] // 根据public/index.html模版渲染
};
