# 抹岚报社档案馆
一个记录 RIA Zeroth Minecraft 中抹岚报社发行的所有刊物的的站点。

## 主题
主题修改自 Jekyll 默认的 [Minima](https://github.com/jekyll/minima) 主题, 使用 [Bootstrap 4](https://getbootstrap.com/docs/4.6/) 框架重构 (参考了 [Minima Reboot](https://github.com/aterenin/minima-reboot) 主题) 。现已初步支持黑暗模式。

使用 [Pjax](https://github.com/PaperStrike/Pjax) 来达到不整页刷新的同时加载新页面的效果, 辅以 [NProgress](https://ricostacruz.com/nprogress/) 来指定页面刷新进度。

图标库使用的是 [Material Design Icons](https://materialdesignicons.com/)。

考虑到了平稳退化的需求, 在访问者不能使用 Javascript, 甚至不能使用 CSS 时, 大部分内容依旧可显示, 网站依旧可导航。

支持标签, 主要参考了[这篇文章](https://soyee.me/2018/03/20/jekyll-tags/)。

### 配置
#### 站点导航
站点导航可在 `./_data/site-navigation.yaml` 中配置, 该文件内有详细说明。

#### 标签
在创建标签时, 需要在 `./tag/` 文件夹内有同名的 `.markdown` 文件。文件的头信息需要包含:

```yaml
layout: tagpage
tag: <标签名>
```