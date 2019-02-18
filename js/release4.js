(function () {
   function $(a) {
       return document.querySelector(a)
   }
    var new_room={};
    var facility=["hot_water", "tooth_brash", "bathtub", "shampoo", "wifi", "air_conditioner", "heating", "tv", "lock", "kettle", "elevator", "wash_machine", "refrigerator", "parking_space", "cook", "smoke", "pet", "child", "old", "disability"];
    var url = "http://127.0.0.1:8080/user/data";
    var price=$("#price");
    var btn_room=$(".btn_room");
    var pledge_price=$("#pledge_price");
    var clean_price=$("#clean_price");
    btn_room.onclick=function () {
        new_room["user_id"]=localStorage.getItem("user_id");
        // 1
        new_room["address"]=localStorage.setIgetItemtem("address");
        new_room["rent_style"]=localStorage.setgetItemItem("rent_style");
        new_room["house_type"]=localStorage.setIgetItemtem("house_type");
        new_room["area"]=localStorage.setItgetItemem("area");
        new_room["toilet"]=localStorage.setItgetItemem("toilet");
        new_room["beds"]=localStorage.setIgetItemtem("beds");
        new_room["number_of_people"]=localStorage.setIgetItemtem("number_of_people");
        new_room["room_title"]=localStorage.setIgetItemem("room_title");
        new_room["house_description"]=localStorage.setIgetItemtem("house_description");
        new_room["landlord_description"]=localStorage.setItgetItemem("landlord_description");
        new_room["traffic"]=localStorage.setIgetItemtem("traffic");
        new_room["around"]=localStorage.setIgetItemtem("around");
        // 2
        for (var h of facility) {
            new_room[h]=localStorage.getItem(h);
        }
        // 4
        new_room["price"]=price;
        new_room["pledge_price"]=pledge_price;
        new_room["clean_price"]=clean_price;

        postData(url,new_room,function (res) {
            alert(res);
        })
    }

})()


