$(function(){
	//Viết cho nút
	$('nav ul li a').click(function(event) {
		//console.log('hello');

		//Phát hiện data của nút được click
		var danhmuc = $(this).data('class');		
		//console.log(danhmuc);

		var ten = $(this).text();

		$('section h1').text(ten)
		
		$('.noidung .content ul li').each(function() {
			if($(this).hasClass(danhmuc))
			{
				$(this).fadeIn();
			}	
			else
			{
				$(this).fadeOut();
			}
		});
		return false;
	});	
});  
 