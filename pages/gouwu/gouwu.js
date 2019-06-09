// pages/gouwu/gouwu.js
var num =0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gouwuData:true,
    name:"",
    price:"",
    imgs:"",
    checked:true,
    connt:1,
    xianshi:false,
    butBianji:"编辑",
    listData:[
      {
        name:"",
        price:""
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setTitle();
    this.getData();
    this.gouwuData1();
    
   
    // console.log(options.id)
  }, onTabItemTap(item) {
    
      this.getData();
    
    
    this.gouwuData1();
  },
  setTitle(){
    wx.setNavigationBarTitle({
      title: '购物车'
    })
  },
  gouwuData1(){
    var that = this;
    if (that.data.name==""){
      that.setData({
        gouwuData: true
     })
   } else {
      that.setData({
        gouwuData: false
      })
   }
   
  },
  getData(){
    var name = wx.getStorageSync("name").likeName;
    if (name == undefined){
      name ="";
    }
    var price = wx.getStorageSync("name").likeJiage;
    if (price == undefined) {
      price = "";
    }
    var imgs = wx.getStorageSync("name").likeImg;
    if (imgs == undefined) {
      imgs = "";
    }
    this.setData({
      name: name,
      price:price,
      imgs:imgs
    })

  },
  dataJian(){
    // 商品数量的减
    var jianshu = --this.data.connt;
    if (jianshu<=1){
      jianshu = 1
    }
    this.setData({
      connt:jianshu,
      price: "¥" + jianshu*28+".00"
    })
  },
  dataJia() {
     // 商品数量的加
    var jiashu = ++this.data.connt;
    this.setData({
      connt: jiashu,
      price: "¥" + jiashu * 28 + ".00"
    })
  },
  gaibianChed(){
    this.setData({
      checked: !this.data.checked
    })
  },
  bianji(){
      this.setData({
        xianshi:true,
        checked: false,
        butBianji:"删除"
      })
  },
  wangcheng(){
    this.setData({
      xianshi: false,
      checked: true,
      butBianji: "编辑"
    })
  },
  shanchuData(){
    wx.clearStorageSync("name");
    this.setData({
      name: ""
     
    })
    this.gouwuData1()
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      
      duration: 2000
    })
  }
  
})