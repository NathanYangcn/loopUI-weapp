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
    }
  },
  data: {
    selected: false,
    selectedColor: '',
    unselectedColor: '',
    background: ''
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
    },
    isBackground: function isBackground(color) {
      this.setData({
        background: color
      });
    }
  }
});