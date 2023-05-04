// index.js
// 获取应用实例

// const { LIGHT_OFFSETS } = require("XrFrame/kanata/lib/index");


Page({
  data: {
    showbutton:'none',
    nowindex:100,
    choosemonth:0,
    chooseindex:0,
    message:{
      // b_id:0,
      // b_img:'',
      // b_classification:'',
      // b_content:'',
      // b_author:'',
      // b_title:''
      
    },
    calendarheight:0,
    choosedate:'2023-04-06',
    chooseday:0,
    calendarclass:"closecalendar",
    show:0,
    zindex:1,
    showresearch:false,
    animation:{},
    animationdata:{},
    showcalendar:false,
    
    Nongli:0,
    chineseMonth:'',
    lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554,
    0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0,
    0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566,
    0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550,
    0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0,
    0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263,
    0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0,
    0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5,
    0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0,
    0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9,
    0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0,
    0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520,
    0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0
  ],
    chineseNumber:[
    "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "十二"
  ],
    lunarDate:'',
    weekList: ['一','二','三','四','五','六','日'], //一周
    month:[
      {
        // text   此值为日期值，类型为number
        // now    此值为今天，在本月的周末为false，其它时候为true，类型为布尔
        // gray   此值为日期置灰，本月中的上月和下月日期以及本月的周末，类型为布尔
      }
    ],//一个月所有数据
    nowYear: 0,//选择的年
    nowMonth: 0,//选择的月
    nowMonthStr: '',//转换格式的月
    nowday:0,
    nowdayStr:'',
    today: 0,//今天
    jieguo:{},
    kindindex:0
    
  },

// 检索开始
showResearch:function(){
  this.setData({
      showresearch:true
  })
  console.log("hhh");
},
closeResearch:function(){
  this.setData({
      showresearch:false,
      jieguo:{}
  })
  console.log("jjj");
},
// 检索结束

// 事件处理函数
  // 日历开始
    //  选择天数
chooseDate:function(e){
  var that = this;
  var index=e.currentTarget.dataset.index;
  var day = this.data.month[index].text
  var daystr=day.toString().padStart(2,'0')
  let chinesemonth;
  let chineseweek;
  var now = new Date().getTime();
  var abs=Math.abs(index-day)
  if(abs>0&&abs<7){
    
    this.setData({
      choosedate:this.data.nowYear+'-'+this.data.nowMonth+'-'+daystr,
      // calendarclass:this.data.showcalendar?"closecalendar":"opencalendar",
      chooseday:day,
      })
      var choose = new Date(this.data.choosedate).getTime();
      console.log(choose);
      console.log(now);
    if(choose<now){

   
    this.rili1();
 console.log("101choosedate"+this.data.choosedate);
 this.getChooseLunarDate();
 //   console.log("156选择的日期"+this.data.choosedate);
 //   console.log("157月份"+chinesemonth);
 wx.request({
   url:'http://121.37.67.75:37412/dailypush/'+this.data.kindindex+'/'+this.data.choosedate,
   header:{
   'content-type':"application/json",
   },
   method:'GET',
   success(res){
       
     that.setData({
      message:res.data
     })
     console.log(that.data.message.image_url);
   },fail(){
      console.log("fail");
     },complete(){
         console.log("complete");
       }
    })
// jjjjjj

var choosed=new Date(this.data.choosedate)
  var choosemonth = choosed.getMonth()+1;
  var week = choosed.getDay();
  if(week=='1'){
    chineseweek="星期一";
  }else if(week=='2'){
    chineseweek="星期二";
  }
  else if(week=='3'){
    chineseweek="星期三";
  }
  else if(week=='4'){
    chineseweek="星期四";
  }
  else if(week=='5'){
    chineseweek="星期五";
  }
  else if(week=='6'){
    chineseweek="星期六";
  }else if(week=='0'){
    chineseweek="星期天";
  }
  if(choosemonth=='1'){
    chinesemonth="一月"
  }else if(choosemonth=='2'){
    chinesemonth="二月"
  }else if(choosemonth=='3'){
    chinesemonth="三月"
  }else if(choosemonth=='4'){
    chinesemonth="四月"
  }else if(choosemonth=='5'){
    chinesemonth="五月"
  }else if(choosemonth=='6'){
    chinesemonth="六月"
  }else if(choosemonth=='7'){
    chinesemonth="七月"
  }else if(choosemonth=='8'){
    chinesemonth="八月"
  }else if(choosemonth=='9'){
    chinesemonth="九月"
  }else if(choosemonth=='10'){
    chinesemonth="十月"
  }else if(choosemonth=='11'){
    chinesemonth="十一月"
  }else if(choosemonth=='12'){
    chinesemonth="十二月"
  }
  console.log("182choosemonth"+choosemonth);
  console.log("183nowMonth"+this.data.nowMonth);
  this.setData({
    Nongli:this.data.Nongli+' · '+chineseweek,
    chineseMonth:chinesemonth,
    nowday:day,
    choosemonth:choosemonth,
    chooseindex:index,
    nowindex:choosemonth==this.data.nowMonth?index:'100',
    showbutton:'block'

  })
//  jjjjjjjj11111

  }
  else{
    console.log("还未开通");
    wx.showToast({
      title: '敬请期待',
      duration:900,
      icon:'none',
      mask:true
    })
  }
  }
  else{
    if(day>this.data.nowday){
      console.log("敬请期待");
    }
    console.log("day"+day);
    console.log("nowday"+that.data.nowday);
   

}
    // JJJJJJ
 
  // JJJJJJJJ111111
},
  // 回到今日功能

  // 获取今天日期 2023-01-01
  nowDateStr(){
    var daystr=this.data.nowday.toString().padStart(2,'0')
    this.setData({
      nowdayStr:this.data.nowYear+'-'+this.data.nowMonth+'-'+daystr,
      choosedate:this.data.nowYear+'-'+this.data.nowMonth+'-'+daystr
    })
    console.log("131为"+this.data.nowdayStr);
  },
  gainDate(){
    // let d = Reflect.construct(Date,[]);
    let d = new Date();
    this.setData({
      nowYear: d.getFullYear(),
      nowMonth: d.getMonth() + 1,
      today: d.getDate(),
      nowMonthStr: (d.getMonth() + 1).toString().padStart(2,'0')
    })
  },
  // 上个月
  prev(){
    if(this.data.nowMonth > 1){
      this.setData({
        nowMonth: this.data.nowMonth  - 1,
        nowMonthStr: (this.data.nowMonth  - 1).toString().padStart(2,'0'),
      })
    }else{
      this.setData({
        nowYear: this.data.nowYear - 1,
        nowMonth: 12,
        nowMonthStr: "12",
        
      })
    }
    console.log("272nowindex"+this.data.nowindex);
    this.todayProminent()
    this.dateInit()
    console.log("275比对"+this.data.nowMonth+this.data.choosemonth);
    this.setData({
      nowindex:this.data.choosemonth==this.data.nowMonth?this.data.chooseindex:'100',
      
    })
      
  },

  // 下个月
  next(){
    if(this.data.nowMonth < 12){
      this.setData({
        nowMonth: this.data.nowMonth  + 1,
        nowMonthStr: (this.data.nowMonth  + 1).toString().padStart(2,'0')
      })
    }else{
      this.setData({
        nowYear: this.data.nowYear + 1,
        nowMonth: 1,
        nowMonthStr: "01"
      })
    }
    this.todayProminent()
    this.dateInit()
    this.setData({
      nowindex:this.data.choosemonth==this.data.nowMonth?this.data.chooseindex:'100'
    })
  },
  //今天日期凸显
  todayProminent(){
    // 将今天置为0
    this.setData({
      today: 0
    })
    let d = Reflect.construct(Date,[]);
    if(d.getFullYear() == this.data.nowYear && d.getMonth() + 1 == this.data.nowMonth){
      this.setData({
        today: d.getMonth() + 1 > this.data.nowMonth + 1 ? 0 : d.getDate()
      })
    }
    console.log(this.data.today);
    
  },
  // 日历主体
  dateInit(){
    let now = Reflect.construct(Date,[this.data.nowYear,this.data.nowMonth -1]); //当前月份的一号
    let startWeekNow = now.getDay(); //当前月份的一号对应的星期
    let end = Reflect.construct(Date,[Reflect.construct(Date,[this.data.nowYear,this.data.nowMonth]) -10]);// 当前月份的最后一号
    let endWeekNow = end.getDay(); //当前月份的最后一天对应的星期
    let dayNumNow = Reflect.construct(Date,[this.data.nowYear,this.data.nowMonth,0]).getDate(); //当前月有多少天
    let dayNumPrev = Reflect.construct(Date,[this.data.nowMonth - 1 ? this.data.nowYear : this.data.nowYear -1,this.data.nowMonth - 1 ? this.data.nowMonth - 1 : 12,0]).getDate(); //上个月有多少天
    
    let prevMonthShow = []; //上个月日期展示的数据
    let nowMonthShow = []; //本月日期展示的数据
    let nextMonthShow = []; //下个月日期展示的数据
    for(let i = 1; i < (startWeekNow ? startWeekNow : 7); i++){
      prevMonthShow.unshift(
        {
          text: dayNumPrev - i + 1,
          now: false,
          gray: true,
        
        }
      )
    };
    for(let i = 1; i <= dayNumNow; i++){
      if(this.data.today == i){
        nowMonthShow.push(
          {
            text: i,
            now: true,
            gray: false

            // 下面代码是将周末置灰以及周末不显示今天的样式
            // now: ((startWeekNow + i - 1) % 7 == 6 || (startWeekNow + i - 1) % 7 == 0) ? false : true,
            // gray: ((startWeekNow + i - 1) % 7 == 6 || (startWeekNow + i - 1) % 7 == 0) ? true : false
          }
        )
      }else{
        nowMonthShow.push(
          {
            text: i,
            now: false,
            gray: false

            // 下面代码是将周末置灰
            // gray: ((startWeekNow + i - 1) % 7 == 6 || (startWeekNow + i - 1) % 7 == 0) ? true : false
          }
        )
      }
    };
    for(let i = 1; i <= (endWeekNow ? 7 - endWeekNow : 0); i++){
      nextMonthShow.push(
        {
          text: i,
          now: false,
          gray: true
        }
      )
    };
    this.setData({
      month: [...prevMonthShow,...nowMonthShow,...nextMonthShow],
    })
  },
  riliheight(){
    // return new Promise((resolve,reject)=>{
      var query = wx.createSelectorQuery();
      query.select('.allcalendar').boundingClientRect(rect=>{
        this.data.calendarheight=rect.height
        console.log(this.data.calendarheight);
      }).exec();
    // })
  },
    // 展开与收回日历
  rili:function(){
    this.rili1();
    
  },
  rili1:function(){
    // 给中国结创建下拉平移动画
    var that=this;
    var height=this.data.calendarheight
    var animation = wx.createAnimation({
      duration:300,
      timingFunction:"ease-in"
    })
    if(this.data.show==0){
      animation.translateY(height).step();
      that.data.show=1
      that.setData({
        animation:"opencalendar",
        calendarclass:"opencalendar",
        zindex:999
      })
    }else{
      animation.translateY(0).step();
      this.data.show=0
      
      that.setData({
        animation:"closecalendar",
        calendarclass:"closecalendar",
        
      })
      setTimeout(()=>{
        var index=that.data.zindex
        console.log("kkk"+index);
        that.setData({
          zindex:1
        })
       
      },300)
    }
    
  that.setData({
    showcalendar:!this.data.showcalendar,
    animationdata:animation.export()
})
  },
  
    
    
      
   
      

   
  

  // 日历结束
// 获取选择日期的农历日期
getChooseLunarDate: function() {
  var self = this;
  var yearCyl,monCyl,dayCyl;
  var leapMonth = 0;
  var date = new Date('1900/1/31');
  var curDate =new Date(self.data.choosedate);
  // 求出和1900年1月31日相差的天数
  var offset = parseInt( (curDate.getTime() - date.getTime()) / 86400000 );
  dayCyl = offset + 40;
  monCyl = 14;
  // 用offset减去每农历年的天数
  // 计算当天是农历第几天
  // i最终结果是农历的年份
  // offset是当年的第几天
  var iYear, daysOfYear = 0;
  for (iYear = 1900; iYear < 2050 && offset > 0; iYear++) {
    daysOfYear = self.yearDays(iYear);
    offset -= daysOfYear;
    monCyl += 12;
  }
  if (offset < 0) {
    offset += daysOfYear;
    iYear--;
    monCyl -= 12;
  }
  yearCyl = iYear - 1864;
  leapMonth = self.leapMonth(iYear); // 闰哪个月,1-12
  var leap = false; // 默认值
  // 用当年的天数offset,逐个减去每月（农历）的天数，求出当天是本月的第几天
  var iMonth, daysOfMonth = 0;
  for (iMonth = 1; iMonth < 13 && offset > 0; iMonth++) {
    // 闰月
    if (leapMonth > 0 && iMonth == (leapMonth + 1) && !leap) {
      --iMonth;
      leap = true;
      daysOfMonth = self.leapDays(iYear);
    } else
      daysOfMonth = self.monthDays(iYear, iMonth);

    offset -= daysOfMonth;
    // 解除闰月
    if (leap && iMonth == (leapMonth + 1))
      leap = false;
    if (!leap)
      monCyl++;
  } 
  // offset为0时，并且刚才计算的月份是闰月，要校正
  if (offset == 0 && leapMonth > 0 && iMonth == leapMonth + 1) {
    if (leap) {
      leap = false;
    } else {
      leap = true;
      --iMonth;
      --monCyl;
    }
  }
  // offset小于0时，也要校正
  if (offset < 0) {
    offset += daysOfMonth;
    --iMonth;
    --monCyl;
  }
  var newday = self.getChinaDayString(offset + 1);
  var newmonth = self.data.chineseNumber[iMonth - 1];
  self.setData({
    lunarDate: newmonth + '月' + newday
  })
  //把日期整合成一个字符串
  if(leapMonth){
    var nongli='农历闰'+newmonth + '月' + newday;
  }else{
    var nongli='农历'+newmonth + '月' + newday;
  }
 
  //把nongli赋值给date里的Nongli,才能在html中使用
  this.setData({
    Nongli:nongli
  })
},
// 获取当前实践日期农历日期开始
  getLunarDate: function() {
    var self = this;
    var yearCyl,monCyl,dayCyl;
    var leapMonth = 0;
    var date = new Date('1900/1/31');
    var curDate =new Date();
    // 求出和1900年1月31日相差的天数
    var offset = parseInt( (curDate.getTime() - date.getTime()) / 86400000 );
    dayCyl = offset + 40;
    monCyl = 14;
    // 用offset减去每农历年的天数
    // 计算当天是农历第几天
    // i最终结果是农历的年份
    // offset是当年的第几天
    var iYear, daysOfYear = 0;
    for (iYear = 1900; iYear < 2050 && offset > 0; iYear++) {
      daysOfYear = self.yearDays(iYear);
      offset -= daysOfYear;
      monCyl += 12;
    }
    if (offset < 0) {
      offset += daysOfYear;
      iYear--;
      monCyl -= 12;
    }
    yearCyl = iYear - 1864;
    leapMonth = self.leapMonth(iYear); // 闰哪个月,1-12
    var leap = false; // 默认值
    // 用当年的天数offset,逐个减去每月（农历）的天数，求出当天是本月的第几天
    var iMonth, daysOfMonth = 0;
    for (iMonth = 1; iMonth < 13 && offset > 0; iMonth++) {
      // 闰月
      if (leapMonth > 0 && iMonth == (leapMonth + 1) && !leap) {
        --iMonth;
        leap = true;
        daysOfMonth = self.leapDays(iYear);
      } else
        daysOfMonth = self.monthDays(iYear, iMonth);

      offset -= daysOfMonth;
      // 解除闰月
      if (leap && iMonth == (leapMonth + 1))
        leap = false;
      if (!leap)
        monCyl++;
    } 
    // offset为0时，并且刚才计算的月份是闰月，要校正
    if (offset == 0 && leapMonth > 0 && iMonth == leapMonth + 1) {
      if (leap) {
        leap = false;
      } else {
        leap = true;
        --iMonth;
        --monCyl;
      }
    }
    // offset小于0时，也要校正
    if (offset < 0) {
      offset += daysOfMonth;
      --iMonth;
      --monCyl;
    }
    var newday = self.getChinaDayString(offset + 1);
    var newmonth = self.data.chineseNumber[iMonth - 1];
    self.setData({
      lunarDate: newmonth + '月' + newday
    })
    //把日期整合成一个字符串
    if(leapMonth){
      var nongli='农历闰'+newmonth + '月' + newday;
    }else{
      var nongli='农历'+newmonth + '月' + newday;
    }
   
    //把nongli赋值给date里的Nongli,才能在html中使用
    this.setData({
      Nongli:nongli
    })
  },

//***上面的方法调用下面的方法***

  yearDays: function (y) {
    var self = this;
    var i, sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
      if ((self.data.lunarInfo[y - 1900] & i) != 0)
        sum += 1;
    }
    return (sum + self.leapDays(y));
  },
  leapDays: function(y){
    var self = this;
    if (self.leapMonth(y) != 0) {
      if ((self.data.lunarInfo[y - 1900] & 0x10000) != 0)
        return 30;
      else
        return 29;
    } else
      return 0;
  },
  leapMonth:function(y) {
    var self = this;
    return self.data.lunarInfo[y - 1900] & 0xf;
  },
  monthDays:function(y,m){
    if ((this.data.lunarInfo[y - 1900] & (0x10000 >> m)) == 0)
      return 29;
    else
      return 30;
  },
  getChinaDayString:function(day){
   var self = this;
    var chineseTen = [ "初", "十", "廿", "卅"];
    var n = day % 10 == 0 ? 9 : day % 10 - 1;
    if (day > 30)
      return "";
    if (day == 10)
      return "初十";
    else
     return chineseTen[parseInt(day/10)] + self.data.chineseNumber[n];
  },
