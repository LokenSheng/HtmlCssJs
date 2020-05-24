function init() {
    showHid();
    borderChange();
}

init();

function showHid() {
    // 导航栏右边的显示与隐藏
    var pro = document.getElementsByClassName('pro')[0];
    var showH = document.getElementById('showH');
    showH.style.height = window.innerHeight;

    pro.onmouseenter = function () {
        showH.style.display = 'block';
    }

    showH.onmouseleave = function () {
        showH.style.display = 'none';
    }
}


// 搜索框边框变化
function borderChange() {
    var inp = document.getElementById('border-change');
    inp.onfocus = function () {
        inp.classList.add('box-shadow');
    }
    inp.onblur = function () {
        inp.classList.remove('box-shadow');
    }
}