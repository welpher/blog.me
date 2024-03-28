import{_ as p,c as t,o as e,U as n}from"./chunks/framework.I0qYP7JU.js";const h=JSON.parse('{"title":"浅谈centOS下linux数据迁移/备份","description":"","frontmatter":{"title":"浅谈centOS下linux数据迁移/备份","tags":["数据迁移","centos"],"id":674,"author":"welpher.yu","categories":["服务器"],"date":"2011-12-26T00:02:41.000Z"},"headers":[],"relativePath":"posts/2011/674.md","filePath":"posts/2011/674.md"}'),s={name:"posts/2011/674.md"},o=n("<p>这段时候把VPS的硬盘换大了，故从一个VPS迁移到另一个VPS，数据迁移很重要啊。</p><p> <strong>前言：</strong></p><p>备份有多重要，系统坏的时候你就知道了。平时大家可能会对自己的数据库做个备份什么的，但是有没有想过如果哪天系统坏了，怎么办呢？如果你想换vps方案（vps提供商应该不会提供数据服务的）又怎么办呢？对于centos用户来说，很多东西都是make install出来的，各种软件的配置文件，这些东西非常重要。文章主要讲的是网络服务器的备份。 不要等数据丢失的时候才意识到这些的重要性。切记呀！</p><p><strong>备份需要考虑哪些东西：</strong></p><p>每个系统的使用情况不同，可能你的服务器是用来做dns用的，或者是做web服务器，抑或是图片服务器。根据功用的不同，才好做出备份计划来。 我们很多人都是自己安装的软件，那么/usr/local这个目录就非常重要了，可能所有的软件都安装在这个下面。 比如我的linux系统是centos，同时配置了MySql、php、apache、nginx等软件，除了系统的重要文件外，这些软件的配置，日志以及统计数据也需要考虑进来。 不需要考虑备份的目录： 系统中有些是不需要考虑备份的，比如</p><p>1、/dev<br> 2、/proc：是记录目前系统正在跑的程序<br> 3、/mnt 、/media<br> 4、/tmp  </p><p>以我的VPS为例，我的web用的是LNMP，还有其它一些小东西，不过最主要的是这个东西了。所以：</p><p>1、php的配置文件要备份，php.ini，php-fpm.conf</p><p>2、nginx的配置文件也要备份了，conf这个文件夹下面的nginx.conf,fastcgi.conf，还有虚拟目录vhost下的所以文件</p><p>3、MySql的文件。</p><p>由于我参考的网上名人写的安装lnmp的教程，所以像mysql这些个my.cnf、管理MySQL 数据库的shell 脚本、数据库文件、程序以及各种日志都放在一个文件夹下，所以直接可以将这个文件打包</p><p>#tar jcvf FileName.tar.bz2 DirName</p><p>然后把这个文件发布，在另一个vps中wget过去。然后一些配置文件复制过去就ok了，简单吧。</p><p>后记：</p><p>其实这种方式很土，根本做不到平滑过渡，以后有时候还得研究一下其它的方法。</p>",15),a=[o];function c(r,i,_,l,m,d){return e(),t("div",null,a)}const S=p(s,[["render",c]]);export{h as __pageData,S as default};
