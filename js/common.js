$(document).ready(function() {

	$(".btnclick").click(function(){
		$(".testclick").toggle("slow");
	});		
		function mediaSize() { 
			if (window.matchMedia('(max-width: 767px)').matches) {
				alert("privet");	
			}

	};
  mediaSize();
	window.addEventListener('resize', mediaSize, false);  
});

