// pages/research.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:0,
        title:'',
        author:'',
        content:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        console.log(options.id);
        this.setData({
            id:options.id
        })
        wx.request({
          url: 'http://121.37.67.75:37412/by_id/knowledge/'+this.data.id,
            header:{
              'content-type':"application/json",
            },
            method:'GET',
            success(res){
              console.log(res.data);
              that.setData({
                  title:res.data.title,
                  author:res.data.author,
                  content:res.data.article
              })
        
               },fail(err){
              console.log(err);
            },complete(){
              console.log("检索complete");
            }
          })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})