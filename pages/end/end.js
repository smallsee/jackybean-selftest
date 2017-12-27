Page({
  onShareAppMessage: function () {
    return {
      title: '魔豆品牌自测力系统',
      desc: '魔豆品牌自测力系统!',
      imageUrl: '/images/modou_banner.jpg',
      path: '/pages/start/start'
    }
  },
  onLoad: function (option) {
    var choice = wx.getStorageSync('choice_id')
    this.setData({
      choice: choice
    });
    this.totalPoint(choice)
  },
  totalPoint: function (choice) {
    var total = 0
    var index = -1
    var design = 0
    var self = 0
    var trench = 0
    var diffuse = 0
    for (var i = 0; i < choice.length; i++) {
      if (choice[i] == '-'){
        i = i +1
        index = index + 1
        total = total - parseInt(choice[i])
      }else{
        index = index + 1
        total = total + parseInt(choice[i])
      }

      if (index == 8) {
        design = total
      }
      if (index == 9) {
        self = total - design
      }
      if (index == 15) {
        trench = total - design - self
      }
      if (index == 20) {
        diffuse = total - design - self - trench
      }
    }

    
    console.log(index)
    console.log('design' + design)
    console.log('self' + self)
    console.log('trench' + trench)
    console.log('diffuse' + diffuse)
    console.log('total' +total)
  
    this.setData({
      design: design,
      self: self,
      trench: trench,
      diffuse: diffuse,
      total: total
    })
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