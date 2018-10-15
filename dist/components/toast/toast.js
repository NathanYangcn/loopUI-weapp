"use strict";

Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },

  data: {},

  methods: {
    isShow: function isShow(val) {
      this.openToast(val);
    },
    openToast: function openToast(val) {
      this.setData({
        show: val
      });
    },
    closeToast: function closeToast() {
      this.setData({
        show: false
      });
    }
  }
});