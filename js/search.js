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
//
//     // 分页
//     // var pages=document.querySelectorAll(".pages");
//     // var total=1;
//     // for (var j of pages){
//     //
//     //     j.classList.add("page_active");
//     //     j.onclick=function () {
//     //         require["page"]=(this.innerText-1)*8;
//     //         search(require);
//     //     }
//     //     if (total==Math.ceil(res.length/8)){
//     //         break;
//     //     };
//     //     total+=1;
//     // };
//     function fenye(b) {
//         var ul = document.getElementById('ul-fenye');
//         if (Math.ceil(b/6)==1){
//             ul.innerHTML=`<li>首页</li>
//                                         <li>上一页</li>
//                                         <li></li>
//                                         <li>下一页</li>
//                                         <li>尾页</li>`
//         }else if (Math.ceil(b/6)==2) {
//             ul.innerHTML=`<li>首页</li>
//                                         <li>上一页</li>
//                                         <li></li>
//                                         <li></li>
//                                         <li>下一页</li>
//                                         <li>尾页</li>`
//         }else if (Math.ceil(b/6)>=3){
//             ul.innerHTML=`<li>首页</li>
//                                         <li>上一页</li>
//                                         <li></li>
//                                         <li></li>
//                                         <li></li>
//                                         <li>下一页</li>
//                                         <li>尾页</li>`
//         }
//         var li = ul.getElementsByTagName('li');
//         li[2].className = 'background';
//         var num01 = 1;
//         var num02 = Math.ceil(b/6)/*总数*/;
// //1 //首页的点击事件
//         li[li.length-li.length].onclick = function(){
//             Background(2);
//             num01 = 1;
//             content(num01);
//         }
// //2 //尾页的点击事件
//         li[li.length-1].onclick = function(){
//             Background(li.length-3);
//             num01 = num02-(li.length-5);
//             content(num01)
//         }
// //3 //上一页的点击事件
//         li[li.length-(li.length-1)].onclick = function(){
//
//             for(var j = 0;j<li.length-4;j++){
//                 if(li[j+2].className == 'background' && li[j+2].innerHTML != 1){
//                     if(j+2 != li.length-(li.length-2)){
//                         Background(j+1);
//                     }
//                     break;
//                 }
//             }
//             if(j+2 == li.length-(li.length-2)){
//                 num01 -- ;
//                 content(num01);
//             }
//         }
// //4 下一页的点击事件
//         li[li.length-2].onclick = function(){
//             for(var j = 0;j<li.length;j++){
//                 if(li[j].className == 'background' && li[j].innerHTML < num02){  //* && 写最后一页的总数*/
//                     if(j+1 < li.length-2){
//                         Background(j+1);
//                     }
//                     break;
//                 }
//             }
//             if(j+1 == li.length-2){
//                 num01++;
//                 content(num01);
//             }
//         }
// //     分页的点击事件
//         for(var i = 0;i<li.length-4;i++){
//             li[i+2].index = i+2;
//             li[i+2].onclick = function(){
//                 Background(this.index);
//             }
//         }
// //把所有的分页背景去掉，给指定的分页添加背景颜色
//         function Background(num){
//             for(var i = 0;i<li.length;i++){
//                 li[i].className = li[i].className.replace('background','');
//                 li[num].className = 'background';
//             }
//         }
// // 给li 写内容
//         content(num01);
//         function content(number){
//             for(var i=0;i<li.length-4;i++){
//                 li[i+2].innerHTML = number;
//                 number++;
//             }
//         }
//     }
//
//     var page=document.querySelector('#ul-fenye')
//     let s=res.length;
//     fenye(6);
//
//     page.onclick=function (res) {
//         var commodity=document.querySelector('.r-4 .col-md-12 .r-4-1');
//         for (var p of page.children){
//             if (p.className=='background'){
//                 commodity.innerHTML=''
//                 xr(p.innerHTML-1)
//             }
//         }
//     }
//
//     // function xr(p) {
//     //     var commodity=document.querySelector('.r-4 .col-md-12 .r-4-1');
//     //     var b=res
//     //     if (b && b.length>0){
//     //         for (var goods=16*p;goods<(p+1)*16;goods++) {
//     //             var k=b[goods].commodity_component.split('&')
//     //             var c=b[goods].commodity_name+k+b[goods].capacity+b[goods].effect
//     //             var d=c.slice(0,30)+'...';
//     //             if (goods %4 ==0){
//     //                 commodity.innerHTML+=`<div class="goods goods-1 col-md-3" >
//     //     <div class="goods-content">
//     //     <a href="#"><img src="../${b[goods].com_img}" class="img-responsive"></a>
//     //     <div class="goods-d-1">
//     //     <p class="goods-p-1"> <strong>${b[goods].commodity_price}</strong> <span class="rect">市场价</span></p>
//     // <p class="goods-p-2"><a href="#">${d}</a></p><p class="goods-p-3"><a href="#"><span class="glyphicon glyphicon-menu-hamburger"></span><span>${b[goods].enterprise_name}</span></a></p>
//     // </div>
//     // </div>
//     // </div>`
//     //             } else if (goods%4 ==1){
//     //                 commodity.innerHTML+=`<div class="goods goods-2 col-md-3" >
//     //     <div class="goods-content">
//     //     <a href="#"><img src="../${b[goods].com_img}" class="img-responsive"></a>
//     //     <div class="goods-d-1">
//     //     <p class="goods-p-1"> <strong>${b[goods].commodity_price}</strong> <span class="rect">市场价</span></p>
//     // <p class="goods-p-2"><a href="#">${d}</a></p><p class="goods-p-3"><a href="#"><span class="glyphicon glyphicon-menu-hamburger"></span><span>${b[goods].enterprise_name}</span></a></p>
//     // </div>
//     // </div>
//     // </div>`
//     //             } else if (goods%4==2){
//     //                 commodity.innerHTML+=`<div class="goods goods-3 col-md-3" >
//     //     <div class="goods-content">
//     //     <a href="#"><img src="../${b[goods].com_img}" class="img-responsive"></a>
//     //     <div class="goods-d-1">
//     //     <p class="goods-p-1"> <strong>${b[goods].commodity_price}</strong> <span class="rect">市场价</span></p>
//     // <p class="goods-p-2"><a href="#">${d}</a></p><p class="goods-p-3"><a href="#"><span class="glyphicon glyphicon-menu-hamburger"></span><span>${b[goods].enterprise_name}</span></a></p>
//     // </div>
//     // </div>
//     // </div>`
//     //             } else if (goods%4==3){
//     //                 commodity.innerHTML+=`<div class="goods goods-4 col-md-3" >
//     //     <div class="goods-content">
//     //     <a href="#"><img src="../${b[goods].com_img}" class="img-responsive"></a>
//     //     <div class="goods-d-1">
//     //     <p class="goods-p-1"> <strong>${b[goods].commodity_price}</strong> <span class="rect">市场价</span></p>
//     // <p class="goods-p-2"><a href="#">${d}</a></p><p class="goods-p-3"><a href="#"><span class="glyphicon glyphicon-menu-hamburger"></span><span>${b[goods].enterprise_name}</span></a></p>
//     // </div>
//     // </div>
//     // </div>`
//     //             }
//     //         }
//     //     }
//     // }
//     // xr(0)
//     page.onclick=function () {
//         var commodity=document.querySelector('.r-4 .col-md-12 .r-4-1');
//         for (var p of page.children){
//             if (p.className=='background'){
//                 commodity.innerHTML=''
//                 xr(p.innerHTML-1)
//             }
//         }
//     }
// })
var all_room;
// 分页
pagess(66)
function pagess(b) {
    var ul=$(".page_box");
    b=Math.ceil(b / 6);
    if (b == 1) {
        ul.innerHTML = `<li class="page_boxs" id="index_page">首页</li>
            <li class="page_boxs" id="previous">上一页</li>
            <li class="pages">1</li>
            <li class="page_boxs" id="next">下一页</li>
            <li class="page_boxs" id="last_page">尾页</li>`
    } else if (b == 2) {
        ul.innerHTML = `<li class="page_boxs" id="index_page">首页</li>
            <li class="page_boxs" id="previous">上一页</li>
            <li class="pages">1</li>
            <li class="pages">2</li>
            <li class="page_boxs" id="next">下一页</li>
            <li class="page_boxs" id="last_page">尾页</li>`
    } else if (b >= 3) {
        ul.innerHTML = `<li class="page_boxs" id="index_page">首页</li>
            <li class="page_boxs" id="previous">上一页</li>
            <li class="pages">1</li>
            <li class="pages">2</li>
            <li class="pages">3</li>
            <li class="page_boxs" id="next">下一页</li>
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
    // 上一页
    previous.onclick=function () {
        var a=next.previousElementSibling.innerText;
        if (a>3 && a<=6){
            previous.nextElementSibling.innerText=1;
            previous.nextElementSibling.nextElementSibling.innerText=2;
            previous.nextElementSibling.nextElementSibling.nextElementSibling.innerText=3;
        }else if (a>6){
            previous.nextElementSibling.innerText=a-5;
            previous.nextElementSibling.nextElementSibling.innerText=a-4;
            previous.nextElementSibling.nextElementSibling.nextElementSibling.innerText=a-3;
        }
    }
    // 下一页
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
