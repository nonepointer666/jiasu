(function () {
    var all_imgs = ['beijing1.jpg', 'beijing2.jpg', 'beijing3.jpg', 'beijing4.jpg'];
    var imgs = document.getElementById('imgs01');
    var left = document.getElementById('a1');
    var right = document.getElementById('a2');
    var tu = document.querySelector('.tu');
    var index = 0;
    var inter;
    var point=document.querySelector('#biao')

    function createInteral() {
        inter = setInterval(function () {
            index++;
            index = index % 4;
            imgs.src = 'images/' + all_imgs[index];
            // tu.innerHTML='';
            // tu.innerHTML=`<img src="images/${all_imgs[index]}" alt="..." id="imgs01">`
        }, 3000);
    }

    createInteral();

    function back_forword(event) {

        var myid=event.target.id;

        clearInterval(inter);
        if(myid=='icon_right'){
            if (index == 3) {
                index = 0;
            } else {
                index++;
            }
        }else {
            if (index == 0) {
                index = 3;
            } else {
                index--;
            }
        }

        // tu.innerHTML='';
        // tu.innerHTML=`<img src="images/${all_imgs[index]}" alt="..." id="imgs01">
        imgs.src = '../images/' + all_imgs[index];
        createInteral();

    }


})();
