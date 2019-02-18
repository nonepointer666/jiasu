(function () {
   function $(a) {
       return document.querySelector(a)
   }
   var facility=[];
    var facility_box=$(".facility_box");
   //选中房屋出租类型
    var checkboxs=document.querySelectorAll(".checkboxs");
    for (var e of checkboxs){
       e.onclick=function () {
           this.nextElementSibling.classList.toggle("main-color")
       }
    }
    var btn_room=$(".btn_room");
    btn_room.onclick=function () {
        for (var f of facility_box.children){
            var g=f.firstElementChild.id;
            facility.push(g);
            if (f.checked){
                localStorage.setItem(g,"1");
            }
            else {
                localStorage.setItem(g,"0");
            }
        }
        console.log(facility);
        location.href="../pages/release4.html"
    }



})()


