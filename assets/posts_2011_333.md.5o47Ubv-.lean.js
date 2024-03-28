import{_ as s,c as p,a as e,m as t,U as n,o as a}from"./chunks/framework.I0qYP7JU.js";const W=JSON.parse('{"title":"javascript DOM事件模型","description":"","frontmatter":{"title":"javascript DOM事件模型","tags":["dom","JavaScript","事件模型"],"id":333,"author":"welpher.yu","categories":["web前端"],"date":"2011-11-03T15:00:21.000Z"},"headers":[],"relativePath":"posts/2011/333.md","filePath":"posts/2011/333.md"}'),o={name:"posts/2011/333.md"},r=t("p",null,"前些天有人电话里问我dom事件模型，其实这个东西我之前肯定是有看过，好好的理过的。只不过，公司面对的客户群就是纯ie的的客户，所以对标准浏览器的事件模型给忘记了。当时只回答了ie下是冒泡（Bubbling），标准浏览器是捕获（Capture）。",-1),l=t("p",null,"回头去搜了一下，标准浏览器还有一个冒泡（Bubbling）的过程。而Netscape Navigatior才只有捕获。",-1),i=t("p",null,"我们都知道DOM(文档对象模型)是一个树形结构，当一个html元素产生一个事件时，这个事件会在元素节点与根节点之间的路径传播，路径中的节点都会触发这个事件。",-1),c=t("p",null,[t("strong",null,"DOM事件模型主要有三种模型：冒泡、捕获和标准事件模型。")],-1),d=t("p",null,"之前浏览器都是有自己的事件模型，到DOM Level3后，才陆陆续续的支持DOM标准的事件模型，即捕获与冒泡型。这两种事件模型肯定是各有优缺点了，所以标准浏览器的事件模型会采用两者的结合体。现在主流的浏览器firefox,opera,safari都支持标准的DOM事件处理模型，而ie仍使用自己的模型。",-1),u=t("div",{style:{display:"none"}},"[html] [/html]",-1),_=t("pre",{class:"brush: html; gutter: true; first-line: 1"},`<div class="wrapper">
	<div class="head">
		head
	</div>
	<div class="mainbody" >
		lalsdfjasdk jfklsdajf lkasjdf  dsf sdf <br/>
		lalsdfjasdk jfklsdajf lkasjdf<br/>
		lalsdfjasdk jfklsdajf lkasjdf<br/>
	<button class="btn">button</button>
	</div>
</div>`,-1),h=t("p",null,"button.btn - > div.mainbody - > div.wrapper - > body - >document",-1),v=t("p",null,"在标准浏览器下事件的传播路径会是这样：",-1),b=t("p",null,"window - > document - > body - > div.wrapper - > div.mainbody - > button.btn",-1),f=t("ul",null,[t("li",null,"> div.mainbody - > div.wrapper - > body - >document - > window")],-1),m=t("p",null,"javascript使用事件驱动，先给一个元素添加事件监听函数，当这个元素的对应事件对触发后，就会调用添加的事件监听函数。",-1),y=t("p",null,"下面就是javascript中给元素添加事件监听函数的方法：",-1),M=t("p",null,"直接在html元素上添加",-1),w=t("div",{style:{display:"none"}},"[html] [/html]",-1),D=t("pre",{class:"brush: html; gutter: true; first-line: 1"},'<button id="sbtBtn" onclick="btnClick();" class="btn">button</button>',-1),O=t("div",{style:{display:"none"}},"[javascript] [/javascript]",-1),g=t("pre",{class:"brush: javascript; gutter: true; first-line: 1"},`document.getElementById("sbtBtn").onclick = function(){
//add your code
}`,-1),j=t("div",{style:{display:"none"}},"[javascript] [/javascript]",-1),k=t("pre",{class:"brush: javascript; gutter: true; first-line: 1"},`document.getElementById("sbtBtn").addEventListener("click",
    function(){
//add your code
    },true);`,-1),E=n("",42);function T(C,B,I,N,S,x){return a(),p("div",null,[r,l,i,c,d,u,_,e(" 这段html代码在IE下事件的传播路径（冒泡）是这样的： "),h,v,b,f,m,y,M,w,D,e(" 用相应的js属性 "),O,g,e(" 用注册函数 "),j,k,e(" 这三种方法在作用域以及事件传播等都是有区别，而这个区别就是DOM level 0 ,DOM level 2事件模型的区别了。"),E])}const q=s(o,[["render",T]]);export{W as __pageData,q as default};
