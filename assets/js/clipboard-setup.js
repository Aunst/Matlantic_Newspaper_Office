function whenDOMReady () {
  var clipboard = new ClipboardJS( '.click_to_copy' );

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

document.addEventListener('DOMContentLoaded', whenDOMReady);

document.addEventListener('pjax:success', whenDOMReady);

document.addEventListener('pjax:send', function() { clipboard.destroy(); });