---
id: 1066
title: centos 7下安装webmin
author: welpher.yu
date: 2017-11-10 14:21:42
tags: 
  - webmin
  - centos
categories:
  - linux
---

>Webmin是基于Web的Linux控制面板。 它允许您通过简单的界面管理您的服务器。 使用Webmin，您可以即时更改常用软件包的设置。

#### 下载安装
直接在webmin官网下载即可（http://www.webmin.com/download.html）
#### YUM安装
1 添加webmin信息仓库

```
vi /etc/yum.repos.d/webmin.repo
```
然后添加内容

```
[Webmin]
name=Webmin Distribution Neutral
#baseurl=http://download.webmin.com/download/yum
mirrorlist=http://download.webmin.com/download/yum/mirrorlist
enabled=1
```
然后的然后就是要添加PGP密钥

```
rpm --import http://www.webmin.com/jcameron-key.asc
```
2 安装webmin

```
yum -y install webmin
```
3 添加防火墙规则
虽然上面你已经安装了webmin，但是你还是无法通过https://your domin:10000进行访问

```
firewall-cmd --zone=public --add-port=10000/tcp --permanent

```
经常这些操作后，你就可以访问webmin了，登录名root，密码