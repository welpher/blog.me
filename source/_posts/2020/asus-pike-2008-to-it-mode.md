---
title: 华硕Pike 2008刷IT模式
author: welpher.yu
date: 2020-08-05 21:47:11
tags:
---

#### 前言
最近把Hp Microserver Gen8给卖了，买了些二手垃圾回来组了台C602平台E5处理器的塔式服务器。关于组这个服务器，后面有空再表，多少还有些后悔的，因为功耗要差不多100W，之前gen8四盘才50W左右，对于一台NAS来说，100W的功耗还是挺高的。


主板为华硕的[Z9PA-U8](https://www.asus.com.cn/supportonly/Z9PA-U8/),单路，带IPMI2.0，需要买一块[ASMB6-iKvm](https://www.asus.com.cn/supportonly/ASMB6-iKVM/HelpDesk/)的管理卡。


主板上有很多SATA口，大多是SATA 2.0的，还有8个SATA3.0的口需要一种叫pike卡的东西来启用，于是花了二十来块钱买了张[Pike 2008](https://www.asus.com/us/Commercial-Servers-Workstations/PIKE_2008/)，官网上的固件没有IT模式的，都是IR模式。
![pike2008](/imgs/2020/pike2008.jpg)

#### IT和IR有什么区别？
 IT： Initiator Target
 IR： Integrated RAID
一个是直连主板，一个是硬件RAID模式。

raid模式最怕的就是卡坏了，或者硬盘坏了。用的时候笑哈哈，硬盘坏了就惨了，现在动不动几个T的硬盘，那恢复时间可是相当的长啊，而且坏了一块，如果再坏一块，所有数据就都没有了。所以直接搞IT模式，组snapRaid
<!--more-->

#### 刷IT模式

参考[Flashing Asus 2008 PIKE to IT Mode](https://gist.github.com/pjobson/9ec25f7fc991f28d132ca813ab1bd541),分为以下几步：

##### 1、先获取PIKE卡背面的码，卡的地址
![pike2008code](/imgs/2020/pike_2008_code.jpg)
就是这个以5000打头的。

##### 2、给U盘刷入FreeDOS系统
下载[rufus](https://rufus.ie/zh_CN.html),在Format Options里选择Create a bootable disk using 选FreeDOS即可。

#### 3、把IT模式固件复制到刚刚的U盘里
下载[sas flash](https://gist.github.com/pjobson/9ec25f7fc991f28d132ca813ab1bd541/raw/4468546bfaa499d05a9f244cbcce6a200b1b62e0/sas_flash_files.zip)，解压后复制到U盘。

#### 4、启动进入FreeDOS
一定要移除多余的SAS卡，及其它硬盘什么的，然后进入FreeDOS系统，切换到我们复制的固件文件夹。

```
sas2flsh.exe -c 0 -list
```
会得到sas卡的信息，其中SAS Address这个就是我们要用到的卡地址啦。
```
Adapter Selected is a LSI SAS: SAS2008(B2)

Controller Number  : 0
Controller  : SAS2008(B2)
PCI Address  : 00:01:00:00
SAS Address  : 5000xxx-x-xxxx-xxxx
NVDATA Version (Default)  : 14.01.00.08
NVDATA Version (Persistent)  : 14.01.00.08
Firmware Product ID  : 0x2213 (IT)
Firmware Version  : 20.00.07.00
NVDATA Vendor  : LSI
NVDATA Product ID  : SAS9211-8i
BIOS Version  : N/A
UEFI BSD Version  : N/A
FCODE Version  : N/A
Board Name  : SAS9211-8i
Board Assembly  : N/A
Board Tracer Number  : N/A

Finished Processing Commands Successfully.
Exiting SAS2Flash.
```

然后备份SAS卡，哪天想回到IR模式，很方便

```
megarec.exe -readsbr 0 pike2008.sbr
```

清空SAS卡
```
megarec.exe -writesbr 0 sbrempty.bin
megarec.exe -cleanflash 0
```
然后，一定要重启， 不然后面的操作不会成功。
重启后，刷入IT Mode固件
```
sas2flsh.exe -o -f 2118it.bin -b mptsas2.rom
```
重置之前的5000开始的地址
```
sas2flsh.exe -o -sasadd 5000xxxxxxxxxxxx
```
然后你就会发现，已经是it模式了
```
sas2flsh.exe -listall
```
参考网站写得很全。

参考：
1、<https://gist.github.com/pjobson/9ec25f7fc991f28d132ca813ab1bd541>
