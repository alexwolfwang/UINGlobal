<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, location=no , initial-scale=1.0, maximum-scale=1.0, minimun-scale=1.0 , minimal-ui , user-scalable=no, target-densitydpi=device-dpi">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="zwwang" />
    <title>UFOffer</title>
    <link rel="stylesheet" href="E:/ufo/css/bootstrap.min.css">
    <!--[if lte IE 9]>
    <link rel="stylesheet" href="/ufoffer/component/bootstrap-3.3.5-dist/css/bootstrap.min.css">
    <![endif]-->
    <link rel="stylesheet" href="E:/ufo/animate.min.css">
    <link rel="stylesheet" href="E:/ufo/animate-common.css">
    <link rel="stylesheet" href="E:/ufo/css/common.css">

</head>
<script type="text/javascript">
    var _cdn_path = 'http://static.ufoffer.com';
</script>
<div id="top-container-bg"></div>
<div id="top-container">
    <div id="top-menu">
        <div id="top-logo" >
            <a href="/ufoffer"><div><img src="/ufoffer/resources/index/logo/logo.png" width="60"></div><div id="top-logo-title">UFOffer</div></a>
        </div>
        <div class="hidden-xs" id="menu-item-container">
            <div class="link-container">
                <a href="javascript:__showLoginContainerPanel();"><div class="chinese">登<span style="padding-left: 20px"></span>录</div><div class="english">Log<span style="padding-left: 12px"></span>in</div></a>
                <div class="split"></div>
                <a href="javascript:__showRegistContainerPanel();"><div class="chinese">注<span style="padding-left: 20px"></span>册</div><div>Sign<span style="padding-left: 5px"></span>up</div></a>
            </div>
            <a class="menu-item">Become a consultant</a>

            <a class="menu-item">学习辅导</a>

            <a class="menu-item">申请追踪</a>

            <a class="menu-item">预约导师</a>

            <a class="menu-item active">留学方案</a>

        </div>
    </div>
</div>
<div class="modal" id="loginContainerPanel">
    <div class="close-container"><div class="close">×</div><div class="clearfix"></div></div>
    <div id="tab-wechat" class="tab-title active">
        <div class="chinese">微信登录</div>
        <div class="english">Log in with Wechat</div>
    </div>
    <div id="tab-ufoffer" class="tab-title">
        <div class="chinese">账号登录</div>
        <div class="english">Log in with UFOffer</div>
    </div>
    <div id="tab-wechat-panel" class="tab-panel">
        <div id="wechat-code"><img src=""></div>
        <div class="chinese">微信扫码登录</div>
        <div class="english">Please scan by your Wechat</div>
        <a class="help chinese" href="javascript:;">帮助</a>
        <a class="help english" href="javascript:;">Help</a>
    </div>
    <div id="tab-ufoffer-panel" class="tab-panel">
        <div class="input-container"><input class="form-control phoneOrEmail-bg" id="phoneOrEmail" placeholder="手机/电子邮箱"/></div>
        <div class="input-container"><input type="password" class="form-control pwd4Login-bg" id="pwd4Login" placeholder="密码"/></div>
        <div id="auto-login">
            <div class="checkbox" id="remember-me">
                <label>
                    <div class="check"></div>
                    <span class="chinese">自动登录</span>
                    <span class="english">Remember Me</span>
                </label>
            </div>
            <a id="forget-pwd">
                <div class="chinese">忘记密码？</div>
                <div class="english">Forget Password?</div>
            </a>
            <div class="clear-both"></div>
        </div>
        <div class="redBtn">
            <div class="chinese">登录</div>
            <div class="english">Log in</div>
        </div>
        <div class="split"></div>
        <div class="regist chinese">还没有账号？<a>注册</a></div>
        <div class="regist english">Do not have an account? <a>Sign up</a></div>
        <a class="login-switch chinese">English</a>
        <a class="login-switch english">中文</a>
    </div>
