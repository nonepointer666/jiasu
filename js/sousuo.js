(function () {
    var ru=document.querySelector('#test1');
    var likai=document.querySelector('#test2');
    var sou=document.querySelector('#search_btn');
    var city=document.querySelector('#addr-show02');
    var tishi=document.querySelector('#citytishi');
    function bijiao() {
       if (ru.value && likai.value &&checkcity()){
           if (ru.value < likai.value) {
               sessionStorage.setItem("address",city.value)
               location.href="pages/search1.html"
       }
           else {
               alert('入住时间不能大于离宿时间');
           }

       }else {
           alert('请选择入住与离宿时间');
       }
    }
    function checkcity(){
        if (city.value){
            tishi.style.display='none'
        } else {
            tishi.style.display='block'

        }
    }

    sou.onclick=function () {
        bijiao();
        checkcity();

    };
    city.onfocus=function () {
        tishi.style.display='none';

    }
})();