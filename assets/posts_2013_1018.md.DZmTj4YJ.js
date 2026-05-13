import{_ as a,c as p,o as e,ag as n}from"./chunks/framework.BeChtK_P.js";const _=JSON.parse('{"title":"apache设置静态文件缓存","description":"","frontmatter":{"title":"apache设置静态文件缓存","tags":["apache","mod_expires"],"id":1018,"author":"welpher.yu","categories":["服务器"],"date":"2013-01-10T16:51:04.000Z"},"headers":[],"relativePath":"posts/2013/1018.md","filePath":"posts/2013/1018.md"}'),t={name:"posts/2013/1018.md"};function i(l,s,c,o,d,r){return e(),p("div",null,[...s[0]||(s[0]=[n(`<p>为了减少客户端对服务端资源的请求，可以开启mod_expires.so模块 在apache配置文件中去掉这段</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#LoadModule expires_module modules/mod_expires.so</span></span></code></pre></div><p>前面的#号 加入下面内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;IfModule mod_expires.c&gt;</span></span>
<span class="line"><span># mod_expires</span></span>
<span class="line"><span>ExpiresActive on</span></span>
<span class="line"><span>ExpiresDefault A864000</span></span>
<span class="line"><span>ExpiresBytype text/css &quot;access plus 14 days</span></span>
<span class="line"><span>ExpiresByType text/javascript &quot;access plus 14 days &quot;</span></span>
<span class="line"><span>ExpiresByType application/x-javascript &quot;access plus 14 days &quot;</span></span>
<span class="line"><span>ExpiresByType application/x-shockwave-flash &quot;access plus 14 days &quot;</span></span>
<span class="line"><span>ExpiresByType image/* &quot;access plus 14 days &quot;</span></span>
<span class="line"><span>ExpiresByType text/html &quot;access plus 14 days &quot;</span></span>
<span class="line"><span>&amp;lt;FilesMatch &quot;\\.(flv|ico|pdf|avi|mov|ppt|doc|mp3|wmv|wav|jpg|gif)$&quot;&amp;gt;</span></span>
<span class="line"><span>ExpiresDefault A864000</span></span>
<span class="line"><span>&lt;/FilesMatch&gt;</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span></code></pre></div><p>默认缓存时间是10天 css缓存时间是14天</p>`,5)])])}const h=a(t,[["render",i]]);export{_ as __pageData,h as default};
