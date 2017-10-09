var thistime = 0;
function itemstime(){
	var items = $("#Index .item");
	var str = [0,1,2,3];
	var random = Math.floor(Math.random()*str.length);
	var result = str[random];
	if(thistime != result){
		thistime = result;
		var itemdom = items.eq(result);
		itemdom.addClass("act");
	}
};
function itemstimeout(){
	var items = $("#Index .item");
	var str = [0,1,2,3];
	var random = Math.floor(Math.random()*str.length);
	var result = str[random];
	if(thistime != result){
		thistime = result;
		var itemdom = items.eq(result);
		itemdom.removeClass("act");
	}
};
setInterval("itemstime()",2000);
setInterval("itemstimeout()",1500);

