<script>
import axios from "axios"

function rgbaToHex(color) {
  var values = color
    .replace(/rgba?\(/, '')
    .replace(/\)/, '')
    .replace(/[\s+]/g, '')
    .split(',');
  var a = parseFloat(values[3] || 1),
    r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
    g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
    b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);

  return "#" +
    ("0" + r.toString(16)).slice(-2) +
    ("0" + g.toString(16)).slice(-2) +
    ("0" + b.toString(16)).slice(-2);
}

function getColorByNumber(n,min,max,orderType) {
  let halfMax = (max-min) / 2  //最大数值的二分之一
    //var 百分之一 = (单色值范围) / halfMax;  单颜色的变化范围只在50%之内
    // 绿色的rgb(0,255,0) 红色的rgb(255,0,0) 红+绿 = 黄色 rgb(255,255,0);
    // [1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]整数会直观一点。
    // 100为例，0为rgb(0,255,0)，1-49应该为rgb(0-254,255,0)， 50为100的一半rgb(255,255,0),51-99应该为rgb(255,0-255,0),100为rgb(255, 2, 0)，255/100不能整除，此处理想状态下应该是rgb(255, 0, 0)
    var one = 255 / halfMax; 
    // console.log('one= ' + one)
    var r = 0;
    var g = 0;
    var b = 0;

    if(n=="暂无数据"||n == null|| n === ''||n.match(/^\s*$/)){
      r = 255;
      g = 255;
      b = 255;
    }else{
      //数值越大越有利
      if(orderType=="asc"){
        if (n-min< halfMax) {
          // 比例小于halfMax的时候红色是越来越多的,直到红色为255时(红+绿)变为黄色.
          r = one*(n-min);  
          g = 255;
        }
        if (n-min>= halfMax) {
          // 比例大于halfMax的时候绿色是越来越少的,直到0 变为纯红
          g = (255-((n-min-halfMax)*one)) < 0 ? 0 : (255-((n-min-halfMax)*one))
          r = 255;
        }
      }
      //数值越小越有利
      if(orderType=="desc"){
        if (n-min< halfMax) {
        // 比例小于halfMax的时候绿色是越来越少的,直到0 变为纯红.
          g = one*(n-min); 
          r = 255;
        }

        if (n-min>= halfMax) {
          // 比例大于halfMax的时候红色是越来越多的,直到红色为255时(红+绿)变为黄色
          r =  (255-((n-min-halfMax)*one)) < 0 ? 0 : (255-((n-min-halfMax)*one));  
          g = 255;
        }
      }
    }
    


    r = parseInt(r);// 取整
    g = parseInt(g);// 取整
    b = parseInt(b);// 取整
    // if(n>1){
    //   console.log(n)
    //   console.log(r,g,b)
    //   console.log(halfMax)
    //   console.log(one)
    // }

    // console.log(r,g,b)
    return rgbaToHex("rgb(" + r + "," + g + "," + b + ")");
}

