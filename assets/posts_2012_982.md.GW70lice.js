import{_ as h,c as s,m as t,a as e,I as a,w as r,U as i,E as o,o as l}from"./chunks/framework.I0qYP7JU.js";const y=JSON.parse('{"title":"AJAX页面状态保持","description":"","frontmatter":{"title":"AJAX页面状态保持","tags":["ajax","haschange","状态保持"],"id":982,"author":"welpher.yu","categories":["web前端"],"date":"2012-09-14T16:29:00.000Z"},"headers":[],"relativePath":"posts/2012/982.md","filePath":"posts/2012/982.md"}'),c={name:"posts/2012/982.md"},d=t("p",null,"传统的页面，浏览器通过url访问页面，页面的内容由后台服务生成页面所有内容再发回给浏览器渲染展示。到AJAX流行的时候，很多信息为AJAX异步请求，比如：点击、翻页等。通常这种情况你一刷新浏览器，当前页面就会重置到初始状态。更不用说把看到的信息url发给好友了。",-1),m=t("p",null,"如果通过这种方式的话，浏览器会刷新页面，如果使用锚点的话则不会刷新浏览器。具体是点击页面去请求数据的同时会改变地址栏“#”后面的值。我们翻页到第四页",-1),p=i(`<p>这样还远远不够，如果用户点击“前进”“后退”，页面内容不会随之改变。之前参照网上别人的做法，用一个定时器来解决的。</p><pre class="brush: js;">/**
 * URL Watcher(require jQuery)
 * 监测url的变化
 * useage:
 * UrlWatcher.init(50);
 * UrlWatcher.AddListener(function(url,isFirstLoad){
 *        FrontEngine.generateFront();
 * });
 *
 */
var UrlWatcher = {
    &quot;init&quot;: function (waittime) {
        this.UrlArray = [window.location.href];//set current url as default
        this.ListenerArray = [];
        this.ResetWaitTime(waittime);
    },
    &quot;AddListener&quot;: function (listener) {//add a process function
        this.ListenerArray.push(listener || function () {});
    },
    &quot;DeleteListener&quot;: function () {
        this.ListenerArray = [];
    },
    &quot;ResetWaitTime&quot;: function (time) {//start timer
        if (this.IntervalHandle) {window.clearInterval(this.IntervalHandle); }
        this.WaitTime = time || 1000;
        this.IntervalHandle = window.setInterval(this.ListenerCall.setThis(this), this.WaitTime);
    },
    &quot;ListenerCall&quot;: function () {
        var self = this, url = window.location.href;
        if (self.UrlArray[self.UrlArray.length - 1] === url) {return; }
        window.clearInterval(this.IntervalHandle);

        $.each(this.ListenerArray, function (c, listener) {
            listener(url, self.UrlArray.length === 0);
        });
        this.UrlArray.push(url);
        this.ResetWaitTime(this.WaitTime);
    }
};
</pre><p><a href="http://www.gmail.com" title="gmail" target="_blank" rel="noreferrer">Gmail</a>中也用了状态保持的东西，但是url是不会改变的。目前也有专门的Framework实现这种功能，比如<a href="http://codinginparadise.org/projects/dhtml_history/README.html" title="RSH" target="_blank" rel="noreferrer">RSH</a>、<a href="http://tools.assembla.com/history/browser" title="History Framework" target="_blank" rel="noreferrer">History Framework</a>。</p><p>之前我通过这种定时器的方法，解决了一些问题。但是，通过这种定时的方法不是实时触发的，总会有一个延时，因为是定时去不停的检测url中hash的变化。</p><p>说到hash，hash的变化在新的浏览器中是支持监测的。就是<a href="http://www.w3.org/TR/html5/history.html#event-hashchange" title="haschange" target="_blank" rel="noreferrer">haschange</a>这个事件，在html5中有定义。目前，各浏览器对haschange的支持情况如下：</p><ul><li>Gecko 1.9.2 (Firefox 3.6/Thunderbird 3.1/Fennec 1.0) IE 8 WebKit 528+ (Safari/Google Chrome) Opera 10.70</li></ul><p>只要浏览器版本比以前大的，都是支持的。此外，ie8以ie7模式运行时，window下存在onhashchange这个方法，但是不会触发这个事件。可以通过<a href="http://msdn.microsoft.com/en-us/library/cc288325(VS.85).aspx#GetMode" title="检测IE的document.documentMode" target="_blank" rel="noreferrer">检测IE的document.documentMode</a>这种方法来检测。</p><pre>if( (&#39;onhashchange&#39; in window) &amp;&amp; ((typeof document.documentMode===&#39;undefined&#39;) || document.documentMode==8)) {     // 浏览器支持onhashchange事件     window.onhashchange = hashChangeFire;  // TODO，对应新的hash执行的操作函数
} else {     // 不支持则用定时器检测的办法     setInterval(function() {         var ischanged = isHashChanged();  // TODO，检测hash值或其中某一段是否更改的函数         if(ischanged) {             hashChangeFire();  // TODO，对应新的hash执行的操作函数         }     }, 150);
}
</pre><p>还是存在ie6/7以及ie8兼容模式下的兼容性问题：不能使用浏览器的前进后退按钮保持追踪，因为这些浏览器并不为锚点的改变创建历史。</p><p>要解决这个问题，可以创建一个隐藏的iframe，通过改变iframe的hash控制ie的历史记录，如<a href="http://benalman.com/projects/jquery-hashchange-plugin/" title="《jQuery hashchange event》" target="_blank" rel="noreferrer">《jQuery hashchange event》</a>。</p><p>参考资料：</p><p>1、<a href="http://www.impng.com/web-dev/hashchange-event-and-onhashchange.html" title="hashchange Event – 监测URL的hash变化" target="_blank" rel="noreferrer">http://www.impng.com/web-dev/hashchange-event-and-onhashchange.html</a></p><p>2、<a href="http://beamnote.com/2010/ajax-hash-fragment.html" title="让 AJAX 程序通过 URL 保持追踪" target="_blank" rel="noreferrer">http://beamnote.com/2010/ajax-hash-fragment.html</a></p>`,13);function u(f,g,w,_,A,b){const n=o("font");return l(),s("div",null,[d,t("p",null,[e("传统的状态保存在地址栏，如："),a(n,{color:"#0000ff"},{default:r(()=>[e("www.abc.com/search?s=abc&id=23&page=3")]),_:1})]),m,t("p",null,[e("如："),a(n,{color:"#0000ff"},{default:r(()=>[e("abc.com/search#s=abc&id=23&page=4")]),_:1})]),p])}const T=h(c,[["render",u]]);export{y as __pageData,T as default};
