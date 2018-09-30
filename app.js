var board = document.querySelector(".board")
var time = null;
var points = 0



function start() {





    time = setInterval(function () {
        var div = document.createElement("div");
        div.classList.add("zombie");
        var bottom = Math.random() * (130 - 50) + 50
        div.style.bottom = bottom + "px";
        var scale = 0.5 + Math.random();
        var min = 10;
        var max = 20;
        var times = Math.floor(Math.random() * (max - min + 1) + min);
        div.style.animationDuration = "0.6s," + times + "s";
        if (bottom > 100) {
            div.style.filter = "blur(1px)";
        }
        div.style.zIndex = 130 - bottom;
        div.style.transform = "scale(" +
            scale + ")";

        board.appendChild(div);

        div.addEventListener("animationend", function () {
            this.parentElement.removeChild(this);
        });
        div.addEventListener("click", function () {
            this.parentElement.removeChild(this);
            points += 10;
            var table = document.querySelector("span")
            table.innerText = points;
        });

    }, 1000)
}

start();



function sumTriangularNumbers(n) {
    var result = 0;
    var step = 1;
    var number = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < step; j++) {
            number++
        }
        result += number;
        step++;
    }

    return result;
}