export default {
  data() {
    return {
      timer:null,
      updateTime:null,
      showHighLimit:null,
      rankWeightMax:0,
      showCountMax:0,
      shortrtnMax:0,
      middlertnMax:0,
      longrtnMax:0,
      compositeScoreRankAvgMax:0,
      weightedOrderBSRateAvgMax:0,
      transBsRateAvgMax:0,
      sdRateMax:0,
      compositeScoreAvgMax:0,
      rankWeightMin:0,
      showCountMin:0,
      shortrtnMin:0,
      middlertnMin:0,
      longrtnMin:0,
      compositeScoreRankAvgMin:0,
      weightedOrderBSRateAvgMin:0,
      transBsRateAvgMin:0,
      sdRateMin:0,
      compositeScoreAvgMin:0,
      tableData: [
        // {
        //   id: 10001,
        //   stkCode: "600000",
        //   stkName: "浦发银行",
        //   orderBSRate: "10%",
        //   highLimitFlag:"1"
        // },
        // {
        //   id: 10002,
        //   stkCode: "600030",
        //   stkName: "中信证券",
        //   orderBSRate: "11%",
        //   highLimitFlag:"0"
        // },
        // {
        //   id: 10003,
        //   stkCode: "600036",
        //   stkName: "招商银行",
        //   orderBSRate: "12%"
        // }
      ]
    }
  },
  mounted() {
    this.showHighLimit = "不计入"
    this.showShort = "不计入"
    this.getCScoreRank();
    this.timer = setInterval(this.getCScoreRank, 60000)
    this.getNowDate()
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    cellStyle({row, column}) {
      switch (column.field) {
        case "rankWeight":
          // console.log(getColorByNumber(row.rankWeight,this.rankWeightMin,this.rankWeightMax));
          return {
            backgroundColor: getColorByNumber(row.rankWeight,this.rankWeightMin,this.rankWeightMax,"asc"),
            color: '＃C0C0C0'
          };
        case "showCount":
          // console.log(getColorByNumber(row.showCount,this.showCountMin,this.showCountMax));
          return {
              backgroundColor: getColorByNumber(row.showCount,this.showCountMin,this.showCountMax,"asc"),
              color: '＃C0C0C0'
          };
        case "shortrtn":
          return {
              backgroundColor: getColorByNumber(row.shortrtn,this.shortrtnMin,this.shortrtnMax,"desc"),
              color: '＃C0C0C0'
          };
        case "middlertn":
          return {
              backgroundColor: getColorByNumber(row.middlertn,this.middlertnMin,this.middlertnMax,"desc"),
              color: '＃C0C0C0'
          };
        case "longrtn":
          return {
              backgroundColor: getColorByNumber(row.longrtn,this.longrtnMin,this.longrtnMax,"desc"),
              color: '＃C0C0C0'
          };
        case "compositeScoreRankAvg":
          return {
              backgroundColor: getColorByNumber(row.compositeScoreRankAvg,this.compositeScoreRankAvgMin,this.compositeScoreRankAvgMax,"desc"),
              color: '＃C0C0C0'
          };  
        case "weightedOrderBSRateAvg":
          return {
              backgroundColor: getColorByNumber(row.weightedOrderBSRateAvg,this.weightedOrderBSRateAvgMin,this.weightedOrderBSRateAvgMax,"asc"),
              color: '＃C0C0C0'
          };
        case "transBsRateAvg":
          return {
              backgroundColor: getColorByNumber(row.transBsRateAvg,this.transBsRateAvgMin,this.transBsRateAvgMax,"asc"),
              color: '＃C0C0C0'
          };
        case "sdRate":
          return {
              backgroundColor: getColorByNumber(row.sdRate,this.sdRateMin,this.sdRateMax,"desc"),
              color: '＃C0C0C0'
          };
        case "compositeScoreAvg":
          return {
              backgroundColor: getColorByNumber(row.compositeScoreAvg,this.compositeScoreAvgMin,this.compositeScoreAvgMax,"asc"),
              color: '＃C0C0C0'
          };
      }
    },
    getFieldMaxValue(responseData){
      var rankWeightList=[]
      var showCountList=[]
      var shortrtnList=[]
      var middlertnList=[]
      var longrtnList=[]
      var compositeScoreRankAvgList=[]
      var weightedOrderBSRateAvgList=[]
      var transBsRateAvgList=[]
      var sdRateList=[]
      var compositeScoreAvgList=[]
      for(var i = 0; i < responseData.length; i++) {
        if(responseData[i].rankWeight!=null){
          rankWeightList.push(parseFloat(responseData[i].rankWeight));
        }
        if(responseData[i].showCount!=null){
          showCountList.push(parseFloat(responseData[i].showCount));
        }
        if(responseData[i].shortrtn!=null&&responseData[i].shortrtn!="暂无数据"){
          shortrtnList.push(parseFloat(responseData[i].shortrtn));
        }
        if(responseData[i].middlertn!=null&&responseData[i].middlertn!="暂无数据"){
          middlertnList.push(parseFloat(responseData[i].middlertn));
        }
        if(responseData[i].longrtn!=null&&responseData[i].longrtn!="暂无数据"){
          longrtnList.push(parseFloat(responseData[i].longrtn));
        }
        if(responseData[i].compositeScoreRankAvg!=null){
          compositeScoreRankAvgList.push(parseFloat(responseData[i].compositeScoreRankAvg));
        }
        if(responseData[i].weightedOrderBSRateAvg!=null){
          weightedOrderBSRateAvgList.push(parseFloat(responseData[i].weightedOrderBSRateAvg));
        }
        if(responseData[i].transBsRateAvg!=null){
          transBsRateAvgList.push(parseFloat(responseData[i].transBsRateAvg));
        }
        if(responseData[i].sdRate!=null){
          sdRateList.push(parseFloat(responseData[i].sdRate));
        }
        if(responseData[i].compositeScoreAvg!=null){
          compositeScoreAvgList.push(parseFloat(responseData[i].compositeScoreAvg));
        }
      }
      // console.log(rankWeightList)
      this.rankWeightMax=Math.max.apply(null, rankWeightList);
      this.showCountMax=Math.max.apply(null, showCountList);
      this.shortrtnMax=Math.max.apply(null, shortrtnList);
      this.middlertnMax=Math.max.apply(null, middlertnList);
      this.longrtnMax=Math.max.apply(null, longrtnList);
      this.compositeScoreRankAvgMax=Math.max.apply(null, compositeScoreRankAvgList);
      this.weightedOrderBSRateAvgMax=Math.max.apply(null, weightedOrderBSRateAvgList);
      this.transBsRateAvgMax=Math.max.apply(null, transBsRateAvgList);
      this.sdRateMax=Math.max.apply(null, sdRateList);
      this.compositeScoreAvgMax=Math.max.apply(null, compositeScoreAvgList);
      this.rankWeightMin=Math.min.apply(null, rankWeightList);
      this.showCountMin=Math.min.apply(null, showCountList);
      this.shortrtnMin=Math.min.apply(null, shortrtnList);
      this.middlertnMin=Math.min.apply(null, middlertnList);
      this.longrtnMin=Math.min.apply(null, longrtnList);
      this.compositeScoreRankAvgMin=Math.min.apply(null, compositeScoreRankAvgList);
      this.weightedOrderBSRateAvgMin=Math.min.apply(null, weightedOrderBSRateAvgList);
      this.transBsRateAvgMin=Math.min.apply(null, transBsRateAvgList);
      this.sdRateMin=Math.min.apply(null, sdRateList);
      this.compositeScoreAvgMin=Math.min.apply(null, compositeScoreAvgList);
      // console.log(this.rankWeightMin)
      // console.log(this.showCountMin)
      // console.log(this.shortrtnMin)
      // console.log(this.middlertnMin)
      // console.log(this.longrtnMin)
      // console.log(this.rankWeightMax)
      // console.log(this.showCountMax)
      // console.log(this.shortrtnMax)
      // console.log(this.middlertnMax)
      // console.log(this.longrtnMax)
    },
    rowClassName({row}) {
      if (row.highLimitFlag>0) {
          return 'row-purple'
      }
    },
    getNowDate() {
           var date = new Date();
           var sign2 = ":";
           var year = date.getFullYear() // 年
           var month = date.getMonth() + 1; // 月
           var day = date.getDate(); // 日
           var hour = date.getHours(); // 时
           var minutes = date.getMinutes(); // 分
           var seconds = date.getSeconds() //秒
           var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
           var week = weekArr[date.getDay()];
            // 给一位数的数据前面加 “0”
           if (month >= 1 && month <= 9) {
                month = "0" + month;
           }
            if (day >= 0 && day <= 9) {
                day = "0" + day;
            }
            if (hour >= 0 && hour <= 9) {
             hour = "0" + hour;
             }
           if (minutes >= 0 && minutes <= 9) {
              minutes = "0" + minutes;
            }
           if (seconds >= 0 && seconds <= 9) {
              seconds = "0" + seconds;
          }
      this.updateTime =  year + "-" + month + "-" + day + " " + hour + sign2 + minutes + sign2 + seconds;
    },
    setHighLimit() {
           if (this.showHighLimit=="计入") {
            this.showHighLimit="不计入";
            this.getCScoreRank();
           }
           else{
            this.showHighLimit="计入";
            this.getCScoreRank();
           }  
    },
    setShort() {
           if (this.showShort=="计入") {
            this.showShort="不计入";
            this.getCScoreRank();
           }
           else{
            this.showShort="计入";
            this.getCScoreRank();
           }  
    },
    getCScoreRank(){
      var rankValue = null;
      if(this.showHighLimit=="不计入"){
        rankValue="not-show";
      }
      else{
        rankValue="show";
      }
      var shortFlag = null;
      if(this.showShort=="不计入"){
        shortFlag="not-show";
      }
      else{
        shortFlag="show";
      }
      axios({
        method:'post',
        url:'/getCScoreRankByOverallRating',
        params:{
          high_limit_show:rankValue,
          table_name:"all",
          short_flag:shortFlag,
          sort_flag:"top"
        }
      }).then(response => {
        // console.log(response.data)
        this.tableData = response.data
        this.getNowDate()
        this.getFieldMaxValue(response.data)
        // this.tableData[0].stock_name="moooo"
        // console.log(this.tableData[0].stock_name)
      })
      .catch((error) => { // 请求失败处理
          console.log(error)
          this.updateTime = "请求失败"
      })
    },
    formatterNum ({ cellValue }) {
      return cellValue=="暂无数据"||cellValue==null?"暂无数据":cellValue+"%"
    } 
     
  }
}

