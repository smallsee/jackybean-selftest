Page({
  onShareAppMessage: function () {
    return {
      title: '魔豆品牌自测力系统',
      desc: '魔豆品牌自测力系统!',
      imageUrl: '/images/modou_banner.jpg',
      path: '/pages/start/start'
    }
  },
  onTap: function (event) {
    var choiceIndex = wx.getStorageSync('choice_index')
    var choiceId = wx.getStorageSync('choice_id')
    if (!choiceIndex) {
      wx.setStorageSync('choice_index', 0);
    }
    if (!choiceId) {
      wx.setStorageSync('choice_id', 0);
    }
    wx.setStorageSync('choice_index', 0);
    wx.setStorageSync('choice_id', 0);
    wx.redirectTo({
      url: "../choice/choice"
      // url: "../test/test"
    });
  },
  onLoad: function () {
      // setTimeout(function() {
      //   wx.navigateTo({
      //     url: "../wechat/wechat"
      //   });
      // },2000)
  },
})