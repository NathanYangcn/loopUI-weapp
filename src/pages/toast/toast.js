var app = getApp()

Page({
  data: {
    
  },  
  tapname () {
    // console.log(this.toast, 'here')
    this.toast.showToast({text: 'loopUI', iconType: 'waiting', iconColor: 'green'})
  },

  onReady () {
    this.toast = this.selectComponent("#toast")
  },
})
