///////////////////////////////// Render /////////////////////////////////
//var DomName = new Render("#id");
//DomName.come_before = function(){};
//DomName.come();

function Renders(id){
    this.version = "1.1.0";
    this.version_update = "2016-3-28";

    (typeof id=='string') ? this.dom = $(id) : this.dom = id;

    this.come_before;
    this.coming;
    this.come_after;
    this.go_before;
    this.going;
    this.go_after;
}

Renders.prototype.come = function(mov , key){
    var dom = this.dom;
    var _this = this;

    var movCls = dom.attr("data-render");
    if(movCls) dom.removeClass(movCls);

    if(this.come_before){
        this.come_before(function(){
            $render_run();
        }, dom, key);
    }else  $render_run();

    function $render_run(){
        if(_this.coming) _this.coming(dom, key);
        if(mov){
            dom.addClass(mov).attr("data-render" , mov).one(AnimationEndName, function(){
                if(_this.come_after) _this.come_after(dom, key);
            })
        }else if(_this.come_after) _this.come_after(dom, key);

    }
};

Renders.prototype.go = function(mov , key){
    var dom = this.dom;
    var _this = this;

    var movCls = dom.attr("data-render");
    if(movCls) dom.removeClass(movCls);

    if(this.go_before){
        this.go_before(function(){
            $render_run();
        }, dom, key);
    }else  $render_run();

    function $render_run(){
        if(_this.going) _this.going(dom, key);
        if(mov){
            dom.addClass(mov).attr("data-render" , mov).one(AnimationEndName, function(){
                if(_this.go_after) _this.go_after(dom, key);
            })
        }else if(_this.go_after) _this.go_after(dom, key);

    }

};


////Goodness
Rooms.Goodness = {};
Rooms.Goodness.dom = function(){
    Dom.Goodness = {};
    Dom.Goodness.main1 = {};
    Dom.Goodness.main1.box1 = $("#Goodness .main1 .box1");
    Dom.Goodness.main1.box2 = $("#Goodness .main1 .box2");
    Dom.Goodness.main1.box3 = $("#Goodness .main1 .box3");
    Dom.Goodness.main1.box4 = $("#Goodness .main1 .box4");

    Dom.Goodness.main2 = {};
    Dom.Goodness.main2.box1 = $("#Goodness .main2 .box1");
    Dom.Goodness.main2.box2 = $("#Goodness .main2 .box2");
    Dom.Goodness.main2.box3 = $("#Goodness .main2 .box3");
    Dom.Goodness.main2.box4 = $("#Goodness .main2 .box4");

    Dom.Goodness.main3 = {};
    Dom.Goodness.main3.video = $("#Goodness .main3 video");
    Dom.Goodness.main3_video = new Media("#Goodness .main3 video");

    Dom.Goodness.mainbox = $("#Goodness .main");
    Dom.Goodness.mainbox.hide();
    Dom.Goodness.mainbox1 = $("#Goodness .main1");
    Dom.Goodness.mainbox2 = $("#Goodness .main2");
    Dom.Goodness.mainbox3 = $("#Goodness .main3");

    Dom.Goodness.nav1 = $("#Goodness .nav1");
    Dom.Goodness.nav2 = $("#Goodness .nav2");
    Dom.Goodness.nav3 = $("#Goodness .nav3");

    Dom.Goodness.btn1 = $(".goodness1");
    Dom.Goodness.btn2 = $(".goodness2");
    Dom.Goodness.btn3 = $(".goodness3");

    Dom.Goodness.back = $(".Goodness_ctrl .back");
    Dom.Goodness.home = $(".Goodness_ctrl .home");
    Dom.Goodness.en_b = $(".Goodness_ctrl .en_b");
    Dom.Goodness.cn_b = $(".Goodness_ctrl .cn_b");

    Dom.Goodness.msg2 = $(".Goodness_msg.msg2");

    Dom.Data.goodness = 1;

};

Rooms.Goodness.act = function(){
    Dom.Goodness.nav1.click(function(){
        Action.Goodness_tab(1);
    });
    Dom.Goodness.nav2.click(function(){
        Action.Goodness_tab(2);
    });
    Dom.Goodness.nav3.click(function(){
        Action.Goodness_tab(3);
    });

    Dom.Goodness.btn1.click(function(){
        Action.Goodness_page(1);
    });
    Dom.Goodness.btn2.click(function(){
        Action.Goodness_page(2);
    });
    Dom.Goodness.btn3.click(function(){
        Action.Goodness_page(3);
    });

    Dom.Goodness.back.click(function(){
        Action.Goodness_back();
    });

    Dom.Goodness.home.click(function(){
        Action.Goodness_home();
    });

    Dom.Goodness.en_b.click(function(){
        Action.language(1);
    });
    Dom.Goodness.cn_b.click(function(){
        Action.language(2);
    });

    Dom.Goodness.main2.box1.click(function(){
        Action.Goodness_msgIn(1);
    });
    $(".Goodness_msg.msg2 .box1").click(function(){
        Action.Goodness_msgOut(1);
    });

    Dom.Goodness.main2.box2.click(function(){
        Action.Goodness_msgIn(2);
    });
    $(".Goodness_msg.msg2 .box2").click(function(){
        Action.Goodness_msgOut(2);
    });

    Dom.Goodness.main2.box3.click(function(){
        Action.Goodness_msgIn(3);
    });
    $(".Goodness_msg.msg2 .box3").click(function(){
        Action.Goodness_msgOut(3);
    });

    Dom.Goodness.main2.box4.click(function(){
        Action.Goodness_msgIn(4);
    });
    $(".Goodness_msg.msg2 .box4").click(function(){
        Action.Goodness_msgOut(4);
    });

};

