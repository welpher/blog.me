import{_ as s,c as i,o as t,U as p}from"./chunks/framework.I0qYP7JU.js";const u=JSON.parse('{"title":"XXx外网检测到目标URL存在基于DOM的跨站脚本漏洞","description":"","frontmatter":{"title":"XXx外网检测到目标URL存在基于DOM的跨站脚本漏洞","tags":["dom","injection","xss"],"id":88,"author":"welpher.yu","categories":["web前端"],"date":"2011-09-22T11:28:20.000Z"},"headers":[],"relativePath":"posts/2011/88.md","filePath":"posts/2011/88.md"}'),a={name:"posts/2011/88.md"},l=p(`<blockquote><p>为了配合XXx门户网站等级保护，xxx购置了xx的漏洞扫描服务器。经过扫描，发现我们外网WEB服务器上有一个检测到目标URL存在基于DOM的跨站脚本漏洞，具体请见附件。咨询过xx技术人员，他们的说法是外网WEB上的部关代码不符合规范。 这个外网算起来很老了，维护阶段出现这种东西，有点晕，毕竟不是自己写的代码。</p></blockquote><p>以前很少去注意这些东西，这个到底是怎么回事呢。在网上找了篇文章，有什么疑问的话会做解答。</p><p><strong>1、那到底什么是跨站脚本漏洞呢？</strong></p><blockquote><p>跨站脚本漏洞（Cross Site Scripting，常简写作XSS）是Web应用程序在将数据输出到网页的时候存在问题，导致攻击者可以将构造的恶意数据显示在页面的漏洞。因为跨站脚本攻击都是向网页内容中写入一段恶意的脚本或者HTML代码，故跨站脚本漏洞也被叫做HTML注入漏洞（HTML Injection）。 与SQL注入攻击数据库服务器的方式不同，跨站脚本漏洞是在客户端发动造成攻击，也就是说，利用跨站脚本漏洞注入的恶意代码是在用户电脑上的浏览器中运行的。</p></blockquote><p><strong>2、有什么危害？</strong></p><blockquote><p>跨站脚本攻击注入的恶意代码运行在浏览器中，所以对用户的危害是巨大的——也需要看特定的场景：跨站脚本漏洞存在于一个无人访问的小站几乎毫无价值，但对于拥有大量用户的站点来说却是致命的。</p><p>最典型的场景是，黑客可以利用跨站脚本漏洞盗取用户Cookie而得到用户在该站点的身份权限。据笔者所知，网上就有地下黑客通过出售未公开的GMail、雅虎邮箱及hotmail的跨站脚本漏洞牟利。</p><p>由于恶意代码会注入到浏览器中执行，所以跨站脚本漏洞还有一个较为严重的安全威胁是被黑客用来制造欺诈页面实现钓鱼攻击。这种攻击方式直接利用目标网站的漏洞，比直接做一个假冒网站更具欺骗性。</p><p>另外，控制了用户的浏览器，黑客还可以获取用户计算机信息、截获用户键盘输入、刺探用户所处局域网信息甚至对其他网站进行GET Flood攻击。目前互联网已经有此类利用跨站脚本漏洞控制用户浏览器的黑客工具出现。</p><p>当然，虽然跨站脚本攻击是在客户端浏览器进行，但是最终也是可以攻击服务器的。笔者就曾在安全测试过程中就利用某Blog程序的跨站脚本漏洞得到网站管理员身份并最终控制Web服务器。 <strong>3、这个是怎么产生的呢？</strong> 看了些文章，产生的方式无非就这几种。一是url要传参数，如果参数中含有&lt;script&gt;这样的脚本 ，而又没有对这些个参数进行处理的话，就会在页面中执行这个脚本，从而。。。还有就是，页面中使用document.write，如果这个里面含有&lt; &gt; &#39; 等一系列的符号时，会对页面造成影响 。等等啦，想知道更多，去看参考文章吧。  </p></blockquote><p>下面是扫描工具给出报告的选段：</p><blockquote><p><strong>详细描述</strong>:基于DOM的跨站脚本漏洞属于跨站漏洞的一种分类。造成跨站的原因是客户端脚本（一般是javascript）处理用户输入时，没有做充分的过滤，并且将用户的输入赋给DOM树中某些对象的属性，比如通过document.write，window.location等。这些操作支持执行javascript,造成用户的输入被执行。</p><p>比如：</p><p>&lt;HTML&gt;</p><p>&lt;TITLE&gt;Welcome!&lt;/TITLE&gt;</p><p>Hello,</p><p>&lt;SCRIPT&gt;</p><p>var pos=document.URL.indexOf(&quot;name=&quot;)+5;</p><p>document.write(document.URL.substring(pos,document.URL.length));</p><p>&lt;/SCRIPT&gt;</p><p>&lt;BR&gt;</p><p>Welcome!!!</p><p>&lt;/HTML&gt;</p><p>这个HTML页面显示欢迎信息。</p><p>当请求http://[SERVER]]/welcome.html?name=&lt;script&gt;alert(document.cookie)&lt;/script&gt;，服务器的响应内容并没有包含&lt;script&gt;alert(document.cookie)&lt;/script&gt;,但是通过document.write修改DOM树，导致用户的输入被执行，造成跨站脚本漏洞。</p><p>**解决办法:**请分析并加强客户端 (JavaScript) 代码。 处理攻击者所能影响的输入源，通常是url，例如：document.URL，document.URLUnencoded，document.location（及其许多属性，document.referrer ，window.location（及其许多属性）</p><p>检查页面中是否使用了以下代码作为输出：</p><ul><li><p>document.write(...)</p></li><li><p>document.writeln(...)</p></li><li><p>document.body.innerHtml=...</p></li></ul><ul><li>直接修改 DOM（包括 DHTML 事件），例如：</li></ul><ul><li><p>document.forms[0].action=...（以及各种其他集合） * document.attachEvent(...)</p></li><li><p>document.create...(...)</p></li><li><p>document.execCommand(...)</p></li><li><p>document.body. ...（通过主体对象访问 DOM）</p></li><li><p>window.attachEvent(...)</p></li></ul><ul><li>替换页面URL，例如：</li></ul><ul><li><p>document.location=...（以及指派给位置的 href、主机和主机名）</p></li><li><p>document.location.hostname=...</p></li><li><p>document.location.replace(...)</p></li><li><p>document.location.assign(...)</p></li><li><p>document.URL=...</p></li><li><p>window.navigate(...)</p></li></ul><ul><li>打开/修改窗口，例如：</li></ul><ul><li><p>document.open(...)</p></li><li><p>window.open(...)</p></li><li><p>window.location.href=... （以及指派给位置的 href、主机和主机名）</p></li></ul><ul><li>直接执行脚本，例如： * eval(...)</li></ul><ul><li><p>window.execScript(...)</p></li><li><p>window.setInterval(...)</p></li><li><p>window.setTimeout(...)</p></li></ul><p>  我们这个外网的情况就是：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>URL：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://www.abc.cn/123/201102/t1234.html#&#39;&quot;&amp;gt;&amp;lt;script&amp;gt;alert(/xss/)&amp;lt;/script&amp;gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://www.abc.cn/123/201102/t1234.html?var=xss&#39;&quot;&amp;gt;&amp;lt;script&amp;gt;alert(/xss/)&amp;lt;/script&amp;gt;</span></span></code></pre></div><p>而页面中用了window.location.href</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;?hello&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.location.href;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> link_href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&amp;url=&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str2;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;a href=&#39;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">link_href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&#39; class=&#39;A14H&#39; target=&#39;_blank&#39;&gt;点击提问&lt;/a&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span></code></pre></div><p>上面这些代码一个是会执行script（alert会执行），再就是有个单引号会导致标签提早闭合，导致页面难看。</p><p>鉴于外网多是静态文件，且不用传参，我直接把window.location.href换成了window.location.protocol+&quot;//&quot;+window.location.hostname+window.location.pathname，情况解决。</p><p>当然了，更好的解决办法在于对url的编码。</p><p>&lt;编码为&amp;lt;</p><p>&gt;编码为&amp;gt;</p><p>&quot;编码为&amp;quot;</p><p>&#39;编码为&amp;#39;</p><p>实际上需要用单引号（&#39;）闭合JavaScript代码，这里就需要按照JavaScript的语法把单引号转义：     &#39; 转义为 &#39;</p><p> </p><p>参考：<a href="http://hi.baidu.com/9856226/blog/item/40ed110b11544d35b0351d61.html" target="_blank" rel="noreferrer">http://hi.baidu.com/9856226/blog/item/40ed110b11544d35b0351d61.html</a></p>`,21),n=[l];function e(o,h,c,r,k,d){return t(),i("div",null,n)}const m=s(a,[["render",e]]);export{u as __pageData,m as default};
