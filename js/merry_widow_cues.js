$(function () {
    var resource = [
        {
            img: ["img/sh_63_ori.jpg"],
            video: "video/video2.mp4",
            poster: "img/video2_poster_ori.jpg"
        },
        {
            img: ["img/sh_01_ori.jpg"],
            video: "video/video1.mp4",
            poster: "img/video1_poster_ori.jpg"
        },
        {
            img: ["img/sh_02_ori.jpg"],
            video: "video/video_sh02.mp4",
            poster: "img/v_sh02_poster_ori.jpg"
        },
        {
            img: ["img/sh_03_ori.jpg","img/sh_03_2_ori.jpg"],
        },
        {
            img: ["img/sh_04_ori.jpg","img/sh_04_2_ori.jpg"],
        },
        {
            img: ["img/sh_05_ori.jpg","img/sh_05_2_ori.jpg"],
        },
        {
            img: ["img/sh_06_ori.jpg","img/sh_06_2_ori.jpg"],
        },
        {
            img: ["img/sh_07_ori.jpg","img/sh_07_2_ori.jpg"],
        },
        {
            img: ["img/sh_08_ori.jpg","img/sh_08_2_ori.jpg"],
        },
        {
            img: ["img/sh_09_ori.jpg","img/sh_09_2_ori.jpg"],
        },
        {
            img: ["img/sh_10_ori.jpg","img/sh_10_2_ori.jpg"],
        },
        {
            img: ["img/sh_11_ori.jpg","img/sh_11_2_ori.jpg"],
        },
        {
            img: ["img/sh_12_ori.jpg","img/sh_12_2_ori.jpg"],
        },
        {
            img: ["img/sh_13_ori.jpg","img/sh_13_2_ori.jpg"],
        },
        {
            img: ["img/sh_14_ori.jpg","img/sh_14_2_ori.jpg"],
        },
        {
            img: ["img/sh_15_1.jpg","img/sh_15_2.jpg","img/sh_15_3.jpg"],
        },
        {
            img: ["img/sh_16_1.jpg","img/sh_16_2.jpg","img/sh_16_3.jpg"],
        },
        {
            img: ["img/sh_17_1.jpg","img/sh_17_2.jpg","img/sh_17_3.jpg"],
        },
        {
            img: ["img/sh_18_1.jpg","img/sh_18_2.jpg","img/sh_18_3.jpg"],
        },
        {
            img: ["img/sh_19_1.jpg","img/sh_19_2.jpg","img/sh_19_3.jpg"],
        },
        {
            img: ["img/sh_20_1.jpg","img/sh_20_2.jpg","img/sh_20_3.jpg"],
        },
        {
            img: ["img/sh_21_1.jpg","img/sh_21_2.jpg","img/sh_21_3.jpg"],
        },
        {
            img: ["img/sh_22_1.jpg","img/sh_22_2.jpg"],
        },
        {
            img: ["img/sh_23_1.jpg","img/sh_23_2.jpg","img/sh_23_3.jpg"],
        },
        {
            img: ["img/sh_24_1.jpg","img/sh_24_2.jpg","img/sh_24_3.jpg"],
        },
        {
            img: ["img/sh_25_1.jpg","img/sh_25_2.jpg","img/sh_25_3.jpg"],
        }
    ];
    $(".cues_title").click(function () {
        $(".cues_title").removeClass("active");
        let index = $(".cues_titles .cues_title").index(this);
        // alert("index:" + index);
        $(this).addClass("active");
        $(".cues_imgs").html("");
        const imgs = resource[index].img;
        for (let i = 0; i < imgs.length; i++) {
            $(".cues_imgs").append('<li><img class="cues_img" src="'+imgs[i]+'"></li>')
        }
        if (resource[index].video == null) {
            $(".item_video").hide();
        } else {
            $(".item_img").hide();
            $(".item_video").show();
            $(".cues_video").attr("src", resource[index].video);
            $(".cues_video").attr("poster", resource[index].poster);
        }
    });
});