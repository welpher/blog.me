import{_ as s,c as n,o as a,U as p,am as e}from"./chunks/framework.I0qYP7JU.js";const b=JSON.parse('{"title":"VPS CentOS下IPSec L2TP VPN的安装","description":"","frontmatter":{"title":"VPS CentOS下IPSec L2TP VPN的安装","tags":["l2tp","vps"],"id":903,"author":"welpher.yu","categories":["服务器"],"date":"2012-08-15T00:46:00.000Z"},"headers":[],"relativePath":"posts/2012/903.md","filePath":"posts/2012/903.md"}'),l={name:"posts/2012/903.md"},t=p(`<p>写在前：上一个VPS搭建好的时候就安装了ssh和vpn(pptp vpn)，但是非常不稳定，特别是vpn，经常连着连着服务就宕了。于是作罢。ssh倒是之前买了一个，一年也没多少钱，也就没用自己架的消耗VPS流量了，另一个原因是那一段时间我的博客经常被墙，担心所有的鸡蛋放在一个篮子里会全打了。现在重操 vpn是因为自己搞了个安卓手机，跟某歌同步通讯录的时候都同步不了，彻底让我草泥马了。用过goXxent，非常不稳定，广告还跑流量，https出问题。花钱买一个vpn吧，想想自己有vps，干嘛不架一个呢，呵呵！已经买了ssh了，再买vpn，太浪费了而且也用得少。于是，还是自己架一下吧。这个文章就是一个学习笔记，方便以后翻阅。内容大部分是从网上复制过来的。我尽量都附上链接地址。话说网上有一键安装的，感兴趣可以去试试。</p><blockquote><p>为什么要是l2tp vpn，pptp不行么？听说联通神马的，pptp是不行的。</p></blockquote><p>第二层隧道协议L2TP(Layer 2 Tunneling Protocol)是一种工业标准的Internet隧道协议，它使用UDP的1701端口进行通信。L2TP本身并没有任何加密，但是我们可以使用IPSec对L2TP包进行加密。L2TP VPN比PPTP VPN搭建复杂一些。</p><blockquote><p>提示：1、确定你用的是xen的vps；2、首先需要卸载已安装的openswan，因为yum install安装的openswan版本可能有bug，会导致莫名错误。</p></blockquote><p>一、安装必备软件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yum install make gcc gmp-devel bison flex lsof</span></span></code></pre></div><p>这些个应该都和编译有关。</p><p>二、安装IPsec</p><p><a href="http://www.openswan.org/" target="_blank" rel="noreferrer">Openswan</a>是Linux系统上IPsec的一个实现。由于更新源上的版本较老，这里使用源码安装，我用的版本是2.6.24。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wget http://www.openswan.org/download/openswan-2.6.24.tar.gz</span></span>
<span class="line"><span>tar zxvf openswan-2.6.24.tar.gz</span></span>
<span class="line"><span>cd openswan-2.6.24</span></span>
<span class="line"><span>make programs install</span></span></code></pre></div><p>通过阅读INSTALL这个文件得知，安装命令为make programs install。</p><p>三、配置IPsec</p><p>编辑配置文件/etc/ipsec.conf</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#备份</span></span>
<span class="line"><span>cp /etc/ipsec.conf /etc/ipsec.conf.bak</span></span>
<span class="line"><span>vim /etc/ipsec.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#修改如下</span></span>
<span class="line"><span>config setup</span></span>
<span class="line"><span>    nat_traversal=yes</span></span>
<span class="line"><span>    virtual_private=%v4:10.0.0.0/8,%v4:192.168.0.0/16,%v4:172.16.0.0/12</span></span>
<span class="line"><span>    oe=off</span></span>
<span class="line"><span>    protostack=netkey</span></span>
<span class="line"><span></span></span>
<span class="line"><span>conn L2TP-PSK-NAT</span></span>
<span class="line"><span>    rightsubnet=vhost:%priv</span></span>
<span class="line"><span>    also=L2TP-PSK-noNAT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>conn L2TP-PSK-noNAT</span></span>
<span class="line"><span>    authby=secret</span></span>
<span class="line"><span>    pfs=no</span></span>
<span class="line"><span>    auto=add</span></span>
<span class="line"><span>    keyingtries=3</span></span>
<span class="line"><span>    rekey=no</span></span>
<span class="line"><span>    ikelifetime=8h</span></span>
<span class="line"><span>    keylife=1h</span></span>
<span class="line"><span>    type=transport</span></span>
<span class="line"><span>    left=YOUR.SERVER.IP.ADDRESS</span></span>
<span class="line"><span>    leftprotoport=17/1701</span></span>
<span class="line"><span>    right=%any</span></span>
<span class="line"><span>    rightprotoport=17/%any</span></span></code></pre></div><blockquote><p>其中一些设置含义可以参考/etc/ipsec.d/examples/l2tp-psk.conf</p></blockquote><p>四、设置共享密码PSK</p><p>编辑配置文件/etc/ipsec.secrets</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vim /etc/ipsec.secrets[enter]</span></span>
<span class="line"><span>YOUR.SERVER.IP.ADDRESS %any: PSK &quot;YourSharedSecret&quot;</span></span></code></pre></div><p>五、修改包转发设置</p><p>在终端里运行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>for each in /proc/sys/net/ipv4/conf/*</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>echo 0 &amp;gt; $each/accept_redirects</span></span>
<span class="line"><span>echo 0 &amp;gt; $each/send_redirects</span></span>
<span class="line"><span>done[enter]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo 1 &amp;gt;/proc/sys/net/core/xfrm_larval_drop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>iptables -t nat -A POSTROUTING -j MASQUERADE</span></span></code></pre></div><p>修改内核设置，支持转发，编辑/etc/sysctl.con：</p><p>将“net.ipv4.ip_forward”的值改为1。</p><p>生效：/sbin/sysctl –p</p><p>六、重启IPSec</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>service ipsec restart</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ipsec verify</span></span></code></pre></div><p>结果显示如下：</p><p><img src="`+e+`" alt="ipsecVerify" title="ipsecVerify"></p><blockquote><p>提示：</p><p>如果出现：Pluto listening for IKE on udp 500                              [FAILED]</p><p>安装lsof：yum install lsof</p><p>如果出现：Checking NAT and MASQUERADEing                                  [N/A]</p><p>iptables -t nat -A POSTROUTING -j MASQUERADE</p></blockquote><p>七、安装L2TP（xl2tpd和rp-l2tp）</p><p>xl2tpd是由Xelerance Corporation维护的l2tpd应用。但是xl2tpd没有l2tp-control，需要从rp-l2tp这个里面提取。所以要装这两个软件包。</p><p>安装必备软件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yum install libpcap-devel ppp policycoreutils</span></span></code></pre></div><p>安装xl2tpd和rp-l2tp：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wget http://sourceforge.net/projects/rp-l2tp/files/rp-l2tp/0.4/rp-l2tp-0.4.tar.gz</span></span>
<span class="line"><span>tar -zxvf rp-l2tp-0.4.tar.gz</span></span>
<span class="line"><span>cd rp-l2tp-0.4</span></span>
<span class="line"><span>./configure --prefix=/usr/local/rp-l2tp</span></span>
<span class="line"><span>make</span></span>
<span class="line"><span>cp handlers/l2tp-control /usr/local/sbin/</span></span>
<span class="line"><span>mkdir /var/run/xl2tpd/</span></span>
<span class="line"><span>ln -s /usr/local/sbin/l2tp-control /var/run/xl2tpd/l2tp-control</span></span>
<span class="line"><span></span></span>
<span class="line"><span> wget http://www.xelerance.com/wp-content/uploads/software/xl2tpd/xl2tpd-1.3.0.tar.gz</span></span>
<span class="line"><span> tar -zxvf xl2tpd-1.3.0.tar.gz</span></span>
<span class="line"><span> cd xl2tpd-1.3.0</span></span>
<span class="line"><span> make</span></span>
<span class="line"><span> make install</span></span></code></pre></div><p>新建配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir /etc/xl2tpd</span></span>
<span class="line"><span>vim /etc/xl2tpd/xl2tpd.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[global]</span></span>
<span class="line"><span>ipsec saref = yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[lns default]</span></span>
<span class="line"><span>ip range = 10.82.88.2-10.82.88.254</span></span>
<span class="line"><span>local ip = 10.82.88.1</span></span>
<span class="line"><span>refuse chap = yes</span></span>
<span class="line"><span>refuse pap = yes</span></span>
<span class="line"><span>require authentication = yes</span></span>
<span class="line"><span>ppp debug = yes</span></span>
<span class="line"><span>pppoptfile = /etc/ppp/options.xl2tpd</span></span>
<span class="line"><span>length bit = yes</span></span></code></pre></div><p>配置ppp，建立options.xl2tpd文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vim /etc/ppp/options.xl2tpd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>require-mschap-v2</span></span>
<span class="line"><span>ms-dns 8.8.8.8</span></span>
<span class="line"><span>ms-dns 8.8.4.4</span></span>
<span class="line"><span>asyncmap 0</span></span>
<span class="line"><span>auth</span></span>
<span class="line"><span>crtscts</span></span>
<span class="line"><span>lock</span></span>
<span class="line"><span>hide-password</span></span>
<span class="line"><span>modem</span></span>
<span class="line"><span>debug</span></span>
<span class="line"><span>name l2tpd</span></span>
<span class="line"><span>proxyarp</span></span>
<span class="line"><span>lcp-echo-interval 30</span></span>
<span class="line"><span>lcp-echo-failure 4</span></span></code></pre></div><p>设置拨号用户名和密码：</p><p>vim /etc/ppp/chap-secrets</p><p>添加iptables转发规则：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>iptables --table nat --append POSTROUTING --jump MASQUERADE</span></span>
<span class="line"><span>/etc/init.d/iptables save</span></span>
<span class="line"><span>/etc/init.d/iptables restart</span></span></code></pre></div><p>设置开机运行，编辑/etc/rc.local</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vim /etc/rc.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for each in /proc/sys/net/ipv4/conf/*</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>echo 0 &amp;gt; $each/accept_redirects</span></span>
<span class="line"><span>echo 0 &amp;gt; $each/send_redirects</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo 1 &amp;gt;/proc/sys/net/core/xfrm_larval_drop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/etc/init.d/ipsec restart</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/local/sbin/xl2tpd</span></span></code></pre></div><p>vpsyou上有一键安装的脚本，经测试，很简单，不用这么麻烦，安装上完全可以用。</p><p>不管自己安装的还是通过一键安装的脚本都会有个问题，就是：在iphone/ipod touch上可以使用，但是在安卓（Android 2.2.2）上连接成功但是迅速的断开了连接。下面是日志的内容，我还不知道是怎么回事，有知道的童鞋可以教教我。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Aug  7 12:23:04 abc ipsec_setup: ...Openswan IPsec started</span></span>
<span class="line"><span>Aug  7 12:23:04 abc pluto: adjusting ipsec.d to /etc/ipsec.d</span></span>
<span class="line"><span>Aug  7 12:23:04 abc ipsec__plutorun: adjusting ipsec.d to /etc/ipsec.d</span></span>
<span class="line"><span>Aug  7 12:23:05 abc ipsec__plutorun: 002 added connection description &quot;L2TP-PSK-NAT&quot;</span></span>
<span class="line"><span>Aug  7 12:23:05 abc ipsec__plutorun: 002 added connection description &quot;L2TP-PSK-noNAT&quot;</span></span>
<span class="line"><span>Aug  7 12:23:05 abc ipsec__plutorun: 003 NAT-Traversal: Trying new style NAT-T</span></span>
<span class="line"><span>Aug  7 12:23:05 abc ipsec__plutorun: 003 NAT-Traversal: ESPINUDP(1) setup failed for new style NAT-T family IPv4 (errno=19)</span></span>
<span class="line"><span>Aug  7 12:23:05 abc ipsec__plutorun: 003 NAT-Traversal: Trying old style NAT-T</span></span>
<span class="line"><span>Aug  7 12:25:37 abc shutdown[18379]: shutting down for system reboot</span></span>
<span class="line"><span>Aug  7 12:25:37 abc init: Switching to runlevel: 6</span></span>
<span class="line"><span>Aug  7 12:25:37 abc ipsec_setup: Stopping Openswan IPsec...</span></span>
<span class="line"><span>Aug  7 12:25:39 abc kernel: NET: Unregistered protocol family 15</span></span></code></pre></div><p><strong>参考资料：</strong></p><ol><li><a href="http://freenuts.com/how-to-set-up-a-l2tpipsec-vpn-in-a-vps/" target="_blank" rel="noreferrer">How To Set Up A L2TP/IPSec VPN In A VPS</a></li><li><a href="http://xfeng.me/centos-install-l2tp-vpn-note/" target="_blank" rel="noreferrer">CentOS安装L2TP VPN笔记</a></li><li><a href="http://www.live-in.org/archives/818.html" target="_blank" rel="noreferrer">CentOS Linux VPS安装IPSec+L2TP VPN</a></li><li><a href="http://b.gkp.cc/2010/06/19/setup-ipsec-l2tp-on-centos-55/" target="_blank" rel="noreferrer">Linode CentOS / Debian 部署 ipsec+l2tpd 简要笔记</a></li><li><a href="http://bbs.chinaunix.net/thread-1340886-1-1.html" target="_blank" rel="noreferrer">http://bbs.chinaunix.net/thread-1340886-1-1.html</a></li><li><a href="http://www.cnblogs.com/klobohyz/archive/2012/02/04/2337775.html" target="_blank" rel="noreferrer">http://www.cnblogs.com/klobohyz/archive/2012/02/04/2337775.html</a></li></ol>`,50),i=[t];function c(o,r,d,h,u,g){return a(),n("div",null,i)}const m=s(l,[["render",c]]);export{b as __pageData,m as default};
