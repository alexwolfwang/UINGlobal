$(document).ready(function(){

    __layoutBanner();

    $('.banner-item img').addClass('animated pulse iteration-count-infinite duration-30s');

    var __unslider = $('.banner').unslider({
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay: 5000,              //  The delay between slide animations (in milliseconds)
        complete: function() {},  //  A function that gets called after every slide animation
        keys: false,               //  Enable keyboard (left, right) arrow shortcuts
        dots: false,               //  Display dot navigation
        fluid: true,              //  Support responsive design. May break non-responsive designs
        arrows:false
    });
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        __unslider.data('unslider')[fn]();
    });
    $('.banner-control .prev').hide();
    $('.unslider-arrow').click(function() {
        var check = $('.banner ul').attr('style');
        if(check.indexOf('-100%') < 1 || check.indexOf('-200%') < 1){
            $('.banner-control .prev').show();
        } else {
            $('.banner-control .prev').hide();
        }

    });

    var advantageContainers = $('.advantage-container');

    var __top_container_paddingTop = $('#top-container').css('paddingTop');
    __top_container_paddingTop = __top_container_paddingTop.replace('px' , '');

    if($(window).scrollTop() > __top_container_paddingTop){
        $('#top-container').css({paddingTop : 0});
        if($(window).scrollTop() > 60){
            $('#top-container-bg').css({top : 0});
            var __scrollHeight = $(window).scrollTop() + __getWindowHeight();
            for(var i = 0 ; i < advantageContainers.length ; i++){
                var __this_container = $(advantageContainers[i]);
                if(__scrollHeight > __this_container.offset().top && __this_container.css('opacity') == 0){
                    __this_container.animate({'opacity':1 , 'top':0} , 1000);
                }
            }
        }
    }

    $(window).scroll(function(){
        var __scrollTop = $(window).scrollTop();
        var __scrollHeight = __scrollTop + __getWindowHeight();
        if(__scrollTop > -1 && __scrollTop < 61){
            $('#top-container-bg').css({top : __scrollTop - 90});
            if(__scrollTop < __top_container_paddingTop){
                $('#top-container').css({paddingTop : __top_container_paddingTop - __scrollTop});
            }
        } else if(__scrollTop > __top_container_paddingTop){
            $('#top-container').css({paddingTop : 0});
            if(__scrollTop > 60){
                $('#top-container-bg').css({top : 0});
            }
            //alert(__scrollTop + '>' + $(advantageContainers[0]).offset().top);
            for(var i = 0 ; i < advantageContainers.length ; i++){
                var __this_container = $(advantageContainers[i]);
                if(__scrollHeight > __this_container.offset().top && __this_container.css('opacity') == 0){
                    __this_container.animate({'opacity':1 , 'margin-top':-10} , 1000);
                }
            }
        }
    });

    $(window).resize(function(){
        __layoutBanner();
    });

    $('#query-country').hover(function(){
        $('#query-country-container').stop().slideDown(100);
    } , function(){
        $('#query-country-container').stop().hide();
    });
    $('#query-university').hover(function(){
        $('#query-university-container').stop().slideDown(100);
    } , function(){
        $('#query-university-container').stop().hide();
    });
    $('#query-major').hover(function(){
        $('#query-major-container').stop().slideDown(100);
    } , function(){
        $('#query-major-container').stop().hide();
    });

    $('#query-country-container a').click(function(){
        var value = $(this).attr('actionValue');
        $('#query-country-label').html(this.innerHTML);
        $('.query-university-country-container').hide();
        $('#query-country-input').val(value);
        $('#query-university-container-' + value).show();
        $('#query-country-container').stop().hide();
    });

    initAcademies();

    $('#query-major-container a').click(function(){
        var value = $(this).attr('actionValue');
        $('#query-major-input').val(value);
        $('#query-major-label').html(this.innerHTML);
        $('#query-major-container').stop().hide();
    });

    $('.solution-block').hover(function(){
        var __block = $(this);
        __block.find('.img-index').stop().hide();
        __block.find('.bg-img').stop().fadeIn();
        __block.stop().addClass('black-font');
        __block.find('.solutionContainer-border').stop().animate({'height' : '40px'} , function(){
            __block.find('.arrow').stop().animate({'left' : '20px'} , 100);
        });
        __block.find('.img').stop().show().css('display','block');
    } , function(){
        var __block = $(this);
        __block.find('.img').stop().hide();
        __block.find('.bg-img').stop().fadeOut();
        __block.stop().removeClass('black-font');
        __block.find('.img-index').stop().fadeIn();
        __block.find('.solutionContainer-border .arrow').stop().animate({'left' : '-50px'} , 100);
        __block.find('.solutionContainer-border').stop().animate({'height' : '8px'});
    });

    $('.solution-block').click(function(){
        location.href = this.id + '.do';
    });

    $('.advantage-container').click(function(){
        location.href = this.id + '.do';
    });

    /*$('.placehoder').each(function(){
        var __this = $(this);
        if(__this.val().length > 0){
            __this.removeClass(this.id + '-bg');
        }
    });

    $('.placehoder').keyup(function(){
        var __this = $(this);
        if(__this.val().length > 0){
            __this.removeClass(this.id + '-bg');
        } else {
            __this.addClass(this.id + '-bg');
        }
    });*/


});

function __layoutBanner(){
    $('.banner ul li').css({'width' : document.documentElement.clientWidth + 'px'});
}

function findConsultant(){
    $('#find-consultant-form')[0].submit();
}

function getStudyPlan(){
    location.href = _PATH + '/getStudyPlan.do';
}

function initAcademies(){
    $.ajax({
        url : "getAllAcademies.do",
        method : 'POST',
        data : {},
        dataType : "json",
        async : true,
        success:function(response){
            $('#query-university-container');
            var list = response;
            for(var i = 0 ; i < list.length ; i++){
                var academy = list[i];
                var action = $('<a href="javascript:;" actionValue="'+academy.id+'">'+academy.chineseName+'</a>');
                $('#query-university-container-' + academy.countryId).append(action);
            }

            $('#query-university-container a').click(function(){
                var value = $(this).attr('actionValue');
                $('#query-academy-input').val(value);
                $('#query-academyLabel-input').val(encodeURI(this.innerHTML));
                $('#query-university-label').html(this.innerHTML);
                $('#query-university-container').stop().hide();
            });
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){

        }
    })
}
//function navbarToggle() {
//    $()
//}
//

