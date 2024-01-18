if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeClipboard();
    setDarkmodeSwitch();
    setThemeFAB()
    document.body.classList.add('client-js');
    document.body.classList.remove('client-nojs');
    document.body.setAttribute('data-javascript-status', 'ready');
  });
} else {
  initializeClipboard();
  setDarkmodeSwitch();
  setThemeFAB()
  document.body.classList.add('client-js');
  document.body.classList.remove('client-nojs');
  document.body.setAttribute('data-javascript-status', 'ready');
}
document.addEventListener('pjax:send', () => {
  NProgress.start();
  clipboard.destroy();
});
document.addEventListener('pjax:complete', () => {
  NProgress.done();
});
document.addEventListener('pjax:success', () => {
  initializeClipboard();
});

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

/**
 * @description 初始化剪切板
 */
function initializeClipboard() {
  let clipboard = new ClipboardJS( '.click_to_copy' );

  jQuery( '.click_to_copy' ).attr( 'title', '复制成功!' );
  jQuery( '.click_to_copy' ).tooltip({ trigger: 'manual' });

  clipboard.on( 'success', function ( el ) {
    console.info( 'Action:', el.action );
    console.info( 'Text:', el.text );
    console.info( 'Trigger:', el.trigger );

    el.clearSelection();
    jQuery( el.trigger ).tooltip( 'show' );

    jQuery( el.trigger ).blur( function() {
      jQuery( this ).tooltip( 'hide' );
    });
    jQuery( el.trigger ).mouseleave( function() {
      jQuery( this ).tooltip( 'hide' );
    });
  });

  clipboard.on( 'error', function ( el ) {
    console.error('Action:', el.action);
    console.error('Trigger:', el.trigger);
  });
}

/**
 * @description 设置黑暗模式切换组件
 */
function setDarkmodeSwitch() {
  const lightRadio = document.querySelector('#radio-light-theme');
  const darkRadio = document.querySelector('#radio-dark-theme');
  const blackDarkThemeSwitch = document.querySelector('#radio-darktheme-black');

  lightRadio.addEventListener('change', () => {
    enableTheme('light');
  });
  darkRadio.addEventListener('change', () => {
    enableTheme('dark');
  });
  blackDarkThemeSwitch.addEventListener('change', (event) => {
    if (event.target.checked === true ) {
      setDarkType('black');
    }
    else {
      setDarkType();
    }
  });
}

/**
 * @description 设置主题浮动按钮
 */
function setThemeFAB() {
  const themeFAB = document.querySelector('.fab-theme');
  const themePopup = document.querySelector('.fab-theme-popup');

  themeFAB.addEventListener('click', () => {
    if (themeFAB.getAttribute('aria-pressed') === "true") {
      closePopup(themeFAB, themePopup);
    }
    else {
      openPopup(themeFAB, themePopup);

      let popupCloseButton = document.querySelector('.fab-popup-close');
      popupCloseButton.addEventListener('click', () => {
        closePopup(themeFAB, themePopup);
      });

      document.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
          closePopup(themeFAB, themePopup);
        }
      });
    }
  });

  function openPopup(button, popup) {
    button.setAttribute('aria-pressed', true);
    button.classList.add('active');
    popup.style.display = 'block';

    setTimeout(() => {
      popup.classList.add('open');
    }, 20);
  }

  function closePopup(button, popup) {
    button.setAttribute('aria-pressed', false);
    button.classList.remove('active');
    popup.classList.remove('open');
    popup.style.display = null;
  }
}