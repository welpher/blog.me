---
title: let's encrypt免费证书获取
date: 2016-12-04 22:21:11
id: 1058
author: welpher.yu
tags: 
  - web
categories:
  - web
---

Let’s Encrypt是电子前哨基金会（EFF）发布的免费SSL证书服务，受到微软、谷歌等大佬的支持，但是配置比较复杂（那是以前）。

现在有了cerbot就简单多了。

#### 安装cerbot

``` bash
git clone https://github.com/certbot/certbot
cd certbot
./certbot-auto --help
```
直接从github上clone下来就可以直接用了，然后看看有哪些命令可以用。

#### 生成证书

```
./certbot-auto certonly --webroot --agree-tos -v -t --email 邮箱 -w 网站目录 -d 域名
```
这一步会在网站根目录生成`.well-known/acme-challenge`，所以一定要保证你的网站是可访问的，生成证书时会来验证是不是你的网站。然后才会最终生成证书。当你看到下面信息的时候就表示证书生成了。

```
- Congratulations! Your certificate and chain have been saved at
/etc/letsencrypt/live/域名/fullchain.pem
```

证书所在的地方是`/etc/letsencrypt/`，`archive`里面是所有证书的存档，`keys`里面是所有证书,我们要用到的在`live`这个目录里面的你的域名文件夹下。

- `privkey.pem`这是私匙，对应Nginx的`ssl_certificate_key`选项，或者Apache2的`SSLCertificateKeyFile`选项。
- `cert.pem`服务器证书，这个只有Apache2低于2.4.8版本需要，对应`SSLCertificateFile`选项。
- `chain.pem` 除服务器证书之外的所有证书，对于1.3.7版以上的Nginx对应`ssl_trusted_certificate`选项，对于低于2.4.8的Apache2对应`SSLCertificateChainFile`选项。
- `fullchain.pem` 包括上面的服务器证书和其他证书，Nginx对应`ssl_certificate`选项，2.4.8版以上的Apache2对应`SSLCertificateFile`。

#### 生成dhparams

```
openssl dhparam -out /etc/ssl/certs/dhparams.pem 2048
```

#### 配置Nginx

在nginx的server配置里添加如下设置：

```
listen 443

ssl on;
ssl_certificate /etc/letsencrypt/live/域名/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/域名/privkey.pem;
ssl_dhparam /etc/ssl/certs/dhparams.pem;
ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
ssl_ciphers HIGH:!aNULL:!MD5;
```
当然了，最后在原来的80端口加上跳转：

```
server {
    listen 80;
    server_name domain.com;
    return 301 https://$server_name$request_uri;
}
```

然后重启nginx服务就可以用了。

#### 配置自动更新证书

证书的有效期是三个月，我们可以用crontab来实现自动更新。

写一个脚本程序来更新：

```
#!/bin/sh
/your path/certbot-auto renew --quiet --no-self-upgrade
```
然后设置crontab：

```
10 1 * * 0 /your path/renew.sh
```
每周日的一点五十会进行证书检查更新，cerbot只有在到期前一个月才会进行更新，所以不用担心会一直更新。