Page({
  data: {
    loading: 0,
    loadText: '正在解析...',
    isloading: false
  },
  endTap: function() {
    if (this.data.isloading) {
      wx.redirectTo({
        url: "../end/end"
      })
    }
  },
  onLoad: function () {
      var that = this;
      var loading = this.data.loading;
      var timer = setInterval(function() {
        loading += 1
        that.setData({
          loading: loading
        })
        if (loading >= 100) {
          clearInterval(timer);
          that.setData({
            loadText: '点击观看结果',
            isloading: true
          })
        }
      },30)
      
  },
})