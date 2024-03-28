import{_ as e,c as t,o as r,U as o}from"./chunks/framework.I0qYP7JU.js";const w=JSON.parse('{"title":"各种判断浏览器的方法","description":"","frontmatter":{"title":"各种判断浏览器的方法","tags":["ie","JavaScript","浏览器"],"id":1001,"author":"welpher.yu","categories":["web前端"],"date":"2012-10-20T19:31:11.000Z"},"headers":[],"relativePath":"posts/2012/1001.md","filePath":"posts/2012/1001.md"}'),n={name:"posts/2012/1001.md"},s=o(`<p>最近翻《Javascript高级程序设计》的时候看了比较正式的判断浏览器的方法，然后又在网上找了很多small tricks or hacks来判断浏览器，直接上代码：</p><pre class="brush: js;">var ie = !+&quot;\\v1&quot;,
    ie1 = !!top.execScript,
    ie2 = (function() {
        /*@cc_on
        @if (@_jscript)
            return true;
        @else */
            return false;
        /*
        @end
        @*/
    })(),
    ie3 = !(&#39;__proto__&#39; in {}),
    ie4 = (function(IE){
        try{
            IE=this.window=!1;
        }catch(e){
            IE=!0;
        };
        return IE;
    })(),
    ie5 = /*@cc_on!@*/false,
    IEVersion = 0/*@cc_on+ScriptEngineMajorVersion()@*/&#39;;

alert(IEVersion);</pre><p> </p><p>ie4好像不行，其它都可以（自己的家用电脑只有ie9\\chrome\\firefox16，如有发现不行的可以留言给我），最狠的是IEVersion 这个方法你开兼容模式也不能改变版本。</p><p>参考资料里还有更利害的，各位看官可以去围观一下。</p><p>参考资料：</p><p>1、<a href="http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html" target="_blank" rel="noreferrer">http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html</a></p><p>2、<a href="http://stackoverflow.com/questions/8725905/zepto-fallback-to-jquery/8734106#8734106" target="_blank" rel="noreferrer">http://stackoverflow.com/questions/8725905/zepto-fallback-to-jquery/8734106#8734106</a></p><p>3、<a href="http://www.thespanner.co.uk/2009/01/29/detecting-browsers-javascript-hacks/" target="_blank" rel="noreferrer">http://www.thespanner.co.uk/2009/01/29/detecting-browsers-javascript-hacks/</a></p>`,9),a=[s];function c(i,p,_,l,f,h){return r(),t("div",null,a)}const d=e(n,[["render",c]]);export{w as __pageData,d as default};
