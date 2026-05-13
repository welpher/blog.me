import{_ as e,c as n,o as t,j as a}from"./chunks/framework.BeChtK_P.js";const u=JSON.parse('{"title":"wordpress过滤发表文章标签处理","description":"","frontmatter":{"title":"wordpress过滤发表文章标签处理","tags":["wordpress"],"id":1009,"author":"welpher.yu","categories":["blog"],"date":"2012-10-15T20:15:43.000Z"},"headers":[],"relativePath":"posts/2012/1009.md","filePath":"posts/2012/1009.md"}'),s={name:"posts/2012/1009.md"};function l(o,r,p,y,d,i){return t(),n("div",null,[...r[0]||(r[0]=[a("p",null,"没事用微博写了点自己的笔记，发现代码高亮没效果了，查看了下html，把pre标签的class属性给过滤了。",-1),a("p",null,"第一种解决方法：",-1),a("p",null,"在theme的functions.php中加入以下代码",-1),a("pre",{class:"brush: php;"},`function my_allowed_edittag() {
    define('CUSTOM_TAGS', true);
    global $allowedposttags, $allowedtags;
    $allowedposttags = array(
        'strong' => array(),
        'em' => array(),
        'ol' => array(),
        'li' => array(),
        'u' => array(),
        'ul' => array(),
        'blockquote' => array(),
        'code' => array(),
        'pre' => array(
            'style' => true,
            'class' => true,
        ),
        'a' => array(
        'href' => array (),
        'title' => array ()),
        'img' => array(
        'src' => array ()),
    );

    $allowedtags = array(
        'strong' => array(),
        'em' => array(),
        'ol' => array(),
        'li' => array(),
        'u' => array(),
        'ul' => array(),
        'blockquote' => array(),
        'code' => array(),
        'pre' => array(),
        'a' => array(
        'href' => array (),
        'title' => array ()),
        'img' => array(
        'src' => array ()),
    );
}
add_action('init', 'my_allowed_edittag', 10);`,-1),a("p",null,"也可以写个插件来干这个事情。后面我发觉这个方法允许的标签全都得自己定义，于是我直接改了源代码。",-1),a("p",null,"第二种方法：",-1),a("p",null,"直接修改wp-include/kses.php文件。打开这个文件，果然发现自己定义的标签远远不够，于是直接直接修改了里面的变量**$allowedposttags**给pre添加了class=>true这个值。问题得到临时解决。其实可以写个插件，直接对kses.php中的变量直接扩展。",-1)])])}const m=e(s,[["render",l]]);export{u as __pageData,m as default};
