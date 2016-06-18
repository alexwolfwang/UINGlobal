$(document).ready(function(){

    var loginTabTitles = $('#loginContainerPanel').find('.tab-title');
    var loginTabPanels = $('#loginContainerPanel').find('.tab-panel');
    $(loginTabPanels[0]).show();
    for(var i = 0 ; i < loginTabTitles.length ; i++){
        $(loginTabTitles[i]).click(function(){
            __activeLoginTabPanel(loginTabTitles , loginTabPanels , this);
        });
    }

    var tabTitles = $('#registContainerPanel').find('.tab-title');
    var tabPanels = $('#registContainerPanel').find('.tab-panel');
    $(tabPanels[0]).show();
    for(var j = 0 ; j < tabTitles.length ; j++) {
        $(tabTitles[j]).click(function () {
            __activeLoginTabPanel(tabTitles, tabPanels, this);
        });
    }

    $('.close').click(function(){
        $(this).parent().parent().modal('hide');
        $('#bodyFlowContainer').removeClass('blur');
    });

    $('#close-simple-menu').click(function() {
        $(this).parent().parent().parent().parent().modal('hide');
    });
    $("#simple-menu").click(function() {
        $("#modalMenu").modal("toggle");
    })

    $('.login-switch').click(function(){
        if($(this).hasClass('chinese')){
            $('#loginContainerPanel .chinese').hide();
            $('#loginContainerPanel .english').show();
            $('#phoneOrEmail').attr('placeholder' , 'Email');
            $('#pwd4Login').attr('placeholder' , 'Password');
        } else {
            $('#loginContainerPanel .english').hide();
            $('#loginContainerPanel .chinese').show();
            $('#phoneOrEmail').attr('placeholder' , '手机/电子邮箱');
            $('#pwd4Login').attr('placeholder' , '密码');
        }
    });

    $('.phone-switch').click(function(){
        if($(this).hasClass('chinese')){
            $('#registContainerPanel .chinese').hide();
            $('#registContainerPanel .english').show();
            $('#phoneRegist').attr('placeholder' , 'Phone');
            $('#lastNamePhone').attr('placeholder' , 'Last Name');
            $('#firstNamePhone').attr('placeholder' , 'First Name');
            $('#pwdPhone').attr('placeholder' , 'Password');

            $('#emailRegist').attr('placeholder' , 'Email');
            $('#lastNameEmail').attr('placeholder' , 'Last Name');
            $('#firstNameEmail').attr('placeholder' , 'First Name');
            $('#pwdEmail').attr('placeholder' , 'Password');
        } else {
            $('#registContainerPanel .english').hide();
            $('#registContainerPanel .chinese').show();
            $('#phoneRegist').attr('placeholder' , '手机');
            $('#lastNamePhone').attr('placeholder' , '姓氏');
            $('#firstNamePhone').attr('placeholder' , '名字');
            $('#pwdPhone').attr('placeholder' , '密码');

            $('#emailRegist').attr('placeholder' , '电子邮箱');
            $('#lastNameEmail').attr('placeholder' , '姓氏');
            $('#firstNameEmail').attr('placeholder' , '名字');
            $('#pwdEmail').attr('placeholder' , '密码');
        }
    });

    $('.email-switch').click(function(){
        if($(this).hasClass('chinese')){
            $('#registContainerPanel .chinese').hide();
            $('#registContainerPanel .english').show();
            $('#emailRegist').attr('placeholder' , 'Email');
            $('#lastNameEmail').attr('placeholder' , 'Last Name');
            $('#firstNameEmail').attr('placeholder' , 'First Name');
            $('#pwdEmail').attr('placeholder' , 'Password');

            $('#phoneRegist').attr('placeholder' , 'Phone');
            $('#lastNamePhone').attr('placeholder' , 'Last Name');
            $('#firstNamePhone').attr('placeholder' , 'First Name');
            $('#pwdPhone').attr('placeholder' , 'Password');
        } else {
            $('#registContainerPanel .english').hide();
            $('#registContainerPanel .chinese').show();
            $('#emailRegist').attr('placeholder' , '电子邮箱');
            $('#lastNameEmail').attr('placeholder' , '姓氏');
            $('#firstNameEmail').attr('placeholder' , '名字');
            $('#pwdEmail').attr('placeholder' , '密码');

            $('#phoneRegist').attr('placeholder' , '手机');
            $('#lastNamePhone').attr('placeholder' , '姓氏');
            $('#firstNamePhone').attr('placeholder' , '名字');
            $('#pwdPhone').attr('placeholder' , '密码');
        }
    });

    $('.regist').click(function(){
        __closeLoginContainerPanel();
        __showRegistContainerPanel();
    });
    $('.login').click(function(){
        __closeRegistContainerPanel();
        __showLoginContainerPanel();
    });

    $('#loginBtn').click(function(){
        login();
    });
    $('#phoneOrEmail').keydown(function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){ // enter 键
            login();
        }
    });
    $('#pwd4Login').keydown(function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){ // enter 键
            login();
        }
    });
    $('#registBtnEmail').click(function(event){
        registByEmail();
    });

    $('#registBtnPhone').click(function(event){
        registByPhone();
    });
});


