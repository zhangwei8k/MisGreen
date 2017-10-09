var appearance = $(".appearance");
var appearance_btn = $(".appearance_btn .btn");


appearance_btn.click(function(){
	var i = $(this).data("id");
	openbox(i);
});

function openbox(i){	
	$(i).fadeIn();
	var test=$(i).find(".appearance_text");
	for(var i=0 ;i<test.length;i++)
	{
	    var p=test[i].innerHTML;  
	    if(p==null  || p==""){
	    	$(".appearance .tit").addClass("act");
	    	$(".appearance .img").addClass("act");
	    	test.addClass("act");
		}
	   else{
	    	$(".appearance .tit").removeClass("act");
	    	$(".appearance .img").removeClass("act");
	    	test.removeClass("act");
		}
	}
}


appearance.click(function(){
	$(this).fadeOut()
})
