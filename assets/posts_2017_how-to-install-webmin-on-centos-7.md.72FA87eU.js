import{_ as a,c as e,o as s,U as n}from"./chunks/framework.I0qYP7JU.js";const u=JSON.parse('{"title":"centos 7下安装webmin","description":"","frontmatter":{"id":1066,"title":"centos 7下安装webmin","author":"welpher.yu","date":"2017-11-10T14:21:42.000Z","tags":["webmin","centos"],"categories":["服务器"]},"headers":[],"relativePath":"posts/2017/how-to-install-webmin-on-centos-7.md","filePath":"posts/2017/how-to-install-webmin-on-centos-7.md"}'),t={name:"posts/2017/how-to-install-webmin-on-centos-7.md"},i=n(`<blockquote><p>Webmin是基于Web的Linux控制面板。 它允许您通过简单的界面管理您的服务器。 使用Webmin，您可以即时更改常用软件包的设置。</p></blockquote><h4 id="下载安装" tabindex="-1">下载安装 <a class="header-anchor" href="#下载安装" aria-label="Permalink to &quot;下载安装&quot;">​</a></h4><p>直接在webmin官网下载即可（<a href="http://www.webmin.com/download.html%EF%BC%89" target="_blank" rel="noreferrer">http://www.webmin.com/download.html）</a></p><h4 id="yum安装" tabindex="-1">YUM安装 <a class="header-anchor" href="#yum安装" aria-label="Permalink to &quot;YUM安装&quot;">​</a></h4><p>1 添加webmin信息仓库</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vi /etc/yum.repos.d/webmin.repo</span></span></code></pre></div><p>然后添加内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[Webmin]</span></span>
<span class="line"><span>name=Webmin Distribution Neutral</span></span>
<span class="line"><span>#baseurl=http://download.webmin.com/download/yum</span></span>
<span class="line"><span>mirrorlist=http://download.webmin.com/download/yum/mirrorlist</span></span>
<span class="line"><span>enabled=1</span></span></code></pre></div><p>然后的然后就是要添加PGP密钥</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rpm --import http://www.webmin.com/jcameron-key.asc</span></span></code></pre></div><p>2 安装webmin</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yum -y install webmin</span></span></code></pre></div><p>3 添加防火墙规则 虽然上面你已经安装了webmin，但是你还是无法通过<a href="https://your" target="_blank" rel="noreferrer">https://your</a> domin:10000进行访问</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>firewall-cmd --zone=public --add-port=10000/tcp --permanent</span></span></code></pre></div><p>4 启动webmin和配置开机启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>service webmin start</span></span>
<span class="line"><span>chkconfig webmin on</span></span></code></pre></div><p>经常这些操作后，你就可以访问webmin了，登录名root，密码</p>`,17),p=[i];function o(l,c,d,r,h,m){return s(),e("div",null,p)}const g=a(t,[["render",o]]);export{u as __pageData,g as default};