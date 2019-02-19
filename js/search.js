(function(){
    function $(str) {
        return document.querySelector(str)
    }
    var require={"page":"0"};
    var cityIpt=$("#cityIpt");
    var start=$("#start");
    var end=$("#end");
    var personNumIpt=$("#personNumIpt");
    var start_time=$("#start_time");
    var end_time=$("#end_time");
    var rentstyle=$(".rent_style");
    var rent_style=$("#rent_style");
    var keywordIpt=$("#keywordIpt");
    var key_word=$("#key_word");
    var price=$("#price");
    var body=$("body");
    var requireList=$("#requireList");
    var searchBtn=$("#search_btn");
    var house_list=$(".house_list");
    var url_search="http://127.0.0.1:8080/user/search";

var all_room;
// 分页
pagess(66);
function pagess(b) {
    var ul=$(".page_box");
    b=Math.ceil(b / 6);
    if (b == 1) {
        ul.innerHTML = `<li class="page_boxs" id="index_page">首页</li>
            <li class="page_boxs" id="previous">上一个</li>
            <li class="pages">1</li>
            <li class="page_boxs" id="next">下一个</li>
            <li class="page_boxs" id="last_page">尾页</li>`
    } else if (b == 2) {
        ul.innerHTML = `<li class="page_boxs" id="index_page">首页</li>
            <li class="page_boxs" id="previous">上一个</li>
            <li class="pages">1</li>
            <li class="pages">2</li>
            <li class="page_boxs" id="next">下一个</li>
            <li class="page_boxs" id="last_page">尾页</li>`
    } else if (b >= 3) {
        ul.innerHTML = `<li class="page_boxs" id="index_page">首页</li>
            <li class="page_boxs" id="previous">上一个</li>
            <li class="pages">1</li>
            <li class="pages">2</li>
            <li class="pages">3</li>
            <li class="page_boxs" id="next">下一个</li>
            <li class="page_boxs" id="last_page">尾页</li>`
    }
    var index_page=$("#index_page");
    var previous=$("#previous");
    var next=$("#next");
    var last_page=$("#last_page");
    var pages=document.querySelectorAll(".pages");
    // 首页
    index_page.onclick=function () {
        var t=1;
        for (var y of pages){
            y.innerText=t;
            t+=1;
        }
    }
    // 尾页
    last_page.onclick=function () {
        if(b>3){
            previous.nextElementSibling.innerText=b-2;
            previous.nextElementSibling.nextElementSibling.innerText=b-1;
            previous.nextElementSibling.nextElementSibling.nextElementSibling.innerText=b;
        }
    }
    // 上一个
    previous.onclick=function () {
        var a=previous.nextElementSibling.innerText;
        if (a>1 && b>3){
            previous.nextElementSibling.innerText=a-1;
            previous.nextElementSibling.nextElementSibling.innerText=a;
            previous.nextElementSibling.nextElementSibling.nextElementSibling.innerText=parseInt(a)+1;
        }else if (a>6){
            previous.nextElementSibling.innerText=a-5;
            previous.nextElementSibling.nextElementSibling.innerText=a-4;
            previous.nextElementSibling.nextElementSibling.nextElementSibling.innerText=a-3;
        }
    };
    // 下一个
    next.onclick=function () {
        var a=next.previousElementSibling.innerText;
        if (b-a<3 && b>3){
            next.previousElementSibling.previousElementSibling.previousElementSibling.innerText=b-2;
            next.previousElementSibling.previousElementSibling.innerText=b-1;
            next.previousElementSibling.innerText=b;
        }else if (b-a>=3){
            next.previousElementSibling.previousElementSibling.previousElementSibling.innerText=parseInt(a)+1;
            next.previousElementSibling.previousElementSibling.innerText=parseInt(a)+2;
            next.previousElementSibling.innerText=parseInt(a)+3;
        }
    };
    // 页码的点击事件
    ul.onclick=function (e) {
        if(e.target.className=="pages"){
            var p=all_room.slice((e.target.innerText-1)*6,e.target.innerText);
            renovate(p);
        }
    }
}

// 刷新内容
    function renovate(res) {
        house_list.innerHTML="";
        var total=1;
        for (var l of res){
            if (l["rent_style"]==0){
                l["rentStyle"]="整套出租";
            }
            else if (l["rent_style"]==-1){
                l["rentStyle"]="不限";
            }
            else if (l["rent_style"]==1){
                l["rentStyle"]="独立单间";
            }
            else if (l["rent_style"]==2){
                l["rentStyle"]="合住房间";
            }
            house_list.innerHTML+=`<div class="house_item clearfix">
                <a class="disblock clearfix" target="_blank" data-room=${l["house_id"]}>
                <div class="l clearfix">
                    <div class="img"><img src=${l["img_url1"]}>
                    </div>
                    <div class="txt"><h1>${l["room_title"]}</h1>
                        <h3></h3>
                        <div class="star_box clearfix"><span>${l["rentStyle"]}/可住${l["number_of_people"]}人</span>
                            <ul class="stars clearfix" data-val="5">
                                <li class="star active"></li>
                                <li class="star active"></li>
                                <li class="star active"></li>
                                <li class="star active"></li>
                                <li class="star active"></li>
                            </ul>
                            <span class="score">5分</span></div>
                        <div class="price_box"><span>¥</span><span class="price">${l["price"]}</span><span>/晚</span></div>
                        <ul class="tag_list">
                            <li>${l["house_style"]}</li>
                            <li>${l["beds"]}</li>
                        </ul>
                    </div>
                </div>
                <div class="r">
                    <dt class="headimg"><img
                            src=${l["icon_url"]}>
                    </dt>
                    <dd>房东</dd>
                    <dd class="name_dd">${l["nick_name"]}</dd>
                </div>
            </a></div>`
            total+=1;
            if (total==6){
                break;
            }
        };
        //挑转详情页
        var rooms=document.querySelectorAll(".house_item");
        for (var m of rooms){
            m.onclick=function () {
                location.href="../pages/details.html";
            }
        }
        all_room=res;

    }
    //搜索
    function search(require){
        require["house_style"]=sessionStorage.getItem("house_style");
        start_time.value=start.value;
        end_time.value=end.value;
        for (var i of requireList.children){
            if(i.getAttribute("id")=="address" || i.getAttribute("id")=="key_word"){
                require[i.getAttribute("id")]="%"+i.value+"%";
            }
            else {
                require[i.getAttribute("id")]=i.value;
            }
        }
        postData(url_search,require,renovate(res));
    }

    search(require);
    //点击传值
    rentstyle.onclick=function (e) {
        if (e.target.nodeName=="DIV") {
            rent_style.value=e.target.getAttribute("data-rent")
        }

    };

    price.onchange=function(){
        alert(this.value)
    };

    keywordIpt.oninput=function () {
        key_word.value=keywordIpt.value;
    };

    searchBtn.onclick=function () {
        search(require);
    }
    // var search_cont=$(".search_cont")
    //     search_cont.innerHTML =
})();
// // 上一页
// previous.onclick=function () {
//     var a=next.previousElementSibling.innerText;
//     if (a>3 && a<=6){
//         previous.nextElementSibling.innerText=1;
//         previous.nextElementSibling.nextElementSibling.innerText=2;
//         previous.nextElementSibling.nextElementSibling.nextElementSibling.innerText=3;
//     }else if (a>6){
//         previous.nextElementSibling.innerText=a-5;
//         previous.nextElementSibling.nextElementSibling.innerText=a-4;
//         previous.nextElementSibling.nextElementSibling.nextElementSibling.innerText=a-3;
//     }
// };
// // 下一页
// next.onclick=function () {
//     var a=next.previousElementSibling.innerText;
//     if (b-a<3 && b>3){
//         next.previousElementSibling.previousElementSibling.previousElementSibling.innerText=b-2;
//         next.previousElementSibling.previousElementSibling.innerText=b-1;
//         next.previousElementSibling.innerText=b;
//     }else if (b-a>=3){
//         next.previousElementSibling.previousElementSibling.previousElementSibling.innerText=parseInt(a)+1;
//         next.previousElementSibling.previousElementSibling.innerText=parseInt(a)+2;
//         next.previousElementSibling.innerText=parseInt(a)+3;
//     }
// };