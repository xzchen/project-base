/*
 * @Author: 陈静 xzchen65@126.com
 * @Date: 2023-08-13 23:47:03
 * @LastEditors: 陈静 xzchen65@126.com
 * @LastEditTime: 2023-08-18 00:34:42
 * @FilePath: /from-0-to-100/src/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { createRoot } from "react-dom/client"; //它返回一个 root 元素，这个元素可以用来挂载 React 应用程序的根节点
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const container = createRoot(rootElement);
container.render(
  <Router>
    <App />
  </Router>
); //React 组件的 render 方法，将组件渲染到页面上
