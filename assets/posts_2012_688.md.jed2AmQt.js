import{_ as t,c as e,o as r,U as o}from"./chunks/framework.I0qYP7JU.js";const f=JSON.parse('{"title":"浅析Syntax Highlighter for WordPress的原理","description":"","frontmatter":{"title":"浅析Syntax Highlighter for WordPress的原理","tags":["SyntaxHighlighter","wordpress"],"id":688,"author":"welpher.yu","categories":["blog"],"date":"2012-01-07T20:49:05.000Z"},"headers":[],"relativePath":"posts/2012/688.md","filePath":"posts/2012/688.md"}'),a={name:"posts/2012/688.md"},s=o(`<p>Syntax Highlighter这个相信大家非常的熟悉了。</p><p><a href="http://alexgorbatchev.com/SyntaxHighlighter" target="_blank" rel="noreferrer">SyntaxHighlighter</a> 是 Alex Gorbatchev 2004年开始开发的一个Javascript web客户端代码高亮库。</p><p>之前的主页在<a href="http://code.google.com/p/syntaxhighlighter/" target="_blank" rel="noreferrer">google code</a>，现在已经转移到了alexgorbatchev.com。当前最新的版本是3.0.83，兼容的浏览器有：Internet Explorer 7.0  / Mozilla Firefox 3.0 /  Google Chrome 0.2  / Safari 3.1 /  Opera 9.6，IE6并不被支持。1.x的版本应该是支持的。</p><p>最近大家应该是看到了，首页会弹出一个提示框，表示没有js的格式刷。于是我看了一下插件（<strong><a href="http://wppluginsj.sourceforge.jp/syntax-highlighter/" title="syntax-highlighter for wp" target="_blank" rel="noreferrer">Syntax Highlighter for WordPress</a></strong>）的代码，用到了短代码，比如：[galley] 就是调用 WordPress 默认的相册的短代码，详细请看<a href="http://codex.wordpress.org/Shortcode_API" target="_blank" rel="noreferrer">Shortcode_API</a>。</p><p>也就是说，插入数据库的为[galley] 这样的代码，然后在展现的时候把[galley] 输出为&lt;pre&gt;同时根据需要的格式加载相应的格式刷，对代码进行渲染。代码如下：</p><pre class="brush: php;">if (!$this-&gt;isKtai() &amp;&amp; !is_feed()) {
        if (version_compare($this-&gt;version, &quot;2.0&quot;, &quot;&lt;&quot;)) {
        // -- for SyntaxHighlighter 1.5.x
        $pre_tag = &#39;&lt;pre&#39;
            . &#39; name=&quot;code&quot;&#39;
            . &#39; class=&quot;&#39;.$startTag.($pVal &gt; 1 ? &quot;:firstLine[{$pVal}]&quot; : &#39;&#39;) . &#39;&quot;&#39;
            . &#39;&gt;&#39;;
    } else {
        // -- for SyntaxHighlighter 2.x or 3.x
        $pre_tag = &#39;&lt;pre&#39;
            . &#39; class=&quot;&#39;
            . &quot;brush: {$startTag};&quot;
            . ($pVal &gt; 1 ? &quot; first-line: {$pVal};&quot; : &#39;&#39;)
            . (!empty($highlight_lines) ? &quot; highlight: [{$highlight_lines}];&quot; : &#39;&#39;)
            . (strtolower($collapse) == &#39;true&#39; ? &#39; collapse: true;&#39; : &#39;&#39;)
            . (strtolower($gutter) == &#39;false&#39; ? &#39; gutter: false;&#39; : &#39;&#39;)
            . (strtolower($ruler) == &#39;true&#39; ? &#39; ruler: true;&#39; : &#39;&#39;)
            . (strtolower($toolbar) == &#39;false&#39; ? &#39; toolbar: false;&#39; : &#39;&#39;)
            . (strtolower($smart_tabs) == &#39;false&#39; ? &#39; smart-tabs: false;&#39; : &#39;&#39;)
            . (strtolower($tab_size) != &#39;4&#39; ? &#39; tab-size: &#39; . (int)$tab_size . &#39;;&#39; : &#39;&#39;)
            . (strtolower($auto_link) == &#39;false&#39; ? &#39; auto-links: false;&#39; : &#39;&#39;)
            . (strtolower($light) == &#39;true&#39; ? &#39; light: true;&#39; : &#39;&#39;)
            . ($font_size != &#39;100%&#39; ? &quot; font-size: {$font_size};&quot; : &#39;&#39;)
            . &#39;&quot;&#39;
            . &#39;&gt;&#39;;
    }
}
$outTxt .=  &quot;{$pre_tag}{$inTxt}&lt;/pre&gt;\\n\\n&quot;;</pre><p>根据<a href="http://alexgorbatchev.com/SyntaxHighlighter/manual/installation.html" target="_blank" rel="noreferrer">SyntaxHighlighter的说明</a>，我们知道syntaxHighlightter会处理&lt;pre/&gt;标签的东西，根据<code>class=\`\`&quot;brush:XXx&quot;这样的去调用相应的格式渲染js里的方法对相应代码进行处理，而如果你的代码不是由【php】【/php】这样的代码包裹的话，这个插件就不会在页面加入相应的格式渲染文件，从而出现弹窗来提示了。</code>而我是用Windows Live Writer + Code Snippet With Syntaxhighlighter Support for Windows Live Writer来写日志的，当然就会出现那个弹窗了。</p><p>综上，修改插件中查找内容的正则表达式那一块可以达到效果，我对php非常不懂，就再找另一个插件了。</p><p>后来直接用了另一个插件（<strong><a href="http://www.phodana.de/wordpress/wp-plugin-syntax-highlighter-compress/" title="Syntax Highlighter ComPress" target="_blank" rel="noreferrer">Syntax Highlighter ComPress</a></strong>），可以识别pre，现在显示正常。</p>`,9),l=[s];function n(i,h,g,p,u,_){return r(),e("div",null,l)}const d=t(a,[["render",n]]);export{f as __pageData,d as default};
