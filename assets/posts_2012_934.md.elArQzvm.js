import{_ as e,c as t,o as a,U as r}from"./chunks/framework.I0qYP7JU.js";const b=JSON.parse('{"title":"centos 下安装apache2.4.2+mysql5.5.7+php5.4","description":"","frontmatter":{"title":"centos 下安装apache2.4.2+mysql5.5.7+php5.4","tags":["apache","lamp"],"id":934,"author":"welpher.yu","categories":["服务器"],"date":"2012-09-03T14:34:45.000Z"},"headers":[],"relativePath":"posts/2012/934.md","filePath":"posts/2012/934.md"}'),p={name:"posts/2012/934.md"},l=r(`<p>apache2.4.2+mysql5.5.7+php5.4 Apache安装</p><pre class="brush: text; gutter: true; first-line: 1">wget http://mirror.bjtu.edu.cn/apache//apr/apr-1.4.6.tar.gz
wget http://mirror.bjtu.edu.cn/apache//apr/apr-util-1.4.1.tar.gz
wget http://apache.etoak.com//httpd/httpd-2.4.2.tar.gz
tar zxvf apr-1.4.6.tar.gz
cd apr-1.4.6
./configure –prefix=/usr/local/apr
make
make install
tar zxvf apr-util-1.4.1.tar.gz
./configure --prefix=/usr/local/apr-util --with-apr=/usr/local/apr/make
make install
tar zxvf httpd-2.4.2.tar.gz
cd httpd-2.2
./configure --prefix=/usr/local/apache2 --enable-so --enable-mods-shared=all --enable-vhost-alias --enable-expires --enable-rewrite --enable-authn-dbm=shared --with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util/
make
make install
cp /usr/local/apache2/bin/apachectl /etc/rc.d/init.d/httpd
chmod 755 /etc/rc.d/init.d/httpd
/etc/rc.d/init.d/httpd start</pre><p>测试 lynx localhost 远程上不行，通过关闭防火墙 service iptables stop 远程就可以访问了 如果不想关闭防火墙，放开80端口即可。</p><pre class="brush: text; gutter: true; first-line: 1">iptables -I INPUT -p tcp --dport 80 -j ACCEPT
service iptables save
#vi /etc/sysconfig/iptables
增加一行
-A RH-Firewall-1-INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT
#service iptables restart //重启防火墙</pre><p>Mysql安装 使用rpm方式安装mysql wget <a href="http://cdn.mysql.com/Downloads/MySQL-5.5/MySQL-server-5.5.27-1.linux2.6.i386.rpm" target="_blank" rel="noreferrer">http://cdn.mysql.com/Downloads/MySQL-5.5/MySQL-server-5.5.27-1.linux2.6.i386.rpm</a> wget <a href="http://cdn.mysql.com/Downloads/MySQL-5.5/MySQL-client-5.5.27-1.linux2.6.i386.rpm" target="_blank" rel="noreferrer">http://cdn.mysql.com/Downloads/MySQL-5.5/MySQL-client-5.5.27-1.linux2.6.i386.rpm</a> 安装mysql rpm –ivh MySQL-server-5.5.27-1.linux2.6.i386.rpm rpm –ivh MySQL-client-5.5.27-1.linux2.6.i386.rpm 启动mysql /usr/bin/mysqld_safe &amp; 将mysql服务加入自动启动 查看mysql的运行状态 service mysql status 查看mysql是否在自动启动的列表中 chkconfig –list 如果不再加入 chkconfig –add mysql</p><p>php安装 安装一些常用的库</p><pre class="brush: text; gutter: true; first-line: 1">yum install gcc gcc-c++ autoconf libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel libxml2 libxml2-devel zlib zlib-devel glibc glibc-devel glib2 glib2-devel bzip2 bzip2-devel ncurses ncurses-devel curl curl-devel e2fsprogs e2fsprogs-devel krb5 krb5-devel libidn libidn-devel openssl openssl-devel openldap openldap-devel nss_ldap openldap-clients openldap-servers

wget http://cn2.php.net/distributions/php-5.4.5.tar.gz
tar zxvf php-5.4.5.tar.gz
cd php-5.4.5
./configure --with-apxs2=/usr/local/apache2/bin/apxs --with-mysql --with-mysqli --prefix=/usr/local/php5 --disable-cgi --with-zlib --with-gettext --with-iconv-dir --with-freetype-dir --with-jpeg-dir --with-png-dir --with-zlib --with-libxml-dir --enable-xml --disable-rpath --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl --with-curlwrappers --enable-mbregex --enable-mbstring --with-mcrypt --with-gd --enable-gd-native-ttf --with-openssl --with-mhash --enable-pcntl --enable-sockets --with-ldap --with-ldap-sasl --with-xmlrpc --enable-zip --enable-soap
make
make install

cp -p .libs/libphp5.so /usr/local/apache/modules</pre><p>修改apache配置</p><h1 id="make-sure-there-s-only-1-line-for-each-of-these-2-directives" tabindex="-1">Make sure there&#39;s only <strong>1</strong> line for each of these 2 directives: <a class="header-anchor" href="#make-sure-there-s-only-1-line-for-each-of-these-2-directives" aria-label="Permalink to &quot;Make sure there&#39;s only **1** line for each of these 2 directives:&quot;">​</a></h1><h1 id="use-for-php-4-x" tabindex="-1">Use for PHP 4.x: <a class="header-anchor" href="#use-for-php-4-x" aria-label="Permalink to &quot;Use for PHP 4.x:&quot;">​</a></h1><p>#LoadModule php4_module modules/libphp4.so #AddHandler php-script .php</p><h1 id="use-for-php-5-x" tabindex="-1">Use for PHP 5.x: <a class="header-anchor" href="#use-for-php-5-x" aria-label="Permalink to &quot;Use for PHP 5.x:&quot;">​</a></h1><p>LoadModule php5_module modules/libphp5.so AddHandler php5-script .php</p><h1 id="add-index-php-to-your-directoryindex-line" tabindex="-1">Add index.php to your DirectoryIndex line: <a class="header-anchor" href="#add-index-php-to-your-directoryindex-line" aria-label="Permalink to &quot;Add index.php to your DirectoryIndex line:&quot;">​</a></h1><p>DirectoryIndex index.html index.php</p><p>AddType text/html .php</p><h1 id="php-syntax-coloring" tabindex="-1">PHP Syntax Coloring <a class="header-anchor" href="#php-syntax-coloring" aria-label="Permalink to &quot;PHP Syntax Coloring&quot;">​</a></h1><h1 id="optional-but-useful-for-reading-php-source-for-debugging" tabindex="-1">(optional but useful for reading PHP source for debugging): <a class="header-anchor" href="#optional-but-useful-for-reading-php-source-for-debugging" aria-label="Permalink to &quot;(optional but useful for reading PHP source for debugging):&quot;">​</a></h1><p>AddType application/x-httpd-php-source phps</p><p>httpd.conf中加入php的配置文件 PHPINIDir /etc/php.ini</p><p>开起gd库php.ini中加入 extension=curl.so session.auto_start=1</p><p>自动启动apache vi /etc/rc.d/rc.local 加入 /usr/local/apache2/bin/httpd -f /usr/local/apache2/conf/httpd.conf</p>`,22),i=[l];function n(s,o,h,c,d,u){return a(),t("div",null,i)}const f=e(p,[["render",n]]);export{b as __pageData,f as default};
