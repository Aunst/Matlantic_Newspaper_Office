'use strict'

const pjax = new Pjax({
  selectors: [
    'title',
    'meta[name="description"]',
    '.site-header',
    '.page-content',
    '.site-footer'
  ],
});

document.addEventListener('pjax:send', function() { NProgress.start(); });
document.addEventListener('pjax:complete', function() { NProgress.done(); });