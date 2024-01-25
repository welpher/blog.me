---
id: 1068
title: 微前端qiankun编译externals资源复用
author: welpher.yu
date: 2023-04-21 11:47:11
tags:
  - qiankun
  - webpack
categories:
  - web前端
---

#### 微前端现状
主应用和微应用都会用同一个版本的类库，比如vue/vuex/vue-router/react/react-router/element-ui等，主应用打包一次加载进来，微应用再各打包一次各加载一遍，不利于缩小打包体积，浪费加载时间。

首先在打包的时候要配置externals，这样就在打包就不会打包进chunk-verdors.xxxxxxx.js里.


#### 解决方法
首先要保证主应用微应用使用同一版本的类库，使用同一个url，qiankun会将微应用中的外链script标签引入的内容请求到之后，会记录到一个全局变量中，再次使用，会先从全局变量中获取。这样，一个微应用使用后的资源，下一个微应用再使用时就不会再去请求资源了

微应用利用主应用的资源时，子应用的资源可以添加ignore属性，如
`<script src="https://map.qq.com/api/gljs?v=1.exp" ignore></script>`

这样微应用在加载时就不会去加载这个资源了。


参考文档： [qiankun faq](https://qiankun.umijs.org/zh/faq)