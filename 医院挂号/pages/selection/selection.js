
Page({
  data: {
    caseItems: [
      {
        id:1,
        name:"内科",
        ishaveChild:true,
        children:[
          {
            child_id:1,
            child_name:"心血管内科",
          },
          {
            child_id: 2,
            child_name: "神经内科",
          },
          {
            child_id: 3,
            child_name: "肾病内科",
          },
        ]
      },
      {
        id:2,
        name:"外科",
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            child_name: "神经外科",
          },
          {
            child_id: 2,
            child_name: "心血管外科",
          },
          {
            child_id: 3,
            child_name: "肛肠科",
          },
        ]
      },
      {
        id:3,
        name:"眼科",
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            child_name: "白内障",
          },
          {
            child_id: 2,
            child_name: "青光眼",
          },
          {
            child_id: 3,
            child_name: "眼外伤",
          },
        ]
      },
    ],
    curNav: 1,
    curIndex: 0
  },
  //事件处理函数
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})