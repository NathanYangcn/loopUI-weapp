'use strict';

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
    initToastData: function initToastData(options) {
      var config = this.data.config;
      Object.assign(config, options);

      this.setData({
        config: config
      });
      console.log(this.data.config);
    },
    showToast: function showToast(options) {
      this.initToastData(options);

      this.setData({
        show: true
      });

      this.delayHideToast();
    },
    delayHideToast: function delayHideToast() {
      var self = this;
      var duration = this.data.config.duration * 1000;

      if (this.data.config.delay) {
        setTimeout(function () {
          self.hideToast();
        }, duration);
      }
    },
    hideToast: function hideToast() {
      if (this.data.config.maskLock) return;
      this.setData({
        show: false
      });
    }
  }
});