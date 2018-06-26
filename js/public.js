$(function(){
    /**
     * 下拉框
     * */
    $('.select-box .form-control').click(function(e){
        var target =
        $(this).siblings('ul').slideToggle('fast');
        return false;
    });
    $(".select-box ul li").click(function () {
        var selectVlaue=$(this).attr("value");
        var selectText=$(this).html();

        var obj=$(this).parents(".select-box");

        obj.find(".form-control").attr('title',selectText).html(selectText);
        obj.find("input").val(selectVlaue);
        obj.find("ul").hide();

        return false;
    });
})


/**
 * * 公共Fun
 * **/
var modules = (function (mod){
    /** 倒计时 **/
    mod.countDown = function (wait) {
        var sendDom = $('#send')
            ,timer='';

        if (wait == 0) {
            sendDom.attr("disabled",false).removeClass("disabled").html("获取验证码");
            wait = 60;
            if(timer){
                clearTimeout(timer);
            }
            return;
        } else {
            sendDom.attr("disabled",true).addClass("disabled").html(wait+"秒后重发");
            wait--;
            timer = setTimeout(function() {
                mod.countDown(wait);
            }, 1000)
        }
    };
    /** 弹层 **/
    mod.modal=function (options) {
        return layer.open($.extend({
            shade: [0.9, 'rgb(47, 34, 15)']
            ,title:false
            ,id:'modal'
            ,shadeClose:true
            ,btn: ['确定']
            ,btnAlign:'c'
            ,skin:'mod-modal'
        },options));
    };
    /** tip提示层 **/
    mod.tips = function(self){
        var txt = self.data('msg');

        return layer.tips(txt,self,{
            tips:[1,'#fff3be']
            ,time:0
            ,id:'tips'
            ,skin:'mod-tip'
            ,area: '148px'
        });
    };
    /** 验证手机号 **/
    mod.is_mobile = function(phone) {
        var reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;//手机
        return reg.test(phone);
    };

    return mod;
})(window);


