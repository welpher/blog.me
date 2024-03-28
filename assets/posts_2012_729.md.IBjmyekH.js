import{_ as e,c as n,o as t,U as o}from"./chunks/framework.I0qYP7JU.js";const f=JSON.parse('{"title":"CentOS下的node.js","description":"","frontmatter":{"title":"CentOS下的node.js","tags":["centos","node.js"],"id":729,"author":"welpher.yu","categories":["web前端"],"date":"2012-02-12T22:24:47.000Z"},"headers":[],"relativePath":"posts/2012/729.md","filePath":"posts/2012/729.md"}'),r={name:"posts/2012/729.md"},s=o(`<p>我一如继往的扩展自己的广度，今天捣腾一下node.js。</p><blockquote><p>Node是一个Javascript运行环境(runtime)。实际上它是对Google V8引擎（应用于Google Chrome浏览器)进行了封装。V8引 擎执行Javascript的速度非常快，性能非常好。Node对一些特殊用例进行了优化，提供了替代的API，使得V8在非浏览器环境下运行得更好。例 如，在服务器环境中，处理二进制数据通常是必不可少的，但Javascript对此支持不足，因此，V8.Node增加了Buffer类，方便并且高效地 处理二进制数据。因此，Node不仅仅简单的使用了V8,还对其进行了优化，使其在各环境下更加给力。</p></blockquote><p>上面就是在网上搜来的一段介绍了，英文好的可以去英文网站去看这方面的文章。</p><p>一、环境安装</p><p>去<a href="http://nodejs.org/" target="_blank" rel="noreferrer">node.js</a>网站去下载最新的版本。下载源码包，configure make make install下去就行了</p><pre class="brush: bash;">wget http://nodejs.org/dist/v0.6.10/node-v0.6.10.tar.gz

tar zxvf node-v0.6.10.tar.gz

cd node-v0.6.10

./configure --prefix=/usr/local/node

make &amp;&amp; make install 

ln -sf /usr/local/node/bin /usr/bin/</pre><p>二、nginx和node.js配置</p><p>node.js自己运行后是可以直接当服务器的，但是服务器上已经有了nginx了，所以做一个反向代理来访问node.js。</p><p>在nginx的配置文件夹vhosts下建立一个配置文件文件</p><pre class="brush: bash;">server {
    listen 80;
    server_name yuweifeng.info;
    location / {
        proxy_pass http://127.0.0.1:7000;
    }
}</pre><p>然后写一个server.js</p><pre class="brush: js;">var http = require(&#39;http&#39;);

http.createServer(function(request,response){
    response.writeHead(200,{&#39;Content-Type&#39;:&#39;text/plain&#39;});
    response.end(&#39;hello everyone!\\n&#39;);
}).listen(7000);</pre><p>输入命令node server.js开启node（记得把nginx reload一下）</p><p>参考：</p><p>1、<a href="http://howtonode.org/how-to-install-nodejs" target="_blank" rel="noreferrer">how to install nodejs</a></p>`,15),a=[s];function p(d,i,l,c,_,h){return t(),n("div",null,a)}const g=e(r,[["render",p]]);export{f as __pageData,g as default};
