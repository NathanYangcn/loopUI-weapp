var app = getApp()

Page({
  data: {
    
  },  
  tapname () {
    // console.log(this.toast, 'here')
    this.toast.showToast({text: 'loopUI-OP', iconType: 'waiting', maskLock: true})
  },

  onReady () {
    this.toast = this.selectComponent("#toast")
  },
})
