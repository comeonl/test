let num = 0;
let timer = null;
let flag = true;
// 按照图片数量生成对应小圆圈
for (let i = 0; i < $('.focus ul').length; i++) {
  $('.slider_indicators').append('<i></i>')
}
$('.slider_indicators i').eq(0).addClass('active');
// 左边点击上一张图片
$('.prev').click(function() {
  if (flag) {
    flag = false;
    $('.focus ul').eq(num).fadeOut();
    num--;
    num = num < 0 ? $('.focus ul').length - 1 : num;
    $('.focus ul').eq(num).fadeIn(function() {
      flag = true
    });
    circleChange();
  }
})
// 右边点击下一张图片
$('.next').click(function() {
  if (flag) {
    flag = false;
    $('.focus ul').eq(num).fadeOut();
    num++;
    num = num > $('.focus ul').length - 1 ? 0 : num;
    $('.focus ul').eq(num).fadeIn(function() {
      flag = true
    });
    circleChange();
  }
})
// 点击圆点对应图片
$('.slider_indicators i').click(function() {
  let index = $(this).index();
  if (index == num) {
    return
  };
  $('.focus ul').eq(num).fadeOut();
  num = index;
  $('.focus ul').eq(num).fadeIn();
  circleChange();
})
// 鼠标移入移出
$('.focus').mouseover(function() {
  clearInterval(timer);
}).mouseout(function() {
  autoPlay();
})
// 图片对应圆点添加class样式
function circleChange() {
  $('.slider_indicators i').removeClass('active').eq(num).addClass('active');
}
// 自动播放
function autoPlay() {
  timer = setInterval(function() {
    $('.next').click();
  }, 1500);
}
// 网页进来轮播图自动播放
autoPlay();

// 导航栏点击添加类
$('a').click(function() {
  $(this).addClass('active').parent().siblings().children().removeClass('active');
})