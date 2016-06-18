/**
 * Created by Alex.W on 2016/3/15.
 */
$(document).ready(function() {
    var icon1 = ".section1 .icon img";
    var icon2 = ".section2 .icon img";
    var img1 = ".section1 .right img";
    var img2 = ".section2 .left img";
    //var img2Out = ".img2Out";
    //var img2O2 = ".outImg2";
    $(window).scroll(function() {
        var webHeight = $(this).height();
        var wid = $(this).width();
        var main = $(".text-column").offset();
        var windowUp = $(this).scrollTop();
        var calculate = main.top - (webHeight / 2);
        var mainHeight = $(".section1").height();
        var halfSecondH =  $(".section1").height() + $(".section2").height() / 3;
        var outSection1 = calculate + mainHeight;
        var halfSection2 = calculate + halfSecondH;
        if(windowUp >= calculate) {
            $(icon1).css({"transform":"rotateY(180deg)","transition-duration":"0.5s"});
            $(icon1).attr("src",_PATH+'/resources/fiveAdvantages/documentMaster/1p.png');
            if(wid >= 1024){
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

            $(".section1 .subTitle").css("color","#eb7fbb");
        } else {
            if(wid >=1024) {
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
            $(icon1).attr("src",_PATH+'/resources/fiveAdvantages/documentMaster/1g.png');
            $(".section1 .subTitle").css("color","black");
        }
        if (windowUp >= outSection1) {
            $(icon2).css({"transform":"rotateY(180deg)","transition-duration":"0.5s"});
            $(icon2).attr("src",_PATH+'/resources/fiveAdvantages/documentMaster/2p.png');
            if(wid >= 1024) {
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

            $(".section2 .subTitle").css("color","#eb7fbb");

        } else {
            $(icon2).css({"transform":"rotateY(360deg)","transition-duration":"0.5s"});
            $(icon2).attr("src",_PATH+'/resources/fiveAdvantages/documentMaster/2g.png');
            if(wid >=1024) {
                $(img2).stop().animate({
                    left: "0px",
                    opacity: 0.4
                },'fast');
            } else {
                $(img2).stop().animate({
                    bottom: "0px",
                    opacity: 0.4
                },'fast');
            }


            $(".section2 .subTitle").css("color","black");

        }
        //if(windowUp >= halfSection2) {
        //    $(img2).stop().animate({opacity:0.3},300, function() {
        //        $(img2).stop().animate({opacity:1},300, function() {
        //            $(img2).attr("src",_PATH+'/resources/fiveAdvantages/documentMaster/docW.png');
        //        });
        //    })
        //} else {
        //    $(img2Out).stop().fadeTo(300, 1, function() {
        //        $(img2).attr("src",_PATH+'/resources/fiveAdvantages/documentMaster/doc100.png');
        //    })
        //}

    })

});