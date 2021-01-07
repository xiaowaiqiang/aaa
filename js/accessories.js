$(function () {
    var resource = [
        {
            imgs: ["img/sh_ch01_1.jpg","img/sh_ch01_2.jpg","img/sh_ch01_3.jpg","img/sh_ch01_4.jpg"],
        },
        {
            imgs: ["img/sh_ch02_4.jpg","img/sh_ch02_2.jpg","img/sh_ch02_3.jpg","img/sh_ch02_1.jpg"],
        },
        {
            imgs: ["img/sh_ch03_1.jpg"],
        },
        {
            imgs: ["img/chalk_1.jpg","img/chalk_4.jpg","img/chalk_3.jpg","img/chalk_2.jpg"],
        },
        {
            imgs: ["img/sh_cc02_1.jpg","img/sh_cc02_2.jpg","img/sh_cc02_3.jpg","img/sh_cc02_4.jpg","img/sh_cc02_5.jpg"],
        },
        {
            imgs: ["img/sh_cc03_1.jpg","img/sh_cc03_3.jpg","img/sh_cc03_5.jpg","img/sh_cc03_4.jpg","img/sh_cc03_2.jpg"],
        },
        {
            imgs: ["img/towel_1.jpg","img/towel_2.jpg","img/towel_3.jpg","img/towel_4.jpg"],
        },
        {
            imgs: ["img/sh_b03_1.jpg","img/sh_b03_3.jpg","img/sh_b03_5.jpg","img/sh_b03_4.jpg","img/sh_b03_2.jpg"],
        },
    ];

    $(".cues_title").click(function () {
        $(".cues_title").removeClass("active");
        let index = $(".cues_titles .cues_title").index(this);
        // alert("index:" + index);
        $(this).addClass("active");
        $(".cues_imgs").html("");
        const imgs = resource[index].imgs;
        for (let i = 0; i < imgs.length; i++) {
            $(".cues_imgs").append('<li><img class="cues_img" src="'+imgs[i]+'"></li>')
        }
    });
});