
(function () {
    var token = window.localStorage && window.localStorage.getItem('token');

    var btn = document.getElementById('showModel');
    var btndeng = document.getElementById('showMode2');
    var close = document.getElementsByClassName('close')[0];
    var close1 = document.getElementsByClassName('close1')[0];
    var cancel = document.getElementById('cancel');
    var modal = document.getElementById('modal');
    var modaldeng = document.getElementById('modadeng');
    var con = document.querySelectorAll('.modal-content');
    var $ = function (e) {
        return document.querySelector(e)
    };
    var my_order = $("#my_order");
    my_order.onclick = function () {
        if (token) {
            location.href = "dingdan.html";
        } else {
            sessionStorage.setItem('from', 'dingdan.html');
            modaldeng.style.display = "block";
        }
    };
    // 弹出注册模态框
    btn.onclick = function () {
        modal.style.display = "block";
    };
    close.onclick = function () {
        modal.style.display = "none";
    };
    // 弹出登陆模态框
    btndeng.onclick = function () {
        modaldeng.style.display = "block";
    };
    close1.onclick = function () {
        modaldeng.style.display = "none";
    };
    modal.onclick = function () {
        modal.style.display = "none";

    };
    modaldeng.onclick = function () {
        modaldeng.style.display = "none";
    };
    for (var l of con) {
        l.onclick = function (e) {
            e.stopPropagation()
        }
    }
    // 注册的js
    var tel=document.querySelector('#txt_telephone');
    var tel_error=document.querySelector('#telephone_error');
    var password=document.querySelector('#txt_password');
    var password_error=document.querySelector('#password_error');
    var password_confirm=document.querySelector('#txt_password_confirm');
    var confirm_error=document.querySelector('#confirm_error');
    var username=document.querySelector('#txt_username');
    var name_error=document.querySelector('#username_error');
    var checkbox=document.querySelector('#check1');
    document.querySelector('#btn_regist').onclick=function () {
        if(checkPassword() && checkTelphone() && checkConfrim() && checkusername()&& checkcheck()){
            var user={"telephone":tel.value,"password":password.value,"username":username.value};
            console.log(user);
            postData('http://127.0.0.1:8080/user/person',user,function (res) {
                if (res && res.status_code=='10001'){
                    alert(res.status_text);
                }else{
                    alert(res.status_text);
                }

            })

        }

    };
    function checkTelphone() {
        var regMobile=/^1[3,5,8]\d{9}$/;
        if(tel.value){
            if(regMobile.test(tel.value)){
                tel_error.innerText='';
                return true;
            }else{
                tel_error.innerText='*手机号码格式不正确';
                return false;
            }
        }else {
            tel_error.innerText='*手机号码不能为空';
            return false;
        }
    }
    function checkusername() {
        var regMobile= /^[\u4e00-\u9fa5a-zA-Z0-9_]+$/;
        if(username.value){
            if(regMobile.test(username.value)){
                name_error.innerText='';
                return true;
            }else{
                name_error.innerText='*用户名格式不正确';
                return false;
            }
        }else {
            name_error.innerText='*用户名不能为空';
            return false;
        }
    }
    function checkPassword() {
        var regMobile=/^\w{6,}$/;
        if(password.value){
            if (regMobile.test(password.value)){
                password_error.innerText='';
                return true;
            }else{
                password_error.innerText='密码长度不能小于6位';
                return false;
            }
        }else{
            password_error.innerText='*密码不能为空';
            return false;
        }
    }
    function checkConfrim() {
        if (password_confirm.value==password.value){
            confirm_error.innerText='';
            return true;
        }else {
            confirm_error.innerText='*两次密码不一致';
            return false;
        }

    }
    function checkcheck(){
        if (checkbox.checked==true){
            return true;
        }else {
            return false;
        }
    }
    tel.onchange=function () {
        checkTelphone();
    };
    username.onchange=function(){
        checkusername();
    };

    password.onchange=function () {
        checkPassword();

    };
    password_confirm.onblur=function () {
        checkConfrim()

    };
    // 登陆的js
    var tel1=document.querySelector('#txt_telephone1');
    var tel_error1=document.querySelector('#telephone1_error');
    var password1=document.querySelector('#txt_password1');
    var password_error1=document.querySelector('#password1_error');
    var yanzhen=document.querySelector('#yanzhen_error');
    var verifyCode = new GVerify("v_container");
    document.querySelector('#btn_regist1').onclick=function () {
        if(checkPassword1() && checkTelphone1() && checkyanzheng()){
            var user={"telephone":tel1.value,"password":password1.value};
            postData('http://192.168.2.40:8080/user/login',user,function (res) {
                if (res && res.status_code=='10003'){
                    localStorage.setItem('token',res.token);
                    if (sessionStorage.getItem('from')){
                        location.href=sessionStorage.getItem('from');
                    }else {
                        location.href='homepage.html';
                    }
                    alert(res.status_text);
                    console.log(res.token);
                }else{
                    alert(res.status_text);
                }

            })

        }

    };
    function checkTelphone1() {
        var regMobile=/^1[3,5,8]\d{9}$/;
        if(tel.value){
            if(regMobile.test(tel1.value)){
                tel_error1.innerText='';
                return true;
            }else{
                tel_error1.innerText='*手机号码格式不正确';
                return false;
            }
        }else {
            tel_error1.innerText='*手机号码不能为空';
            return false;
        }
    }

    function checkPassword1() {
        var regMobile=/^\w{6,}$/;
        if(password1.value){
            if (regMobile.test(password1.value)){
                password_error1.innerText='';
                return true;
            }else{
                password_error1.innerText='密码长度不能小于6位';
                return false;
            }
        }else{
            password_error1.innerText='*密码不能为空';
            return false;
        }

    }
    function checkyanzheng() {
        var res = verifyCode.validate(document.getElementById("code_input").value);
        if(res){
            yanzhen.innerText='';
            return true;
        }else{
            yanzhen.innerText='验证码错误';
            return false
        }


    }

    tel1.onchange=function () {
        checkTelphone1();
    };

    password1.onchange=function () {
        checkPassword1();

    };
    yanzhen.onchange=function () {
        checkyanzheng();

    };

})();

