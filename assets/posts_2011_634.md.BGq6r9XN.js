import{_ as a,c as n,o as l,j as e,a as s}from"./chunks/framework.BeChtK_P.js";const u=JSON.parse('{"title":"编写每天定时切割nginx日志的脚本","description":"","frontmatter":{"title":"编写每天定时切割nginx日志的脚本","tags":["nginx","日志"],"id":634,"author":"welpher.yu","categories":["服务器"],"date":"2011-12-16T09:15:41.000Z"},"headers":[],"relativePath":"posts/2011/634.md","filePath":"posts/2011/634.md"}'),o={name:"posts/2011/634.md"};function r(d,t,i,c,p,g){return l(),n("div",null,[...t[0]||(t[0]=[e("div",{style:{display:"none"}},"[shell] [/shell]",-1),s(" 1、编写脚本 ",-1),e("pre",{class:"brush: shell; gutter: true; first-line: 1"},`#!/bin/bash
#this script run at 00:00
#the nginx logs path
logs_path="/usr/local/nginx/logs/"
mkdir -p \${logs_path}$(date -d "yesterday" + "%Y“)/$(date -d ”yesterday" + "%m")/
mv \${logs_path} access.log \${log_path}$(date -d "yesterday" +"%Y")/$(date -d "yesterday" +"%m")/access_$(date -d "yesterday" +"%Y%m%d").log
kill -USR1 'cat /usr/local/nginx/conf/nginx.pid'`,-1),s(" 2、设置crontab，每天凌晨00：00切割nginx访问日志 ",-1),e("p",null,"crontab -e",-1),e("p",null,"00 00 * * * /bin/bash /usr/local/nginx/conf/cut_nginx_log.sh",-1)])])}const _=a(o,[["render",r]]);export{u as __pageData,_ as default};
