"use strict";

App({
  globalData: {},
  onLaunch: function onLaunch() {
    this.getDeviceInfos();
  },
  getDeviceInfos: function getDeviceInfos() {
    var self = this;
    wx.getSystemInfo({
      success: function success(res) {
        if (res.model.indexOf("iPhone X") >= 0 && (res.model = "iPhone X")) {
          self.globalData.isIphoneX = true;
        } else {
          self.globalData.isIphoneX = false;
        }
      }
    });
  }
});