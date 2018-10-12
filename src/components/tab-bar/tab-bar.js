var app = getApp()

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
    tabbarItemList: [],
    isIphoneX: app.globalData.isIphoneX
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

        if (nodes[i].data.appid)   {
          itemList.push({
            tomini: false,
            name: nodes[i].data.name,
            appid: nodes[i].data.appid,
            path: nodes[i].data.path,
            extradata: nodes[i].data.extradata,
            version: nodes[i].data.version
          })          
        } else {
          itemList.push({
            tomini: true,
            name: nodes[i].data.name
          })
        }        
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
    },


    emitFail (e) {
      const name = e.currentTarget.dataset.name
      this.triggerEvent('fail', name);
    },

    emitSuccess (e) {
      const name = e.currentTarget.dataset.name
      this.triggerEvent('success', name);
    },

    emitComplete (e) {
      const name = e.currentTarget.dataset.name
      this.triggerEvent('complete', name);
    }
  }
})
