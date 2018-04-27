// pages/message/message.js
Page({
  data: {
    Confirm:false,
  },

  Notnull:function(e){
    var id = e.currentTarget.id;
    var input=e.detail.value;
    if(input!=null){
      this.setData({
        Confirm:true,
      })
    }
  },

  Sussecc:function(){
    if(this.data.Confirm){
      wx.showModal({
        title: '确认信息',
        content: '确认信息填写正确！',
        success:function(res){
          if (res.confirm) {
            wx.showToast({
              title: '已成功挂号',
            })
            wx.switchTab({
              url: '../index/index',
            })
          }
        }
      })
    }
    else{
      wx.showToast({
        title: '请补全信息',
      })
    }
  }
})