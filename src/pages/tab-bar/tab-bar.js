var app = getApp()

Page({
  data: {
    selected: '1'
  },
  changeHandle({ detail }) {
    this.setData({
      selected: detail.name
    });
  },
  failHandle ({ detail }) {
    console.log('fail', detail)
  },
  completeHandle ({ detail }) {
    console.log('complete', detail)
  }
})
