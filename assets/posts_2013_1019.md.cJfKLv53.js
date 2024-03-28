import{_ as n,c as s,o as a,U as e}from"./chunks/framework.I0qYP7JU.js";const d=JSON.parse('{"title":"关于一些面试题","description":"","frontmatter":{"title":"关于一些面试题","tags":["JavaScript"],"id":1019,"author":"welpher.yu","categories":["web前端"],"date":"2013-04-02T12:50:22.000Z"},"headers":[],"relativePath":"posts/2013/1019.md","filePath":"posts/2013/1019.md"}'),p={name:"posts/2013/1019.md"},t=e(`<p>1、（js)给如下所有li元素绑定click事件，在鼠标点击的时候alert该li内容、及xy坐标等信息。且在鼠标离开外部ul元素范围时弹出alert提示。要求：注意浏览器兼容性，不要使用现成的框架库。</p><pre>&lt;ul id=&quot;ulitem&quot;&gt;
    &lt;li id=&quot;li1&quot;&gt;内容1&lt;/li&gt;
    。。。重复1000+个li对象...
    &lt;li id=&quot;li9999&quot;&gt;内容9999&lt;/li&gt;
&lt;/ul&gt;</pre><p>解：对于这个题目，考察内容为：事件委托。这么多的li，循环li绑定事件，不知道浏览器会有多卡。直接将事件绑定在ul上，事件冒泡上来就做处理。考虑到兼容性的话，标准浏览器和ie的区别以及dom 2级和1级的区别。事件绑定后，有event的兼容，event.target、event.srcElement；获取内容的话，有兼容性innerText和textContent的区别，关于mouseout兼容的问题，直接看代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function mouseover_x ( ae ){  </span></span>
<span class="line"><span>    var e = window.event || ae ;  </span></span>
<span class="line"><span>    var s = e.fromElement || e.relatedTarget ;  </span></span>
<span class="line"><span>    if( document.all ){  </span></span>
<span class="line"><span>        if(  !(s == this || this.contains(s))  ){  </span></span>
<span class="line"><span>            alert(&amp;quot;IE: 你 in 了 ！&amp;quot;);  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }else{  </span></span>
<span class="line"><span>        var res= this.compareDocumentPosition(s) ;     </span></span>
<span class="line"><span>        if(  !(s == this || res == 20 || res == 0 )  ){  </span></span>
<span class="line"><span>            alert(&amp;quot;FF: 你 in 了 ！&amp;quot;);  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>}  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>function mouseout_x( ae ){  </span></span>
<span class="line"><span>        var e = window.event || ae;  </span></span>
<span class="line"><span>        var s = e.toElement || e.relatedTarget;     </span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if(document.all){     </span></span>
<span class="line"><span>            if( !this.contains(s) ){     </span></span>
<span class="line"><span>                alert(&#39;IE: 你 out 了&#39;);     </span></span>
<span class="line"><span>            }     </span></span>
<span class="line"><span>        }else{     </span></span>
<span class="line"><span>            var res= this.compareDocumentPosition(s) ;       </span></span>
<span class="line"><span>            if( ! ( res == 20 || res == 0) ){        </span></span>
<span class="line"><span>                alert(&#39;FF: 你 out 了&#39;);     </span></span>
<span class="line"><span>            }       </span></span>
<span class="line"><span>        }    </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>遇到这些题是不是感觉灰常难呢，呵呵！习惯了冲着目标在短时间内完成功能，完成架构的我，对底层js还是太欠缺了。</p><p>2、(.net)请描述什么是装箱？什么是拆箱？在进行装箱和拆箱的时候会出现什么问题？怎样避免？</p><p>解：我表示我看到这个很茫然，虽然我也搞了这么些年的.net。但是，我从来没有看过.net的书箱神马的，其实装箱和拆箱是.net中最为核心的东西。其实呢，装箱就是隐式的将一个值型转换为引用型对象。拆箱就是将一个引用型对象转换成任意值型。这个应该都知道。通过这些参考中的东西我们知道，装箱和拆箱会引起性能上的问题，主要原因是1:对于堆的操作效率比较低, 2:再堆上分配的内存要通过GC去收集(GC要检测到对象为Null的时候才收集),从而降低了效率。应该尽量避免装箱和拆箱的操作。</p><p>3、请列举你所知道的.net平台下可能会引起内存泄露问题的场景，怎么解决？</p><p>解：非托管资源（如文件操作、网络连接等）会造成内存泄露。必须显式的资源释放。</p><p>参考：</p><p>1、<a href="http://xuganggogo.iteye.com/blog/538476" target="_blank" rel="noreferrer">http://xuganggogo.iteye.com/blog/538476</a></p><p>2、<a href="http://www.cnblogs.com/xiaoshi/archive/2008/05/28/1208902.html" target="_blank" rel="noreferrer">http://www.cnblogs.com/xiaoshi/archive/2008/05/28/1208902.html</a></p><p>3、<a href="http://www.cnblogs.com/mqsuper/archive/2008/08/12/1265520.html" target="_blank" rel="noreferrer">http://www.cnblogs.com/mqsuper/archive/2008/08/12/1265520.html</a></p><p>4、<a href="http://blog.csdn.net/yuanhuiqiao/article/details/5264480" target="_blank" rel="noreferrer">http://blog.csdn.net/yuanhuiqiao/article/details/5264480</a></p><p>5、<a href="http://www.infoq.com/cn/news/2009/11/Memory-Leaks-.NET" target="_blank" rel="noreferrer">http://www.infoq.com/cn/news/2009/11/Memory-Leaks-.NET</a></p>`,15),l=[t];function i(o,r,c,u,h,m){return a(),s("div",null,l)}const _=n(p,[["render",i]]);export{d as __pageData,_ as default};
