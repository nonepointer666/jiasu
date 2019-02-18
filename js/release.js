(function () {
   function $(a) {
       return document.querySelector(a)
   }
   //选中房屋出租类型
    var rent_style=$(".rent_box")
    var input_hid=$("#rent_style")
    rent_style.onclick=function (e) {
        if (e.target.nodeName=="P") {
            var a=e.target.parentElement.children
            for (var b of a){
                b.classList.remove("active")
            }
            e.target.classList.toggle("active")
            input_hid.value=e.target.innerText
        }
    }
    // 边框变色
    var roomtype=$("#roomtype")
    roomtype.onclick=function (e) {
        if (e.target.nodeName=="INPUT"){
            var c=e.target.parentElement.children
            for (var d of c){
                b.classList.remove("color_border")
            }
            e.target.classList.toggle("color_border")
        }
    }
    //选中卫生间类型
    var toilettype=$("#toilettype");
    var toilet_type=$("#toilet_type");
    toilettype.onclick=function (e) {
        if (e.target.nodeName=="P") {
            var a=e.target.parentElement.children;
            for (var b of a){
                b.classList.remove("active");
            }
            e.target.classList.toggle("active");
            toilet_type.value=e.target.innerText;
        }
    }
    var houseStyle=$("#houseStyle");
    var house_style=$("#house_style");
    houseStyle.onclick=function (e) {
        if (e.target.nodeName=="P") {
            var a=e.target.parentElement.children;
            for (var b of a){
                b.classList.remove("active");
            }
            e.target.classList.toggle("active");
            house_style.value=e.target.innerText;
        }
    }

    var btn_room=$(".btn_room");
    var addr_show=$("#addr-show");
    var rent_style=$("#rent_style");
    var shi=$("#shi");
    var ting=$("#ting");
    var wei=$("#wei");
    var chu=$("#chu");
    var yangtai=$("#yangtai");
    var area=$("#area");
    var toilet=$("#toilet");
    var beds=$("#beds");
    var number_of_people=$("#number_of_people");
    var room_title=$("#room_title");
    var house_description=$("#house_description");
    var landlord_description=$("#landlord_description");
    var traffic=$("#traffic");
    var around=$("#around");

    btn_room.onclick=function () {
        localStorage.setItem("address",addr_show.value);
        localStorage.setItem("rent_style",rent_style.value);
        localStorage.setItem("house_type",shi.value+"室"+ting.value+"厅"+wei.value+"卫"+chu.value+"厨"+yangtai.value+"阳台");
        localStorage.setItem("area",area.value);
        localStorage.setItem("toilet",toilet.value);
        localStorage.setItem("beds",beds.value);
        localStorage.setItem("number_of_people",number_of_people.value);
        localStorage.setItem("room_title",room_title.value);
        localStorage.setItem("house_description",house_description.value);
        localStorage.setItem("landlord_description",landlord_description.value);
        localStorage.setItem("traffic",traffic.value);
        localStorage.setItem("around",around.value);
        localStorage.setItem("house_style",house_style.value);
        location.href="../pages/release2.html"
    }

})()


