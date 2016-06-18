/**
 * Created by Alex.W on 2016/3/11.
 */
$(document).ready(function() {
    var icon1 = ".section1 .icon img";
    var icon2 = ".section2 .icon img";
    var icon3 = ".section3 .icon img";
    var img1 = ".section1 .right img";
    var img2 = ".section2 .left img";
    var img3 = ".section3 .right img";
    $(window).scroll(function() {
        var webHeight = $(this).height();
        var main = $(".text-column").offset();
        var windowUp = $(this).scrollTop();
        var calculate = main.top - (webHeight / 2);
        var mainHeight = $(".section1").height();
        var twoMainHeight = $(".section1").height() + $(".section2").height();
        var outSection1 = calculate + mainHeight;
        var outSection2 = calculate + twoMainHeight;
        if(windowUp >= calculate) {
            $(icon1).css({"transform":"rotateY(180deg)","transition-duration":"0.5s"});
            $(icon1).attr("src",_PATH+'/resources/fiveAdvantages/uinHelp/1ge.png');
            if($(window).width() >= 1024){
                $(img1).stop().animate({
                    right: "60px",
                    opacity: 1
                },'fast');
            } else {
                $(img1).stop().animate({
                    bottom: "60px",
                    opacity: 1
                },'fast');
            }
            $(".section1 .subTitle").css("color","#54c999");
            //} else if ((windowUp < calculate) && (windowUp >= (calculate - 50))) {
        } else {
            if($(Window).width() >=1024) {
                $(img1).stop().animate({
                    right: "0px",
                    opacity: 0.6
                },'fast');
            }else {
                $(img1).stop().animate({
                    bottom: "0px",
                    opacity: 0.6
                },'fast');
            }
            $(icon1).css({"transform":"rotateY(360deg)","transition-duration":"0.5s"});
            $(icon1).attr("src",_PATH+'/resources/fiveAdvantages/uinHelp/1g.png');
            $(".section1 .subTitle").css("color","black");
        }
        if (windowUp >= outSection1) {
            $(icon2).css({"transform":"rotateY(180deg)","transition-duration":"0.5s"});
            $(icon2).attr("src",_PATH+'/resources/fiveAdvantages/uinHelp/2ge.png');
            if($(window).width() >= 1024) {
                $(img2).stop().animate({
                    left: "60px",
                    opacity: 1
                },'fast');
            } else {
                $(img2).stop().animate({
                    bottom: "60px",
                    opacity: 1
                },'fast');
            }
            $(".section2 .subTitle").css("color","#54c999");
        } else {
            $(icon2).css({"transform":"rotateY(360deg)","transition-duration":"0.5s"});
            $(icon2).attr("src",_PATH+'/resources/fiveAdvantages/uinHelp/2g.png');
            if($(Window).width() >=1024) {
                $(img2).stop().animate({
                    left: "0px",
                    opacity: 0.6
                },'fast');
            } else {
                $(img2).stop().animate({
                    bottom: "0px",
                    opacity: 0.6
                },'fast');
            }
            $(".section2 .subTitle").css("color","black");
        }
        if(windowUp >= outSection2) {
            $(icon3).css({"transform":"rotateY(180deg)","transition-duration":"0.5s"});
            $(icon3).attr("src",_PATH+'/resources/fiveAdvantages/uinHelp/3ge.png');
            if($(window).width() >= 1024){
                $(img3).stop().animate({
                    right: "60px",
                    opacity: 1
                },'fast');
            } else {
                $(img3).stop().animate({
                    bottom: "60px",
                    opacity: 1
                },'fast');
            }
            $(".section3 .subTitle").css("color","#54c999");
            //} else if ((windowUp < calculate) && (windowUp >= (calculate - 50))) {
        } else {
            if($(Window).width() >=1024) {
                $(img3).stop().animate({
                    right: "0px",
                    opacity: 0.6
                },'fast');
            }else {
                $(img3).stop().animate({
                    bottom: "0px",
                    opacity: 0.6
                },'fast');
            }
            $(icon3).css({"transform":"rotateY(360deg)","transition-duration":"0.5s"});
            $(icon3).attr("src",_PATH+'/resources/fiveAdvantages/uinHelp/3g.png');
            $(".section3 .subTitle").css("color","black");
        }
    })

});/**
 * Created by Alex.W on 2016/3/15.
 */
