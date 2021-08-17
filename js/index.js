
//центрирует маржинами после запроса на доступную ширину экрана
$( ".main-container" ).css( "margin-left", function( marginLeft ) {
    const availableScreenWidth = window.screen.availWidth
    return marginLeft = availableScreenWidth - 1200;
  });
//передвигает маржинами после запроса на доступную высоту экрана
$( ".trailer" ).css( "margin-top", function( marginTop) {
    const availableScreenHeight = window.screen.availHeight
    return marginTop = availableScreenHeight - 100;
  });

  
	

$( ".trailer__poster-block" ).click(function() {
  alert( "сасай жопу" );
});