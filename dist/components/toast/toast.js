'use strict';

Component({
  data: {
    show: false,

    config: {
      type: 'defalt',

      text: 'hello',
      textColor: '#fff',
      textSize: '15px',

      icon: 'success',
      iconSize: 35,
      iconColor: '',

      background: 'rgba(0, 0, 0, .5)',

      mask: true,
      maskLock: false,
      maskBackground: 'rgba(0, 0, 0, .3)',

      delay: false,
      duration: 3,

      loading: true
    }
  },

  methods: {
    initToastData: function initToastData(options) {
      var config = this.data.config;

      Object.assign(config, options);

      this.setData({
        config: config
      });
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