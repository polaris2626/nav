// 基于jQuery编写
// 左进左出效果一
$(function () {
    //获取菜单栏子项
    $(".content-left .menu").each(function () {
        // 隐藏子标题
        $(this).children(".con").hide();
    });

    // 关闭/打开侧边栏按钮
    $('.content-left .nav').click(navOpenOrClose);
    $('.content-left .nav .btn').click(btnClose);

    function navOpenOrClose() {
        if ($(".content-left .nav").css("width") != "60px") {
            console.log('11');
        } else {
            open();
            console.log('22');
        }
    };

    function btnClose() {
        console.log('33');
        $('.content .nav').css("width", "60px");
        $(".icon-text").css("opacity", "0");
        $(".content-left .btn").css("background-color", "rgba(0,0,0,0)");
        let navOthConEle = $(".content-left .menu").children('.con');
        navOthConEle.hide(300);
    }

    function open() {
        $(".content-left .nav").css("width", "280px");
        $(".icon-text").css("opacity", "1");
        $(".content-left .btn").css("background-color", "red");
        // $(".content-left .light").css("opacity", "1");
    }



    // 给所有菜单栏子项-主标题绑定事件
    $('.content-left .item').each(function () {
        $(this).click(function () {
            // 显示子标题
            let navConEle = $(this).parents('.content-left .menu').children('.con');
            // 判断子标题是否隐藏（display = none）
            if (navConEle.css('display') != "none") {
                //隐藏
                navConEle.hide(300); //300是动画时间，单位毫秒
            } else {
                // 隐藏其他主标题的子标题
                let navOthConEle = $(".content-left .menu").children('.con');
                navOthConEle.hide(300); //300是动画时间，单位毫秒
                // 显示
                navConEle.show(300); //300是动画时间，单位毫秒
            }
        });
    });



    //给所有菜单栏子项-子标题绑定事件
    $(".content-left a").each(function () {
        $(this).click(function () {
            console.log(this);
            if ($(this).attr("data-src") != null) {
                // 获取data-src的值
                let displaySrc = $(this).attr("data-src");
                // 更改data-src的值
                $("iframe").attr("src", displaySrc)
            }

        })
    })
});