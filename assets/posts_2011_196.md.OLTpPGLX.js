import{_ as t,c as e,o as a,U as r}from"./chunks/framework.I0qYP7JU.js";const g=JSON.parse('{"title":"jQuery Raty介绍，最好用的jquery评分插件","description":"","frontmatter":{"title":"jQuery Raty介绍，最好用的jquery评分插件","tags":["jquery","raty","评分"],"id":196,"author":"welpher.yu","categories":["web前端"],"date":"2011-10-02T21:36:09.000Z"},"headers":[],"relativePath":"posts/2011/196.md","filePath":"posts/2011/196.md"}'),n={name:"posts/2011/196.md"},o=r(`<p>你知道怎么用最少的代码就能写出像<a href="http://www.amazon.cn" title="卓越" target="_blank" rel="noreferrer">卓越</a>里的评分功能嘛，仅需非常少的代码就能实现评分功能。能够如此简单的实现这个功能，最主要是得益于jquery raty这个插件。下面介绍一下：</p><p>jquery raty（星级评分插件），使用它仅需要简单的两行就能实现评分功能。星级评分插件在jquery还不是很有名的时候已经就有了，但是代码多css多不易维护，后来用jquery改写了。（翻译自<a href="http://www.wbotelhos.com/2010/07/14/jquery-raty-a-star-rating-plugin/" target="_blank" rel="noreferrer">jquery raty官网</a>）</p><p>这个基于jquery的插件是非常容易使用的，仅仅两行代码就能实现评分功能，看看到底是如何实现的呢？</p><ol><li>首先将jquery和raty引入进来</li></ol><pre>&lt;script type=&quot;text/javascript&quot; src=&quot;jquery.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;jquery.raty.js&quot;&gt;&lt;/script&gt;</pre><ol start="2"><li>默认的配置值</li></ol><pre>cancel:       false              //是否可以进行取消操作
cancelHint:   &#39;取消评分!&#39;         // 取消的提示信息
cancelOff:    &#39;cancel-off.png&#39;   // Name of the cancel image off.
cancelOn:     &#39;cancel-on.png&#39;    // Name of the cancel image on.
cancelPlace:  &#39;left&#39;             // Position of the cancel button.
click:        null               // Default callback function.
half:         false              // Active the half star.
hintList:     [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;]  // A hint information for default 5 stars.
iconRange:    []         // A range of custom icons that you can set.
noRatedMsg:   &#39;not rated yet&#39;    // A hint for no rated elements when it&#39;s read-only.
number:       5         // Number of star.
path:         &#39;img      // Path of images.
readOnly:     false     // read-only or not.
scoreName:    &#39;score&#39;   // The name of target score.
size:         16        // The icons size.
starHalf:     &#39;star-half.png&#39;  // The image of the half star.
starOff:      &#39;star-off.png&#39;   // Name of the star image on.
starOn:       &#39;star-on.png&#39;    // Name of the star image on.
start:        0                // Start with a score value.
target:       null             // Number of stars to be selected.
targetKeep:   false            // If the last choose value will be keeped on mouseout.
targetType:   &#39;hint&#39;           // What display on target element: hint or number.
width:        null             // The container width of the stars.</pre><ol start="3"><li>如何使用</li></ol><pre>$(&#39;#star&#39;).raty();
&lt;div id=&quot;star&quot;&gt;&lt;/div&gt;</pre><p>这样就ok咯，是不是很简单。复杂一点的去官网看例子吧。这个评分插件对ie6是支持的。在我使用的时候不知道是不是relative用多了，在ie6下怎么也点击不到，还是花了点时间还是没调好，希望你们使用的时候不要遇见这个问题。遇见这个问题也能解决。 查看更详细请到<a href="http://www.wbotelhos.com/raty/" target="_blank" rel="noreferrer">jquery raty官网</a></p>`,10),s=[o];function l(c,i,f,p,u,h){return a(),e("div",null,s)}const m=t(n,[["render",l]]);export{g as __pageData,m as default};
