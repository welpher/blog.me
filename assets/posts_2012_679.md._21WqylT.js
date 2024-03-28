import{_ as e,c as t,o as i,m as n}from"./chunks/framework.I0qYP7JU.js";const g=JSON.parse('{"title":"在window下安装nginx+php","description":"","frontmatter":{"title":"在window下安装nginx+php","tags":["nginx"],"id":679,"author":"welpher.yu","categories":["服务器"],"date":"2012-01-03T14:26:23.000Z"},"headers":[],"relativePath":"posts/2012/679.md","filePath":"posts/2012/679.md"}'),p={name:"posts/2012/679.md"},o=n("p",null,"window下安装nginx+php，有时在想，网络上的很多关于这方面的信息，有的好有的差，有的就随便带过。有新手问我配置问题，在远程， 就给他们提供一两篇这方面的信息供其查看。而接着他们按我提供的信息按步操作下来，却有很多情况下出问题。今天就自己把一些安装的关键点提一下，希望对于 那些新手们有所帮助。",-1),s=n("pre",null,[n("code",null,`一、首先是PHP配置：

    1、把所下载的php包解压到硬盘上，以D盘为例，路径： D:/php

    2、找到文件php.ini-recommended，改名为：php.ini

    3、打开php.ini，修改如下配置：

        a. 找到extension_dir = "./"  修改为 extension_dir = "D:\\php\\ext"

        b. 修改配置项如下

            enable_dl = On

            cgi.force_redirect = 0
            cgi.fix_pathinfo=1
            fastcgi.impersonate = 1
            cgi.rfc2616_headers = 1 

        c. 配置基本的扩展，可以去掉如下项前的";"

            extension=php_curl.dll

            extension=php_gd2.dll

            extension=php_mbstring.dll

            extension=php_mcrypt.dll

            extension=php_mysql.dll

            以上已经够用了，已开启mysql，其他项可以根据具体情况自己再开启扩展

     4、可以把php.ini复制一份到C:\\WINDOWS下

     5、把php5ts.dll和libmysql.dll复制一份到C:\\WINDOWS\\system32下

二、配置Nginx

    1、下载Nginx Window安装包，并解压到硬盘上，以以D盘为例，路径： D:/nginx

    2、在server下找到location / 修改解析PHP文件存放的路径（可默认不修改），修改例如下：

         location / {

             root   E:/wwwroot;

             index  index.html index.htm index.php;

         }

         表示虚拟目录设置为E:/wwwroot，增加默认解析index.php

     3、在server下找到location ~ \\.php$ 修改php解释器FastCGI配置，修改例如下：

         location ~ \\.php$ {

             root           E:/wwwroot;  #php存放目录

             fastcgi_pass   127.0.0.1:9000;

             fastcgi_index  index.php;

             fastcgi_param  SCRIPT_FILENAME  E:/wwwroot$fastcgi_script_name;

             include        fastcgi_params;

         }
`)],-1),a=[o,s];function r(d,l,c,h,_,x){return i(),t("div",null,a)}const w=e(p,[["render",r]]);export{g as __pageData,w as default};
