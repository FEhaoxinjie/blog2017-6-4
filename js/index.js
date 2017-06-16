/**
 * Created by Administrator on 2017/6/10 0010.
 */
var page_1=$(".page_1");
var page_2=$(".page_2");
var page_3=$(".page_3");
var page_4=$(".page_4");
var page_5=$(".page_5");
var page_6=$(".page_6");
$(document).ready(function () {
    $("#first").click(function () {
            $(".position").fadeOut(200);
            $(".page_1").fadeToggle(1000);
    }) 
    $("#second").click(function () {
        $(".position").fadeOut(2000);
        $(".page_2").fadeToggle(1000);
    })
    $("#third").click(function () {
        $(".position").fadeOut(2000);
        $(".page_3").fadeToggle(1000);
    })
    $("#fourth").click(function () {
        $(".position").fadeOut(2000);
        $(".page_4").fadeToggle(1000);
    })
    $("#fifth").click(function () {
        $(".position").fadeOut(2000);
        $(".page_5").fadeToggle(1000);
    })
})
