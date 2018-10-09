var app = getApp()

Page({
  data: {
    selected: '1'
  },
  changeHandle({ detail }) {
    this.setData({
      selected: detail.name
    });
  }
})
