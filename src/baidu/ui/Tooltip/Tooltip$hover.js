/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import baidu.ui.Tooltip;
///import baidu.ui.get;
///import baidu.event.on;
///import baidu.event.un;
///import baidu.event.getTarget;
///import baidu.dom.getAncestorBy;

///import baidu.lang.isArray;
///import baidu.array.each;

///import baidu.event.stopPropagation;
///import baidu.event.preventDefault;

baidu.ui.Tooltip.register(function(me) {
    
    if (me.type == 'hover') {

        //onload时绑定显示方法
        me.addEventListener("onload",function(){
            baidu.each(me.target,function(target){
                baidu.on(target, 'mouseover', showFn);
            });
        });

        //dispose时接触事件绑定
        me.addEventListener("ondispose",function(){
            baidu.each(me.target,function(target){
                baidu.un(target, 'mouseover', showFn);
                baidu.un(target, 'mouseout', hideFn);
            });
        });

        //tooltip打开时，绑定和解除方法
        me.addEventListener('onopen', function(){
            baidu.un(me.currentTarget, 'mouseover', showFn);
            baidu.on(me.currentTarget, 'mouseout', hideFn);
        });

        //tooltip隐藏时，绑定和解除方法
        me.addEventListener('onclose', function(){
            baidu.on(me.currentTarget, 'mouseover', showFn);
            baidu.un(me.currentTarget, 'mouseout', hideFn);

            me.currentTarget = null;
        });

        //显示tooltip
        function showFn(e){
            var e = e || window.event,
                target = baidu.event.getTarget(e);
            
            me.open(target);
            
            //停止默认事件及事件传播
            baidu.event.preventDefault(e);
            baidu.event.stopPropagation(e);
        }

        //隐藏tooltip
        function hideFn(e){
            var e = e || window.event,
                target = baidu.event.getTarget(e);
            
            me.close();

            //停止默认事件及事件传播
            baidu.event.preventDefault(e);
            baidu.event.stopPropagation(e);
        }
    }
});
