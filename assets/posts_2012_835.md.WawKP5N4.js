import{_ as e,c as t,o as n,m as s}from"./chunks/framework.I0qYP7JU.js";const f=JSON.parse('{"title":"linux下匿名方式通过rsync同步文件","description":"","frontmatter":{"title":"linux下匿名方式通过rsync同步文件","tags":["rsync","Linux"],"id":835,"author":"welpher.yu","categories":["服务器"],"date":"2012-07-27T15:36:43.000Z"},"headers":[],"relativePath":"posts/2012/835.md","filePath":"posts/2012/835.md"}'),o={name:"posts/2012/835.md"},r=s("p",null,"又是因为公司搬迁服务器，我也要学习下配置rsync，还要用不输入用户名密码的方式。qq是个烦人的东西，特别是你加入讨论组，但你又碍于什么不能退出这个讨论组的时候，qq似乎就是妨碍工作效率的一大杀手了。配置了一周都没成功，今天终于把qq关了一会，我的配置也生效了。 虽然说很简单，但是还是花费了我很多精力，给大家分享下anonymous rsync的配置。 我有两个机子，一个是A(192.168.0.1)，另一个是B（192.168.0.2），我想如果A修改了就通过rsync命令来将更改同步到B 首先看B机器是否安装rsync，如果没有安装就直接yum install rsync 就可以 之后编辑rsync.conf 通常他在/etc目录下 我的配置如下",-1),c=s("pre",{class:"brush: text; gutter: true; first-line: 1"},`ryslog facility = local3
read only = yes
max connections = 4
timeout = 300

motd file = /etc/rsyncd/rsyncd.motd
hosts allow=192.168.0.1
hosts deny=*
list=yes

[website]
uid = ossh
gid = ossh
path = /home/ossh/website
comment = product server home
read only = no`,-1),a=s("p",null,"保存之后，重新启动rsync服务。 在a机器上运行，rsync -avr --delete /home/ossh/website/ 192.168.0.2::website 就这样就成功了哦，是不是看起来很简单哦。 不过记得查看home/ossh/website的权限哦，如果权限不对也会不能起作用的。 另外一点就是ossh这个用户，useradd ossh -s /sbin/nologin",-1),i=[r,c,a];function l(d,h,y,m,u,p){return n(),t("div",null,i)}const x=e(o,[["render",l]]);export{f as __pageData,x as default};
