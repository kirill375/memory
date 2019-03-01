var wrap = document.querySelector(".wrapper");
var boxs = document.querySelectorAll(".box");
var btn = document.querySelector(".btn"),
    count,
    compare = [];

function rand(...s) {
    var randMassImg = [],
        randNumber;

    s = s.concat(s);
    while (s.length) {
        randNumber = (Math.random() * (s.length - 1)).toFixed();
        randMassImg.push(s[randNumber]);
        s.splice(randNumber, 1);
    }
    return randMassImg
};

function hiddenImg() {
    for (let i = 0; i < compare.length; i++) {
        compare[i].classList.remove("show");
    }
    compare = [];
}

function endGame() {
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].classList.remove("addGame");
    }

    return false
}

function startGame() {
    images = rand(
        '<img src=img/1.jpg alt="">',
        '<img src=img/2.jpeg alt="">',
        '<img src=img/3.jpg alt="">',
        '<img src=img/4.jpg alt="">',
        '<img src=img/5.jpg alt="">',
        '<img src=img/6.jpg alt="">',
        '<img src=img/7.jpg alt="">',
        '<img src=img/8.jpg alt="">',
        '<img src=img/9.jpg alt="">'
    );

    for (let i = 0; i < boxs.length; i++) {
        boxs[i].innerHTML = images[i];
        boxs[i].classList.add("addGame");
    }
    count = 0;

}
btn.addEventListener("click", function () {
    startGame();
    this.disabled = true;
});

wrap.addEventListener("mousedown", function (e) {
    var e = e.target;

    if (e.tagName == "IMG") {
        if (compare.length < 2 && !e.classList.length) {
            compare.push(e);

            for (let i = 0; i < compare.length; i++) {
                compare[i].classList.add("show");
            }

            if (compare.length == 2 && compare[1].getAttribute("src") != compare[0].getAttribute("src")) {

                setTimeout(hiddenImg, 500);

            } else if (compare.length == 2) {
                count++;

                btn.disabled = (count == boxs.length / 2) ? endGame() : true;

                compare = [];
            }
        }
    }
});
