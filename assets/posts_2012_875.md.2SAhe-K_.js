import{_ as t,c as e,o,U as r}from"./chunks/framework.I0qYP7JU.js";const h=JSON.parse('{"title":"centos下Meteor Server的配置","description":"","frontmatter":{"title":"centos下Meteor Server的配置","tags":["centos","meteor"],"id":875,"author":"welpher.yu","categories":["服务器"],"date":"2012-08-01T09:22:00.000Z"},"headers":[],"relativePath":"posts/2012/875.md","filePath":"posts/2012/875.md"}'),n={name:"posts/2012/875.md"},s=r(`<blockquote><p>Meteor is an open source HTTP server, designed to offer developers a simple means of integrating streaming data into web applications without the need for page refreshes. <a href="http://meteorserver.org/" title="http://meteorserver.org/" target="_blank" rel="noreferrer">Meteor</a>是一个开源的HTTP服务器，旨在为开发人员提供简单非刷新页面的方式把程序的数据流集成到web应用程序中。Meteor不是框架，不是meteor.com。搜了下，这个还真是小众，至少中文资料非常少。说到Meteor，不得不说<a href="http://cnzhx.net/wordpress-plugins/live-blogging/" target="_blank" rel="noreferrer">live Blogging</a>。因为想在wordpress上弄一个微博，才有live blogging，然后才有meteor（认识过程）。 Live Blogging（中文名称：WordPress微博）是一个WordPress插件，允许您在WordPress网站中创建即时消息博文（类似Twitter的微博客）。该插件使用Comet技术来降低服务器负载，提升更新发布速度，提供了较好的整体用户体验。该插件发布后引起了WPer的广泛兴趣，目前正在准备一些重大的改进。该插件在2009年Weblog Tools Collection（网络博客工具集锦） 插件竞赛中获得亚军。可以通过作者提供的<a href="http://www.pling.org.uk/static/Live_Blogging_for_WordPress_2.0.swf" target="_blank" rel="noreferrer">屏幕录像</a>来了解该插件目前的主要功能。 <a href="http://cnzhx.net/wordpress-plugins/live-blogging/" target="_blank" rel="noreferrer">Live Blogging</a>我就不详细介绍了，链接地址为中文翻译者的博客，比较详细的介绍了这个wordpress插件。不过高级用法还有待自己摸索研究。</p></blockquote><p>Live Blogging提供Meteor的平滑模式。于是我也在我的服务器安装了这个Meteor，安装过程在这里分享出来，特别是centos系统的童鞋。</p><p>网上有给出用curl安装的，在centos6以后能成功，在centos5,glibc2.5安装不成功。</p><p><strong><span style="color:#4f81bd;font-size:large;">一、下载解压</span></strong></p><p>Meteor必须要安装perl 5，确保您的机器上安装了。</p><p>首先，建立文件夹/usr/local/meteor</p><pre class="brush: bash;">mkdir /usr/local/meteor
cd /usr/local/meteor</pre><p>去网站下载Meteor压缩包，并进行解压：</p><pre class="brush: bash;">wget http://meteorserver.org/download/latest.tgz
tar zxvf latest.tgz</pre><p>解压后会在meteor文件夹中看到如下内容</p><ul><li><p><strong>Meteor/</strong>- Meteor&#39;s perl modules</p><ul><li><strong>Channel.pm</strong> - A Meteor channel</li><li><strong>Config.pm</strong> - Meteor configuration handling</li><li><strong>Connection.pm</strong> - Common super-class for controller and subscriber</li><li><strong>Controller.pm</strong> - A Meteor controller</li><li><strong>Document.pm</strong> - Caching and serving mechansim for static documents</li><li><strong>Message.pm</strong> - Meteor message object</li><li><strong>Socket.pm</strong> - Meteor Socket additions</li><li><strong>Subscriber.pm</strong> - A Meteor subscriber</li><li><strong>Syslog.pm</strong> - Convenience interface to Sys::Syslog</li></ul></li><li><p><strong>public_html/</strong>- document root for static page serving</p><ul><li><strong>poll.html</strong> - JavaScript IFRAME source for polling connections</li><li><strong>stream.html</strong> - JavaScript IFRAME source for streaming connections</li><li><strong>meteor.js</strong> - JavaScript class required for Meteor web browser client</li></ul></li><li><p><strong>meteord</strong> - The Meteor executable</p></li><li><p><strong>meteor.conf.dist</strong> - Sample configuration file</p></li><li><p><strong>daemoncontroller.dist</strong> - Meteor deamon init script shell script <span style="color:#4f81bd;font-size:large;"><strong>二、配置</strong></span></p></li></ul><p>复制启动脚本meteord</p><pre class="brush: bash;">cp daemoncontroller.dist /etc/init.d/meteord
cp meteord.conf.dist /etc/meteord.conf</pre><p>然后对这个文件进行修改</p><pre class="brush: bash;">vim /etc/init.d/meteord</pre><p>会看到如下内容</p><pre class="brush: bash;">#!/bin/sh
# description: Runs meteord
# chkconfig: 2345 99 00

# Source function library.
. /etc/init.d/functions

case &quot;$1&quot; in
&#39;start&#39;)
echo -n &quot;Starting Meteord: &quot;
echo 65535 &gt; /proc/sys/fs/file-max
ulimit -n 65535
cd /usr/local/meteor
sudo -u meteor ./meteord &gt;/var/log/meteord 2&gt;&amp;1 &amp;
echo
;;
&#39;stop&#39;)
echo -n &quot;Stopping Meteord: &quot;
killall meteord &amp;&amp; success || failure
;;
&#39;reload&#39;)
echo -n &quot;Reloading Meteord configuration: &quot;
killall -s SIGHUP meteord &amp;&amp; success || failure
;;
*)
echo &quot;Usage: $0 { start | stop | reload }&quot;
;;
esac
exit 0</pre><p>修改后的文件，取消了用meteor角色来启动服务，不知道有没有什么坏处。</p><pre class="brush: bash;">#!/bin/sh
# description: Runs meteord
# chkconfig: 2345 99 00

# Source function library.
#. /etc/init.d/functions

case &quot;$1&quot; in
&#39;start&#39;)
echo -n &quot;Starting Meteord: &quot;
echo 65535 &gt; /proc/sys/fs/file-max
ulimit -n 65535
#cd /usr/local/meteor
#su meteor
cd /usr/local/meteor/
./meteord &gt;/var/log/meteord 2&gt;&amp;1 &amp;
echo
;;
&#39;stop&#39;)
echo -n &quot;Stopping Meteord: &quot;
killall meteord &amp;&amp; success || failure
;;
&#39;reload&#39;)
echo -n &quot;Reloading Meteord configuration: &quot;
killall -s SIGHUP meteord &amp;&amp; success || failure
;;
*)
echo &quot;Usage: $0 { start | stop | reload }&quot;
;;
esac
exit 0</pre><p>这里很奇怪，必须要先cd /usr/local/meteor/ 进入文件夹，然后才启动，不然就各种错误，对perl不了解，所以不清楚是怎么回事。</p><p>然后将服务打开，启动服务器。</p><pre class="brush: bash;">/sbin/chkconfig meteord on
/etc/init.d/meteord start</pre><p><span style="color:#4f81bd;font-size:large;"><strong>三、测试服务连接</strong></span></p><p>到这里，meteorServer这个时候已经安装好并已经启动起来了。在windows下打开cmd</p><pre class="brush: bash;">telnet yourIP 4670</pre><p>测试订阅服务，然后输入</p><p>GET /push/1/iframe/test HTTP/1.1</p><p>会得到如下结果</p><pre class="brush: bash;">Trying yourIP...
Connected to yourIP.
Escape character is &#39;^]&#39;.
GET /push/1/iframe/test HTTP/1.1 &lt;Enter&gt;
&lt;Enter&gt;
HTTP/1.1 200 OK
Server: meteord
Content-Type: text/html; charset=utf-8
Pragma: no-cache
Cache-Control: no-cache, no-store, must-revalidate
Expires: Thu, 1 Jan 1970 00:00:00 GMT

&lt;html&gt;&lt;head&gt;&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;meta http-equiv=&quot;Cache-Control&quot; content=&quot;no-store&quot;&gt;
&lt;meta http-equiv=&quot;Cache-Control&quot; content=&quot;no-cache&quot;&gt;
&lt;meta http-equiv=&quot;Pragma&quot; content=&quot;no-cache&quot;&gt;
&lt;meta http-equiv=&quot;Expires&quot; content=&quot;Thu, 1 Jan 1970 00:00:00 GMT&quot;&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
window.onError = null;
var domainparts = document.domain.split(&quot;.&quot;);
document.domain = domainparts[domainparts.length-2]+&quot;.&quot;+domainparts[domainparts.length-1];
parent.Meteor.register(this);
&lt;/script&gt;
&lt;/head&gt;
&lt;body onload=&quot;try { parent.Meteor.reset(this) } catch (e) {}&quot;&gt;
&lt;script&gt;ch(&quot;test&quot;, 0);&lt;/script&gt;

&lt;script&gt;p(-1,&quot;&quot;);&lt;/script&gt;
&lt;script&gt;p(-1,&quot;&quot;);&lt;/script&gt;</pre><p>说明订阅服务是正常的。然后测试控制服务</p><pre class="brush: bash;"> telnet yourIP 4671
Trying yourIP...
Connected to yourIP.
Escape character is &#39;^]&#39;.
ADDMESSAGE test hello world &lt;enter&gt;
OK      0

&lt;script&gt;p(2,&quot;test&quot;,&quot;hello world&quot;);&lt;/script&gt;</pre><p>到此，MeteorServer算是安装了大半了。</p><p><span style="color:#4f81bd;font-size:large;"><strong>四、通过Nginx发布应用文件</strong></span></p><p>我们下载的时候发布有一个public_html的文件夹，这个文件夹必须发布出去，这样前台的应用才能使用Meteor的脚本来实现功能。当然了push请求还是要转发给MeteorServer的。由于我用的是nginx，直接在配置文件nginx.conf中修改就行了。</p><pre class="brush: bash;">server {
        listen  80;
        server_name     meteor.ueder.info;
        root /usr/local/meteor/public_html;
        location / {
                index index.html index.htm index.php;
        }
        location ~*^/push {
                proxy_pass      http://127.0.0.1:4670;
        }
        location ~.*\\.(js|css)?$
        {
                expires 1d;
        }

}</pre><p>然后nginx –s reload就生效了。至此，完成了在centos下meteorServer的安装。</p><p>安装不难，但是很折腾人。晚上回家搞一晚上，服务器启动起来了，快睡觉了，reboot，发现又没有启动成功，查看日志，尽是些perl出错的东西，把我给引到歧路上去了。希望我写的东西对您有用。</p><p>参考资料：</p><p>1、<a href="http://meteorserver.org/installation/" title="Meteor installation" target="_blank" rel="noreferrer">http://meteorserver.org/installation/</a></p>`,39),l=[s];function a(i,p,c,g,u,m){return o(),e("div",null,l)}const f=t(n,[["render",a]]);export{h as __pageData,f as default};
