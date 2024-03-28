import{_ as s,c as i,o as a,U as n}from"./chunks/framework.I0qYP7JU.js";const E=JSON.parse('{"title":"vueRouter使用history模式，nginx配置方法","description":"","frontmatter":{"title":"vueRouter使用history模式，nginx配置方法","author":"welpher.yu","date":"2024-02-26T10:59:11.000Z","tags":["vue.js","vueRouter","nginx"],"categories":["web前端"]},"headers":[],"relativePath":"posts/2024/vuerouter-history-mode-nginx-config.md","filePath":"posts/2024/vuerouter-history-mode-nginx-config.md"}'),e={name:"posts/2024/vuerouter-history-mode-nginx-config.md"},l=n(`<p>vue-router默认路由模式为hash模式，该模式是使用 url 的 hash 来模拟一个完整的 url,url中会带一个#号，在某些情况下，我们需要用到history模式，因为我们是单页应用，在客户端加载页面后，其它url是不会从服务器加载页面。</p><p>但是，使用history模式，还需要后台服务端的支持，因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 /article/86 时，服务端以为没有找到对应文件，就会返回 404 错误。</p><p><code>try_files 是实现 History 模式的关键配置。该指令作用是按指定的 file 顺序查找存在的文件，并使用第一个找到的文件进行请求处理。</code></p><h2 id="try-files的语法" tabindex="-1">try_files的语法 <a class="header-anchor" href="#try-files的语法" aria-label="Permalink to &quot;try_files的语法&quot;">​</a></h2><ul><li>格式1：try_files file ... uri;</li><li>格式2：try_files file ... =code;</li><li>可应用的上下文：server，location段</li></ul><p>关键点1：按指定的file顺序查找存在的文件，并使用第一个找到的文件进行请求处理</p><p>关键点2：查找路径是按照给定的root或alias为根路径来查找的</p><p>关键点3：如果给出的file都没有匹配到，则重新请求最后一个参数给定的uri，就是新的location匹配</p><p>关键点4：如果是格式2，如果最后一个参数是 = 404 ，若给出的file都没有匹配到，则最后返回404的响应码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>location /images/ {</span></span>
<span class="line"><span>    root /opt/html/;</span></span>
<span class="line"><span>    try_files $uri $uri/ /images/default.gif; </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>请求<code>/images/test.gif</code>会依次查找</p><ol><li><p>文件<code>/opt/html/images/test.gif</code></p></li><li><p>文件夹<code>/opt/html/images/test.gif/</code>下的index文件</p></li><li><p>请求<code>/opt/html/images/default.gif</code> 注意事项： try-files 如果不写上$uri/，当直接访问一个目录路径时，并不会去匹配目录下的索引页<br> 即访问/images/不会去访问/images/index.html</p></li></ol><h2 id="项目使用根域名" tabindex="-1">项目使用根域名 <a class="header-anchor" href="#项目使用根域名" aria-label="Permalink to &quot;项目使用根域名&quot;">​</a></h2><h3 id="nginx配置" tabindex="-1">nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;nginx配置&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        root </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /data/html/test/dist;</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri/ /index.html;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index.html;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        add_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #error_page  404              /404.html;</span></span></code></pre></div><h3 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-label="Permalink to &quot;项目配置&quot;">​</a></h3><p>vue 项目如下配置</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const router = new VueRouter({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: &#39;history&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base: process.env.BASE_URL,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  routes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="项目使用二级路径" tabindex="-1">项目使用二级路径 <a class="header-anchor" href="#项目使用二级路径" aria-label="Permalink to &quot;项目使用二级路径&quot;">​</a></h2><h3 id="nginx配置-1" tabindex="-1">nginx配置 <a class="header-anchor" href="#nginx配置-1" aria-label="Permalink to &quot;nginx配置&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /test </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        alias </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/data/html/test/dist;</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try_files </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$uri $uri/ /test/index.html;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        index </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index.html;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        add_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Access-Control-Allow-Origin *;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    #error_page  404              /404.html;</span></span></code></pre></div><h3 id="项目配置-1" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置-1" aria-label="Permalink to &quot;项目配置&quot;">​</a></h3><p>vue 项目如下配置 路由</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const router = new VueRouter({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: &#39;history&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base: &#39;/test&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  routes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>vue.config.js或者webpack.config.js配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>   publicPath: &#39;/test&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参考</p><ul><li><a href="http://nginx.org/en/docs/http/ngx_http_core_module.html#try_files" target="_blank" rel="noreferrer">http://nginx.org/en/docs/http/ngx_http_core_module.html#try_files</a></li></ul>`,28),t=[l];function p(h,r,o,k,d,c){return a(),i("div",null,t)}const u=s(e,[["render",p]]);export{E as __pageData,u as default};
