var li = document.createElement('li');
li.textContent = 'アイテム';
document.getElementById('list').appendChild(li);

for (var i = 1; i < 10; i++) {
    var li = document.createElement('li');
    li.textContent = i + '回目';
    document.getElementById('list').appendChild(li);
}

var HP = 100;
while (0 < HP) {
    var li = document.createElement('li');
    var damage = Math.floor(Math.random() * 100);
    HP -= damage;
    HP = (HP < 0) ? 0 : HP;
    li.textContent = damage + 'のダメージを受けた。残りのHP:' + HP;
    document.getElementById('while').appendChild(li);
}

var include_tax = function (price) {
    return Math.floor(price + 0.08 * price);
}

for (var i = 1; i < 10; i++) {
    var li = document.createElement('li');
    var price = Math.floor(Math.random() * 1000);
    li.textContent = price + '円(税込み)' + include_tax(price) + '円)';
    document.getElementById('price').appendChild(li);
}

var constellatio = ['牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座', '天秤座', '蠍座', '射手座', '山羊座', '水瓶座', '魚座'];
for (var i = 0; i < constellatio.length; i++) {
    var li = document.createElement('li');
    li.textContent = constellatio[i];
    document.getElementById('array').appendChild(li);
}

var player = { name: 'ほげほげ', age: 20, blood: 'A' };
for (key in player) {
    var li = document.createElement('li');
    li.textContent = key + ': ' + player[key];
    document.getElementById('object').appendChild(li);
}


var separate_time = function (time) {
    var sec = time.getSeconds();
    var min = time.getMinutes();
    var hours = time.getHours();
    var days = time.time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();
    return [sec, min, hours, days, month, year];
};

var now = new Date();
var counter = separate_time(now);
document.getElementById('countdown').textContent =
    counter[5] + '年' +
    counter[4] + '月' +
    counter[3] + '日' +
    counter[2] + '時' +
    counter[1] + '分' +
    counter[0] + '秒';


var separate_time = function (time) {
    var sec = Math.floor((time / 1000) % 60);
    var min = Math.floor((time / 1000 / 60) % 60);
    var hours = Math.floor((time / 1000 / 60 / 60) % 60);
    var days = Math.floor((time / 1000 / 60 / 60 / 24) % 60);
    return [sec, min, hours, days];
};

var update = function () {
    var now = new Date();
    var target = new Date(2020, 7, 24, 0, 0, 0, 0);
    var diff = target.getTime() - now.getTime();
    var counter = separate_time(diff);
    document.getElementById('countdown').textContent =
        '東京オリンピックまであと　' +
        counter[3] + '日' +
        counter[2] + '時間' +
        counter[1] + '分' +
        counter[0] + '秒';
    refresh();
};

var refresh = function () {
    setTimeout(update, 1000);
};
update();


document.getElementById('form').select.onchange = function () {
    location.href = document.getElementById('form').select.value;
};


function getFileName() {
    return window.location.href.split('/').pop();
}
var filename = getFileName();
var opt;
if (filename === 'other.html') {
    opt = document.querySelector('option[value="other.html"]');
} else {
    opt = document.querySelector('option[value="index.html"]');
}
opt.selectde = true;

document.getElementById('form').select.onchange = function () {
    location.href = document.getElementById('form').select.value;
};

function setCookie(c_name, value, expiredays) {
    var extime = new Date().getTime();
    var cltime = new Date(extime + (60 * 60 * 24 * 1000 * expiredays));
    var exdate = cltime.toUTCString();

    var s = "";
    s += c_name + "=" + escape(value);
    s += "; path=" + location.pathname;
    if (expiredays) {
        s += "; expires=" + exdate + "; ";
    } else {
        s += "; ";
    }
    document.cookie = s;
}

function getCookie(c_name) {
    var st = "";
    var ed = "";
    if (0 < document.cookie.length) {
        st = document.cookie.indexOf(c_name + "=");
        if (st != -1) {
            st = st + c_name.length + 1;
            ed = document.cookie.indexOf(";", st);
            if (ed == -1) ed = document.cookie.length;

            return unescape(document.cookie.substring(st, ed));
        }
    }
    return "";
}

var last_date = getCookie('lastDate');
if (last_date) {
    document.getElementById('cookie').textContent = '前回訪れた時間:' + last_date;
} else {
    document.getElementById('cookie').textContent = 'はじめまして';
}
var current_time = new Date();
setCookie('lastDate', current_time.toString(), 7);

document.getElementById('remove_cookie').onsubmit = function () {
    setCookie('lastDate', "", 0);
};

var thmubs = document.querySelectorAll('.thumb');
for (idx in thmubs) {
    thmubs[idx].onclick = function () {
        document.getElementById("bigimg").src = 'img/' + this.dataset.image + '.jpg';
    };
}

document.getElementById('form').onsubmit = function () {
    window.alert('押されました！');
};

document.getElementById('form').onsubmit = function () {
    window.alert(document.getElementById('form').worm.value);
    return false;
};
