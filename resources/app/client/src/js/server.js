Url.fs  = "resources/";//fs的时候的相对地址
Url.upload = "../../uploads/";
Url.server = "http://192.168.0.3:888/";

var Progress = function(num){
    Log("$$$$【Server.loader】目前完成："+num+"%");
    if(num==100) num=99;
    Dom._loader.html("正在更新资料中，已完成："+num+"%");
};

Download.Page = function(){

    var serv = Url.server+"/uploads/product/";
    var local = Url.fs+"uploads/base/";

    Server.save(serv , local, Base.p1, Base.p1_size);
    Server.save(serv , local, Base.p2, Base.p2_size);
    Server.save(serv , local, Base.video, Base.video_size);
    Server.save(serv , local, Base.end, Base.end_size);

    for(var i in Base.subject){
        Server.save(serv , local, Base.subject[i].pic, Base.subject[i].pic_size);
    }
};