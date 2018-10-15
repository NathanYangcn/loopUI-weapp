Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },

  data: {
    // show: false
  },

  methods: {
    isShow (val) {  
      this.openToast(val)      
    },
    openToast (val) {
      this.setData({
        show: val
      })
    },
    closeToast () {
      this.setData({
        show: false
      })
    }
  }
})