</div>
<div class="modal" id="registContainerPanel">
    <div class="close-container"><div class="close">×</div><div class="clearfix"></div></div>
    <div id="tab-phone" class="tab-title active">
        <div class="chinese">手机注册</div>
        <div class="english">Sign up with Phone</div>
    </div>
    <div id="tab-email" class="tab-title">
        <div class="chinese">邮箱注册</div>
        <div class="english">Sign up with Email</div>
    </div>
    <div id="tab-phone-panel" class="tab-panel">
        <div class="input-container"><input class="form-control phoneRegist-bg" id="phoneRegist" placeholder="手机"/></div>
        <div class="input-container"><input class="form-control lastNamePhone-bg" id="lastNamePhone" placeholder="姓氏"/></div>
        <div class="input-container"><input class="form-control firstNamePhone-bg" id="firstNamePhone" placeholder="名字"/></div>
        <div class="input-container"><input class="form-control pwdPhone-bg" id="pwdPhone" placeholder="密码"/></div>
        <div class="input-container">
            <input id="verifyCodeValue" class="form-control left"/>
            <a id="verifyCodeValueBtn" class="right">
                <span class="chinese">获取动态码</span>
                <span class="english">Verify Code</span>
            </a>
            <div class="clearfix"></div>
        </div>
        <div class="serviceRegu">
            <div class="checkbox">
                <label>
                    <div class="check"></div>
                    <span class="chinese">我已同意UFOffer服务条款</span>
                    <span class="english">I agree to UFOffer’s Terms and Regulations</span>
                </label>
            </div>
        </div>
        <div class="redBtn">
            <div>注册</div>
            <div class="english">Sign up</div>
        </div>
        <div class="split"></div>
        <div class="login chinese">已经加入UFOffer？<a>登录</a></div>
        <div class="login english">Already an UFOffer member? <a>Log in</a></div>
        <a class="phone-switch chinese">English</a>
        <a class="phone-switch english">中文</a>
    </div>
    <div id="tab-email-panel" class="tab-panel">
        <div class="input-container"><input class="form-control emailRegist-bg" id="emailRegist" placeholder="电子邮箱"/></div>
        <div class="input-container"><input class="form-control lastNameEmail-bg" id="lastNameEmail" placeholder="姓氏"/></div>
        <div class="input-container"><input class="form-control firstNameEmail-bg" id="firstNameEmail" placeholder="名字"/></div>
        <div class="input-container"><input class="form-control pwdEmail-bg" id="pwdEmail" placeholder="密码"/></div>
        <div class="serviceRegu">
            <div class="checkbox">
                <label>
                    <div class="check"></div>
                    <span class="chinese">我已同意UFOffer服务条款</span>
                    <span class="english">I agree to UFOffer’s Terms and Regulations</span>
                </label>
            </div>
        </div>
        <div class="redBtn">
            <div>注册</div>
            <div class="english">Sign up</div>
        </div>
        <div class="split"></div>
        <div class="login chinese">已经加入UFOffer？<a>登录</a></div>
        <div class="login english">Already an UFOffer member? <a>Log in</a></div>
        <a class="email-switch chinese">English</a>
        <a class="email-switch english">中文</a>

    </div>
