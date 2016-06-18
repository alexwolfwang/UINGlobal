    $(document).ready(function(){

    $('#arrow-right-action').hover(function(){
        $('#arrow-right').stop().animate({backgroundPosition : '20px'});
    } , function(){
        $('#arrow-right').stop().animate({backgroundPosition : '0'});
    });

    $('#arrow-left-action').hover(function(){
        $('#arrow-left').stop().animate({backgroundPosition : '0'});
    } , function(){
        $('#arrow-left').stop().animate({backgroundPosition : '20px'});
    });

    $('#apply-action-bg').hover(function(){
        $('#arrow-bottom').stop().animate({backgroundPosition : '20px'});
    } , function(){
        $('#arrow-bottom').stop().animate({backgroundPosition : '0'});
    });
})