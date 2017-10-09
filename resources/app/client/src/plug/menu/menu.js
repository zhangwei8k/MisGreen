////////菜单模块 plug_menu
///API
/*
方法
Menu.ini 初始化
Menu.style1 ~ 4 样式1~4
Menu.mov 以动画出现
Menu.show 直接显示
Menu.hide 隐藏
属性
$Menu.btn1 = $(".Menu .btn1 .btnClick");
$Menu.btn2 = $(".Menu .btn2 .btnClick");
$Menu.btn3 = $(".Menu .btn3 .btnClick");
$Menu.btn4 = $(".Menu .btn4 .btnClick");
$Menu.btn5 = $(".Menu .btn5 .btnClick");
$Menu.btn6 = $(".Menu .btn6 .btnClick");
$Menu.btn_home = $(".Menu .btn_home");
$Menu.btn_lang = $(".Menu .btn_lang");
$Menu.btn_gd1 = $(".Menu .btn_goodness1");
$Menu.btn_gd2 = $(".Menu .btn_goodness2");
$Menu.btn_gd3 = $(".Menu .btn_goodness3");
*/

///定义
//按钮的光
//主程序
var Menu = {};
///Dom
var $Menu = {};
$Menu.m = $(".Menu");
$Menu.item = $(".Menu .item");
$Menu.btns = $(".Menu .btn");
$Menu.btn1 = $(".Menu .btn1 .btnClick");
$Menu.btn2 = $(".Menu .btn2 .btnClick");
$Menu.btn3 = $(".Menu .btn3 .btnClick");
$Menu.btn4 = $(".Menu .btn4 .btnClick");
$Menu.btn5 = $(".Menu .btn5 .btnClick");
$Menu.btn6 = $(".Menu .btn6 .btnClick");
$Menu.btn7 = $(".Menu .btn7 .btnClick");
$Menu.btn_home = $(".Menu .btn_home");
$Menu.btn_lang = $(".Menu .btn_lang");
$Menu.btn_gd1 = $(".Menu .btn_goodness1");
$Menu.btn_gd2 = $(".Menu .btn_goodness2");
$Menu.btn_gd3 = $(".Menu .btn_goodness3");

///动作
//初始化
Menu.ini = function(){

    canvas_loads([{src:"plug/menu/img/light.png" ,  id:"light"}],{
            Progress: function(ev){
                var i = parseInt(ev.progress*100);
                $("#Loader .word").html("资料准备中:"+i+"%");
            },
            Complete: function(){

                $Menu.light1 = new Canvas("menu_light1");
                $Menu.light2 = new Canvas("menu_light2");
                $Menu.light3 = new Canvas("menu_light3");
                $Menu.light4 = new Canvas("menu_light4");
                $Menu.light5 = new Canvas("menu_light5");
                $Menu.light6 = new Canvas("menu_light6");
                $Menu.light7 = new Canvas("menu_light7");

                var backi = [37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];

                $Menu.light1.drawSprite("stage", "btn1", {
                    json:[205, 61, 0, -1],
                    mov:{
                        "ini":[0,37, "back"],
                        "back":{
                            frames: backi,
                            next:"ini"
                        }
                    }
                }, [canvas_loaded["light"]]);

                $Menu.light2.drawSprite("stage", "btn2", {
                    json:[205, 61, 0, -1],
                    mov:{
                        "ini":[0,37, "back"],
                        "back":{
                            frames: backi,
                            next:"ini"
                        }
                    }
                }, [canvas_loaded["light"]]);

                $Menu.light3.drawSprite("stage", "btn3", {
                    json:[205, 61, 0, -1],
                    mov:{
                        "ini":[0,37, "back"],
                        "back":{
                            frames: backi,
                            next:"ini"
                        }
                    }
                }, [canvas_loaded["light"]]);

                $Menu.light4.drawSprite("stage", "btn4", {
                    json:[205, 61, 0, -1],
                    mov:{
                        "ini":[0,37, "back"],
                        "back":{
                            frames: backi,
                            next:"ini"
                        }
                    }
                }, [canvas_loaded["light"]]);

                $Menu.light5.drawSprite("stage", "btn5", {
                    json:[205, 61, 0, -1],
                    mov:{
                        "ini":[0,37, "back"],
                        "back":{
                            frames: backi,
                            next:"ini"
                        }
                    }
                }, [canvas_loaded["light"]]);

                $Menu.light6.drawSprite("stage", "btn6", {
                    json:[205, 61, 0, -1],
                    mov:{
                        "ini":[0,37, "back"],
                        "back":{
                            frames: backi,
                            next:"ini"
                        }
                    }
                }, [canvas_loaded["light"]]);

                $Menu.light7.drawSprite("stage", "btn7", {
                    json:[205, 61, 0, -1],
                    mov:{
                        "ini":[0,37, "back"],
                        "back":{
                            frames: backi,
                            next:"ini"
                        }
                    }
                }, [canvas_loaded["light"]]);

                //开启灯光
                $Menu.light1.run(25);
                $Menu.light2.run(25);
                $Menu.light3.run(25);
                $Menu.light4.run(25);
                $Menu.light5.run(25);
                $Menu.light6.run(25);
                $Menu.light7.run(25);

                Menu.act_ini();
                Menu.style1();
            }
        }
    );

};

