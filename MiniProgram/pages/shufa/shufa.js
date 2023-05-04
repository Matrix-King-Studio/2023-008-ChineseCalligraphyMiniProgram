// pages/shufa/shufa.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showcontent:false,
        showresearch:false,
        id:0,
        message:{},
        img:'',
        content:'',
        re_title:'',
        jieguo:{}
    },
    closeContent:function(){
        this.setData({
            showcontent:false
        })
    },
    showContent:function(){
        this.setData({
            showcontent:true
        })
    },
    showRearch:function(){
        this.setData({
            showresearch:true
        })
    },
    closeResearch:function(){
        this.setData({
            showresearch:false,
            jieguo:{}
        })
    },
    researchbegin(e){
        var that = this;
        console.log(e.detail.value);
        this.setData({
          re_title:e.detail.value
        })
        wx.request({
          url: 'http://121.37.67.75:37412/search/knowledge/?keyword='+this.data.re_title,
          header:{
            'content-type':"application/json",
          },
          method:'GET',
          success(res){
            console.log(res.data);
            var ss = res.data
            var ww=[];
            var judge;
            
            if(ss.length>0){
              console.log(ss);
              for(var i=0;i<res.data.length;i++){
                if(i==0){
                    ww=ww.concat(ss[i]);
                }
                for(var j=0;j<i;j++){
                  if(ss[i].id!=ss[j].id){
                    judge=1
                  }else{judge=0;break}
                }
                if(judge==0){continue}
                if(judge==1){ww=ww.concat(ss[i]); console.log("去重");}
              }
              console.log(ww);
              that.setData({
                jieguo:ww
              })
    
    
            }else{
              that.setData({
                jieguo:[{title:"无相关内容"}]
              })
              console.log("else"+that.data.jieguo);
            }
            
            console.log("最后"+that.data.jieguo);
          },fail(res){
            console.log("检索失败");
          },complete(){
            console.log("检索complete");
          }
        })
      },
      detail(e){
    
        var index=e.currentTarget.dataset.index;
        console.log(e);
        this.setData({
          researchid:this.data.jieguo[index].id
        })
        wx.navigateTo({
          url: '/pages/research/research?id='+this.data.jieguo[index].id,
        })
      },
      longPress(){
        var that = this;
        wx.showModal({
          title:'是否保存图片',
          success:function(res){
            if(res.confirm){
              wx.downloadFile({
                url: that.data.message.image_url,
                success:function(res){
                  const tempFilePath = res.tempFilePath;
                  wx.saveImageToPhotosAlbum({
                    filePath:tempFilePath,
                    success:function(){
                      console.log("保存图片成功");
                      wx.showToast({
                        title: '保存成功',
                        duration:1000,
                        icon:'none'
                      })
                    }
                  })
                }
              })
            } 
          else if(res.confirm){
            console.log("取消保存图片");
            }
          }
        })
        
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        this.setData({
            id:options.id
        })
        wx.request({
          url: 'http://121.37.67.75:37412/by_id/'+this.data.id,
        
        header:{
            'content-type':"application/json",
          },
          method:'GET',
          success(res){
            
            that.setData({
              message:res.data,
              img:res.data.image_url,
              content:res.data.content
            })
            console.log("572照片路径"+that.data.message.image_url);
          },fail(err){
            console.log("请求失败"+err);
          },complete(){
            console.log("complete");
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