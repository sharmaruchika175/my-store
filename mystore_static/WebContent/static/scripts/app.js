
$(document).ready(function() {
	$(".g-close").on("click", function(e) {
		e.preventDefault();
		$(".top-line").hide();
	});
    $("#search-btn").on("click", function(){
    	var data = $(".searchbox").val();
    	var dataJson = {query : data};
    	console.log(dataJson);
        /*$.post("/abc", dataJson,function(a,b,c){
	    	console.log(a);
	    	console.log(b);
	    	console.log(c);
	    });*/	
    });
    $(".content").on("mouseover mouseout", function(){ 
    	$(this).toggleClass("expanded");
    	//$(this).find(".dropdown-list").toggle();
	});
    
    $(".ham-burger-menu").on("mouseover mouseout", function(){ 
    	$(this).toggleClass("expanded");
    	//$(this).find(".dropdown-list").toggle();
	});   
    window.setInterval(runCarousel, 5000);
	    var liWidth = $(".jcarousel ul li:first-child").width();
	    var liCount = $(".jcarousel ul li").length;
	    $(".jcarousel ul").width(liWidth * liCount);
	
	function runCarousel() {
		//var selectedLI = $(".jcarousel li.selected-item");
		//console.log(selectedItem);
		/*if (selectedItem.length <= 0) {
			$(".jcarousel ul li:first-child").addClass("selected-item");
		} else {
			
		}*/
		var carouselUL = $(".jcarousel ul");
		var currentleft = Number.parseInt(carouselUL.css("left"));
		var newLeft = 0;
		var liWidth = $(".jcarousel ul li:first-child").width();
		var liCount = $(".jcarousel ul li").length;
		if (currentleft > - (liWidth * (liCount-1))) {
			newLeft = -(Math.abs(currentleft) + liWidth);
			}
		console.log(currentleft +" : " + liWidth+ ":"+newLeft);
		carouselUL.animate({left: newLeft+"px"});
		//carouselUL.append($(".jcarousel ul li:first-child"))
		//carouselUL.prepend($(".jcarousel ul"));
		
		
	    
	}
});