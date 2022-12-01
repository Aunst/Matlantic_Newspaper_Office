---
layout: page
title: 抹岚报社档案馆维护提示
permalink: /website_point/
---

**本文仍在编写中**

档案馆大概需要这样的维护提示, 所以我就写了个。

## 通识
* 本网站使用的框架是 [Jekyll](https://jekyllrb.com/), 网页都是由这个框架生成的。
* 最新版 Jekyll 是 Jekyll 4.2.2。
* GitHub Pages 的 Jekyll 版本是 3.9.2。
* 档案馆托管在 GitHub Pages 中, GitHub 仓库在 [{{ site.github_repository }}](https://github.com/{{ site.github_repository }})。

## 分支
仓库有两个分支, 分别是 main (主分支) 和 gh-pages (GitHub Pages 显示的分支)。两个分支的主要区别在: main 分支适用于最新版 Jekyll, gh-pages 分支适用于 GitHub Pages。

应始终在 main 分支更改内容 (帖子等), 然后将其合并到 gh-pages 分支, 注意不能反着合并, 否则主分支的配置文件会**坏掉**。发现任何问题都先切到 main 分支, 修好后合并到 gh-pages 分支, 除非这个问题只会出现在 gh-pages 分支。

两个分支的内容没差别, 主要区别在站点配置文件 (`_config.yml`) 和内部链接格式。
* 因为 main 分支在本地构建、显示, 配置中的 `url` 和 `base_url` 都是空的, 而 gh-pages 的这两个配置匹配档案馆 GitHub Pages 的链接 {% raw %}( `url: "https://aunst.github.io"`; `baseurl: "/Matlantic_Newspaper_Office"`)。
* main 分支的内部链接格式是 `[显示文本]({% link <页面> %})` 或 `[显示文本]({% post_url <帖子> %})`, 而 gh-pages 分支的格式是 `[显示文本]({{ site.baseurl }}{% link <页面> %})`, 在链接前需要加 `{{ site.baseurl }}`, 可对比两分支内的 tag 文件 (`tag/xxx.markdown`)。合并时需要在 gh-pages 分支里的链接里添加 `{{ site.baseurl }}`。{% endraw %}可参阅 Jekyll 官方的[版本更新提示](https://jekyllrb.com/docs/upgrading/3-to-4/)。

## 文件名
如果没进行额外设置, 文件名会成为页面链接中的一部分, 比如帖子 `2022-09-17-Example.markdown` 的链接是 `https://aunst.github.io/Matlantic_Newspaper_Office/2022/09/17/Example.html`。

一般要避免出现除拉丁字母、阿拉伯数字、下划线和连字符之外的字符。

但软件应该可以处理汉字之类的字符。

### 帖子
格式是 `年-月-日-帖名.markdown`, 比如 `2022-09-17-Example.markdown`。

《莉亚晚报》的帖名格式是 `RIA_Nightly-期号`, 比如 `RIA_Nightly-20826`。

《方圆》的帖名格式是 `Around-年-月`, 比如 `Around-2022-05`。如果该期是合刊, 格式是 `Around-年-起始月-终止月`, 如 `Around-2022-03-04`。PDF 文件命名方式也应该是这样, 即 `Around-2022-05.pdf`、`Around-2022-03-04.pdf`。

## 文件
一般文件应放置于 `assets` 文件夹内。图像啥的放 `assets/images`, PDF 放 `assets/pdf`。

<i>或许之后把 PDF 文件夹细分下?</i>