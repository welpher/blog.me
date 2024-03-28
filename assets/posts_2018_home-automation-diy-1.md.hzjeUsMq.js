import{_ as t,c as a,o as i,U as o,aw as s,ax as e,ay as l,az as r,aA as m,aB as _,aC as n,aD as p}from"./chunks/framework.I0qYP7JU.js";const x=JSON.parse('{"title":"家里的智能化1：随想","description":"","frontmatter":{"id":1062,"title":"家里的智能化1：随想","author":"welpher.yu","date":"2018-01-07T20:44:30.000Z","tags":["智能家居"],"categories":["居家折腾"]},"headers":[],"relativePath":"posts/2018/home-automation-diy-1.md","filePath":"posts/2018/home-automation-diy-1.md"}'),c={name:"posts/2018/home-automation-diy-1.md"},h=o('<p>最近外面的空气真的是非常的差，肉身翻墙毕竟不太现实（贫贱不能移），家里两台净化器一天24小时就没停过。看了看软件里的数据，还是想自己折腾一个空气质量检测的东西。这样也可以随身带着到处去测数据，也顺便看看老家小地方的空气怎么样。 <img src="'+s+'" alt="空气污染" title="空气污染"></p><h4 id="传感器" tabindex="-1">传感器 <a class="header-anchor" href="#传感器" aria-label="Permalink to &quot;传感器&quot;">​</a></h4><ol><li><p>PM2.5检测： 要准确还是得来激光检测仪，如攀藤PMS系列（PMS5003、PMS7003）G5和G7的区别就是大小和接口 <img src="'+e+'" alt="PMS5003" title="PMS5003"> PMS5003 是攀腾科技出的一款激光 PM 2.5 颗粒物传感器，使用 pms5003 可以很方便的读取数据，方便的追踪家里的 PM 2.5 浓度变化，或者来检测空气净化器的净化效果。型号后面带T的就是有温湿度监测功能，带S的就是有测甲醛的功能。</p></li><li><p>温湿度检测： Si7021，是Silicon Labs生产的温湿度传感器芯片。 <img src="'+l+'" alt="Si7021" title="Si7021"><img src="'+r+'" alt="HTU21D" title="HTU21D"><img src="'+m+'" alt="dht22" title="dht22"><img src="'+_+'" alt="shtx" title="shtx"></p></li><li><p>二氧化碳检测： MH-Z19，是一款国产的二氧化碳传感器，量程为 0~5000ppm，精度为 50ppm+5% 读数值，指标和进口 SenseAir S8 差不太多，但是价格只需要二分之一，相当实惠（但是寿命也只有三分一）。 <img src="'+n+'" alt="mh-z19" title="mh-z19"><img src="'+p+'" alt="SenseAir S8" title="SenseAir S8"></p></li></ol><h4 id="平台" tabindex="-1">平台 <a class="header-anchor" href="#平台" aria-label="Permalink to &quot;平台&quot;">​</a></h4><ol><li>Domoticz: Domoticz 是一个开源的 Home Automation System，使用 C++ 编写，相对于其他系统的好处就是占用资源少。可以安装于linux（树莓派、群辉等）或windows，配合其他推送app或者邮件可以实现推送和警示，编程支持lua、bash、python等，有blockly。相对openhab来说，domoticz界面更友好，学习成本低。</li><li>Homeassistant Homeassistant是一个基于python3语言的开源家庭自动化平台，它可以监控你家里的所有设备，并实现自动化控制；它尤其适合运行在开源硬件平台树莓派上。它之所以是我心目中最优秀的智能家居平台，一是因为它支持的软硬件组件十分丰富，并且可以自己开发组件；二是简单易用，它拥有丰富的文档资料。它丰富的组件可以让我们常见的各种智能家居产品很方便地接入该智能家居平台，进而实现对各种各样的智能家居单品进行集中管理，并实现跨品牌智能家居产品间的联动及自动化控制。homeassistant官方网站上拥有丰富的文档资料，它涵盖从入门到高手的各种安装、设置、自动化、群组管理等等资料，它可以使一个小白用户很快就能上手。</li></ol>',5),d=[h];function S(u,P,g,f,y,M){return i(),a("div",null,d)}const A=t(c,[["render",S]]);export{x as __pageData,A as default};