</div><html>
<link rel="stylesheet" href="E:/ufo/css/solution.css">
<body>
<div id="bodyFlowContainer">
    <div class="title-container">
        <img class="title-img" src="E:/ufo/imgs3/title-img.png">
        <div class="row title-content">
            <div class="col-sm-2"></div>
            <div class="col-sm-10 nopadding">
                <img class="title-icon" src="E:/ufo/imgs3/banner-icon-1.png">
                <div class="title">定制留学方案</div>
                <div class="split"></div>
                <div class="sub-title">名校内部教师做你的独家申请智库</div>
            </div>
        </div>
        <div class="arrow-container">
            <a class="arrow right" id="arrow-right-action" href="#"><div id="arrow-right" style="background-image: url('E:/ufo/imgs3/arrow-right.png')"></div></a>
            <a class="arrow left" id="arrow-left-action" href="#"><div id="arrow-left" style="background-image: url('E:/ufo/imgs3/arrow-left.png')"></div></a>
        </div>
    </div>
    <div class="row feature">
        <div class="col-sm-2 index">
            <div class="line"></div>
            <div class="index-num">
                <span>1</span>
                <img src="imgs2/0.75.png">
            </div>
        </div>
        <div class="col-sm-10 nopadding">
            <div class="title"><img src="E:/ufo/imgs3/1.png">上万份高端申请案例数据分析</div>
            <div class="content">在互联网技术飞速发展的今天，我们采用Date Mining技术，对世界Top100名校录取数据进行深度分析。</div>
            <div class="content">同时，根据每位学生的自身特质，生成最优申请方案。</div>
        </div>
    </div>
    <div class="row feature">
        <div class="col-sm-2 index">
            <div class="line"></div>
            <div class="index-num">
                <span>2</span>
                <img src="imgs2/0.75.png">
            </div>
        </div>
        <div class="col-sm-10 nopadding">
            <div class="title"><img src="imgs2/2.png">定制Session深度挖掘学生兴趣</div>
            <div class="content">留学选专业，当然要选个自己喜欢的。</div>
            <div class="content">可是，看起来那么“美”的专业，学习的课程到底是不是你想要的？</div>
            <div class="content">我们懂专业，更懂你想要什么。</div>
        </div>
    </div>
    <div class="row feature">
        <div class="col-sm-2 index">
            <div class="line"></div>
            <div class="index-num">
                <span>3</span>
                <img src="imgs2/0.75.png">
            </div>
        </div>
        <div class="col-sm-10 nopadding">
            <div class="title"><img src="imgs2/3.png">名校内部教师做你的独家申请智库</div>
            <div class="content">选学校？选专业？名校专业教师一对一给你建议。</div>
            <div class="content">不光如此，详细招生标准、当前录取情况，内部人士给你的独家申请策略，在这里不用走弯路！</div>
        </div>
    </div>
    <div class="row apply">
        <div class="col-sm-2">
            <div class="line"></div>
            <div class="line-h"></div>
        </div>
        <div class="col-sm-10 nopadding">
            <div class="title"><div class="line"></div>根据你的特质定制申请</div>
            <div class="split">
                <div class="apply-types">
                    <div class="img"><img src="imgs2/apply-1.png"></div>
                    <div>学术型</div>
                    <div>ACADEMIC</div>
                </div>
                <div class="apply-types">
                    <div class="img"><img src="imgs2/apply-2.png"></div>
                    <div>社会型</div>
                    <div>SOCIAL</div>
                </div>
                <div class="apply-types">
                    <div class="img"><img src="imgs2/apply-3.png"></div>
                    <div>创造型</div>
                    <div>CREATIVE</div>
                </div>
                <div class="apply-types">
                    <div class="img"><img src="imgs2/apply-4.png"></div>
                    <div>常规型</div>
                    <div>CONVENTIONAL</div>
                </div>
                <div class="apply-types">
                    <div class="img"><img src="imgs2/apply-5.png"></div>
                    <div>实践型</div>
                    <div>PRACTICAL</div>
                </div>
                <div class="apply-types">
                    <div class="img"><img src="imgs2/apply-6.png"></div>
                    <div>企业型</div>
                    <div>ENTERPRISING</div>
                </div>
            </div>

        </div>
    </div>
    <div class="row time-line">
        <div class="col-sm-2"></div>
        <div class="col-sm-10" id="apply-action-bg">
            <div class="time-item">
                <div><img src="imgs2/time-1.png"></div>
                <div>在线定制留学方案</div>
            </div>
            <div class="time-item">
                <div><img src="imgs2/time-2.png"></div>
                <div>定制Session深度挖掘</div>
            </div>
            <div class="time-item">
                <div><img src="imgs2/time-3.png"></div>
                <div>内部教师一对一咨询</div>
            </div>
            <div class="action-arrow">
                <a id="arrow-bottom-action" href="#">
                    <div id="arrow-bottom" style="background-image: url('imgs2/arrow-right.png')"></div>
                </a>
                <div>在线定制留学方案</div>
            </div>
        </div>
    </div>
</div>

</body>
<!--[if lte IE 9]>
<script type="text/javascript" src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<script type="text/javascript" src="//cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<![endif]-->
<!--
<script src="/ufoffer/component/adapter-ie8/html5shiv.js"></script>
<script src="/ufoffer/component/adapter-ie8/respond.js"></script>
-->
<script src="E:/ufo/js/jquery-1.11.3.js"></script>
<script src="E:/ufo/js/bootstrap.js"></script>

<script type="text/javascript" src="E:/ufo/js/common.js"></script>
<div class="row" id="footer" style="background-image: url('imgs2/footer-bg.jpg')">
    <div class="col-sm-1"></div>
    <div class="col-sm-2 footer-item">
        <div><img class="icon" src="imgs2/1.png"></div>
        <div class="title">公司信息</div>
        <div><a href="#">关于我们</a></div>
        <div><a href="#">用户协议</a></div>
        <div><a href="#">版权声明</a></div>
        <div><a href="#">活动信息</a></div>
        <div><a href="#">联系我们</a></div>
    </div>
    <div class="col-sm-2 footer-item">
        <div><img class="icon" src="imgs2/2.png"></div>
        <div class="title">帮助中心</div>
        <div><a href="#">服务条款</a></div>
        <div><a href="#">预约流程</a></div>
        <div><a href="#">退款政策</a></div>
    </div>
    <div class="col-sm-2 footer-item">
        <div><img class="icon" src="imgs2/3.png"></div>
        <div class="title">发现</div>
        <div><a href="#">ios客户端</a></div>
    </div>
    <div class="col-sm-2 footer-item">
        <div><img class="icon" src="imgs2/4.png"></div>
        <div class="title">Consultant</div>
        <div><a href="#">导师见面会</a></div>
        <div><a href="#">Instructions</a></div>
        <div><a href="#">Payment/Payroll</a></div>
    </div>
</div>
<div class="row" id="copyright">
    <div class="col-sm-1"></div>
    <div class="col-sm-10">UFOffer © 2014-2015 UFOffer™ All Rights Reserved. 京ICP备15044581-1号</div>
</div>
<script type="text/javascript" src="E:/ufo/js/solution.js"></script>
</html>
