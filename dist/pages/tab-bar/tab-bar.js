'use strict';

var app = getApp();

Page({
  data: {
    selected: '1'
  },
  changeHandle: function changeHandle(_ref) {
    var detail = _ref.detail;

    this.setData({
      selected: detail.name
    });
  },
  failHandle: function failHandle(_ref2) {
    var detail = _ref2.detail;

    console.log('fail', detail);
  },
  completeHandle: function completeHandle(_ref3) {
    var detail = _ref3.detail;

    console.log('complete', detail);
  }
});