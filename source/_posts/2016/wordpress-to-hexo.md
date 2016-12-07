---
title: 博客从wordpress迁移到hexo
date: 2016-12-02 18:33:20
id: 1057
author: welpher.yu
tags:
  - wordpress
  - hexo
---
## wordpress的这些年 

从这个博客建立已经好些年了，自从14年后就没时间管理了，因为工作太忙了。后来一度不可用了，然后登上服务器才发现，硬盘满了，因为`nginx`的日志把硬盘塞满了。当然了，一直是使用的`wordpress`，为了后台的安全，还用了`google authenticator`两步验证来保证。但是最近发现，还是被破了，后台的某个账号被攻破了，塞了无数的垃圾文章，好在我当时设了审核，所以这些垃圾文章都没有发布出来。想想之前换了`vps`的套餐，为此博客还搬了次家，太折腾了，VPS厂才不会给你备份数据（收费）。

## hexo的好处

`hexo`是基于`node.js`的静态博客程序，对前端来说，没有比这个更有吸引力了，而且相比`jekyll`、`Octopress`来说：生成页面速度极快，主题当然也是非常丰富的。当然，可以把站点部署到`Github`,我不会这样，我用我买的VPS部署博客。于是，你看到的博客就是现在这个样子了。

## Github + VPS 使用Webhooks进行自动部署

这里一定要说一下，网上很多github+vps自动部署的文章都是git+vps的自动部署，其实就是你在vps上部署一个git库，然后当你提交的时候，再在本服务上做post hook部署。

我们的目标就是：“当我提交新的文章到Github时，VPS上git pull代码，然后hexo g生成文章”。

* 自动化部署脚本

	很简单的写了个shell脚本 deploy.sh
	
	``` bash
	#!/bin/bash
	WEB_PATH='/your path'
	 
	echo "Start deployment"
	cd $WEB_PATH
	echo "pulling source code from Github..."
	git pull
	echo "Generate posts"
	hexo g
	echo "Finished."
	```

* 部署博客
	
	从Github上把你的博客代码pull下来，然后把node.js环境安装好（环境还是不用自动脚本执行安装，每次变更依赖手动来处理）
	
* webhooks监听
	
	Github本身都支持webhooks的设定
	
	![webhooks](/imgs/2016/github-webhooks.png)
	
	如图，Payload URL 上填上需要部署到的服务器的网址，比方说http://dev.abc.net/incoming。然后之后每次有 push 事件 GitHub 都会主动往这个地址发送一个 POST 请求，当然你也可以选择任何事件都发个 POST 通知你。GitHub 还有个 Secret 的设定，就是一个字符串，如果加上的话就在 POST 请求的 HTTP 头中会带一个 Hash 值做验证密文，证明这个 POST 真是来自 GitHub，不然任何人都往那个地址 POST 请求，很容易被攻击。
	
	现在，Github会给我们发请求了，我们在自己的服务上需要一个handler来处理这个请示，处理这个请求，可以用node.js的[github-webhook-handler](https://github.com/rvagg/github-webhook-handler),当然也可以用php的[github-webhook](https://github.com/Coppertino/github-webhook)、[github-webhook-handler.php](https://gist.github.com/welpher/792fd4bbf5152beb4c93e5e9d9423e3b)等。当然啦，其它语言随意，也可以自己敲代码敲出来。当然了，最后就是要在这些handler里执行我们之前写的shell哦，不然怎么能实现自动部署呢，是吧亲。

