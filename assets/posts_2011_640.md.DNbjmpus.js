import{_ as t,c as r,o as s,j as n}from"./chunks/framework.BeChtK_P.js";const d=JSON.parse('{"title":"IE条件注释","description":"","frontmatter":{"title":"IE条件注释","tags":["ie","条件注释"],"id":640,"author":"welpher.yu","categories":["web前端"],"date":"2011-12-08T15:42:04.000Z"},"headers":[],"relativePath":"posts/2011/640.md","filePath":"posts/2011/640.md"}'),i={name:"posts/2011/640.md"};function a(f,e,l,o,E,I){return s(),r("div",null,[...e[0]||(e[0]=[n("p",null,"条件注释为IE专用的语法，IE将该注释内容视为有效语法，而非IE浏览器一律视为注释。",-1),n("pre",{class:"brush: html; gutter: true; first-line: 1"},`<!--[if IE]>
里面的内容只有IE能显示。
<![endif]-->

<!--[if IE 6]>
里面的内容只有IE6能显示。
<![endif]-->

<!--[if IE 7]>
里面的内容只有IE7能显示。
<![endif]-->

<!--[if IE 8]>
里面的内容只有IE8能显示。
<![endif]-->

<!--[if !(IE 6)]>
里面的内容除了IE6外能显示。
<![endif]-->

<!--[if gte IE 6]>
里面的内容IE6及以上版本能显示。
<![endif]-->

<!--[if gt IE 6]>
里面的内容只有IE6以上版本能显示。
<![endif]-->

<!--[if lte IE 8]>
里面的内容只有IE8及IE8版本以下能显示。
<![endif]-->

<!--[if lt IE 8]>
里面的内容只有IE8版本以下能显示。
<![endif]-->`,-1),n("p",null,"IE条件注释可以包围任何HTML内容。",-1),n("p",null,"PS：用IE 9条件注释的方法来添加IE9特性可能是不可行的。因为大多数中国网站默认都是兼容模式，而IE的兼容模式会导致条件注释的版本号无法正确对应起来。",-1),n("p",null,"参考：",-1),n("p",null,[n("a",{href:"http://msdn.microsoft.com/en-us/library/ms537512.aspx",target:"_blank",rel:"noreferrer"},"http://msdn.microsoft.com/en-us/library/ms537512.aspx")],-1)])])}const c=t(i,[["render",a]]);export{d as __pageData,c as default};
