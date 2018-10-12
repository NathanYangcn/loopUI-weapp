App({
  globalData:{},
  onLaunch () {          
   this.getDeviceInfos()
  },
  getDeviceInfos () {
    var self = this
    wx.getSystemInfo({
      success: function(res) {  
        if ( (res.model.indexOf("iPhone X") >= 0) && (res.model = "iPhone X") ) {         
          self.globalData.isIphoneX = true
        } else {         
          self.globalData.isIphoneX = false
        }        
      }
    })
  } 
})