$(document).ready(function() {
    $('.jqueryToggleBtn').addClass('unselectable');
    $('.jqueryToggleBtn').click(function() {
        $(this).siblings('.jqueryToggleContent').toggle('slow');
    })

	  if ( $('.commentBox textarea').attr('value').length == 0) {
			$('.commentBox textarea').attr('value','comment');
		}

});

$(document).ready(function() {
    $(".smartInput").focus(function() {
        this.value = "";
    }).blur(function() {
        if (!this.value.length) {
            this.value = this.defaultValue;
        }
    });
});