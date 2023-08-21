window.onload = function ()
{
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