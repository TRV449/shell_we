$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
        
        if(tab_id === "tab-2"){
            $('ul.tabs li').removeClass('current');
		    $('.tab-content').removeClass('current');
            $('ul.tabs li').removeClass('current2');
		    $('.tab-content').removeClass('current2');
            $(this).addClass('current');
            $("#"+tab_id).addClass('current2');
        }
        else if(tab_id === "tab-1"){
            $('ul.tabs li').removeClass('current2');
		    $('.tab-content').removeClass('current2');
            $('ul.tabs li').removeClass('current');
		    $('.tab-content').removeClass('current');   
            $(this).addClass('current2');
            $("#"+tab_id).addClass('current');
        }
	})

})