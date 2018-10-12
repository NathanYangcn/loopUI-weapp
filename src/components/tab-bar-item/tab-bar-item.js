Component({
  relations: {
    '../tab-bar/tab-bar': {      
      type: 'parent',
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
    isSelected (selected) {
      this.setData({
        selected: selected
      })
    },
    isSelectedColor (color) {
      this.setData({
        selectedColor: color
      })
    },
    isUnselectedColor (color) {
      this.setData({
        unselectedColor: color
      })
    }
    // 该语句的作用与 tab-bar.js 中的语句相同，此处无用，因为已经调整 z-index 的关系进行覆盖 
    // clickItem () {
    //   const parent = this.getRelationNodes('../tab-bar/tab-bar')[0];
    //   parent.emitEvent(this.data.name);
    // }
  }
})