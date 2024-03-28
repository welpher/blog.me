import{_ as s,c as a,o as p,U as n}from"./chunks/framework.I0qYP7JU.js";const b=JSON.parse('{"title":"gulp文件路径匹配glob详解","description":"","frontmatter":{"id":1064,"title":"gulp文件路径匹配glob详解","author":"welpher.yu","date":"2023-01-05T09:47:11.000Z","tags":["gulp"],"categories":["web前端"]},"headers":[],"relativePath":"posts/2023/gulp-path-matching-glob.md","filePath":"posts/2023/gulp-path-matching-glob.md"}'),e={name:"posts/2023/gulp-path-matching-glob.md"},l=n(`<p>####什么是glob？</p><p>gulp.src() 方法接受一个 glob 字符串或由多个 glob 字符串组成的数组作为参数，用于确定哪些文件需要被操作，接下来的操作方法提供源文件。glob 是由普通字符和/或通配字符组成的字符串，用于匹配文件路径。当使用 glob 数组时，将按照每个 glob 在数组中的位置依次执行匹配，匹配的时候请注意匹配顺序。</p><p>####路径特殊字符 1、<code>*</code>一个星号，匹配文件夹或文件名中0个或者多个字符，不会匹配路径中的分隔符。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 匹配 ./js 目录下所有的js文件</span></span>
<span class="line"><span>gulp.src(&#39;./js/*.js&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 匹配 ./js 目录下所有的文件</span></span>
<span class="line"><span>gulp.src(&#39;./js/*.*&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 匹配 ./js 下一级目录下的任意 js 文件，如：./js/sub1/a.js  ./js/sub2/a.js</span></span>
<span class="line"><span>gulp.src(&#39;./js/*/*.js&#39;)</span></span></code></pre></div><p>2、<code>**</code>两个星号，在多个字符串片段中匹配任意数量的字符，包括零个匹配。 对于匹配嵌套目录下的文件很有用。多用于匹配文件路径中的0个或多个层级的目录，在末尾的话也可匹配文件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 匹配./template目录下及其子目录下的所有html文件，如</span></span>
<span class="line"><span>// ./template/index.html</span></span>
<span class="line"><span>// ./template/a/a.html</span></span>
<span class="line"><span>// ./template/b/a/b.html</span></span>
<span class="line"><span>gulp.src(&#39;./template/**/*.html&#39;)</span></span></code></pre></div><p>3、<code>!</code>感叹号（取反），由于 glob 匹配时是按照每个 glob 在数组中的位置依次进行匹配操作的，所以 glob 数组中的取反（negative）glob 必须跟在一个非取反（non-negative）的 glob 后面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gulp.src([&#39;script/**/*.js&#39;, &#39;!script/vendor/&#39;])</span></span></code></pre></div><p>4、<code>?</code>匹配一个字符，不会匹配路径分隔符</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 匹配只有一个字符文件名的html，如</span></span>
<span class="line"><span>// ./template/a.html</span></span>
<span class="line"><span>gulp.src(&#39;./template/?.html&#39;)</span></span></code></pre></div>`,10),t=[l];function c(i,o,g,d,h,r){return p(),a("div",null,t)}const m=s(e,[["render",c]]);export{b as __pageData,m as default};