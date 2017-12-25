Page({
  onLoad: function (option) {
    var choice = wx.getStorageSync('choice_id')
    this.setData({
      choice: choice
    });
    this.totalPoint(choice)
  },
  totalPoint: function (choice) {
    var total = 0
    for (var i = 0; i < choice.length; i++) {
      total = total + parseInt(choice[i])
    }
    console.log(total)
  },
  startTap: function () {
    wx.setStorageSync('choice_index', 0);
    wx.setStorageSync('choice_id', 0);
    this.setData({
      choiceIndex: 0,
      choiceId: 0
    })
    wx.redirectTo({
      url: "../start/start"
    })
  },
})