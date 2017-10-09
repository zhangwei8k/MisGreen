function HammerHand(id, pa, xy) {


    this.$dom  = $(id);
    this.body = this.$dom[0];
    this.pa = pa;

    if(!xy){
        //建立$hammer类
        this.hammer = new Hammer.Manager(this.body);
        this.hammer.add(new Hammer.Pan({ direction: Hammer.DIRECTION_VERTICAL, threshold: 10 }));
        this.hammer.on("panend", Hammer.bindFn(this.onPanYEnd, this.pa));
    }else{
        //建立$hammer类
        this.hammer = new Hammer.Manager(this.body);
        this.hammer.add(new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 10 }));
        this.hammer.on("panend", Hammer.bindFn(this.onPanXEnd, this.pa));
    }


}
HammerHand.prototype.onPanYEnd = function(ev){

    if(ev.deltaY<0) {
        if(this.up) this.up();
    }else{
        if(this.down) this.down();
    }

};

HammerHand.prototype.onPanXEnd = function(ev){

    if(ev.deltaX<0) {
        if(this.left) this.left();
    }else{
        if(this.right) this.right();
    }

};