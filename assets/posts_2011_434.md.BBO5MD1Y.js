import{_ as s,c as n,o as a,U as e}from"./chunks/framework.I0qYP7JU.js";const u=JSON.parse('{"title":".net中委托和事件的学习","description":"","frontmatter":{"title":".net中委托和事件的学习","tags":["委托"],"id":434,"author":"welpher.yu","categories":["后端开发"],"date":"2011-11-12T11:05:58.000Z"},"headers":[],"relativePath":"posts/2011/434.md","filePath":"posts/2011/434.md"}'),p={name:"posts/2011/434.md"},i=e(`<p><strong>写在前</strong></p><p>委托对于我这种比较专注于前端开发的人来说，真的是不好理解。最近看了一个东西，里面用了这个，有点傻眼了，我努力去弄懂这个东西，但是真不知道怎么去懂。很显然这个东西很有用，很多东西都是基于委托来实现的，本着究底的学习态度到处去找比较通俗易懂的资料，好难找啊。开始只找到了msdn上关于这个的介绍---<a href="http://msdn.microsoft.com/zh-cn/library/system.delegate%28VS.80%29.aspx" title="delegate" target="_blank" rel="noreferrer">delegate</a>。</p><p>如大牛所说，这篇博文要讲述什么是委托？为什么要使用它及事件的由来？委托和事件对Observer设计模式的意义等等。</p><p><strong>网上说委托就是可以实现把方法做为变量来传递的东西。</strong></p><p>这个东西真不好理解，所以就不用管它是什么意思了，直接来看代码。</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GreetPeople</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	//do something</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	EnglishGreeting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EnglishGreeting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello, &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>GreetPeople用于向某人打招呼，向其传递参数name的时候，比如：welpher，在这个方法中，将会调用别一个方法EnglishGreeting，向其传递name参数，在屏幕输出一句英文的打招呼句子“hello, welpher&quot;。</p><p>如果以后要对这个方法进行扩展，比如全球化，要加入各种语言的打招呼的方法，比如加入中文的打招呼句子。</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ChineseGreeting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你好， &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>加了一个方法后上面的GreetPeople也要改一下了，不然不知道什么时候该调用哪个方法了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public enum Language</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	English,Chinese</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>public void GreetPeople(string name,Language lang)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	//do somethig</span></span>
<span class="line"><span>	switch(lang)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		case Language.English:</span></span>
<span class="line"><span>			EnglishGreeting(name);break;</span></span>
<span class="line"><span>		case Language.Chinese:</span></span>
<span class="line"><span>			ChineseGreeting(name);break;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>好了，满足了客户的要求。但是不得不说这个解决方案可扩展性是很差的，以后再添加其它语言版的打招呼时，不得不反复的修改代码。</p><p>先来看看GreetPeople的方法签名：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public void GreetPeople(string name, Language lang)</span></span></code></pre></div><p>这个方法里，string 是参数类型，name是参数变量，我们传递什么样的名字进去就显示什么名字，不管这个名字是哪国语言。</p><p>回到之前，向这个函数传递一个方法那该多好，传递EnglishGreeting就代表EnglishGreeting()这个方法，传递ChineseGreeting就代表ChineseGreeting()这个方法。给这个方法添加一个参数DoGreeting，那是不是可以像给name赋值一样，在调用GreetPeople()的时候，给这个DoGreeting赋值么？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public void GreetPeople(string name, *** DoGreeting)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	DoGreeting(name);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><em><strong>这个位置通常放置的应该是参数的类型，应该有个可以代表方法的参数，并改写GreetPeople方法，但是这个</strong></em>应该是什么类型才能代表DoGreeting呢？</p><p>回头看看EnglishGreeting和ChineseGreeting，这两个方法都接受一个string类型的参数，只能接受string类型，其它类型是不行的。所以DoGreeting方法的参数类型是确定的。</p><p>本例用委托的方法来实现的话，完整例子如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>using System;</span></span>
<span class="line"><span>using System.Collections.Generic;</span></span>
<span class="line"><span>using System.Text;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>namespace Delegate</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	//定义委托，它定义了可以代表的方法的类型</span></span>
<span class="line"><span>	public delegate void GreetingDelegate(string name);</span></span>
<span class="line"><span>	class Program</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		private static void EnglishGreeting(string name)</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			Console.WriteLine(&quot;hello, &quot;+name);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		private static void ChineseGreeting(string name)</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			Console.WriteLine(&quot;你好， &quot;+name);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		//此方法接受一个GreetingDelegate类型的方法做为参数</span></span>
<span class="line"><span>		private static void GreetPeople(string name,GreetingDelegate DoGreeting)</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			DoGreeting(name);</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		static void Main(string[] args)</span></span>
<span class="line"><span>		{</span></span>
<span class="line"><span>			GreetPeople(&quot;welpher&quot;,EnglishGreeting);</span></span>
<span class="line"><span>			GreetPeople(&quot;锋&quot;,ChineseGreeting);</span></span>
<span class="line"><span>		Console.ReadKey();</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>函数绑定到委托</strong></p><p>通过上面的例子，那个要传的东西就叫做委托。上面的例子中，我们可以定义几个变量：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>static void Main(string[] args)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	string name1,name2;</span></span>
<span class="line"><span>	name2=&quot;welpher&quot;;</span></span>
<span class="line"><span>	name1=&quot;伟锋&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	GreetPeople(name2,EnglishGreeting);</span></span>
<span class="line"><span>	GreetPeople(name1,ChineseGreeting);</span></span>
<span class="line"><span>	Console.ReadKey();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>参数string可以这样子定义，那么GreetingDelegate是不是也可以这么用呢？答案是肯定的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>static void Main(string[] args)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	GrettingDelegate delegate1,delegate2;</span></span>
<span class="line"><span>	delegate1 = EnglishGreeting;</span></span>
<span class="line"><span>	delegate2 = ChineseGreeting;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	GreetPeople(&quot;welpher&quot;,delegate1);</span></span>
<span class="line"><span>	GreetPeople(&quot;伟锋&quot;,delegate2);</span></span>
<span class="line"><span>	Console.ReadKey();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这种定法也会如预料的那样输出。委托不同于string的特性：可以多个方法赋给同一个委托，或者将多个方法绑定到一个委托，当调用这个委托的时候，将依次调用其所绑定的方法，语法如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>static void Main(string[] args)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	GreetingDelegate delegate1;</span></span>
<span class="line"><span>	delegate1 = EnglishGreeting;</span></span>
<span class="line"><span>	delegate1 += ChineseGreeting;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//将先后调用 EnglishGreeting和ChineseGreeting方法</span></span>
<span class="line"><span>	GreetPeople(&quot;welpher&quot;,delegate1);</span></span>
<span class="line"><span>	Console.ReadKey();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>还可以绕过GreetPeople方法，直接通过委托来调用EnglishGreeting和ChineseGreeting:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>static void Main(string[] args)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	GreetingDelegate delegate1;</span></span>
<span class="line"><span>	delegate1 = EnglishGreeting;</span></span>
<span class="line"><span>	delegate1 += ChineseGreeting;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	delegate1(&quot;welpher&quot;);</span></span>
<span class="line"><span>	Console.ReadKey();</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面这些写法，都可以概括为：声明委托，然后声明方法。下面介绍一下匿名的写法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>static void Main(string[] args)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	GreetingDelegate delegate1 = delegate(string name)</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>		Console.WriteLine(&quot;你好， &quot;+name);</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	delegate1(&quot;伟锋&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这已经比较简单了，不用声明方法，用匿名方法就行了，还有更简单的，拉姆达表达式写法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>static void Main(string[] args)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	GreetingDelegate delegate1 = (m =&amp;gt; {Console.WriteLine(&quot;你好，&quot;+m);});</span></span>
<span class="line"><span>	delegate1(&quot;伟锋&quot;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>简单的写法肯定很多地方都在用，所以知道这种写法，再也不用看到这种东西而傻眼了。</p><p>到这里，想必是对委托有了一定的了解了。未完等续。</p><p> </p><p>参考：</p><p>1、<a href="http://www.cnblogs.com/jimmyzhang/archive/2007/09/23/903360.html" target="_blank" rel="noreferrer">http://www.cnblogs.com/jimmyzhang/archive/2007/09/23/903360.html</a></p>`,39),t=[i];function l(h,g,c,o,r,d){return a(),n("div",null,t)}const E=s(p,[["render",l]]);export{u as __pageData,E as default};
