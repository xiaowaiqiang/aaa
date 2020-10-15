$(function () {
    var resource = [
        {
            img: "img/sh_63.jpg",
            video: "video/video2.mp4",
            poster: "img/video2_poster.png"
        },
        {
            img: "img/sh_01.jpg",
            video: "video/video1.mp4",
            poster: "img/video1_poster.png"
        }];
    $(".cues_title").click(function () {
        $(".cues_title").removeClass("active");
        let index = $(".cues_titles .cues_title").index(this);
        // alert("index:" + index);
        $(this).addClass("active");
        $(".cues_img").attr("src", resource[index].img);
        $(".cues_video").attr("src", resource[index].video);
        $(".cues_video").attr("poster", resource[index].poster);
    });
});