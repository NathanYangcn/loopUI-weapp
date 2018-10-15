var app = getApp()

Page({
  data: {
    toast: {
      show: false
    }
  },  
  tapname () {
    var self = this
    this.setData({
      toast: {
        show: true
      }
    })
    setTimeout(function () {
      self.setData({
        toast: false
      })
    }, 3000)
  }
})
