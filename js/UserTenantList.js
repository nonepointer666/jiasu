(function () {
    var content = $(".content");
    var choose_lists_order = $(".choose-lists-order");
    var inform = $(".choose-lists-inform");
    var evaluate = $(".choose-lists-evaluate");
    var collection = $(".choose-lists-collection");
    var set = $(".choose-lists-set");
    var user_data = $(".choose-lists-data");
    var lists_user = $(".choose-lists-user");
    var tag = $(".tags");
    var myDate = new Date();

    function $(str) {
        return document.querySelector(str)
    }
    // 检查姓名格式？
    function checkName() {
        var regMobile=/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/;
        if(name_input.value){
            if(regMobile.test(password.value)){
                password_error.innerText='';
                return true;
            }else {
                password_error.innerText='*密码必须大于六位';
                return false;
            }
        }else {
            password_error.innerText='*密码不能为空';
            return false;
        }
    }
    // 检查密码格式？待修改
    function checkPassword() {
        var regMobile=/^\w{6,}$/;
        if(password.value){
            if(regMobile.test(password.value)){
                password_error.innerText='';
                return true;
            }else {
                password_error.innerText='*密码必须大于六位';
                return false;
            }
        }else {
            password_error.innerText='*密码不能为空';
            return false;
        }
    }
    // 检查手机格式？待修改
    function checkTelphone() {
        var regMobile=/^1[3,5,8]\d{9}$/;
        if(tel.value){
            if(regMobile.test(tel.value)){
                tel_error.innerText='';
                return true;
            }else {
                tel_error.innerText='*手机号码格式不正确';
                return false
            }
        }else {
            tel_error.innerText='*手机号码不能为空';
            return false;
        }
    }
    // 检查邮箱格式
    function checkEmail() {
        var email_input=$("#email_input");
        var email_error=$("#email_error");
        var regEmail=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        if(email_input.value){
            if(regEmail.test(email_input.value)){
                email_error.innerText='';
                return true;
            }else {
                email_error.innerText='*Email格式不正确';
                return false
            }
        }else {
            email_error.innerText='*Email不能为空';
            return false;
        }
    }
    // 获取所有个人数据
    function data_all() {
        var data_all
        var url = "http://127.0.0.1:8080/user/data";
        var data = {"id": localStorage.getItem('id'),
            "nick_name":"0",
            "tel":"0",
            "email":"0"
        };
        postData(url, data, function (res) {
            data_all = res;
            content.innerHTML = `<div class="basic_info">
                    <div class="basic_info_head">
                        <span class="sm-font main-color">基本信息</span>
                    </div>
                    <div class="basic_info_body sm-font row">
                        <ul class="col-xs-9 col-sm-9 col-md-9" id="info_basic">
                            <li class="font">
                                <label class="tag">用户名：</label><span class="info">${data_all.nick_name}</span><span class="info main-color pointer" id="nick_name">修改</span>
                            </li>
                            <li class="font">
                                <label class="tag">手机号码：</label><span  class="info">${data_all.tel}</span><span class="info main-color pointer" id="tel">修改</span>
                            </li>
                            <li class="font">
                            <label class="tag">Email</label><span class="tag">：</span><span class="info">${data_all.email}</span><span class="info main-color pointer" id="email">修改</span>
                            </li>
                            <div class="error" id="email_error"></div>
                        </ul>
                        <div class="user_head_img col-xs-3 col-sm-3 col-md-3">
                            <div class="img_head"><img src=${data_all.icon_url} alt=""></div>
                            <div class="change_head_img">编辑头像</div>
                        </div>
                    </div>
                </div>
                <div class="basic_info">
                    <div class="basic_info_head">
                        <span class="sm-font main-color">社交信息</span><span class="tag info">越多的完善，越有助于在其他房东或者房客中产生信任</span>
                        <span class="fr" id="edit">编辑</span>
                    </div>
                    <div class="basic_info_body sm-font">
                        <ul>
                            <li class="font">
                                <label class="tag">性别：</label><span class="info" id="sex">${data_all.sex}</span>
                            </li>

                            <li class="font">
                                <label class="tag">教育：</label><span class="info" id="education">${data_all.education}</span>
                            </li>
                            <li class="font">
                                <label class="tag">工作：</label><span  class="info" id="work">${data_all.work}</span>
                            </li>
                            <li class="font">
                                <label class="tag">出生日期：</label><span class="info" id="birthday">${data_all.birthday}</span>
                            </li>
                            <li class="font">
                                <label class="tag">所在地区：</label><span  class="info" id="region">${data_all.region}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="basic_info">
                    <div class="basic_info_head">
                        <span class="sm-font main-color">身份信息</span><span class="info tag">仅用于必要的安全环节，其他情况下将为您严格保密</span>
                        <span class="fr" id="validate">验证</span>
                    </div>
                    <div class="basic_info_body sm-font">
                        <ul>
                            <li class="font">
                                <label class="tag">真实姓名：</label><span class="info" id="name">未填写</span>
                            </li>
                            <div class="error" id="name_error"></div>
                            <li class="font">
                                <label class="tag">身份证：</label><span  class="info" id="id_card">未填写</span>
                            </li>
                            <div class="error" id="id_card_error"></div>
                            <!--<li class="sm-font">-->
                                <!--<label class="tag">护照：</label><span>未填写</span>-->
                            <!--</li>-->
                        </ul>
                    </div>
                </div>`;
            var change_basic = $("#info_basic");
            // 基本信息修改
            change_basic.onclick = function (e) {
                if (e.target.innerText=="修改") {
                    e.target.innerText="保存";
                    let pro=e.target.previousElementSibling.innerText;
                    e.target.previousElementSibling.innerText="";

                    // 用户名变成输入框，增加节点
                    var input=document.createElement('input');
                    input.setAttribute("value",pro);
                    input.setAttribute("class","info_input");
                    input.setAttribute("spellcheck","false");
                    input.setAttribute("id","email_input");
                    //        创建一个虚拟容器
                    var df=document.createDocumentFragment();
                    df.appendChild(input);
                    e.target.previousElementSibling.appendChild(df)
                }
                else if (e.target.innerText=="保存") {
                    if (e.target.parentElement.firstElementChild.innerText=="Email") {
                        if(checkEmail()){
                            //    开始提交后台
                            e.target.innerText="修改";
                            var pro1=e.target.previousElementSibling.firstElementChild.value;
                            // 修改信息
                            let url_nick="http://127.0.0.1:8080/user/data/nick"
                            let key_name=e.target.id
                            data[key_name]=pro1
                            postData(url_nick,data,function (res) {
                                e.target.previousElementSibling.innerHTML=pro1;
                            })
                        }
                    }
                    else {
                        e.target.innerText="修改";
                        var pro1=e.target.previousElementSibling.firstElementChild.value;
                        // 修改信息
                        let url_nick="http://127.0.0.1:8080/user/data/nick"
                        let key_name=e.target.id
                        data[key_name]=pro1
                        postData(url_nick,data,function (res) {
                            e.target.previousElementSibling.innerHTML=pro1;
                        })
                    }
                }
            }
            // 社交信息修改
            var edit=$("#edit");
            var sex=$("#sex");
            var education=$("#education");
            var work=$("#work");
            var birthday=$("#birthday");
            var region=$("#region");
            edit.onclick=function () {
                if (edit.innerText=="编辑") {
                    sex.innerHTML=`<input type="text" class="info_input" spellcheck="false" id="sex_input">`;
                    education.innerHTML=`<input type="text" class="info_input" spellcheck="false" id="education_input">`;
                    work.innerHTML=`<input type="text" class="info_input" spellcheck="false" id="work_input">`;
                    birthday.innerHTML=`<input type="text" class="info_input" spellcheck="false" id="birthday_input">`;
                    region.innerHTML=`<input type="text" class="info_input" spellcheck="false" id="region_input">`;
                    var sex_input=$("#sex_input")
                    var education_input=$("#education_input")
                    var work_input=$("#work_input")
                    var birthday_input=$("#birthday_input")
                    var region_input=$("#region_input")
                    edit.innerText="保存"
                }
                else if (edit.innerText=="保存") {
                    var pro_sex=sex_input.value;
                    var pro_education=education_input.value;
                    var pro_work=work_input.value;
                    var pro_birthday=birthday_input.value;
                    var pro_region=region_input.value;
                    // 修改信息
                    let url_socialInfo="http://127.0.0.1:8080/user/data/socialInfo";

                    data["sex"]=pro_sex;
                    data["education"]=pro_education;
                    data["work"]=pro_work;
                    data["birthday"]=pro_birthday;
                    data["region"]=pro_region;
                    postData(url_socialInfo,data,function (res)
                    {
                        sex.innerHTML=pro_sex;
                        education.innerHTML=pro_education;
                        work.innerHTML=pro_work;
                        birthday.innerHTML=pro_birthday;
                        region.innerHTML=pro_region;
                    })

                }
            }
            //真实身份验证
            var validate=$("#validate");
            var name=$("#name");
            var id_card=$("#id_card");
            validate.onclick=function () {
                if (validate.innerText=="验证") {
                    name.innerHTML=`<input type="text" class="info_input" spellcheck="false" id="name_input">`
                    id_card.innerHTML=`<input type="text" class="info_input" spellcheck="false" id="id_card_input">`
                    validate.innerText="保存"
                    var name_input=$("#name_input")
                    var id_card_input=$("#id_card_input")
                }
                else if (validate.innerText=="保存") {
                    var pro_name=name_input.value;
                    var pro_id_card=id_card_input.value;
                    // 修改信息
                    let url_realInfo="http://127.0.0\n" +
                        "                    data[\"id_card\"]=pro_id_card;\n" +
                        "                    postData(url_realInfo,data,function (res) {\n" +
                        "                        name.innerHTML=pro_name;\n" +
                        "                        id_card.innerHTML=pro_id_card;\n" +
                        "                    }).1:8080/user/data/realInfo"

                    data["name"]=pro_name;

                }
            }


        })
    }
    // 打开即获取所有个人数据
    localStorage.setItem('nick_name', "NonePointer");
    localStorage.setItem('tel', 15665412010);
    localStorage.setItem('id', 1);
    if (localStorage.getItem('id')) {
        // 声明个人所有数据的集合
        // data_all()
    }
    // else {
    //     alert("请先登录")
    //     // location.href="登录"
    // }


// 订单
    choose_lists_order.onclick = function () {
        content.innerHTML = `<h2>暂无订单</h2>`;
        tag.innerText = "我的订单";
    }

// 通知

    inform.onclick = function () {

        content.innerHTML = `<div class="con_inform">
                    <div class="title_inform left">喜迎猪年，佳宿福利滚滚来！积分换券限时5折，先换券，后下单！前往“我”-“积分”进行兑换>>></div>
                    <div class="right"><span class="glyphicon glyphicon-remove"></span></div>
                    <div class="date tag"></div>
                </div>`;
        var date = document.querySelector(".date");
        date.innerText = myDate.toLocaleString();
        tag.innerText = "通知";
    };
    // 收藏
    collection.onclick = function () {

        content.innerHTML = `<div class="row">
                    <div class=""></div>
                </div>
                <div class="row collection">
                    <div class="col-md-6 col-sm-12 col-xs-12">

                            <div class="con-collection" id="001">
                                <div><img src="../images/1.jpg" alt="" class="img-responsive" ></div>
                                <div><span class="title_collection ">江汉路地铁口/武汉市中心/汉口江滩/舒适民宿</span></div>
                                <div class="tag"><span class="">整套出租</span><span>/一室一厅</span><span>/一床</span><span>/宜住两人</span></div>
                                <div >￥<span class="mid-font">444</span>起/晚</div>
                                <div class="del"><span class="glyphicon glyphicon-remove"></span><div class="dels"></div></div>
                            </div>

                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">

                            <div class="con-collection" id="001">
                                <div><img src="../images/1.jpg" alt="" class="img-responsive" ></div>
                                <div><span class="title_collection ">江汉路地铁口/武汉市中心/汉口江滩/舒适民宿</span></div>
                                <div class="tag"><span class="">整套出租</span><span>/一室一厅</span><span>/一床</span><span>/宜住两人</span></div>
                                <div >￥<span class="mid-font">444</span>起/晚</div>
                                <div class="del"><span class="glyphicon glyphicon-remove"></span><div class="dels"></div></div>
                            </div>

                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">

                            <div class="con-collection" id="001">
                                <div><img src="../images/1.jpg" alt="" class="img-responsive" ></div>
                                <div><span class="title_collection ">江汉路地铁口/武汉市中心/汉口江滩/舒适民宿</span></div>
                                <div class="tag"><span class="">整套出租</span><span>/一室一厅</span><span>/一床</span><span>/宜住两人</span></div>
                                <div >￥<span class="mid-font">444</span>起/晚</div>
                                <div class="del"><span class="glyphicon glyphicon-remove"></span><div class="dels"></div></div>
                            </div>

                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">

                            <div class="con-collection" id="001">
                                <div><img src="../images/1.jpg" alt="" class="img-responsive" ></div>
                                <div><span class="title_collection ">江汉路地铁口/武汉市中心/汉口江滩/舒适民宿</span></div>
                                <div class="tag"><span class="">整套出租</span><span>/一室一厅</span><span>/一床</span><span>/宜住两人</span></div>
                                <div >￥<span class="mid-font">444</span>起/晚</div>
                                <div class="del"><span class="glyphicon glyphicon-remove"></span><div class="dels"></div></div>
                            </div>

                    </div>
                    

                </div>`
        var collection = document.querySelector(".collection")
        collection.onclick = function (event) {
            var node = event.target;

            if (node.className == "dels") {
                alert("dels");
            }
            ;
            if (node.className == "img-responsive") {
                alert("跳转");
                ;
            }
            ;
        };
        tag.innerText = "我的收藏";
    }
    // 评价
    evaluate.onclick = function () {
        content.innerHTML = `<div class="user_evaluates row">
                            <div class="col-md-2 col-sm-2 col-xs-2" style="text-align: center">
                                <img src="../images/u1.jpg" alt="" class="user_icon">
                            </div>
                            <div class="col-md-10 col-sm-10 col-xs-10 user_evaluate_con">
                                <p><span class="user_tag main-color xs-font">喜欢GENE的设计狗</span><span class="tag"> 入住时间： </span><span class="tag">2019年01月</span></p>
                                <p class="xs-font ">一家九口老少都玩儿的很开心！！！很好的住宿体验，门口47路直达各种玩耍的地方！距离太阳岛和冰雪大世界都不远！主要是很干净，太适合居家出行租住了，以后有朋友去哈尔滨还会推荐住的！</p>
                                <p class="landlord_reply boundary_top">
                                    <p class="tag sm-font">房东回复：</p>
                                    <p class="xs-font">一家九口老少都玩儿的很开心！！！很好的住宿体验，门口47路直达各种玩耍的地方！距离太阳岛和冰雪大世界都不远！主要是很干净，太适合居家出行租住了，以后有朋友去哈尔滨还会推荐住的！</p>
                                </p>
                            </div>
                        </div>
<div class="user_evaluates row">
                            <div class="col-md-2 col-sm-2 col-xs-2" style="text-align: center">
                                <img src="../images/u1.jpg" alt="" class="user_icon">
                            </div>
                            <div class="col-md-10 col-sm-10 col-xs-10 user_evaluate_con">
                                <p><span class="user_tag main-color xs-font">喜欢GENE的设计狗</span><span class="tag"> 入住时间： </span><span class="tag">2019年01月</span></p>
                                <p class="xs-font boundary_down">一家九口老少都玩儿的很开心！！！很好的住宿体验，门口47路直达各种玩耍的地方！距离太阳岛和冰雪大世界都不远！主要是很干净，太适合居家出行租住了，以后有朋友去哈尔滨还会推荐住的！</p>

                            </div>`;
        tag.innerText = "我的评价";
    }

    // 资料
    user_data.onclick = function () {
        data_all()
    }
})();