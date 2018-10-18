'use strict';

var app = getApp();

Page({
  data: {},
  tapname: function tapname() {
    this.toast.showToast({ text: 'loopUI-OP', iconType: 'waiting', maskLock: true });
  },
  onReady: function onReady() {
    this.toast = this.selectComponent("#toast");
  }
});