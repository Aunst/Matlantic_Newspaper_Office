if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeTheme);
} else {
  initializeTheme();
}

function initializeTheme() {
  addStyleSheet('bootstrap-custom/bootstrap-custom-4.6.1-dark')
  addStyleSheet('minimal-dark');
  addStyleSheet('minimal-black');
  syncTheme();
  syncDarkType();
  listenOSThemeChange();
  enableTheme(
    returnThemeBasedOnLocalStorage() ||
    returnThemeBasedOnOS());
  setDarkType(localStorage.getItem('darkmode-type'));
}

function returnThemeBasedOnLocalStorage() {
  const pref = localStorage.getItem('prefer-theme');
  const lastChanged = localStorage.getItem('prefer-theme-last-change');
  let now = new Date();
  now = now.getTime();
  const minutesPassed = (now - lastChanged) / (1000 * 60);

  if (minutesPassed < 60 && pref === 'light' ) {
    return 'light';
  }
  else if ( minutesPassed < 60 && pref === 'dark' ) {
    return 'dark';
  }
  else {
    return undefined;
  }
}

function returnThemeBasedOnOS() {
  let pref = window.matchMedia('(prefers-color-scheme: dark)')
  if (pref.matches) {
    return 'dark';
  }
  else {
    pref = window.matchMedia('(prefers-color-scheme: light)')
    if (pref.matches) {
      return 'light'
    }
    else {
      return undefined;
    }
  }
}

function listenOSThemeChange() {
  let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

  mediaQueryList.addEventListener('change', (m) => {
    const root = document.body;
    if (m.matches !== true) {
      if (!root.classList.contains('theme-light')) {
        enableTheme('light', true);
      }
    }
    else {
      if (!root.classList.contains('theme-dark')) {
        enableTheme('dark', true);
      }
    }
  })
}

function syncTheme() {
  window.addEventListener('storage', (e) => {
    if (e.key === 'prefer-theme') {
      if (e.newValue === 'light') {
        enableTheme('light');
      }
      else if (e.newValue === 'dark') {
        enableTheme('dark');
      }
    }
  })
}

function syncDarkType() {
  window.addEventListener('storage', (e) => {
    if (e.key === 'darkmode-type') {
      if (e.newValue === 'black') {
        setDarkType('black');
      }
      else {
        setDarkType();
      }
    }
  })
}

function enableTheme(newTheme = 'light', save = true) {
  const root = document.body;
  let otherTheme;
  newTheme === 'light' ? otherTheme = 'dark' : otherTheme = 'light';
  let currentTheme;
  (root.classList.contains('theme-dark')) ? currentTheme = 'dark' : 'light';

  if (localStorage.getItem('darkmode-type') === 'black') {
    if (newTheme === 'light') {
      root.classList.remove('theme-black');
    }
    else {
      root.classList.add('theme-black');
    }
  }

  root.classList.add('theme-' + newTheme);
  root.classList.remove('theme-' + otherTheme);
  root.setAttribute('data-color-scheme', newTheme);

  let radio = document.getElementById('radio-' + otherTheme + '-theme');
  radio.checked = false;

  radio = document.getElementById('radio-' + newTheme + '-theme');
  radio.checked = true;

  if (save) {
    saveToLocalStorage('prefer-theme', newTheme);
  };
}

function setDarkType(type) {
  const root = document.body;
  const checkbox = document.getElementById('radio-darktheme-black');

  if (root.classList.contains('theme-dark')) {
    if (type === 'black') {
      root.classList.add('theme-black');
    } else {
      root.classList.remove('theme-black');
    }
  }

  if (type === 'black') {
    localStorage.setItem('darkmode-type', 'black');
    checkbox.checked = true;
  } else {
    localStorage.removeItem('darkmode-type');
    checkbox.checked = false;
  }
}

function addStyleSheet(src) {
  const head = document.head;
  const landmark = document.querySelector('link[name="main-stylesheet"]');
  let stylesheet = document.createElement('link');
  stylesheet.setAttribute('rel', 'stylesheet');
  stylesheet.setAttribute('href', '/assets/css/' + src + '.css');

  head.insertBefore(stylesheet, landmark);
}

function saveToLocalStorage(key, value) {
  let now = new Date();
  now = now.getTime();
  localStorage.setItem(key, value);
  localStorage.setItem(key + "-last-change", now);
}