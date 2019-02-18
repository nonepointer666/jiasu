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
        postData(url_search,require,function (res) {
            console.log(res);
            house_list.innerHTML="";
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
            };
            // 分页
            var pages=document.querySelectorAll(".pages");
            var total=1;
            for (var j of pages){

                j.classList.add("page_active");
                j.onclick=function () {
                    require["page"]=(this.innerText-1)*8;
                    search(require);
                }
                if (total==Math.ceil(res.length/8)){
                    break;
                };
                total+=1;
            };

            var rooms=document.querySelectorAll(".house_item");
            for (var m of rooms){
                m.onclick=function () {
                    location.href="../pages/details.html";
                }
            }
        });
    }
    // search(require);
    rentstyle.onclick=function (e) {
        if (e.target.nodeName=="DIV") {
            rent_style.value=e.target.getAttribute("data-rent")
        }

    };

    price.onchange=function(){
        alert(this.value)
    }

    keywordIpt.oninput=function () {
        key_word.value=keywordIpt.value;
    };

    searchBtn.onclick=function () {
        search(require);
    }
    // var search_cont=$(".search_cont")
    //     search_cont.innerHTML =
})();
