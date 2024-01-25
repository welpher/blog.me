---
title: Nginx 日志切割
author: welpher.yu
date: 2016-12-13 13:09:22
id: 1060
tags:
  - Nginx
  - centos
categories:
  - Nginx
---

`Nginx`日志切割脚本

``` shell
#!/bin/bash
#nginx access log segmentation script

#log directory
LOG_DIR="nginx log path"

TODAY=$(date +%Y%m%d --date="-1 day")

#log save days
LOG_SAVE_DAYS=15

cd $LOG_DIR

LOG_FILES=$(ls $LOG_DIR/*.log)


for file in $LOG_FILES
do
    size=$(du -k ${file} | awk '{print $1}')

    filename=$(basename ${file} .log)
    #文件大于1M才会切割
    if [ ${size} -gt 1000 ]
    then
        if [ ! -d ${LOG_DIR}/${filename} ]
        then
            mkdir ${filename}
        fi
        mv ${LOG_DIR}/${filename}.log ${LOG_DIR}/${filename}/${filename}-${TODAY}.log
    fi
done

#delete old data
find ${LOG_DIR}/ -mtime +${LOG_SAVE_DAYS} -exec rm -rf {} \;

/etc/init.d/nginx reload
```
这个脚本配合crontab来执行就可以了，每天00:00执行