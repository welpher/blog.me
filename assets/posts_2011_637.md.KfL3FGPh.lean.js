import{_ as t,c as n,o as s,m as e}from"./chunks/framework.I0qYP7JU.js";const b=JSON.parse('{"title":"nginx负载均衡和方向代理","description":"","frontmatter":{"title":"nginx负载均衡和方向代理","tags":["nginx","负载均衡"],"id":637,"author":"welpher.yu","categories":["服务器"],"date":"2011-12-14T22:35:20.000Z"},"headers":[],"relativePath":"posts/2011/637.md","filePath":"posts/2011/637.md"}'),o={name:"posts/2011/637.md"},a=e("p",null,"负载均衡是由多台服务器以对称的方式组成一个服务器集合，媚态服务器都具有等价的堤外，都可以单独对外提供服务而无须其他服务器的辅助。通过某种负载分担技术，将外部发来的清酒军训非配到对阵结构中的某一台服务器上，而接收到请求的付娶妻独立地回应客户的请求。均衡负载能够平均非配客户请求到服务器阵列，藉此快速获取重要数据，解决大量并发访问服务问题。这种群集技术可以用最少的投资获得接近于大型主机的性能。",-1),i=e("p",null,"反向代理是指以代理服务器来接收internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上的得到的结果返回给internet上的请求连接的客户端，此时代理服务器对白就表现为一个服务器。",-1),r=e("p",null,"通常的代理服务器，只用于代理内部网络对internet的链接请求，客户机必须指定代理服务器，并将本来要直接发送到web服务器上的http请求发送到代理服务器中。由于外部网络上的主机并不会配置并使用这个代理服务器，普通代理服务器也呗设计为在internet上搜寻多个不确定的服务器，而不是针对internet上的多个客户机的请求访问某个固定的服务器，因此普通的web代理服务器不支持外部对内部网络的请求。当一个代理服务器能够带来外部网络上的主机访问内部网络时，这种代理服务的方式称谓反向代理服务。此时代理服务器对外就表现为一个web服务器，外部网络就可以简单把他当作一个标准的web服务器而不需要特定的配置。不同之处在于，这个服务器没有保存任何网页的真实数据，所有的静态网页或cig程序，都保存在内部的web服务器上，因此方向代理服务器的攻击并不会使网页信息遭到破坏，这就增强了web服务器的安全性。",-1),c=e("p",null,"方向代理方式和包过来方式或普通代理方式并无冲突，因此走开防火墙设置中同事使用这两种方式，其中反向代理用于外部网络访问内部网络时使用，正向带来或包过滤方式用于拒绝其他外部访问方式并提供内部网络对内部网络的访问能力",-1),_=e("p",null,"------摘自《实战nginx取代apache的高性能web服务器》",-1),p=[a,i,r,c,_];function l(d,h,u,m,f,g){return s(),n("div",null,p)}const x=t(o,[["render",l]]);export{b as __pageData,x as default};