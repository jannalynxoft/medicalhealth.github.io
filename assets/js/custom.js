/**************PRE LOADER*************/
$(window).on('load',function() {
    "use strict";
   $('.page-loader-wrapper').fadeOut('slow');
})
/**************COUNTER*************/
$(document).ready(function(){
function count($this) {
		  //Counter
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */

        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 50);
        }
    }
$(".stat-count").each(function() {
	$(this).data('count', parseInt($(this).html(), 10));
	$(this).html('0');
	count($(this));
});
$(".getaquote a").click(function (e) {
	e.preventDefault();
		$("body,html").animate({
			scrollTop : $('#get_quote').offset().top
		}, 500);
		return false
	});
});
