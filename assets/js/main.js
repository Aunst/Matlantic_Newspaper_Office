jQuery( document ).ready(function() {
  jQuery("body").removeClass("client-no_javascript");
  jQuery("body").addClass("client-javascript");
  jQuery("body").attr("data-javascript-status", "ready");
});