/**
 * 获取当前窗口高度
 * @return {*}
 * @private
 */
function __getWindowHeight(){
    var yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        yScroll = window.innerHeight + window.scrollMaxY;
    } else {
        if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
            yScroll = document.body.offsetHeight;
        }

    }

    var windowHeight;
    if (self.innerHeight) { // all except Explorer
        if (document.documentElement.clientWidth) {
            windowWidth = document.documentElement.clientWidth;
        } else {
            windowWidth = self.innerWidth;
        }
        windowHeight = self.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body) { // other Explorers
                windowHeight = document.body.clientHeight;
            }
        }
    }
    return windowHeight;
}

function __showLoginContainerPanel(){
    $('#loginContainerPanel').modal({show : true , backdrop : 'static'});
    $('#bodyFlowContainer').addClass('blur');
}
function __closeLoginContainerPanel(){
    $('#loginContainerPanel').modal('hide');
}
function __showRegistContainerPanel(){
    $('#registContainerPanel').modal({show : true , backdrop : 'static'});
    $('#bodyFlowContainer').addClass('blur');
}
function __closeRegistContainerPanel(){
    $('#registContainerPanel').modal('hide');
}
function __activeLoginTabPanel(tabTitles , tabPanels , activeTable){
    for(var i = 0 ; i < tabTitles.length ; i++){
        $(tabTitles[i]).removeClass('active');
        $(tabPanels[i]).hide();
    }
    $(activeTable).addClass('active');
    $('#' + activeTable.id + '-panel').fadeIn();
}

function __initUfoStar(__container){
    var container = $('#' + __container);
    container.css('position' , 'relative');
    var star = container.attr('star');
    var fontSize = parseInt(container.css('font-size').replace('px' , ''));
    var conWidth = 0;
    var starts = $('<div class="ufo-stars"></div>');
    for(var i = 0 ; i < 5 ; i++){
        starts.append('<span class="glyphicon glyphicon-star ufo-star"></span>');
        conWidth += fontSize;
    }
    starts.css('width' , conWidth);
    var empty = $('<div class="ufo-stars-empty" style="width:' + (conWidth+5) + 'px"></div>');
    for(var j = 0 ; j < 5 ; j++){
        empty.append('<span class="glyphicon glyphicon-star-empty ufo-star"></span>');
    }
    var startsContainer = $('<div class="ufo-stars-container" style="width:' + fontSize*star + 'px"></div>');
    startsContainer.append(starts);
    empty.append(startsContainer);
    container.append(empty);
}

/*---删除左右两端的空格---*/
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function toggle(divId){
    $('#' + divId).fadeToggle();
}

/**
 * 用户登录验证
 */
function login(){
    //$('#alertSpan4login').html('');
    //if(loginLoading){
    //    return false;
    //}
    //loginLoading = true;
    var phoneOrEmail = $("#phoneOrEmail").val();
    if(trim(phoneOrEmail) == ''){
        //$('#alertSpan4login').html('请输入邮箱地址或者昵称');
        $("#phoneOrEmail").focus();
        return false;
    }
    var pwd4Login = $("#pwd4Login").val();
    if(trim(pwd4Login) == ''){
        //$('#alertSpan4login').html('请输入密码');
        $("#pwd4Login").focus();
        return false;
    }
    //$('#loginLoadingImg').show();
    var userInfo = {};
    userInfo.username = phoneOrEmail;
    userInfo.password = pwd4Login;
    try{
        $.ajax({
            url : "login.do",
            method : 'POST',
            data : userInfo,
            dataType : "json",
            async : true,
            success:function(response){
                if(response.success){
                    __closeLoginContainerPanel();
                    alert('登陆成功！\nWelcome back！\n欢 迎 回 来 ， 年 轻 人');
                    if(response.userType == 1){
                        location.href = _PATH + '/page/appointment.jsp?menu=appointment';
                    } else if(response.userType == 2){
                        location.href = _PATH + '/page/appointment.jsp?menu=appointment';
                    } else if(response.userType == 3){
                        location.href = _PATH + '/academyController.do?method=query';
                    }
                } else {
                    alert(response.message);
                }
                /*$('#alertSpan4login').html(response.message);
                if(response.success){
                    location.reload();
                }
                $('#loginLoadingImg').hide();
                loginLoading = false;*/


            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                alert(errorThrown);
                /*$('#alertSpan4login').html('登录失败,请重试');
                $('#loginLoadingImg').hide();
                loginLoading = false;*/
            }
        })
    }catch(e){
        alert(e);
        /*$('#alertSpan4login').html('登录失败,请重试');
        $('#loginLoadingImg').hide();
        loginLoading = false;*/

    }
}

/**
 * 用户注册
 */
