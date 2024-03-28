import{_ as p,c as e,o as t,U as a}from"./chunks/framework.I0qYP7JU.js";const h=JSON.parse('{"title":"Drupal7 没有mysql数据库选项的解决方法","description":"","frontmatter":{"title":"Drupal7 没有mysql数据库选项的解决方法","tags":["cms","Drupal"],"id":470,"author":"welpher.yu","categories":["后端开发"],"date":"2011-11-14T21:48:08.000Z"},"headers":[],"relativePath":"posts/2011/470.md","filePath":"posts/2011/470.md"}'),r={name:"posts/2011/470.md"},s=a('<blockquote><p>Drupal是当今开源内容管理系统中的王者，连续几年获得优秀开源CMS 大奖的殊荣。它依靠优良的架构、多语言支持、Web 2.0的特质、丰富的第三方模块、简练的主题模板引擎和强大的Drupal API获得了无数开发者的青睐。国内外越来越多的网站采用Drupal构建，很多著名的公司、组织和个人也使用Drupal作为其门户网站的框架。在经过了近十年的发展后，Drupal 6成为当前最流行也是最稳定的Drupal版本，全球近700开发者在Drupal 5的基础上做了大量的改进，使其更加完善和强健。</p><p>Drupal包含了内容管理、用户管理、角色和权限访问控制、模块管理、主题和模板管理等网站基础功能。掌握了Drupal，就等于掌握了一个强大建站工具，将帮助读者在未来的网站项目中，保证质量的同时有效的缩短开发周期，尽快实现网站原型。  </p></blockquote><p>可能还有不知道Drupal，看完上面这段文字后，想必对这个cms系统有了一定的认识。网上关于Drupal7安装有一大堆文章，我也就不去复制别的人东西了。我就讲讲我对于这个工具安装的过程中遇到的一些问题做一下简单的陈述，方便以后有人遇到这个问题时能有所帮助。</p><p>安装的时候没有Mysql数据库类型选择只有SQlite：</p><p>很多安装教程说这是因为没有在settings.php中设置默认的$databases，按照教程，我加上了这个数据库设置。然后报了一堆的错出来。搜索了半天，还是老外发现了这个问题所在，是因为数据库的连接用了<a href="http://drupal.org/requirements/pdo" title="pdo" target="_blank" rel="noreferrer">pdo</a>，必须给php安装pdo_mysql的扩展才能出现mysql的选项。</p><p>我检查了一下我的php安装过程，发现是有装pdo_mysql的，查看了php.ini，的确是有的。网上有的说扩展必须按照memcache.so pdo_mysql.so imagick.so这样的顺序加载，特别是最后一个必须在最后，我检查了一下，我的确是这样加载的。</p><p>后来我查看了phpinfo,发现扩展一个没有加载上，再检索了我的php.ini一直是在/etc这个目录下，果断把它弄到/usr/local/php/etc/下，这回加载上了，终于出现了mysql的选项了。</p><p> </p>',7),o=[s];function l(_,c,i,u,n,d){return t(),e("div",null,o)}const D=p(r,[["render",l]]);export{h as __pageData,D as default};
