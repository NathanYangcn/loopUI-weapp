'use strict';

var app = getApp();

Page({
  data: {},
  tapname: function tapname() {
    this.toast.showToast({ text: 'loopUI', iconType: 'waiting', iconColor: 'green' });
  },
  onReady: function onReady() {
    this.toast = this.selectComponent("#toast");
  }
});