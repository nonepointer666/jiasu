(function () {
var s=document.querySelector('#aaaa');
    s.onmouseover=function (e) {
        if (e.target.nodeName=="IMG") {
            // alert(e.target.parentNode.lastElementChild.className)

            for(let b of s.children){
                // alert(b.firstElementChild.lastElementChild.className)
                if(b.firstElementChild.lastElementChild.className=="q4"){
                    b.firstElementChild.lastElementChild.style.display = "none";
                }
                if(b.firstElementChild.lastElementChild.previousElementSibling.className=="q9"){
                    b.firstElementChild.lastElementChild.previousElementSibling.style.color = "white";
                }
                if(b.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.className=="q2"){
                    b.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.style.color = "white";
                }
            }
            e.target.parentNode.lastElementChild.style.display = "block";
            e.target.nextElementSibling.nextElementSibling.style.color = "black";
            e.target.nextElementSibling.style.color = "black";


        }
    }
    s.onmouseout=function (e) {
        if (e.target.className=="q4") {
            // alert(e.target.parentNode.lastElementChild.className)
            e.target.style.display = "none";
            e.target.previousElementSibling.style.color = "white";
            e.target.previousElementSibling.previousElementSibling.style.color = "white";
        }
    }



})();