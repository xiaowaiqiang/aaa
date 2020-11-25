$(function () {
    var resource = [
        {
            img: "img/sh_63_ori.jpg",
            video: "video/video2.mp4",
            poster: "img/video2_poster_ori.jpg"
        },
        {
            img: "img/sh_01_ori.jpg",
            video: "video/video1.mp4",
            poster: "img/video1_poster_ori.jpg"
        },
        {
            img: "img/sh_02_ori.jpg",
            video: "video/video_sh02.mp4",
            poster: "img/v_sh02_poster_ori.jpg"
        },
        {
            img: "img/sh_03_ori.jpg",
            img2: "img/sh_03_2_ori.jpg"
        },
        {
            img: "img/sh_04_ori.jpg",
            img2: "img/sh_04_2_ori.jpg"
        },
        {
            img: "img/sh_05_ori.jpg",
            img2: "img/sh_05_2_ori.jpg"
        },
        {
            img: "img/sh_06_ori.jpg",
            img2: "img/sh_06_2_ori.jpg"
        },
        {
            img: "img/sh_07_ori.jpg",
            img2: "img/sh_07_2_ori.jpg"
        },
        {
            img: "img/sh_08_ori.jpg",
            img2: "img/sh_08_2_ori.jpg"
        },
        {
            img: "img/sh_09_ori.jpg",
            img2: "img/sh_09_2_ori.jpg"
        },
        {
            img: "img/sh_10_ori.jpg",
            img2: "img/sh_10_2_ori.jpg"
        },
        {
            img: "img/sh_11_ori.jpg",
            img2: "img/sh_11_2_ori.jpg"
        },
        {
            img: "img/sh_12_ori.jpg",
            img2: "img/sh_12_2_ori.jpg"
        },
        {
            img: "img/sh_13_ori.jpg",
            img2: "img/sh_13_2_ori.jpg"
        },
        {
            img: "img/sh_14_ori.jpg",
            img2: "img/sh_14_2_ori.jpg"
        }
    ];
    $(".cues_title").click(function () {
        $(".cues_title").removeClass("active");
        let index = $(".cues_titles .cues_title").index(this);
        // alert("index:" + index);
        $(this).addClass("active");
        $(".cues_img").attr("src", resource[index].img);
        if (resource[index].video == null) {
            $(".item_video").hide();
            $(".item_img").show();
            $(".item_img").attr("src", resource[index].img2);
        } else {
            $(".item_img").hide();
            $(".item_video").show();
            $(".cues_video").attr("src", resource[index].video);
            $(".cues_video").attr("poster", resource[index].poster);
        }
    });
});