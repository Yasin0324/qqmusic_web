window.onload = function ()
{
    let left = document.querySelector(".lbleft_btn");
    let right = document.querySelector(".lbright_btn");
    let m = document.querySelector(".musicrecommend");
    let main = document.getElementsByClassName("img_list");
    let li = document.getElementsByClassName("buttonli1");

    let index = 0;
    
    function position(i){
        m.style.left = i * 1220 * -1 + "px";
    }

    position(index);

    function pointcheck(num) {
        for (let j = 0; j < main.length; j++){
            if (j == num){
                li[j].className = "buttonli1 grey";
            }
            else {
                li[j].className = "buttonli1";
            }
        }
    }

    for (let i = 0; i < main.length; i++){
        li[i].addEventListener("click", () => {
            index = i;
            position(index);
            pointcheck(index);
        })
    }

    left.onclick = function () {
        if (index > 0) {
            index--;
        }
        else {
            index = main.length - 1;
        }
        position(index);
        pointcheck(index);
        console.log(index);
    }

    right.onclick = function () {
        if (index < main.length-1) {
            index++;
        }
        else {
            index = 0;
        }
        position(index);
        pointcheck(index);
        console.log(index);
    }

    let sleft = document.querySelector(".sleft_btn");
    let sright = document.querySelector(".sright_btn");
    let sm = document.querySelector(".new");
    let smain = document.getElementsByClassName("songs");
    let sli = document.getElementsByClassName("buttonli2");

    let sindex = 0;

    function sposition(i){
        sm.style.left = i * 1220 * -1 + "px";
    }
    function spointcheck(num) {
        for (let j = 0; j < smain.length; j++){
            if (j == num){
                sli[j].className = "buttonli2 grey";
            }
            else {
                sli[j].className = "buttonli2";
            }
        }
    }
    
    for (let i = 0; i < smain.length; i++){
        sli[i].addEventListener("click", () => {
            sindex = i;
            sposition(sindex);
            spointcheck(sindex);
        })
    }

    sleft.onclick = function () {
        if (sindex > 0) {
            sindex--;
        }
        else {
            sindex = smain.length - 1;
        }
        sposition(sindex);
        spointcheck(sindex);
        console.log(sindex);
    }

    sright.onclick = function () {
        if (sindex < smain.length-1) {
            sindex++;
        }
        else {
            sindex = 0;
        }
        sposition(sindex);
        spointcheck(sindex);
        console.log(sindex);
    }
}