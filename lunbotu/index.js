
var nowIndex = 0;
var len = $('.img-box li').length;
var timer;
function init() {
    bindEvent();
    sliderAuto();
}
init();

function bindEvent() {
    $('.btn span').on('click', function () {
        var tar = $(this).attr('class');
        move(tar);
    });

    $('.list li').on('click', function () {
        var i = $(this).index();
        move(i);
    });

    $('.wrap').on('mouseenter', function () {
        clearTimeout(timer);
    }).on('mouseleave', function () {
        sliderAuto();
    })
}


function sliderAuto() {
    clearTimeout(timer);
    timer = setTimeout(function () {
        move('right');
    }, 2000);
}


function move(dir) {
    if (dir == 'right' || dir == 'left') {
        if (dir == 'right') {
            nowIndex++;
            nowIndex = nowIndex > len - 1 ? 0 : nowIndex;
            sliderAuto();
        } else {
            nowIndex--;
            nowIndex = nowIndex < 0 ? len - 1 : nowIndex;
        }
    } else {
        nowIndex = dir;
    }


    $('.img-box').css({
        'left': -nowIndex * 640 + 'px'
    });

    $('.img-box li').eq(nowIndex).animate({
        'opacity': 1
    }, 800);

    $('.img-box li').not(nowIndex).css('opacity', 0);
    changeStyle();
}


function changeStyle() {
    $('.active').removeClass('active');
    $('.list li').eq(nowIndex).addClass('active');
}

