/*
 * @Author: 陈静 xzchen65@126.com
 * @Date: 2023-08-13 23:45:45
 * @LastEditors: 陈静 xzchen65@126.com
 * @LastEditTime: 2023-08-22 00:06:05
 * @FilePath: /from-0-to-100/src/App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.less";
export const App = () => {
  const Home = () => {
    return <h2>Home Page</h2>;
  };

  // 定义其他页面组件
  const About = () => {
    return <h2>About Page</h2>;
  };
  console.log("About", About);

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> }
  ];
  return (
    <h1>
      <Link to="/about">关于</Link>
      <Link to="/">首页</Link>
      {/* <img src="../public/assets/star.jpeg" /> */}
      {/* 在 Webpack 5 中，img 标签的 src 属性可以直接使用图片的 URL，而不需要使用 require()。这是因为 Webpack 5 中的 url-loader 已经内置了对图片资源的处理，可以直接将图片转换为 Data URL */}
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
      </Routes>
    </h1>
  );
};
