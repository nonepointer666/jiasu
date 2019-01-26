var img_lists=document.querySelector(".img_lists");
var big_img=document.querySelector(".big_img");
img_lists.onclick=function (e) {

    if (e.target.nodeName=="IMG") {

        big_img.src=e.target.src
        var a=e.target.parentElement.parentElement.children
        for (var b of a){
            b.style.outline="";
        }
        e.target.parentElement.style.outline="3px solid var(--main-color)"
    }
}


var con_right=document.querySelector('.con_right');

window.onscroll=function () {
    var scroll_h = document.documentElement.scrollTop || document.body.scrollTop;
    // alert(scroll_h);
    if (scroll_h > 132) {
        con_right.style.position = "fixed";
        con_right.style.margin="-132px 0";
    } else {
        con_right.style.position = "relative";
        con_right.style.margin="0";
    }
}