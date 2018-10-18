Component({
  data: {
    show: false,

    config: {
      text: 'hello',
      color: '#fff',
      fontSize: '15px',

      iconType: 'success',
      iconSize: 35,
      iconColor: '',

      background: 'rgba(0, 0, 0, .5)',
      
      mask: true,
      maskLock: false,
      maskBackground: 'rgba(0, 0, 0, .3)',

      delay: false,
      duration: 3
    }
  },

  methods: {
    initToastData (options) {
      // ... 展开运算符在这里报错，原因不知到，该方法也可以达到同样效果，代码量还少
      // assign 方法，能合并数据，但无法更换页面设置；但更换思路，先合并数据，后将整个数据进行替换即可，成功，仅仅是中间层转换
      var config = this.data.config
      Object.assign(config, options)
      // 有坑
      this.setData({
        config: config
      })
      console.log(this.data.config)
    },

    showToast (options) {
      this.initToastData(options)

      this.setData({
        show: true
      })

      this.delayHideToast()
    },

    delayHideToast () {
      var self = this
      var duration = this.data.config.duration * 1000

      if (this.data.config.delay) {
        setTimeout(function () {
          self.hideToast()
        }, duration)
      }
    },

    hideToast () {
      if (this.data.config.maskLock) return
      this.setData({
        show: false
      })
    }
  }
})
