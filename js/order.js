(function () {
    var $=function (e) {
        return document.querySelector("e")
    }

    var tou=document.querySelector(".right_outer");
    var name=document.querySelector('#name');
    var name_error=document.querySelector('#name_error');
    var idcard=document.querySelector('#idcard');
    var idcard_error=document.querySelector('#idcard_error');
    var mobile=document.querySelector('#mobilenumber');
    var mobile_error=document.querySelector('#mobilenumber_error');
    var ding=document.querySelector('.add_user');
    var jiabiao=document.querySelector('.jiabiao');
    var jian=document.querySelector('.jianbiao');
    var token=window.localStorage && window.localStorage.getItem('token');
    var modaldeng = document.getElementById('modadeng');

    if (token){

    } else {
        sessionStorage.setItem('from','dingdan.html');
        modaldeng.style.display = "block";
    }
    window.onscroll=function () {
        var scroll_h=document.documentElement.scrollTop ||document.body.scrollTop;
        if(scroll_h>96){

            tou.style.position="fixed";
            tou.style.margin="-86px 0";
        }else{
            tou.style.position="relative";
            tou.style.margin="0";
        }

    }
    function checkname() {
        var regMobile= /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
        if (name.value) {
            if (regMobile.test(name.value)){
                name_error.innerHTML='';
            } else{
                name_error.innerHTML='*仅可使用汉字';
            }
        }else {
            name_error.innerHTML='*请填写真实姓名';
        }

    }
    function checkidcard() {
        var regMobile= /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/;
        if (idcard.value) {
            if (regMobile.test(idcard.value)){
                idcard_error.innerHTML='';
            } else{
                idcard_error.innerHTML='*身份证号错误';
            }
        }else {
            idcard_error.innerHTML='*请填写身份证号';
        }

    }
    function checkmobile() {
        var regMobile= /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
        if (mobile.value) {
            if (regMobile.test(mobile.value)){
                mobile_error.innerHTML='';
            } else{
                mobile_error.innerHTML='*手机号码格式错误';
            }
        }else {
            mobile_error.innerHTML='*请填写手机号码';
        }

    }
    name.onblur=function () {
        checkname();

    };
    idcard.onblur=function () {
        checkidcard();

    };
    mobile.onblur=function () {
        checkmobile();

    };
    ding.onclick=function () {
        jiabiao.innerHTML+=`<div class="biaotou"></div>
                <table>
                    <tr>
                        <td >*真实姓名:</td>
                        <td><input type="text" id="name" placeholder="请确保信息真实"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><div id="name_error"></div></td>
                    </tr>
                    <tr>
                        <td>*身份证号:</td>
                        <td><input type="text" id="idcard" placeholder="请确保信息真实"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><div id="idcard_error"></div></td>
                    </tr>
                    <tr>
                        <td>手机号:</td>
                        <td><input type="text" id="mobilenumber" placeholder="请确保信息真实"></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><div id="mobilenumber_error"></div></td>
                    </tr>
                </table>
                <div class="jianbiao">取消</div>`

        var jian=document.querySelectorAll(".jianbiao");
        for (var a of jian) {
            a.onclick=function () {
                this.parentNode.removeChild(this.previousElementSibling.previousElementSibling);
                this.parentNode.removeChild(this.previousElementSibling);
                this.parentNode.removeChild(this);

            }
        }
    };


})();
