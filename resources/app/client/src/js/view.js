///// Views 模板生成 /////
ViewSize();

Views.Nav = function(){

	//p1
	var P1Html = '<img src="../../uploads/base/'+Base.p1+'" />';
    $("#Nav .p1").html(P1Html);

    //p2
    if(Base.p2 && Base.video){
        var P2 = $("#P2_View").html();
        var View_P2 = _.template(P2);
        var P2_Json = {
            p2:Base.p2,
            video:Base.video
        };
        var Html_P2 = View_P2(P2_Json);
        $("#Nav .p2").html(Html_P2);
    }else{
        $("#Nav .p2").remove();
    }


	Data.base = Base.subject;
	
	var Temp = $("#Swiper_View").html();
	var View_Temp = _.template(Temp);

    var Wrapper = $("#Nav .swiper-wrapper");
	function ARC_img(i){
		var json = {
			pic:Data.base[i].pic,
			id:i+1
		}
		var Html_Temp = View_Temp(json);
        Wrapper.append(Html_Temp);
	}
	
	for(var i = 0;i<Data.base.length;i++){
		ARC_img(i);
	}

    setTimeout(function(){
        var json = { pic:Base.end };
        var Html_Temp = View_Temp(json);
        Wrapper.append(Html_Temp);
    },80);

	setTimeout(function(){
        var swiperNow = 0;
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            longSwipesRatio:0.1,
            onTransitionEnd: function(ev){
                var id = ev.activeIndex;
                var ww = ev.swipeDirection;
                var CC = $("#CC");
                if(id==0 && swiperNow==0 && ww=="prev"){
                    Action.IndexBack();
                }
                swiperNow = id;
                // if(id==1){
                // 	CC.addClass("mov");
                // 	CC.removeClass("mov2");
                // }
                // if(id==2){
                // 	CC.addClass("mov2");
                // 	CC.removeClass("mov3");
                // }
                // if(id==3){
                // 	CC.addClass("mov3");
                // }
            }
        });
	}, 200);

}