function registByEmail(){
    /*console.info('registLoading = ' + registLoading + ',usernameExsit=' + usernameExsit);
    if(registLoading){
        return false;
    }*/
    //registLoading = true;
    //console.info('set registLoading = ' + registLoading);
    /*var username = $("#username4regist").val();
    if(trim(username) == ''){
        $('#alertSpan4regist').html('请输入昵称');
        $("#username4regist").focus();
        registLoading = false;
        return ;
    } else if(usernameExsit){
        $('#alertSpan4regist').html('昵称已经存在,请更换昵称');
        $("#username4regist").focus();
        registLoading = false;
        console.info('set registLoading = ' + registLoading);
        return ;
    }*/
    var email = $("#emailRegist").val();
    if(trim(email) == ''){
        $("#emailRegist").focus();
        return ;
    }
    /*else if(emailExsit){
        //$('#alertSpan4regist').html('邮箱地址已经存在,请更换邮箱地址');
        $("#emailRegist").focus();
        registLoading = false;
        return ;
    }*/
    var lastName = $("#lastNameEmail").val();
    if(trim(lastName) == ''){
        $("#lastNameEmail").focus();
        return ;
    }
    var firstName = $("#firstNameEmail").val();
    if(trim(firstName) == ''){
        $("#firstNameEmail").focus();
        return ;
    }
    var password = $("#pwdEmail").val();
    if(trim(password) == ''){
        //$('#alertSpan4regist').html('请输入密码');
        $("#pwdEmail").focus();
        return ;
    }
    //$('#registLoadingImg').show();
    var userInfo = {'lastName':lastName ,'firstName':firstName , 'email':email , 'password':password , 'userType':1 , 'active':1};
    $.ajax({
        url : _PATH + "/regist.do",
        method : 'POST',
        data : userInfo,
        dataType : "json",
        async : true,
        success:function(response){
            if(response.success){
                //location.href = _PATH + '/registSuccess.do';
                alert('注册成功！\nWelcome to UIN！\n请 登 录 您 的 邮 箱 激 活 账 号\nPlease check your email to finish register and activate your account.');
            } else {
                alert(response.message);
            }
            /*$('#alertSpan4regist').html(response.message);
            if(response.success){
                location.href = '<%=_contextPath %>/registSuccess.do';
            }
            $('#registLoadingImg').hide();
            registLoading = false;
            console.info('set registLoading = ' + registLoading);*/
        },
        error:function(){
           /* $('#alertSpan4regist').html('注册失败,请重试');
            $('#registLoadingImg').hide();
            registLoading = false;
            console.info('set registLoading = ' + registLoading);*/
        }
    });
}

/**
 * 用户注册
 */
function registByPhone(){
    /*console.info('registLoading = ' + registLoading + ',usernameExsit=' + usernameExsit);
     if(registLoading){
     return false;
     }*/
    //registLoading = true;
    //console.info('set registLoading = ' + registLoading);
    /*var username = $("#username4regist").val();
     if(trim(username) == ''){
     $('#alertSpan4regist').html('请输入昵称');
     $("#username4regist").focus();
     registLoading = false;
     return ;
     } else if(usernameExsit){
     $('#alertSpan4regist').html('昵称已经存在,请更换昵称');
     $("#username4regist").focus();
     registLoading = false;
     console.info('set registLoading = ' + registLoading);
     return ;
     }*/
    var phoneRegist = $("#phoneRegist").val();
    if(trim(phoneRegist) == ''){
        $("#phoneRegist").focus();
        return ;
    }
    /*else if(emailExsit){
     //$('#alertSpan4regist').html('邮箱地址已经存在,请更换邮箱地址');
     $("#emailRegist").focus();
     registLoading = false;
     return ;
     }*/
    var lastName = $("#lastNamePhone").val();
    if(trim(lastName) == ''){
        $("#lastNamePhone").focus();
        return ;
    }
    var firstName = $("#firstNamePhone").val();
    if(trim(firstName) == ''){
        $("#firstNamePhone").focus();
        return ;
    }
    var password = $("#pwdPhone").val();
    if(trim(password) == ''){
        //$('#alertSpan4regist').html('请输入密码');
        $("#pwdPhone").focus();
        return ;
    }
    //$('#registLoadingImg').show();
    var userInfo = {'lastName':lastName ,'firstName':firstName , 'phoneNo':phoneRegist , 'password':password , 'userType':1 , 'active':0};
    $.ajax({
        url : _PATH + "/regist.do",
        method : 'POST',
        data : userInfo,
        dataType : "json",
        async : true,
        success:function(response){
            debugger;
            if(response.success){
                //location.href = _PATH + '/registSuccess.do';
                __closeRegistContainerPanel();
                __showLoginContainerPanel();
                alert('手机注册成功,请登录');
            } else {
                alert(response.message);
            }
            /*$('#alertSpan4regist').html(response.message);
             if(response.success){
             location.href = '<%=_contextPath %>/registSuccess.do';
             }
             $('#registLoadingImg').hide();
             registLoading = false;
             console.info('set registLoading = ' + registLoading);*/
        },
        error:function(){
            /* $('#alertSpan4regist').html('注册失败,请重试');
             $('#registLoadingImg').hide();
             registLoading = false;
             console.info('set registLoading = ' + registLoading);*/
        }
    });
}