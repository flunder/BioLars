
$(document).ready(function() {
  	$('.jqueryToggleBtn').addClass('unselectable');
		$('.jqueryToggleBtn').click(function(){
			$(this).siblings('.jqueryToggleContent').toggle('slow');
		})
});