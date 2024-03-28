import{_ as e,c as t,o,U as p,a4 as a,a5 as l,a6 as _}from"./chunks/framework.I0qYP7JU.js";const v=JSON.parse('{"title":"excel中vlookup的使用","description":"","frontmatter":{"title":"excel中vlookup的使用","tags":["excel"],"id":285,"author":"welpher.yu","categories":["办公软件"],"date":"2011-10-21T21:46:58.000Z"},"headers":[],"relativePath":"posts/2011/285.md","filePath":"posts/2011/285.md"}'),s={name:"posts/2011/285.md"},r=p('<p>这几天突然来了兴致说学习下excel，一直只做最基本的表格来着，从来也没仔细学习过。从周二开始学习到现在我就写了个工资表。还是照着书上下来的。</p><p>第一个我遇见的问题就是在excel怎么将很大的数字显示为文本格式，这个问题我以前就遇见过一直没解决。学了第一部分我就知道了，给大家看看我的第一张表。</p><p><img src="'+a+'" alt="table"></p><p>我一直都想知道那绿色的三角是什么，就是这个绿色三角让这么大的数字还保持数字的格式，而不是科学计数形式。首先选中你希望操作的单元格，设置单元格格式-&gt;数字-&gt;常规，其中最重要一步就是要在输入数字前输入“’”（单撇号）。</p><p>下面介绍一个重点函数vlookup</p><p>语法规则 该函数的语法规则如下： VLOOKUP(lookup_value,table_array,col_index_num,range_lookup)</p><ul><li>lookup_value    要查找的值    数值、引用或文本字符串</li><li>table_array    要查找的区域    数据表区域</li><li>col_index_num    返回数据在区域的第几列数    正整数</li><li>range_lookup    精确匹配    TRUE（或不填） /FALSE</li></ul><p><img src="'+l+'" alt="vlook"></p><p>个人所得税时工资表</p><p><img src="'+_+'" alt="工资表"></p><p>vlookup中第一个参数是参照哪一列，第二个参数是要在那部分查找，第三个参数是你需要返回第几列的信息。</p><p>tips：用过excel的人应该知道那个美元符号（$）是什么意思吧，我就不解释了。</p>',12),i=[r];function c(n,u,d,m,k,x){return o(),t("div",null,i)}const f=e(s,[["render",c]]);export{v as __pageData,f as default};
