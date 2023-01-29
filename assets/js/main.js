jQuery( document ).ready(function() {
  jQuery("body").removeClass("client-nojs");
  jQuery("body").addClass("client-js");
  jQuery("body").attr("data-javascript-status", "ready");
});