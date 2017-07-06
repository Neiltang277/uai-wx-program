//index.js
//获取应用实例
var app = getApp();
var util = require('./../../utils/util.js');

Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    let that = this;
    let url = app.globalData.devServer + 'index';
    let postList = wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        that.setData({
           postList:res.data
        });
      },
      fail: function (error) {
        console.log(error);
      }
    });


  },
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  }
})
