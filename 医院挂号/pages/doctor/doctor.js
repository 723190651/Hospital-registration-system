
Page({
  data: {
    showView:false,
  },
  Selected:function(){
    wx.showModal({
      title: '挂号须知',
      content: '1.全程自费',
      success:function(res){
        if(res.confirm){
          wx.navigateTo({
            url: '../message/message',
          })
        }
      }
    })
  },

  showhide:function(){
    this.setData({
      showView:(!this.data.showView)
    })
  }
})