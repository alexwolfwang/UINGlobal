//$(function() {
    //var c = $("#myCanvas")[0];
    //var c = document.getElementById("myCanvas");
    //var cxt = c.getContext("2d");
    /*cxt.fillStyle="#FF0000";
    cxt.fillRect(0,0,150,75);*/
    //cxt.moveTo(10,10);
    //cxt.lineTo(150,50);
    //cxt.lineTo(10,50);
    //cxt.stroke();


    //cxt.fillStyle="#FF0000";
    //cxt.beginPath();
    //cxt.arc(70,50,60,30,Math.PI*2,true);
    //cxt.closePath();
    //cxt.fill();

    //var grd = cxt.createRadialGradient(75,50,10,90,60,100);
    //grd.addColorStop(0,"blue");
    //grd.addColorStop(1,"yellow");
    //
    //cxt.fillStyle=grd;
    //cxt.fillRect(20,20,150,100);
    ////cxt.beginPath();
    ////cxt.arc(170,150,160,130,Math.PI*2,true);
    ////cxt.stroke();
    //cxt.fillRect()


    //cxt.font="30px Arial";
    //cxt.strokeText("Hello World", 10, 50);

    //var x = 100;
    //var y = 50;
    //var width = 50;
    //var height = 80;
    //var backColor = "Red";
    //var edgeColor = "Black";
    //
    //cxt.fillStyle = backColor;
    //cxt.fillRect(x,y,width,height);
    //cxt.strokeStyle = edgeColor;
    //cxt.strokeRect(x,y,width,height);

    //$(".animation").mouseover(function() {
    //    $(".animation img").attr("src","imgs2/6.gif");
    //});
    //
    //signalAnimation = function() {
    //    $(".animation img").attr("src","imgs2/6.png")
    //}
    //var stop = setTimeout("signalAnimation()",2000);

//})


//$(function() {
//    $(".animation").mouseover(function() {
//        $(".animation img").attr("src","imgs2/6.gif");
//
//        signalAnimation = function() {
//            $(".animation img").attr("src","imgs2/6.png")
//        }
//        var stop = setTimeout("signalAnimation()",1500);
//    });
//
//
//})

//$(function(){
//    $(".animation").mousemove(function() {
//        $(".cover").animate({left:"400px"},"slow");
//    })
//})

//$(function(){
//    $(".animation").mouseover(function(){
//        $(".aa").addClass("cover");
//
//    });
//    bb = function(){
//
//        $(".cover").removeClass("aa");
//        $(".stick").css("width",50);
//    };
//    var stop = setTimeout("bb()", 2000);
//})

//$(function() {
//    var i = "G";
//    function f() {
//        alert(i);
//        var i = "L";
//        alert(i);
//    }
//    f();
//})

//$(function() {
//    outerloop:
//        for(var i = 0; i < 10; i ++) {
//            innerloop:
//                for(var j = 0; j < 10; j ++) {
//                    if(j > 3) break;
//                    if(i == 2) break innerloop;
//                    if(i == 4) break outerloop;
//                    document.write("i = " + i + " j = " + j + "<br>");
//                }
//        }
//    document.write("final i = " + i + " j = " + j + "<br>");
//})

//function ff(a) {
//    var  total = 0;
//    for(var i = 0; i < arguments.length; i ++) {
//        var element = arguments[i];
//        if(!element) continue;
//        var n;
//        switch (typeof element) {
//            case "number":
//                n = element;
//                break;
//            case "object":
//                if(element instanceof Array){
//                    n = ff.apply(this, element);
//                } else {
//                    n = element.valueOf();
//                };
//                break;
//            case "function":
//                n = element();
//                break;
//            case "string":
//                n = parseFloat(element);
//                break;
//            case  "boolean":
//                n = NaN;
//                break;
//        }
//        if(typeof n == "number" && !isNaN(n)) {
//            total += n;
//        } else {alert("fuck");
//            throw new Error("Warning!!");
//
//        }
//        alert(total);
//    }};
//
//$(document).ready(ff(["123.45","12"]));

//function f() {
//    var name = "The Window";
//    //var object = {
//    //    name : "My Object",
//    //    getNameFunc : function(){
//
//    //        return function(){
//    //            return this.name;
//    //        };
//    //    }
//    //};
//    var object = {
//        name : "My Object",
//        getNameFunc : function(){
//            var aa = this;
//            //name="sss";
//            return function(){
//                return aa.name;
//            };
//        }
//    };
//    alert(object.getNameFunc()());

    //有对象就指向调用对象
    //没调用对象就指向全局对象
    //用new构造就指向新对象
    //通过 apply 或 call 或 bind 来改变 this 的所指。
    //在一个没有加var的变量，是一个全局变量

    //示例01最终执行的是 function(){return this.name}，因为没有显示指明调用对象，
    //所以其this执行全局对象。示例02先调用object.getNameFunc(),因为显示的指定了调
    //用对象，所以内部的this是object(注：这里说的是this指向的问题，还没有说闭包)，
    //接着执行function (){return that.name}，这个函数在getNameFunc这个函数作用域
    //中声明的，所以它调用的时候使用的是这个作用域，即得到var that = this;的这个that;
    //而不是外面的that。

    //var text = 'findingsea';
    //function greeting(name) {
    //    var text = 'Hello ' + name; // local variable
    //    // 每次调用时，产生闭包，并返回内部函数对象给调用者
    //    var aa = this;
    //    return function() {  alert(aa.text); }
    //}
    //var sayHello=greeting("Closure");
    //sayHello()
//}

//$(document).ready(f());
//
//$(document).ready(function() {
//    var documentHeight = $(window).height();
//    var main = $(".bb").offset();
//    //var topp = $(".main").scrollTop();
//    //alert(topp);
//    alert(main.top);
//    alert(documentHeight);
//    //alert(main.top - (documentHeight / 2));
//    //var calculate = main.top - (documentHeight / 2);
//    //if($(".main").scrollTop == calculate) {
//    //    alert("??");
//    //}
//
//    //$(".tt").click(function() {
//    //    alert(main.top);
//    //    alert(documentHeight);
//    //    alert(main.top - (documentHeight / 2));
//    //})
//})
//$(function() {
//    $("img").click(function() {
//        $("img").animate({left: "+=50px"},'fast').attr("src","resource/五大优势icon/名校教师，推荐入学/percentage.png");
//    })
//})

$(function() {
    //$(".b1").click(function() {
    //    $("img").stop().animate({
    //        right: "40px",
    //        opacity: 0.5
    //    });
    //
    //});
    //
    //$(".b2").click(function() {
    //    $("img").stop().animate({
    //        right: "0px",
    //        opacity: 0.9
    //    })
    //
    //})
    //$('#simple-menu').click(function() {
    //    $('.modal').modal();
    //})
    //
    //
    //var w1 = $(document).width;
    //var w2 =
})