</script>
<template>
  <div style="width: 2000px;">
    <vxe-button @click="getCScoreRank()" status="primary" content="更新" style="width: 80px;"></vxe-button>
    <vxe-button @click="setHighLimit()" status="primary" content="计入涨停" style="left:20px;"></vxe-button>
    <vxe-button @click="setShort()" status="primary" content="计入看空" style="left:40px;"></vxe-button>
    <!-- <button @click="getCScoreRank()" style="width: 50px;">更新</button> -->
    
    <p>更新时间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{updateTime}}</p>
    <p>是否计入涨停&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{showHighLimit}}</p>
    <p>是否计入看空&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{showShort}}</p>
    <vxe-table 
    class="mytable-style"
    border="full" 
    height="1100"
    :data="tableData"
    :cell-style="cellStyle"
    :row-class-name="rowClassName">
      <vxe-table-column type="seq" width="60" title="序号"></vxe-table-column>
      <vxe-table-column field="stkCode" sortable title="股票代码"></vxe-table-column>
      <vxe-table-column field="stkName" sortable title="股票名称"></vxe-table-column>
      <vxe-table-column field="sw3Code" sortable title="三级行业代码"></vxe-table-column>
      <vxe-table-column field="sw3Name" sortable title="三级行业名称"></vxe-table-column>
      <vxe-table-column field="rankNum" sortable title="行业内相对排名" sort-type="number"></vxe-table-column>
      <vxe-table-column field="rankWeight" sortable title="行业内权重" sort-type="number"></vxe-table-column>
      <vxe-table-column field="compositeScoreAvg" sortable title="得分均值" sort-type="number"></vxe-table-column>
      <vxe-table-column field="compositeScoreRankAvg" sortable title="排名均值" sort-type="number"></vxe-table-column>
      <vxe-table-column field="weightedOrderBSRateAvg" sortable title="加权压托比" sort-type="number"></vxe-table-column>
      <vxe-table-column field="transBsRateAvg" sortable title="买卖比" sort-type="number"></vxe-table-column>
      <vxe-table-column field="showCount" sortable title="出现次数" sort-type="number"></vxe-table-column>
      <vxe-table-column field="sdRate" sortable title="当日涨跌幅" :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="shortrtn" sortable title="短期涨跌幅"  :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="middlertn" sortable title="中期涨跌幅"  :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="longrtn" sortable title="长期涨跌幅"  :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="product" sortable title="主要产品" width="200"></vxe-table-column>
      <vxe-table-column field="highLimitFlag" sortable title="当日涨停标志"></vxe-table-column>
      <!-- <vxe-table-column field="lowLimitFlag" sortable title="跌停标志" width="200"></vxe-table-column> -->
    </vxe-table>
  </div>
</template>

