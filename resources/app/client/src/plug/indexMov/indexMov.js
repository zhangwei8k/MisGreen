////////菜单模块 plug-IndexMov

//水处理（视频过场，连一个循环视频）
function IndexMov1(id){

    if(!id){
        alert("plug-IndexMov,参数id未设置！");
        return;
    }

    this.id = id+" .indexMov";
    this.m = $(this.id);

    //生长视频
    this.growth = {};
    this.growth.m = $(this.id+" .growth");
    this.growth.video = {};
    this.growth.video.cn = new Media(this.id+" .growth video.cn");
    this.growth.video.en = new Media(this.id+" .growth video.en");
    this.growth.hand = "";

    //循环视频
    this.cycle = {};
    this.cycle.m = $(this.id+" .cycle");
    this.cycle.video = {};
    this.cycle.video.cn = new Media(this.id+" .cycle video.cn");
    this.cycle.video.en = new Media(this.id+" .cycle video.en");
    this.cycle.hand = "";

    //跳过
    this.skip = $(this.id+" .skip");

    var _this = this;
    this.skip.tap(function(){
        _this.skip.hide();
        _this.step2();
    });
}

//过场动画开始前
IndexMov1.prototype.step1 = function(){

    var _this = this;

    var growth;
    if(Dom.Data.language==1){
        growth = this.growth.video.cn;
    }
    if(Dom.Data.language==2){
        growth = this.growth.video.en;
    }


    this.growth.m.show();
    this.growth.video.cn.play(0);
    this.growth.video.en.play(0);

    growth.end(function(){
        _this.step3();
    });

    this.cycle.m.hide();
    this.cycle.video.cn.play(0);
    this.cycle.video.cn.pause(0);
    this.cycle.video.en.play(0);
    this.cycle.video.en.pause(0);

    this.skip.show();
};
//跳过
IndexMov1.prototype.step2 = function(){

    var _this = this;
    this.growth.m.fadeOut("normal");
    this.cycle.m.fadeIn("normal", function(){
        _this.step3();
        Menu.mov();
    });

};
//过场动画完成且初始化
IndexMov1.prototype.step3 = function(){

    this.growth.m.hide();

    this.cycle.m.show();
    this.cycle.video.cn.play();
    this.cycle.video.en.play();

    this.growth.video.cn.play(0);
    this.growth.video.cn.pause(0);
    this.growth.video.en.play(0);
    this.growth.video.en.pause(0);

    this.skip.hide();

};

IndexMov1.prototype.mov = function(time){

    var growth;
    if(Dom.Data.language==1){
        growth = this.growth.video.cn;
    }
    if(Dom.Data.language==2){
        growth = this.growth.video.en;
    }

    this.step1();
    growth.playAndFn(time , function(){
        Menu.mov();
    });

};

IndexMov1.prototype.reset = function(){

    Menu.hide();

    this.growth.m.hide();
    this.growth.video.cn.play(0);
    this.growth.video.cn.pause(0);
    this.growth.video.en.play(0);
    this.growth.video.en.pause(0);

    this.cycle.m.hide();
    this.cycle.video.cn.play();
    this.cycle.video.cn.pause(0);
    this.cycle.video.en.play();
    this.cycle.video.en.pause(0);

    this.skip.hide();
};
IndexMov1.prototype.come_before = function(){
    this.growth.m.hide();
    this.cycle.m.show();
    this.skip.hide();
};
IndexMov1.prototype.io_skip = function(){
    Menu.hide();
    this.growth.m.hide();
    this.cycle.m.hide();
    this.step3();
    Menu.show();
};