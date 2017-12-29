var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
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

    
    // console.log(index)
    // console.log('design' + design)
    // console.log('self' + self)
    // console.log('trench' + trench)
    // console.log('diffuse' + diffuse)
    // console.log('total' +total)
  
    this.setData({
      design: design,
      self: self,
      trench: trench,
      diffuse: diffuse,
      total: total
    })
    this.totalText(total)
    this.pie(design, self, trench, diffuse, total)
  },
  totalText: function (total) {
    console.log(total)
    var that = this
    if (Math.abs(total) == 0) {
      that.setData({
        totalText: '老铁，啥都不说了，快来找魔豆的品牌魔法师吧！'
      })
    } 
    if (parseInt(total) >= parseInt(1) && parseInt(total)  <= parseInt(30))   {
      that.setData({
        totalText: '您的个人品牌传播力还不够哦，或许您需要品牌魔法师为您制定专业提升秘术。'
      })
    } 
    
    if (parseInt(total) >= parseInt(31) && parseInt(total) <= parseInt(59)) {
      that.setData({
        totalText: '看您骨骼清奇，已初步具备个人品牌传播意识，稍加修炼，必然能全面扩大您的个人品牌影响力!'
      })
    } 
    if (parseInt(total) >= parseInt(60) && parseInt(total) <= parseInt(75)) {
      that.setData({
        totalText: '您的个人品牌传播力不错哦，只是传播力度不够均衡，稍加调整必然能有更大的传播效果!'
      })
    } 
    if (parseInt(total) >= parseInt(76) && parseInt(total) <= parseInt(89)) {
      that.setData({
        totalText: '哇哦，您的个人品牌传播力已经很强了！若能针对领域进一步强化就更好了，看好你！'
      })
    } 
    if (parseInt(total) >= parseInt(90) && parseInt(total) <= parseInt(100)) {
      that.setData({
        totalText: '您的个人品牌传播力简直战斗值爆表！有没有兴趣与品牌魔法师一同进攻下一阶段？'
      })
    } 
  },
  /**
   * 画饼
   */
  pie: function (design, self, trench, diffuse, total) {
    // var design = 50
    // var self = 50
    // var trench = 50
    // var diffuse = 50

    var windowWidth = 300;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '平台建设',
        data: design,
      }, {
        name: '个人形象传播',
        data: self,
        }, {
          name: '渠道传播',
          data: trench,
        },{
        name: '行业传播',
        data: diffuse,
      }],
      width: 250,
      height: 250,
      dataLabel: true,
    });
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