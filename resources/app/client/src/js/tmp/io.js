Rooms.Index.io = function(){
    socket.on("startHM", function(da , emit){
        Action.Nav(emit);
    });
    socket.on("video1HM", function(da , emit){
        Action.Video(emit);
    });
    socket.on("video2HM", function(da , emit){
        Action.Video2(emit);
    });

    socket.on("reset", function(){
        console.log("io-reset 重启屏幕");
        location.reload();
    });

    socket.on("D3_lock", function(){
        $("#_IO_unable").show();
    });

    socket.on("D3_unlock", function(){
        $("#_IO_unable").hide();
    });

    socket.on("D3_reset", function(){
        console.log("单屏-reset 重启屏幕");
        location.reload();
    });
    ////////水处理

    //首页进入
    IO.on("D3_1_start", function(da , emit){
        $(".lightbox").removeClass("act");
        if(Room.id=="Index"){
            Action.language(2);
            Action.Part1_act(2,emit)
        }else{
            Action.Index(function(){
                Action.language(2);
                Action.Part1_act(2,emit)
            });
        }
    });


    //系统总图
    IO.on("D3_1_sys", function(da, emit){

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);

        Action.Service(emit);

    });

    //三大优势
    IO.on("D3_1_goodnessCls" , function(da , emit){
        if(Room.id!="Index") Action.Goodness_back();
        setTimeout(emit, 500);
    });

    IO.on("D3_1_g2_li", function(da , emit){
        Action.Goodness_msgIn(da.id);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);
        setTimeout(emit, 1000);
    });

    IO.on("D3_1_goodness1", function(da, emit){
        Dom.Goodness.msg2.hide();
        if(Room.id=="Goodness"){
            Action.Goodness_tab(1);
        }else{
            Action.Goodness_page(1);
        }

        setTimeout(emit, 1000);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);
    });

    IO.on("D3_1_goodness2", function(da, emit){
        Dom.Goodness.msg2.hide();
        if(Room.id=="Goodness"){
            Action.Goodness_tab(2);
        }else{
            Action.Goodness_page(2);
        }

        setTimeout(emit, 1000);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);
    });

    IO.on("D3_1_goodness3", function(da, emit){
        Dom.Goodness.msg2.hide();
        if(Room.id=="Goodness"){
            Action.Goodness_tab(3);
        }else{
            Action.Goodness_page(3);
        }

        setTimeout(emit, 1000);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);
    });

    //菜单按钮
    IO.on("D3_1_btn1", function(da , emit){
        Menu.act(1);
        IndexMov1.io_skip();
        Action.Part1_1(emit);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);

    });

    IO.on("D3_1_btn5", function(da, emit){
        Menu.act(5);
        IndexMov1.io_skip();
        Action.Part1_5(emit);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);
    });


    IO.on("D3_1_btn4", function(da, emit){
        Menu.act(4);
        IndexMov1.io_skip();
        Action.Part1_4(emit);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);
    });
    
    IO.on("D3_1_btn7", function(da, emit){
        Menu.act(7);
        IndexMov1.io_skip();
        Action.Part1_7(emit);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);
    });

    //案例内页
    IO.on("D3_1_pro", function(da, emit){
    	
        Action.MapSelectIO(1, da.id);
        setTimeout(emit, 1000);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);

    });
    IO.on("D3_1_pro_openBox", function(da, emit){
        Dom.Part1_4.pic[da.id].click();
        setTimeout(emit, 800);

    });
    IO.on("D3_1_pro_page", function(da, emit){
        Dom.Swiper[da.id].slideTo(da.page);
        setTimeout(emit, 10);

    });
    IO.on("D3_1_pro_closeBox", function(da, emit){
        Dom.Swiper.cls[da.id].click();
        setTimeout(emit, 10);

    });

    //产品内页
    IO.on("D3_1_lightbox_close", function(da, emit){

        $(".appearance").click();
        setTimeout(emit, 800);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);

    });
    IO.on("D3_1_lightbox", function(da, emit){

        $(".appearance").click();
        setTimeout(function(){
            openbox(da.id);
        }, 200);

        setTimeout(emit, 1000);

        if(da.lang=="cn") Action.language(2);
        if(da.lang=="en") Action.language(1);

    });


    IO.on("D3_back", function(da , emit){
        Action.Index(emit);
    });

};