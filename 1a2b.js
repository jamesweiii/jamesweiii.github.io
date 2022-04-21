
var Answer;
var NumberRnd = [];

document.getElementById("btn_answer").disabled = true;
document.getElementById("btn_renew").disabled = true;
document.getElementById("btn_checkanswer").disabled = true;
document.getElementById("input_answer").disabled = true;


var cmdStart = document.getElementById("btn_start");//遊戲開始
cmdStart.onclick = function () {
    document.getElementById("btn_answer").disabled = false;
    document.getElementById("btn_renew").disabled = false;
    document.getElementById("btn_checkanswer").disabled = false;
    document.getElementById("input_answer").disabled = false;

    for (var i = 0; i < 4; i++) {
        NumberRnd[i] = Math.floor(Math.random() * 10);;
        for (var j = 0; j < i; j++) {
            if (NumberRnd[i] == NumberRnd[j]) {
                i--;
                break;
            }
        }
    }
    Answer = NumberRnd;
}

var cmdAnswer = document.getElementById("btn_answer");
cmdAnswer.onclick = function () {
    document.getElementById("btn_start").disabled = true;
    alert("答案是：" + Answer);
}

var cmdRenew = document.getElementById("btn_renew");
cmdRenew.onclick = function () {
    window.location.reload();
}

var cmdCheckanswer = document.getElementById("btn_checkanswer");
cmdCheckanswer.onclick = function () {
    document.getElementById("btn_start").disabled = true;


    if (document.getElementById("input_answer").value.length == 4) {
        var Dictionary = new Array();
        var A = 0, B = 0;
        var getInput = document.getElementById("input_answer").value;
        var Thousand = Math.floor(getInput / 1000);
        var Hundred = Math.floor((getInput % 1000) / 100);
        var Ten = Math.floor((getInput % 100) / 10);
        var Bit = Math.floor(getInput % 10);
        Dictionary[0] = Thousand;
        Dictionary[1] = Hundred;
        Dictionary[2] = Ten;
        Dictionary[3] = Bit;

        var ul = document.querySelector("#show_answer");
        for (var i = 0; i < 4; i++) {
            if (NumberRnd[i] == Dictionary[i]) {
                A++;
                if (A == 4) {
                    alert('過關！恭喜你猜對了! 答案是' + NumberRnd + '。遊戲結束!')
                    window.location.reload()
                }
            }
            else {
                for (var j = 0; j < 4; j++) {
                    if (NumberRnd[i] == Dictionary[j]) {
                        B++;
                    }
                }
            }
        }
        var li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerText = document.getElementById("input_answer").value;
        var span = document.createElement("span");
        span.className = "badge badge-secondary badge-pill text_size";
        span.innerText = A + "A" + B + "B";
        li.appendChild(span);
        ul.appendChild(li);
    }
    else {
        alert("請輸入四位數(不重複)");
    }
}

