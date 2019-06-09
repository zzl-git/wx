var amapFile = require('../../libs/amap-wx.js');
var markersData = {
  latitude: '',//纬度
  longitude: '',//经度
  key: "需要去高德地图注册成为开发者，然后就会获得一个key"//申请的高德地图key
};

// pages/gouwu/gouwu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
     
    ],
    indicatorDots: true,  
    likeData:[
      {
        likeImg:"http://img2.imgtn.bdimg.com/it/u=2748432246,2233307544&fm=11&gp=0.jpg",
        likeName:"盐菜肉",
        likeJiage:"¥28.00"
      }, {
        likeImg: "http://img2.imgtn.bdimg.com/it/u=2748432246,2233307544&fm=11&gp=0.jpg",
        likeName: "盐菜肉",
        likeJiage: "¥28.00"
      }, {
        likeImg: "http://img2.imgtn.bdimg.com/it/u=2748432246,2233307544&fm=11&gp=0.jpg",
        likeName: "盐菜肉",
        likeJiage: "¥28.00"
      }, {
        likeImg: "http://img2.imgtn.bdimg.com/it/u=2748432246,2233307544&fm=11&gp=0.jpg",
        likeName: "盐菜肉",
        likeJiage: "¥28.00"
      }, {
        likeImg: "http://img2.imgtn.bdimg.com/it/u=2748432246,2233307544&fm=11&gp=0.jpg",
        likeName: "盐菜肉",
        likeJiage: "¥28.00"
      }, {
        likeImg: "http://img2.imgtn.bdimg.com/it/u=2748432246,2233307544&fm=11&gp=0.jpg",
        likeName: "盐菜肉",
        likeJiage: "¥28.00"
      }, {
        likeImg: "http://img2.imgtn.bdimg.com/it/u=2748432246,2233307544&fm=11&gp=0.jpg",
        likeName: "盐菜肉",
        likeJiage: "¥28.00"
      }, {
        likeImg: "http://img2.imgtn.bdimg.com/it/u=2748432246,2233307544&fm=11&gp=0.jpg",
        likeName: "盐菜肉",
        likeJiage: "¥28.00"
      },
    ] 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPosition()
  },
  
  getPosition(){
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(res)
      }
    })
  },
  chuandiData(){
    wx.setStorageSync(
      "name", this.data.likeData[0]
      
      );
   
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
  }
 
 
  

  
})