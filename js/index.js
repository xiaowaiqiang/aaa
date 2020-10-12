$(function () {
    //初始化英文
    loadLanguage("en");
    //菜单事件
    initNav();
    //banner轮巡
    initBanner();
    //切换语言
    changeLanguage();
    // clickNavItem();
});

function loadLanguage(type) {
    $.i18n.properties({//加载资浏览器语言对应的资源文件
        name: type, //资源文件名称
        path: 'language/', //资源文件路径
        language: type,
        cache: false,
        mode: 'map', //用Map的方式使用资源文件中的值
        callback: function () {//加载成功后设置显示内容
            for (let i in $.i18n.map) {
                $('[data-lang="' + i + '"]').text($.i18n.map[i]);
            }
        }
    });
}

function changeLanguage() {
    $(".top nav a[data-lang]").click(function () {
        $(".top nav a[data-lang]").removeClass("active");
        $(this).addClass("active");
        let type = $(this).attr("data-lang");
        loadLanguage(type);
    });
}

function initNav() {
    $(".hasChild").hover(function () {
        $(".hasChild").removeClass("active");
        $(".nav_contents").addClass("active");
        let index = $(".nav_ul li").index(this);
        $(".nav_contents .nav_item").eq(index).addClass("active");
        //iframe点击不了视频
        window.parent.document.getElementById("zy_content").style.position = "relative";
        window.parent.document.getElementById("zy_content").style.zIndex = -1;
    }, function () {
        $(".nav_contents").removeClass("active");
        let index = $(".nav_ul li").index(this);
        $(".nav_contents .nav_item").eq(index).removeClass("active");
        //iframe点击不了视频
        window.parent.document.getElementById("zy_content").style.position = "inherit";
        window.parent.document.getElementById("zy_content").style.zIndex = 2;

    });
    $(".hasChild").click(function () {
        $(".hasChild").removeClass("active");
        $(this).addClass("active");
        $(".nav_contents").addClass("active");
        let index = $(".nav_ul li").index(this);
        $(".nav_contents .nav_item").removeClass("active")
        $(".nav_contents .nav_item").eq(index).addClass("active");
        //iframe点击不了视频
        window.parent.document.getElementById("zy_content").style.position = "relative";
        window.parent.document.getElementById("zy_content").style.zIndex = -1;
    });
    $(document).click(function () {
        $(".hasChild").removeClass("active");
        $(".nav_contents").removeClass("active");
        $(".nav_contents .nav_item").removeClass("active");
        //iframe点击不了视频
        window.parent.document.getElementById("zy_content").style.position = "inherit";
        window.parent.document.getElementById("zy_content").style.zIndex = 2;

    });
    $(".hasChild").click(function (event) {
        event.stopPropagation();
    });
    $(".nav_contents").click(function (event) {
        event.stopPropagation();
    });
}

function initBanner() {
    $('.slick_img').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        accessibility: false,
        arrows: false,
        appendDots: $('.dots'),
        slidesToShow: 1,
        slidesToScroll: 1,
    });
}

function clickNavItem() {
    $(".ggg").click(function () {
        let url = "merry_widow_cues.html";
        $(".content").load("merry_widow_cues.html");
        history.pushState({urlStr: url}, "aa", url);
    });
    window.addEventListener('popstate', function (event) {
        alert("a:" + history.state.urlStr+"  b:"+window.location.href);
        window.history.back();
        window.location.reload();
    });
}
