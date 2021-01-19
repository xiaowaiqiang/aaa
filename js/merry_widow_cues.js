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
        },
        {
            img: ["img/sh_26_1.jpg","img/sh_26_2.jpg","img/sh_26_3.jpg"],
        },
        {
            img: ["img/sh_27_1.jpg","img/sh_27_2.jpg","img/sh_27_3.jpg"],
        },
        {
            img: ["img/sh_28_1.jpg","img/sh_28_2.jpg","img/sh_28_3.jpg"],
        },
        {
            img: ["img/sh_29_1.jpg","img/sh_29_2.jpg","img/sh_29_3.jpg"],
        },
        {
            img: ["img/sh_30_1.jpg","img/sh_30_2.jpg","img/sh_30_3.jpg"],
        },
        {
            img: ["img/sh_31_1.jpg","img/sh_31_2.jpg","img/sh_31_3.jpg"],
        },
        {
            img: ["img/sh_32_1.jpg","img/sh_32_2.jpg","img/sh_32_3.jpg","img/sh_32_4.jpg"],
        },
        {
            img: ["img/sh_33_1.jpg","img/sh_33_2.jpg","img/sh_33_3.jpg","img/sh_33_4.jpg"],
        },
        {
            img: ["img/sh_34_1.jpg","img/sh_34_2.jpg","img/sh_34_3.jpg"],
        },
        {
            img: ["img/sh_35_1.jpg","img/sh_35_2.jpg","img/sh_35_3.jpg"],
        },
        {
            img: ["img/sh_36_1.jpg","img/sh_36_2.jpg"],
            video: "video/video_sh36.mp4",
            poster: "img/v_sh36_poster_ori.jpg"
        },
        {
            img: ["img/sh_37_1.jpg","img/sh_37_2.jpg"],
        },
        {
            img: ["img/sh_38_1.jpg","img/sh_38_2.jpg","img/sh_38_3.jpg"],
        },
        {
            img: ["img/sh_39_1.jpg","img/sh_39_2.jpg","img/sh_39_3.jpg"],
        },
        {
            img: ["img/sh_40_1.jpg","img/sh_40_2.jpg","img/sh_40_3.jpg"],
        },
        {
            img: ["img/sh_41_1.jpg","img/sh_41_2.jpg","img/sh_41_3.jpg"],
        },
        {
            img: ["img/sh_42_1.jpg","img/sh_42_2.jpg"],
        },
        {
            img: ["img/sh_44_1.jpg","img/sh_44_2.jpg","img/sh_44_3.jpg"],
        },
        {
            img: ["img/sh_45_1.jpg","img/sh_45_2.jpg","img/sh_45_3.jpg"],
        },
        {
            img: ["img/sh_46_1.jpg","img/sh_46_2.jpg","img/sh_46_3.jpg"],
        },
        {
            img: ["img/sh_47_1.jpg","img/sh_47_2.jpg","img/sh_47_3.jpg"],
        },
        {
            img: ["img/sh_48_1.jpg","img/sh_48_2.jpg","img/sh_48_3.jpg"],
        },
        {
            img: ["img/sh_50_1.jpg","img/sh_50_2.jpg"],
        },
        {
            img: ["img/sh_51_1.jpg","img/sh_51_2.jpg","img/sh_51_3.jpg"],
        },
        {
            img: ["img/sh_52_1.jpg","img/sh_52_2.jpg","img/sh_52_3.jpg"],
        },
        {
            img: ["img/sh_54_1.jpg","img/sh_54_2.jpg","img/sh_54_3.jpg"],
        },
        {
            img: ["img/sh_55_1.jpg","img/sh_55_2.jpg","img/sh_55_3.jpg"],
        },
        {
            img: ["img/sh_56_1.jpg","img/sh_56_2.jpg","img/sh_56_3.jpg"],
        },
        {
            img: ["img/sh_57_1.jpg","img/sh_57_2.jpg","img/sh_57_3.jpg"],
        },
        {
            img: ["img/sh_b01_1.jpg","img/sh_b01_2.jpg","img/sh_b01_3.jpg"],
        },
        {
            img: ["img/sh_b02_1.jpg","img/sh_b02_2.jpg","img/sh_b02_3.jpg","img/sh_b02_4.jpg"],
        },
        {
            img: ["img/sh_b03_1.jpg","img/sh_b03_2.jpg","img/sh_b03_3.jpg","img/sh_b03_4.jpg","img/sh_b03_5.jpg"],
        },
        {
            img: ["img/sh_j01_1.jpg","img/sh_j01_2.jpg","img/sh_j01_3.jpg"],
        },
        {
            img: ["img/sh_j02_1.jpg","img/sh_j02_2.jpg","img/sh_j02_3.jpg"],
        },
        {
            img: ["img/sh_j03_1.jpg","img/sh_j03_2.jpg"],
            video: "video/video_shj03.mp4",
            poster: "img/v_shj03_poster_ori.jpg"
        },
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