import{_ as s,c as a,a as e,m as t,o as n}from"./chunks/framework.I0qYP7JU.js";const y=JSON.parse('{"title":"编写每天定时切割nginx日志的脚本","description":"","frontmatter":{"title":"编写每天定时切割nginx日志的脚本","tags":["nginx","日志"],"id":634,"author":"welpher.yu","categories":["服务器"],"date":"2011-12-16T09:15:41.000Z"},"headers":[],"relativePath":"posts/2011/634.md","filePath":"posts/2011/634.md"}'),o={name:"posts/2011/634.md"},l=t("div",{style:{display:"none"}},"[shell] [/shell]",-1),r=t("pre",{class:"brush: shell; gutter: true; first-line: 1"},`#!/bin/bash
#this script run at 00:00
#the nginx logs path
logs_path="/usr/local/nginx/logs/"
mkdir -p \${logs_path}$(date -d "yesterday" + "%Y“)/$(date -d ”yesterday" + "%m")/
mv \${logs_path} access.log \${log_path}$(date -d "yesterday" +"%Y")/$(date -d "yesterday" +"%m")/access_$(date -d "yesterday" +"%Y%m%d").log
kill -USR1 'cat /usr/local/nginx/conf/nginx.pid'`,-1),d=t("p",null,"crontab -e",-1),i=t("p",null,"00 00 * * * /bin/bash /usr/local/nginx/conf/cut_nginx_log.sh",-1);function c(p,_,h,g,u,m){return n(),a("div",null,[l,e(" 1、编写脚本 "),r,e(" 2、设置crontab，每天凌晨00：00切割nginx访问日志 "),d,i])}const $=s(o,[["render",c]]);export{y as __pageData,$ as default};
