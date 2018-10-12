'use strict';

Component({
  relations: {
    '../tab-bar/tab-bar': {
      type: 'parent'
    }
  },
  properties: {
    name: {
      type: String
    },
    icon: {
      type: String,
      value: ''
    },
    selectedIcon: {
      type: String,
      value: ''
    },
    size: {
      type: Number,
      value: 20
    },
    src: {
      type: String,
      value: ''
    },
    selectedSrc: {
      type: String,
      value: ''
    },
    title: {
      type: String
    },
    appid: {
      type: String,
      value: ''
    },
    path: {
      type: String,
      value: ''
    },
    extradata: {
      type: Object,
      value: {}
    },
    version: {
      type: String,
      value: 'release'
    }
  },
  data: {
    selected: false,
    selectedColor: '',
    unselectedColor: ''
  },
  methods: {
    isSelected: function isSelected(selected) {
      this.setData({
        selected: selected
      });
    },
    isSelectedColor: function isSelectedColor(color) {
      this.setData({
        selectedColor: color
      });
    },
    isUnselectedColor: function isUnselectedColor(color) {
      this.setData({
        unselectedColor: color
      });
    }
  }
});