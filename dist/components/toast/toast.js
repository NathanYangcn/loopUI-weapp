'use strict';

Component({
  data: {
    show: false,

    config: {
      text: 'hello',
      iconType: 'success',
      iconSize: 35,
      iconColor: '',

      delay: true,
      duration: 3,
      mask: true,
      maskBackground: 'rgba(0, 0, 0, .3)',
      color: '#fff',
      fontSize: '20px',
      background: 'rgba(0, 0, 0, .5)'
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
      this.setData({
        show: false
      });
    }
  }
});