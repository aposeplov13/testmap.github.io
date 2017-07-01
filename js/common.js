$(document).ready(function() {
	if (window.matchMedia('(max-width: 767px)').matches) {
		alert("privet1");	
	}
	
	$(".btnclick").click(function(){
		$(".testclick").toggle("slow");
	});		
	function mediaSize() { 
		if (window.matchMedia('(max-width: 767px)').matches) {
			alert("privet2");	
		}
	};
  mediaSize();
	window.addEventListener('resize', mediaSize, false);  
});

