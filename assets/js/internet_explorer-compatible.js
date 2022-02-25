// IE 浏览器兼容

'use strict'

jQuery( document ).ready(function() {
  /**
   * 检测当前浏览器是否为 IE 浏览器
   * @returns {Boolean}
   * @author  Milk.╮@CDSN
   */
  function isIE() {
    if(!!window.ActiveXObject || "ActiveXObject" in window) {
      return true;
    } else {
      return false;
    }
  }

  if(isIE() === true) {
    /**
     * 在未聚焦到 "跳转至内容" 链接时视觉隐藏其所在的导航栏。
     * 在 IE 以外的浏览器是用 CSS :focus-within 伪类实现的。
     ** @see {@link ../../_sass/minima/_layout.scss}
     */

    // 用元素的 ID 属性捕获元素
    var elmSkipToContentNav = document.getElementById("skip_to_content-nav");
    var elmSkipToContentLink = document.getElementById("skip_to_content-link");

    elmSkipToContentNav.classList.add("sr-only"); // 为导航栏添加 .sr-only 类用于视觉隐藏 (屏幕阅读器依旧可读)

    // 导航栏聚焦/失焦时移除/添加 .sr-only 类
    elmSkipToContentLink.addEventListener("focus", function() {
      elmSkipToContentNav.classList.remove("sr-only");
    }, false);
    elmSkipToContentLink.addEventListener("blur", function() {
      elmSkipToContentNav.classList.add("sr-only");
    }, false);
  }
});