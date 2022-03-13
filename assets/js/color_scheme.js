'use strict'

jQuery( document ).ready(function() {
  let queryColorSchemaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  let defaultPreferColorScheme;

  if (queryColorSchemaQueryList.matches) {
    defaultPreferColorScheme = "dark";
  } else {
    defaultPreferColorScheme = "light";
  }

  let switchedColorScheme = defaultPreferColorScheme;
  jQuery("body").attr("data-color-schema", defaultPreferColorScheme);

  jQuery("#toggle_color_scheme").click(function() {

    if (switchedColorScheme === "light") {
      switchedColorScheme = "dark";
    } else {
      switchedColorScheme = "light";
    }

    jQuery("body").attr("data-color-schema", switchedColorScheme);
  });
});