Menu.act_ini = function(){

    $Menu.btn1.tap(function(){
        $Menu.btns.removeClass("act");
        $Menu.btns.eq(0).addClass("act");
    });
    $Menu.btn7.tap(function(){
        $Menu.btns.removeClass("act");
        $Menu.btns.eq(1).addClass("act");
    });
    $Menu.btn5.tap(function(){
        $Menu.btns.removeClass("act");
        $Menu.btns.eq(2).addClass("act");
    });
    $Menu.btn2.tap(function(){
        $Menu.btns.removeClass("act");
        $Menu.btns.eq(3).addClass("act");
    });
    $Menu.btn3.tap(function(){
        $Menu.btns.removeClass("act");
        $Menu.btns.eq(4).addClass("act");
    });
    $Menu.btn4.tap(function(){
        $Menu.btns.removeClass("act");
        $Menu.btns.eq(5).addClass("act");
    });
    $Menu.btn6.tap(function(){
        $Menu.btns.removeClass("act");
        $Menu.btns.eq(6).addClass("act");
    });

};


//三个按钮
Menu.style1 = function(){

    $Menu.btns.removeClass("btnShow act");
    Menu.styleClsSeat();

    $Menu.btns.eq(0).addClass("btnShow act seat2");
    $Menu.btns.eq(2).addClass("btnShow seat3");
    $Menu.btns.eq(5).addClass("btnShow seat4");


};
//四个按钮
Menu.style2 = function(){

    $Menu.btns.removeClass("btnShow act");
    Menu.styleClsSeat();

    $Menu.btns.eq(0).addClass("btnShow act seat1");
    $Menu.btns.eq(3).addClass("btnShow seat2");
    $Menu.btns.eq(4).addClass("btnShow seat3");
    $Menu.btns.eq(5).addClass("btnShow seat4");

};
//两个按钮
Menu.style3 = function(){

    $Menu.btns.removeClass("btnShow act");
    Menu.styleClsSeat();

    $Menu.btns.eq(0).addClass("btnShow act seat3");
    $Menu.btns.eq(2).addClass("btnShow seat4");

};
//三个按钮（操作演示）
Menu.style4 = function(){

    $Menu.btns.removeClass("btnShow act");
    Menu.styleClsSeat();

    $Menu.btns.eq(0).addClass("btnShow act seat2");
    $Menu.btns.eq(2).addClass("btnShow seat3");
    $Menu.btns.eq(6).addClass("btnShow seat4");

};
//新数字化电厂菜单
Menu.style5 = function(){

    $Menu.btns.removeClass("btnShow act");
    Menu.styleClsSeat();

    $Menu.btns.eq(0).addClass("btnShow act seat1");
    $Menu.btns.eq(1).addClass("btnShow seat2");
    $Menu.btns.eq(2).addClass("btnShow seat3");
    $Menu.btns.eq(5).addClass("btnShow seat4");
};
//样式清理
Menu.styleClsSeat = function(){
    for(var i=1; i<=7; i++){
        $Menu.item.eq(i).removeClass("seat1");
        $Menu.item.eq(i).removeClass("seat2");
        $Menu.item.eq(i).removeClass("seat3");
        $Menu.item.eq(i).removeClass("seat4");
    }
};

//菜单动画出场
Menu.mov = function(){

    $Menu.item.hide();
    $Menu.m.show();

    var btns = $(".Menu .item.btnShow");
    var wait = 0;
    btns.each(function(){
        wait+=100;
        cc.mov({id:$(this), mov:"fadeInUp", wait:wait});
    });

    wait+=100;
    cc.mov({id:$Menu.item.eq(8), mov:"fadeInUp", wait:wait});//home
    wait+=100;
    cc.mov({id:$Menu.item.eq(9), mov:"fadeInUp", wait:wait});//lang

    cc.mov({id:$Menu.item.eq(0), mov:"fadeInUp"});//三大优势
    cc.mov({id:$Menu.item.eq(10), mov:"fadeInUp"});//三大优势按钮

};

//菜单直接显示
Menu.show = function(){
    $Menu.m.show();
};

//菜单隐藏
Menu.hide = function(){
    $Menu.m.hide();
};


//IO菜单选择
Menu.act = function(i){
    var j;
    if(i==1) j = 0;
   	if(i==7) j = 1;
   	if(i==5) j = 2;
   	if(i==4) j = 5;
    if(i==2) j = 4;
    if(i==3) j = 3; 
    if(i==6) j = 6;
    $Menu.btns.removeClass("act");
    $Menu.btns.eq(j).addClass("act");
};
