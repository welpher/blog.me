import{_ as s,c as i,o as a,U as t}from"./chunks/framework.I0qYP7JU.js";const c=JSON.parse('{"title":"SyntaxHighlighter插件无法识别pre的解决方法","description":"","frontmatter":{"title":"SyntaxHighlighter插件无法识别pre的解决方法","tags":["SyntaxHighlighter","wordpress"],"id":152,"author":"welpher.yu","categories":["blog"],"date":"2011-09-30T10:35:06.000Z"},"headers":[],"relativePath":"posts/2011/152.md","filePath":"posts/2011/152.md"}'),h={name:"posts/2011/152.md"},n=t(`<blockquote><p><a href="http://alexgorbatchev.com/SyntaxHighlighter" target="_blank" rel="noreferrer">SyntaxHighlighter</a> 是 Alex Gorbatchev 2004年开始开发的一个Javascript web客户端代码高亮库。之前的主页在<a href="http://code.google.com/p/syntaxhighlighter/" target="_blank" rel="noreferrer">google code</a>，现在已经转移到了alexgorbatchev.com。当前最新的版本是3.0.83，兼容的浏览器有：Internet Explorer 7.0  / Mozilla Firefox 3.0 /  Google Chrome 0.2  / Safari 3.1 /  Opera 9.6，IE6并不被支持。1.x的版本应该是支持的。 对于一个技术博客来说这样的代码高亮库肯定是必不可少的。wordpress上安装syntaxhighlighter非常简单，直接在插件里面搜索后安装即可。安装后就可以使用了，非常简单。</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> You also need to add some content to highlight, but that is covered elsewhere. </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这种方法行不通，不知道怎么回事。还有一种方法。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>这一咱方法在前台可以看到代码高亮，但是在tinyMCE编辑器下会把缩进的空格给处理掉，真是个杯具的事情。</p><p>于是，又只有用pre的方式了，下载另一个插件 sh TinyMCE button 这个会有个编辑框，里面粘贴进去代码会会插入到编辑器里，经过对其的小小的修改。当然了，这个方法是有点笨，不过对于一个对php 以及wordpress插件编程非常不了解的人来说，达到了目的。修改tinymce.js里面的一方法（insertSHTBADVCODEBOXcode();）：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tinyMCEPopup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">editor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execCommand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;mceInsertContent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tagtext</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">classAttribs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&quot;&lt;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">html</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;/pre&gt;&lt;div style=&quot;display:none;&quot;&gt;[&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">langname</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;] [/&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    langname</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;]&lt;/div&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>加入一个隐藏的div，这里面有[ ] 这种东西，插件会自动添加处理js来处理的。</p><p>其实更好的方法是修改这个插件，比如这个函数：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parse_shortcodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( $content ) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	global</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $shortcode_tags;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	$shortcode_tags_org </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $shortcode_tags;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	remove_all_shortcodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add_shortcodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	$content </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> do_shortcode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( $content );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	$shortcode_tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $shortcode_tags_org;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>今天就先研究到此吧，以后再做研究。</p>`,11),e=[n];function p(l,k,r,d,o,g){return a(),i("div",null,e)}const y=s(h,[["render",p]]);export{c as __pageData,y as default};
