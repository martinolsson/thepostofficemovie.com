$( document ).ready(function() {
    console.log( "document loaded" );
    $('._toggleSpan').click(function() {
        $('._toggleSpan').removeClass('spanCols');
        $(this).toggleClass('spanCols');
    });
});