Rooms.Goodness.come_before = function(next){
    Dom.Goodness.msg2.hide();
    cc.cls(Dom.Goodness.mainbox);
    if(next) next();
};
Rooms.Goodness.go_before = function(next){
    $(".Goodness_msg").hide();
    if(next) next();
};

Render = {};
Render.Goodness = {};
Render.Goodness.main1 = new Renders("#Goodness .main1");
Render.Goodness.main1.come_before = function(next , dom){
    dom.show();
    cc.cls(dom);

    var doms = Dom.Goodness.main1;
    for(var i in doms){
        doms[i].hide();
    }
    setTimeout(next, 100);
};
Render.Goodness.main1.coming = function(){

    var doms = Dom.Goodness.main1;
    var num = 0;
    for(var i in doms){
        num++;
        cc.mov({id:doms[i] , mov:"fadeInRight", wait:130*num});
    }
};
Render.Goodness.main1.going = function(){
    cc.mov({id:Dom.Goodness.mainbox1 , mov:"fadeOutLeft",hide:true});
};


Render.Goodness.main2 = new Renders("#Goodness .main2");
Render.Goodness.main2.come_before = function(next , dom){
    dom.show();
    cc.cls(dom);
    var doms = Dom.Goodness.main2;
    for(var i in doms){
        doms[i].hide();
    }

    setTimeout(next, 100);
};
Render.Goodness.main2.coming = function(){
    var doms = Dom.Goodness.main2;
    var num = 0;
    for(var i in doms){
        num++;
        cc.mov({id:doms[i] , mov:"fadeInRight", wait:130*num});
    }
};
Render.Goodness.main2.going = function(){
    cc.mov({id:Dom.Goodness.mainbox2 , mov:"fadeOutLeft",hide:true});
};

Render.Goodness.main3 = new Renders("#Goodness .main3");
Render.Goodness.main3.come_before = function(next , dom){
    dom.show();
    cc.cls(dom);
    var doms = Dom.Goodness.main3;
    for(var i in doms){
        doms[i].hide();
    }

    setTimeout(next, 100);
};
Render.Goodness.main3.coming = function(){
    Dom.Goodness.main3.video.show();
    Dom.Goodness.main3_video.play(0);
};
Render.Goodness.main3.going = function(){
    Dom.Goodness.main3.video.hide();
    Dom.Goodness.main3_video.pause(0);
};

//Goodness
Action.Goodness_tab = function(i){

    var old = Dom.Data.goodness;
    Dom.Data.goodness = i;

    Dom.Goodness.main3.video.hide();
    if(old==i){
        Dom.Goodness.mainbox.hide();
        Dom.Goodness["mainbox"+i].show();
    }else{
        Render.Goodness["main"+old].go();
        Render.Goodness["main"+i].come();
    }
    if(i == 3){
        Dom.Goodness.main3.video.show();
        Dom.Goodness.main3_video.play(0);
    }

    $("#Goodness .nav").removeClass("act");
    Dom.Goodness["nav"+i].addClass("act");

    $("#Goodness .blueTop").addClass("mov");
    $("#Goodness .blueTop").removeClass("act1");
    $("#Goodness .blueTop").removeClass("act2");
    $("#Goodness .blueTop").removeClass("act3");
    $("#Goodness .blueTop").addClass("act"+i);

};
Action.Goodness_page = function(i){
    if(!i) return;
    Dom.Data.goodness = i;

    var room;
    if(Room.id==""){

    }else room = Room.id;

    Dom.Data.goodness_back_id = Room.id;
    Dom.Data.goodness_back_room = room;

    $("#Menu").hide();
    $("#Goodness .blueTop").addClass("act"+i);
    Room.ppt({id:[Room.id, "Goodness"] , mov:["fadeOut" , "fadeIn"], room:[room,""]});
    Action.Goodness_tab(i);
};
Action.Goodness_back = function(){
    $("#Menu").show();
    Dom.Goodness.main3.video.hide();
    Dom.Goodness.main3_video.pause(0);
    Room.ppt({id:[Room.id, Dom.Data.goodness_back_id] , mov:["fadeOut" , "fadeIn"], room:["",Dom.Data.goodness_back_room]});
};
Action.Goodness_home = function(){
    Dom.Goodness.main3.video.hide();
    Dom.Goodness.main3_video.pause(0);
    Room.ppt({id:[Room.id, "Index"] , mov:["fadeOut" , "fadeIn"]});
    $(".Menu").hide();
};

Action.Goodness_msgIn = function(i){
    Dom.Goodness.msg2.show();
    $(".Goodness_msg.msg2 .box").hide();
    $(".Goodness_msg.msg2 .box"+i).show();
    cc.mov({id:".Goodness_msg.msg2 .box"+i , mov:"Gbox"+i+"_in"});
};
Action.Goodness_msgOut = function(i){
    cc.mov({id:".Goodness_msg.msg2 .box"+i , mov:"Gbox"+i+"_out"}, function(){
        Dom.Goodness.msg2.hide();
    })
};