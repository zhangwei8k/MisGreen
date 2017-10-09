///////////////////////////////////// Room ///////////////////////////////////////////

////房间规范
// (Room)go房间离开，come房间进来，ppt同步离开和进来
// (Room)hide暂时隐藏，会关闭run程序（stop程序）; show开始显示，会运行run程序
// (Rooms)come_before:进来前，coming：进来时，come_after:进来后；go_before：离开前，going：离开时,go_after：离开后;
// (Rooms)ppt同步后的循序 1.come_before , 2.go_before , 3.going , 4.coming , 5.come_after , 6.go_after
// (Rooms)run运行的程序，stop停止的程序
// (Rooms)act点击等事件，io事件


///////////////////////////////////// rooms ///////////////////////////////////////////

////Index
Rooms.Index = {};
Rooms.Index.dom = ()=>{
    Dom.Index = {};
    Dom.Index.bg = $("#Index .bg");
    Dom.Index.lines = $("#Index .lines");
    Dom.Index.index_text = $("#Index .index_text");
    Dom.Index.logo = $("#Index .logo");
    Dom.Index.logo2 = $("#Index .logo2");
    Dom.Index.foot = $("#Index .foot");
};
Rooms.Index.act = ()=>{
    $("#Index").click(Action.Nav);
};
Rooms.Index.io = ()=>{
};
Rooms.Index.come_before = (next)=>{
//  socket.emit("__setUnable", "screen", 1);
    if(next) next();
};
Rooms.Index.come_after = (next)=>{
	Dom.Index.bg.addClass("act");
	Dom.Index.lines.addClass("act");
	Dom.Index.index_text.addClass("act");
	Dom.Index.logo.addClass("act"); 
	Dom.Index.logo2.addClass("act"); 
	Dom.Index.foot.addClass("act");
	setTimeout(function tim(){
		$("#CC").removeClass("act");
	},2000)
	
	
	if(next) next();
};
Rooms.Index.go_before = (next)=>{	
	Dom.Index.bg.removeClass("act");
	Dom.Index.lines.removeClass("act");
	Dom.Index.index_text.removeClass("act");
	Dom.Index.logo.removeClass("act"); 
	Dom.Index.logo2.removeClass("act");
	Dom.Index.foot.removeClass("act"); 
	if(next) next();
};

////Nav
Rooms.Nav = {};
Rooms.Nav.dom = ()=>{
   Dom.Nav = {};
   Dom.Nav.texts = $("#Nav .index_text");
   Dom.Nav.bg = $("#Nav .bg");
   Dom.Nav.sos = $("#Nav .sos");
   Dom.Nav.main = $("#Nav .text");
   Dom.Nav.foot = $("#Nav .foot");
   Dom.Nav.back = $("#Nav .back");

   Dom.Nav.Vbtn = $(".Vbtn");
   Dom.Nav.video = new Media(".video video");
   Dom.Nav.Vbox = $(".video");
};
Rooms.Nav.act = ()=>{
	Dom.Nav.back.click(function(){
		Action.Index();
	})

	Dom.Nav.Vbox.click(function(){
		Dom.Nav.Vbox.hide();
		Dom.Nav.video.stop(0);
	})

	Dom.Nav.Vbtn.click(function(){
		Dom.Nav.Vbox.show();
		Dom.Nav.video.play(0);
	})
	Dom.Nav.video.end(function(){
		Dom.Nav.Vbox.hide();
		Dom.Nav.video.stop(0);
	})
};
Rooms.Nav.io = ()=>{

};
Rooms.Nav.come_after = (next)=>{
	Dom.Nav.main.addClass("act"); 
	Dom.Nav.foot.addClass("act");
	Dom.Nav.sos.addClass("act");
	Dom.Nav.bg.addClass("act");
	Dom.Nav.texts.addClass("act");
	if(next) next();
};
Rooms.Nav.go_before = (next)=>{	
	Dom.Nav.main.removeClass("act"); 
	Dom.Nav.foot.removeClass("act");
	Dom.Nav.sos.removeClass("act");
	Dom.Nav.bg.removeClass("act");
	Dom.Nav.texts.removeClass("act");
	if(next) next();
};