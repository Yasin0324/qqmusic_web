window.onload=function()//网页加载完毕后加载js
{
    let lists = document.getElementsByClassName("img_list");
    let songs = document.getElementsByClassName("songs");
    let buttonlis = document.getElementsByClassName("buttonli");
    let buttonlis2=document.getElementsByClassName("2")
    let leftbtn1 = document.querySelector(".lbleft_btn");
    let rightbtn1 = document.querySelector(".lbright_btn");
    let leftbtn2 = document.querySelector(".sleft_btn");
    let rightbtn2 = document.querySelector(".sright_btn");
    let index = 0;
    
    // 歌单推荐
    // 清除class
    let clearclass = function () {
        for (let i = 0; i < lists.length;i++)
        {
            lists[i].className = "img_list";
            buttonlis[i].className = "buttonli";
            buttonlis[i].setAttribute("num",i)
        }
    }

    // 只显示一个class
    function move() {
        clearclass();
        lists[index].className = "img_list active";
        buttonlis[index].className = "buttonli grey";
    }

    // 点击右边按钮切换至下一页
    rightbtn1.onclick = function () {
        if (index < lists.length - 1) {
            index++;
        }
        else {
            index = 0;
        }
        move();
    }

    // 点击左边按钮切换至上一页
    leftbtn1.onclick = function () {
        if(index>0)
        {
            index--;
        }
        else {
            index = lists.length - 1;
        }
        move();
    }
    // 点击圆点时，跳转到对应图片
    for (let i = 0; i < buttonlis.length;i++)
    {
        buttonlis[i].addEventListener("click", function () {
            let point_index = this.getAttribute("num");
            index = point_index;
            move();
        })
    }



    // 新歌首发
    // 清除class
    let clearclass2 = function () {
        for (let i = 0; i < lists.length;i++)
        {
            songs[i].className = "songs";
            buttonlis2[i].className = "buttonli 2";
            buttonlis2[i].setAttribute("num",i)
        }
    }

    // 只显示一个class
    function move2() {
        clearclass2();
        songs[index].className = "songs active";
        buttonlis2[index].className = "buttonli 2 grey";
    }

    // 点击右边按钮切换至下一页
    rightbtn2.onclick = function () {
        if (index < songs.length - 1) {
            index++;
        }
        else {
            index = 0;
        }
        move2();
    }

    // 点击左边按钮切换至上一页
    leftbtn2.onclick = function () {
        if(index>0)
        {
            index--;
        }
        else {
            index = songs.length - 1;
        }
        move2();
    }

    // 点击圆点时，跳转到对应图片
    for (let i = 0; i < buttonlis.length;i++)
    {
        buttonlis2[i].addEventListener("click", function () {
            let point_index = this.getAttribute("num");
            index = point_index;
            move2();
        })
    }
}