// Pjax 初始化使用的脚本
'use strict'

// 初始化 Pjax
const pjax = new Pjax({
  /* 在跳转页面时需要更新的内容:
   ** 页面标题 (<title>...</title>)
   ** <meta name="description" content="..." />
   ** 页面头部
   ** 页面内容
   ** 页脚 <-- 目前来看似乎不用更新, 但依旧保留
   */
  selectors: [
    'title',
    'meta[name="description"]',
    '.site-header',
    '.page-content',
    '.site-footer'
  ],
});

// 绑定进度条 (NProgress)
document.addEventListener('pjax:send', function() { NProgress.start(); });
document.addEventListener('pjax:complete', function() { NProgress.done(); });