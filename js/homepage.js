(function () {
var $=function (e) {
    return document.querySelector(e)
};
var minju=$("#min");
minju.onclick=function () {
    sessionStorage.setItem("key_word",minju.children[1].innerText)
    location.href="../pages/search1.html"
};
var yangfang=$("#yangfang");
yangfang.onclick=function () {
    sessionStorage.setItem("key_word",yangfang.children[1].innerText)
    location.href="../pages/search1.html"
};
var haijing=$("#haijing");
haijing.onclick=function () {
    sessionStorage.setItem("key_word",haijing.children[1].innerText)
    location.href="../pages/search1.html"
};
var kezhan=$("#kezhan");
    kezhan.onclick=function () {
    sessionStorage.setItem("key_word",kezhan.children[1].innerText);
    location.href="../pages/search1.html"
};
var biesu=$("#biesu");
    biesu.onclick=function () {
    sessionStorage.setItem("key_word",biesu.children[1].innerText)
        location.href="../pages/search1.html"
};
var gongyu=$("#gongyu");
    gongyu.onclick=function () {
    sessionStorage.setItem("key_word",gongyu.children[1].innerText);
        location.href="../pages/search1.html"
};
var qinzi=$("#qinzi");
    qinzi.onclick=function () {
    sessionStorage.setItem("key_word",qinzi.children[1].innerText)
        location.href="../pages/search1.html"
};
var miyue=$("#miyue");
    miyue.onclick=function () {
    sessionStorage.setItem("key_word",miyue.children[1].innerText)
        location.href="../pages/search1.html"
};
var lvpai=$("#lvpai");
    lvpai.onclick=function () {
    sessionStorage.setItem("key_word",lvpai.children[1].innerText)
        location.href="../pages/search1.html"
};
var juhui=$("#juhui");
    juhui.onclick=function () {
    sessionStorage.setItem("key_word",juhui.children[1].innerText)
        location.href="../pages/search1.html"
};
var zhekou=$("#zhekou");
    zhekou.onclick=function () {
    sessionStorage.setItem("key_word",zhekou.children[1].innerText)
        location.href="../pages/search1.html"
};
var tianju=$("#tianju");
tianju.onclick=function () {
    sessionStorage.setItem("key_word",tianju.children[1].innerText)
    location.href="../pages/search1.html"
};
var beijing=$("#beijing");
    beijing.onclick=function () {
    sessionStorage.setItem("key_word",beijing.children[1].innerText)
        location.href="../pages/search1.html"
};
var shanghai=$("#shanghai");
    shanghai.onclick=function () {
    sessionStorage.setItem("key_word",shanghai.children[1].innerText)
        location.href="../pages/search1.html"
};
var chengdu=$("#chengdu");
    chengdu.onclick=function () {
    sessionStorage.setItem("key_word",chengdu.children[1].innerText)
        location.href="../pages/search1.html"
};
var lasa=$("#lasa");
    lasa.onclick=function () {
    sessionStorage.setItem("key_word",lasa.children[1].innerText)
        location.href="../pages/search1.html"
};
})();