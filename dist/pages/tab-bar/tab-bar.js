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
  }
});