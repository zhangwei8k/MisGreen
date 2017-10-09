///////////////////////////////////// Action ///////////////////////////////////////////
//run 启动入口
Action.run = (page, wait, fn)=>{
    $("#Loader").css("visibility", "visible");
    setTimeout(function(){
        Room.ppt({id:["Loader" , page] , mov:["mv-fade-out" , "mv-fade-in"]}, function(){
            if(fn) fn();
        });
    }, wait);
};
Action.Index = (next)=>{
    Room.ppt({id:[Room.id, "Index"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
};
Action.IndexBack = ()=>{
    Room.ppt({id:[Room.id, "Index"] , mov:["hide" , "show"]});
};
Action.Nav = (next)=>{
    Room.ppt({id:[Room.id, "Nav"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
    $("#CC").addClass("act");
};
Action.Lastbox = (next)=>{
    Room.ppt({id:[Room.id, "Lastbox"] , mov:["mv-move-left-out" , "mv-move-left-in"]});
    $("#CC").addClass("mov");
};
