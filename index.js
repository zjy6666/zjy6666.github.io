function fuckyou() {
    window.close(); //关闭当前窗口(防抽)
    window.location = "about:blank"; //将当前窗口跳转置空白页
}

function ck() {
    console.profile();

    console.profileEnd();

    //我们判断一下profiles里面有没有东西，如果有，肯定有人按F12了，没错！！
    if (console.clear) {
        console.clear()
    };

    if (typeof console.profiles == "object") {
        return console.profiles.length > 0;

    }

}

function hehe() {
    if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof

    opera.postError == 'function' && console.profile.length > 0)) {
        fuckyou();

    }

    if (typeof console.profiles == "object" && console.profiles.length > 0) {
        fuckyou();

    }

}

hehe();

window.onresize = function() {
    if ((window.outerHeight - window.innerHeight) > 200)

    //判断当前窗口内页高度和窗口高度，如果差值大于200，那么呵呵
    fuckyou();

}

var OriginTitile = document.title;
var st;
document.addEventListener('visibilitychange',
function() {
    if (document.hidden) {
        document.title = "∑(っ °Д °;)っ网站404了！";
        clearTimeout(st);
        console.log('hide');
    } else {
        document.title = '(*´∇｀*)吖~又好了~ ' + OriginTitile;
        console.log('show');
        st = setTimeout(function() {
            document.title = OriginTitile;
        },
        4000);
        console.log('endChange=');
    }
});

function pageScroll(){
//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-50);
//延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',1);
//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
}
