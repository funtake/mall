/*
* @Author: apple
* @Date:   2017-09-17 18:16:20
* @Last Modified by:   apple
* @Last Modified time: 2017-09-21 17:32:09
*/
$(function () {
    var k = $(window).height();
    var fage = false;
    var maft = false;
    var fave = false;
    var six = false;
    $('#fullpage').fullpage({
        // 是否显示项目导航
        navigation: true,
        afterLoad: function (anchorlink, index) {
            if (index == 2 && fage == false) {
                // alert("1");
                $(".search").show().animate({"right": 370}, 1500, function () {
                    //搜索框走进来，并且显示沙发字样
                    $(".search-wods").animate({"opacity": 1}, 500, function () {
                        $(".search").hide();
                        //让搜索框变成图片和变小并且到右上角
                        $(".search-02-1").show().animate({
                            "height": 30,
                            "right": 250,
                            "bottom": 452
                        }, 1000, function () {
                            fage = true;
                        });
                        //同时图片变大
                        $(".goods-02").show().animate({"height": 218}, 1000);
                        $(".words-02").animate({"opacity": 1}, 500);
                    });
                });
            }
        },

        onLeave: function (index, nexindex, direction) {
            // 第二屏幕到第三屏幕的动画
            if (index == 2 && nexindex == 3 && fage == true) {
                // k ：屏幕像素  ，减去250像素
                $(".shirt-02").show().animate({"bottom": -(k - 250), "width": 207, "left": 256}, 2000, function () {
                    maft = true;
                    $(".img-01-a").animate({"opacity": 1}, 500, function () {
                        $(".btn-01-a").animate({"opacity": 1}, 500)
                    });

                });
                $(".cover").show()
            }
            //第三到第4屏幕
            if (index == 3 && nexindex == 4 && maft == true) {
                $(".shirt-02").hide();
                // k ：屏幕像素  ，减去250像素
                $(".t1f").show().animate({"bottom": -((k - 250) - 10), "left": 190}, 1200, function () {
                    $(this).hide(); //沙发动画完成后隐藏
                    $(".t1f-4").show(); //让盒子里面的沙发显示
                    //让购物车盒子走出去
                    $(".car").animate({"left": 1600}, 2000, function () {
                        $(".site").show();
                        $(".words-04").hide();
                        $(".words-04-a").animate({"opacity": 1}, 500)
                    })
                });

            }
            if (index == 4 && nexindex == 5 && fave == false && maft == true) {
                fave = true;
                $(".hand-05").animate({"bottom": 0}, 1500);
                $(".mouse-52").animate({"opacity": 0}, 500, function () {
                    $(".t1f-05").show().animate({"bottom": "10%"}, 500, function () {
                        $(".yhkxx-05").animate({"bottom": "58%"}, 1500);
                    });

                })

            }

            if (index == 5 && nexindex == 6 && six == false && maft == true) {
                six = true;
                $(".t1f-05").animate({"bottom": -(k - 530), "left": "25%", "width": 65}, 1000, function () {
                    $(".t1f-05").hide();
                });
                $(".hezi-06").animate({"left": "23%"}, 1200, function () {
                    $(".hezi-06").animate({"top": "85%"}, 1000, function () {
                        $(".hezi-06").hide();
                        $(".section6").animate({"right":"100%"},4000);
                        $(".car-06").animate({"left":"135%"},4000 ,function () {
                            $(".pop-06").show();
                            $(".person-06-1").animate({"bottom":"14%"},1000,function(){
                                $(".person-06-1").animate({"left":"157%"},500)
                            })
                        });
                    })
                })
            }

        },

    });
});
