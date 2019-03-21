(function($){
$(document).ready(function(){
	var bool = false;


	$('.menu').on('click', function() {
		if(bool == false){
            $('#cssmenu:hidden').show(3000);
            bool = true;
		}else{
			console.log("a");
            $('#cssmenu').hide(3000);
			bool = false;
		}

	});

	$('#cssmenu li.active').addClass('open').children('ul').show();
		$('#cssmenu li.has-sub>a').on('click', function(){
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp(200);
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown(200);
				element.siblings('li').children('ul').slideUp(200);
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp(200);
			}
		});

	});
})(jQuery);