// 获取农历日期结束


   // 获取星期几,月份开始
   getWM:function(){
    console.log("yyyyyy"+this.data.choosedate);
    let chineseweek;
    let chinesemonth;
    // let nowdate = mydate.getDate();
    // let nowdate = this.data.chooseday;
   
    
    var mydate = new Date();
    var nowdate = mydate.getDate()
    var month = mydate.getMonth()+1
    
    var week = mydate.getDay()
    
    if(week=='1'){
      chineseweek="星期一";
    }else if(week=='2'){
      chineseweek="星期二";
    }
    else if(week=='3'){
      chineseweek="星期三";
    }
    else if(week=='4'){
      chineseweek="星期四";
    }
    else if(week=='5'){
      chineseweek="星期五";
    }
    else if(week=='6'){
      chineseweek="星期六";
    }else if(week=='0'){
      chineseweek="星期天";
    }
    if(month=='1'){
      chinesemonth="一月"
    }else if(month=='2'){
      chinesemonth="二月"
    }else if(month=='3'){
      chinesemonth="三月"
    }else if(month=='4'){
      chinesemonth="四月"
    }else if(month=='5'){
      chinesemonth="五月"
    }else if(month=='6'){
      chinesemonth="六月"
    }else if(month=='7'){
      chinesemonth="七月"
    }else if(month=='8'){
      chinesemonth="八月"
    }else if(month=='9'){
      chinesemonth="九月"
    }else if(month=='10'){
      chinesemonth="十月"
    }else if(month=='11'){
      chinesemonth="十一月"
    }else if(month=='12'){
      chinesemonth="十二月"
    }
    this.setData({
      Nongli:this.data.Nongli+' · '+chineseweek,
      chineseMonth:chinesemonth,
      nowday:nowdate

    })
    console.log("nowday");
    console.log("month"+month);
    console.log("week"+week);
   },
  // 获取星期 月份结束

  // 跳转页面
  goToShufa:function(){
    wx.navigateTo({
      url: '/pages/shufa/shufa?id='+this.data.message.id,
    })
  },


  // 回到今日
  backToday(){
    var that = this;
    this.getLunarDate();
    this.getWM();
    console.log(this.data.nowdayStr);
    wx.request({
      url:'http://121.37.67.75:37412/dailypush/'+this.data.kindindex+'/'+this.data.nowdayStr,
     //  data:{
     //    date:'2023-04-05'
     //  },
      header:{
        'content-type':"application/json",
      },
      method:'GET',
      success(res){
        
        that.setData({
          message:res.data
        })
        console.log("572照片路径"+that.data.message.image_url);
      },fail(err){
        console.log("请求失败"+err);
      },complete(){
        console.log("complete");
      }
    })
    this.setData({
      showbutton:'none',
      nowindex:100
    })

  },
  researchbegin(e){
    var that = this;
    console.log(e.detail.value);
    this.setData({
      re_title:e.detail.value
    })
    wx.request({
      url: 'http://121.37.67.75:37412/search/daily/?keyword='+this.data.re_title,
      header:{
        'content-type':"application/json",
      },
      method:'GET',
      success(res){
        var ww=[];
        var judge;
        var ss = res.data
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
      url: '/pages/shufa/shufa?id='+this.data.jieguo[index].id,
    })
  },
  chooseKind(){
    var that = this;
    var kind=0;
    wx.showActionSheet({
      itemList: ['全部','草书','行书','楷书','隶书'],
      success:(res)=>{
        switch(res.tapIndex){
          case 0:
            console.log('0');
            kind = 0
            break;
          case 1:
            console.log('1');
            kind = 3
            break;
          case 2:
              console.log('2');
              kind = 1
              break;
          case 3:
              console.log('3');
              kind = 8
              break;
          case 4:
              console.log('4');
              kind = 2
              break; 
          

          
          
          
          
        }
        that.setData({
          kindindex:kind
        })
        wx.request({
          url: 'http://121.37.67.75:37412/dailypush/'+that.data.kindindex+'/'+this.data.choosedate,
          header:{
            'content-type':"application/json",
          },
          method:'GET',
          success(res){
            console.log("分类申请成功");
            console.log(res);
           
            that.setData({
              message:res.data,
              kindindex:kind
            })
            console.log(that.data.message);
          },fail(err){
            console.log(err);
          },complete(){
            console.log("complete");
          }
        })
        wx.setStorageSync('kind', kind)
      },fail(){
        console.log("取消");
      }
    })
    console.log(that.data.message);
  },
  // 长按保存
  longPress(){
    wx.downloadFile({
      url: this.data.message.image_url,
      success:function(res){
        const tempFilePath = res.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath:tempFilePath,
          success:function(){
            console.log("保存图片成功");
          }
        })
      }
    })
  },
  onLoad() {
    //页面加载就调用获取农历的方法
    var that=this;
    this.data.kindindex=wx.getStorageSync('kind');
   this.getLunarDate();
   this.getWM();
   this.gainDate();
   console.log("496"+this.data.nowYear);
    this.dateInit();
    this.nowDateStr();
  this.riliheight();
  console.log(that.data.today);
   wx.request({
     url:'http://121.37.67.75:37412/dailypush/'+that.data.kindindex+'/'+that.data.choosedate,
     
    //  data:{
    //    date:'2023-04-05'
    //  },
     header:{
       'content-type':"application/json",
     },
     method:'GET',
     success(res){
       console.log(res);
       that.setData({
         message:res.data
       })
       console.log("572照片路径"+that.data.message.image_url);
     },fail(err){
       console.log("请求失败"+err);
     },complete(){
       console.log("complete");
       console.log(that.data.kindindex);
     }
   })
  
  },
  
 

 
})

