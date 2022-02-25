---
---
/* 上面那两行, 六根连字符是初始化 Jekyll Liquid 模板语言所必需的, 请忽略掉。
 * 或者你在写脚本时暂时删掉它, 改完后再加上? */

/* CSS prefer-color-schema 回调
 * 站点使用的 CSS prefer-color-schema 媒体查询的浏览器支持很可怜,
 * 在不支持这个的浏览器里默认加载明亮模式的 CSS 样式表 */

'use strict'

document.addEventListener("DOMContentLoaded", function() {
  if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
    document.documentElement.style.display = 'none';
    document.head.insertAdjacentHTML(
      'beforeend',
      '<link rel="stylesheet" href="{{ "/assets/css/syntax-highlight/syntax-highlight-light.css" | relative_url }}" onload="document.documentElement.style.display = \'\'">'
      // {{ "/assets/css/syntax-highlight/syntax-highlight-light.css" | relative_url }} 是 Jekyll 的扩展 Liquid 模板语言, 用于生成链接的相对链接
    );
  }
});