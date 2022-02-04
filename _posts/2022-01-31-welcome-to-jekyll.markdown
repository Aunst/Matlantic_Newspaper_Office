---
layout: post
title:  "欢迎来到 Jekyll!"
date:   2022-01-31 23:04:04 +0800
categories: jekyll update
---
你可以在 `_posts` 文件夹中找到帖子。编辑保存它后重新构建站点, 就可以看到你的更改了。你可以用许多不同的方法重构站点, 但最常用的方法是运行 `jekyll serve`, 它将会启动一个网络服务器, 并自动在站点中文件更新时重新生成站点。

Jekyll 需要用以下的格式命名帖子文件:

`YEAR-MONTH-DAY-标题.MARKUP`

其中 `YEAR` 是四位数字, `MONTH` 和 `DAY` 是两位数字, `MARKUP` 是表示文件所使用格式的文件扩展名。在这之后, 添加需要的 <i>front-matter</i> (帖子前部信息) 。看看这篇文章的源代码，了解一下它是如何工作的。

Jekyll 也为代码段提供了强大的支持:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

查看 [Jekyll 文档][jekyll-docs]以获取更多关于如何充分利用 Jekyll 的信息。所有的 bug 报告和特性请求都可以在 [Jekyll 的 GitHub repo][jekyll-gh] 中提出。如果有问题, 你可以在 [Jekyll Talk][jekyll-talk] 中提问。

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
