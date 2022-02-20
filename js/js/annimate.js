window.onload = function () {
    let ul = document.querySelector(".circle-ul");
    let left = document.querySelector("#left");
    let right = document.querySelector("#right");
    let backgrund1 = document.querySelector(".circle-backgruand1");
    let backgrund = document.querySelector(".circle-backgruand");
    let div = document.querySelector(".circle-div");
    let img=ul.querySelectorAll("img");
    let flag = 1;
    right.onclick = function () {
        if (ul.offsetLeft >= -5448) {
            ul.style.left = ul.offsetLeft - 908 + 'px';
            flag = ul.offsetLeft / -908 + 1;
            backgrund1.src = "uplode/" + flag + ".jpg";
            backgrund.src = "uplode/" + flag + ".jpg";
        }
        else {
            backgrund1.src = "uplode/1.jpg";
            backgrund.src = "uplode/1.jpg";
            flag = 1;
            ul.style.left = 0 + 'px';
        }

    }
    left.onclick = function () {
        if (ul.offsetLeft < 0) {
            ul.style.left = ul.offsetLeft + 908 + 'px';
            flag = ul.offsetLeft / -908 + 1;
            backgrund1.src = "uplode/" + flag + ".jpg";
            backgrund.src = "uplode/" + flag + ".jpg";
        }
        else {
            backgrund1.src = "uplode/8.jpg";
            backgrund.src = "uplode/8.jpg";
            flag = 1;
            ul.style.left = -6356 + 'px';
        }
    }
    let num = 1;
    var timer = setInterval(() => {
        if (ul.offsetLeft >= -5448 && num == 1) {
            ul.style.left = ul.offsetLeft - 908 + 'px';
            flag = ul.offsetLeft / -908 + 1;
            backgrund1.src = "uplode/" + flag + ".jpg";
            backgrund.src = "uplode/" + flag + ".jpg";
        }
        else {
            if (num == 1) {
                backgrund1.src = "uplode/1.jpg";
                backgrund.src = "uplode/1.jpg";
                flag = 1;
                ul.style.left = 0 + 'px';
            }
        }
        div.addEventListener("mouseover", () => {
            num = 0;
        });
        div.addEventListener("mouseleave", () => {
            num = 1;
        });
    }, 3000);
    let ull = document.querySelector(".point");


    for (let i = 1; i <= ul.children.length; i++) {
        var li = document.createElement("li");
        li.setAttribute('index', i);
        ull.appendChild(li);
    }
    let lis = ull.querySelectorAll("li");
    for (let k = 0; k < lis.length; k++) {
        lis[k].onmouseenter = () => {
            ull.children[k].style.backgroundColor = "red";
        }
        lis[k].onmouseleave = () => {
            ull.children[k].style.backgroundColor = "rgb(204, 198, 198)";
        }
        lis[k].onclick = () => {
            let index=lis[k].getAttribute('index');
            backgrund1.src = "upwwadlode/" + index+ ".jpg";
            backgrund.src = "uplode/" + index + ".jpg";
            ul.style.left=(1-index)*908+'px';
        }
    }

}