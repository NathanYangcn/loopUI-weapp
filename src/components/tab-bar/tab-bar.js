Component({
  relations: {
    '../tab-bar-item/tab-bar-item': {
      type: 'child',
      linked: function(target) {
        this.getChildNodes()
      },
      linkChanged: function(target) {
        this.getChildNodes()
      },
      unlinked: function(target) {
        this.getChildNodes()
      }
    }
  },

  properties: {
    selected: {
      type: String,
      value: '',
      observer: 'getChildNodes'
    },
    color: {
      type: String,
      value: '#fff'
    },
    selectedColor: {
      type: String,
      value: '#ccc'
    },
    background: {
      type: String,
      value: 'black'
    },
    fixed: {
      type: Boolean,
      value: false
    }
  },

  data: {
    tabbarItemList: []
  },

  methods: {
    getChildNodes (){  
      var itemList = [],
          nodes = this.getRelationNodes('../tab-bar-item/tab-bar-item')

      for (let i = 0; i < nodes.length; i++) {             
        nodes[i].isSelected(nodes[i].data.name === this.data.selected)     
        nodes[i].isUnselectedColor(this.data.color)
        nodes[i].isSelectedColor(this.data.selectedColor)      
        nodes[i].isBackground(this.data.background)   
        itemList.push({
          name: nodes[i].data.name
        })
      }

      this.setData({
        tabbarItemList: itemList
      })
    },
    
    clickItem (e) {   
      const name = e.currentTarget.dataset.name
      this.emitEvent(name);
    },

    emitEvent (name) {
      this.triggerEvent('change', { name });
    }
  }
})
