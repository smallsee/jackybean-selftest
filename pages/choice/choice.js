var choiceData = require('../../data/data.js')
Page({
  onLoad: function (option) {
    //改变数据序号
    this.getChoiceIndex();
    this.setData({
      choiceData: choiceData.data[this.data.choiceIndex]
    })
  },
  getChoiceIndex: function() {
    var choiceIndex = wx.getStorageSync('choice_index')
    var choiceId = wx.getStorageSync('choice_id')
    if (!choiceIndex) {
      wx.setStorageSync('choice_index', 0);
    }
    if (!choiceId) {
      wx.setStorageSync('choice_id', 0);
    }
    this.setData({
      choiceId: choiceId,
      choiceIndex: choiceIndex,
    })
  },
  setChoiceIndex: function (choiceId) {
    var choiceIndex = wx.getStorageSync('choice_index')
    wx.setStorageSync('choice_index', choiceIndex + 1);
    var newChoiceIndex = wx.getStorageSync('choice_index');

    var choiceIdOld = wx.getStorageSync('choice_id')
    wx.setStorageSync('choice_id', choiceIdOld + '' + choiceId);
    var newChoiceId = wx.getStorageSync('choice_id');

    this.setData({
      choiceIndex: newChoiceIndex,
      choiceId: newChoiceId
    });
  },
  choiceTap: function (event) {
    var choiceId = event.currentTarget.dataset.choiceid;
    this.setChoiceIndex(choiceId);
    var choiceIndex = wx.getStorageSync('choice_index');
    if (this.data.choiceIndex >= choiceData.data.length) {
      wx.redirectTo({
        url: "../load/load"
      })
    }else{
      // wx.redirectTo({
      //   url: "../choice/choice"
      // })
      this.setData({
        choiceData: choiceData.data[choiceIndex]
      })
    }
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