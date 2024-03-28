import{_ as s,c as i,o as a,U as t}from"./chunks/framework.I0qYP7JU.js";const y=JSON.parse('{"title":"xslt未加doctype引起的jquery方法在firefox不可用的解决方法","description":"","frontmatter":{"title":"xslt未加doctype引起的jquery方法在firefox不可用的解决方法","tags":["doctype","firefox","jquery","xslt"],"id":13,"author":"welpher.yu","categories":["web前端"],"date":"2011-08-05T14:19:20.000Z"},"headers":[],"relativePath":"posts/2011/13.md","filePath":"posts/2011/13.md"}'),l={name:"posts/2011/13.md"},h=t(`<p>上午帅哥韩遇到一个问题，如他所描述：</p><blockquote><p>一个xslt渲染的页面引用jquery1.4.2会导致$(document).ready这个方法在firefox下不执行而ie下却完全没有问题，但是换成jquery1.3.2就不会有这样子的问题。</p></blockquote><p>过去看了一下，这个方法里面加了简单的alert来测试。初步怀疑：</p><ol><li>jquery的js文件编码问题（如utf8 dom编码格式或者utf8无dom编码格式云云）</li><li>xml+xslt在浏览器端进行数据与样式的整合，会不会是script在页面中的顺序导致的问题呢？</li></ol><p>第一种情况，主要是之前有遇到过类似情况，经过notepad编码转换，没有出现这种情况。第二种情况也迅速的排除。 幸好这个问题出现在firefox下，迅速在firebug中查看了一下变量jQuery及$，前者未定义，后者却是有定义的。于是，把其它js文件屏蔽掉，继续查看后发现：$是firebug的定义。再次陷入囧境。 帅哥陈过来说xslt会把特定字符转义了，于是把代码块移动js文件中，情况仍然没有解决。又想了，可能是jquery1.4有bug吧，搜了一下，“貌似”是有bug的。于是，问了一下，貌似不一定非得要用jquery1.4的。果断让他用了jquery1.3。嗯，到此为止我以为问题已经解决了，其实不然。 要用jquery1.3，必须解决1.3下ajax请求不成功的问题。于是，最初的问题被抛了出来，是这样子的：</p><blockquote><p>在jquery1.3.2及xml+xslt下，其中包装过的函数ajax请求不成功，但是在一般非xml+xslt页面却是可以请求到数据的。</p></blockquote><p>至此，真正的问题才浮出水面。</p><p>xml+xslt跟xhtml页面有什么区别呢，见代码:</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ?&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- DWXMLSource=&quot;../../../XMLTemp/2011/tb167/Show.xml&quot; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xsl:stylesheet</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xmlns:xsl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.w3.org/1999/XSL/Transform&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xsl:template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.w3.org/1999/xhtml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;展现自定义表单&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xsl:template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xsl:stylesheet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,9),n=[h];function p(k,e,E,r,d,g){return a(),i("div",null,n)}const c=s(l,[["render",p]]);export{y as __pageData,c as default};