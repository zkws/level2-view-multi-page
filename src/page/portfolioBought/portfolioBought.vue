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
      rankWeightMax:0,    
      orderBSRateMax:0,
      weightedOrderBSRateMax:0,
      transBsRateMax:0,
      compositeScoreMax:0,
      orderBSRateM5Max:0,
      sdRateMax:0,
      shortrtnMax:0,
      middlertnMax:0,
      longrtnMax:0,
      rankWeightMin:0,    
      orderBSRateMin:0,
      weightedOrderBSRateMin:0,
      transBsRateMin:0,
      compositeScoreMin:0,
      orderBSRateM5Min:0,
      sdRateMin:0,
      shortrtnMin:0,
      middlertnMin:0,
      longrtnMin:0,
      tableData: [
        // {
        //   id: 10001,
        //   stkCode: "600000",
        //   stkName: "浦发银行",
        //   orderBSRate: "10%",
        //   compositeScore:3.2,
        //   highLimitFlag:"1"
        // }
        // {
        //   id: 10001,
        //   stkCode: "600000",
        //   stkName: "浦发银行",
        //   orderBSRate: "10%"
        // },
        // {
        //   id: 10002,
        //   stkCode: "600030",
        //   stkName: "中信证券",
        //   orderBSRate: "11%"
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
    this.getPortfolioInfo();
    this.timer = setInterval(this.getPortfolioInfo, 20000)
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
        case "orderBSRate":
          // console.log(getColorByNumber(row.showCount,this.showCountMin,this.showCountMax));
          return {
              backgroundColor: getColorByNumber(row.orderBSRate,this.orderBSRateMin,this.orderBSRateMax,"asc"),
              color: '＃C0C0C0'
          };
        case "weightedOrderBSRate":
          return {
              backgroundColor: getColorByNumber(row.weightedOrderBSRate,this.weightedOrderBSRateMin,this.weightedOrderBSRateMax,"asc"),
              color: '＃C0C0C0'
          };
        case "transBsRate":
          return {
              backgroundColor: getColorByNumber(row.transBsRate,this.transBsRateMin,this.transBsRateMax,"asc"),
              color: '＃C0C0C0'
          }; 
        case "compositeScore":
          return {
              backgroundColor: getColorByNumber(row.compositeScore,this.compositeScoreMin,this.compositeScoreMax,"asc"),
              color: '＃C0C0C0'
          };
        case "orderBSRateM5":
          // console.log(getColorByNumber(row.showCount,this.showCountMin,this.showCountMax));
          return {
              backgroundColor: getColorByNumber(row.orderBSRateM5,this.orderBSRateM5Min,this.orderBSRateM5Max,"asc"),
              color: '＃C0C0C0'
          };
        case "sdRate":
          return {
              backgroundColor: getColorByNumber(row.sdRate,this.sdRateMin,this.sdRateMax,"desc"),
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
      }
    },
    getFieldMaxValue(responseData){
      var rankWeightList=[]    
      var orderBSRateList=[]
      var weightedOrderBSRateList=[]
      var transBsRateList=[]
      var compositeScoreList=[]
      var orderBSRateM5List=[]
      var sdRateList=[]
      var shortrtnList=[]
      var middlertnList=[]
      var longrtnList=[]
      for(var i = 0; i < responseData.length; i++) {
        if(responseData[i].rankWeight!=null){
          rankWeightList.push(parseFloat(responseData[i].rankWeight));
        }
        if(responseData[i].orderBSRate!=null){
          orderBSRateList.push(parseFloat(responseData[i].orderBSRate));
        }
        if(responseData[i].weightedOrderBSRate!=null){
          weightedOrderBSRateList.push(parseFloat(responseData[i].weightedOrderBSRate));
        }
        if(responseData[i].transBsRate!=null){
          transBsRateList.push(parseFloat(responseData[i].transBsRate));
        }
        if(responseData[i].compositeScore!=null){
          compositeScoreList.push(parseFloat(responseData[i].compositeScore));
        }
        if(responseData[i].orderBSRateM5!=null){
          orderBSRateM5List.push(parseFloat(responseData[i].orderBSRateM5));
        }
        if(responseData[i].sdRate!=null){
          sdRateList.push(parseFloat(responseData[i].sdRate));
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
        
      }
      // console.log(rankWeightList)
     
      this.rankWeightMax=Math.max.apply(null, rankWeightList);
      this.orderBSRateMax=Math.max.apply(null, orderBSRateList);
      this.weightedOrderBSRateMax=Math.max.apply(null, weightedOrderBSRateList);
      this.transBsRateMax=Math.max.apply(null, transBsRateList);
      this.compositeScoreMax=Math.max.apply(null, compositeScoreList);
      this.orderBSRateM5Max=Math.max.apply(null, orderBSRateM5List);
      this.sdRateMax=Math.max.apply(null, sdRateList);
      this.shortrtnMax=Math.max.apply(null, shortrtnList);
      this.middlertnMax=Math.max.apply(null, middlertnList);
      this.longrtnMax=Math.max.apply(null, longrtnList);
      
      this.rankWeightMin=Math.min.apply(null, rankWeightList);
      this.orderBSRateMin=Math.min.apply(null, orderBSRateList);
      this.weightedOrderBSRateMin=Math.min.apply(null, weightedOrderBSRateList);
      this.transBsRateMin=Math.min.apply(null, transBsRateList);
      this.compositeScoreMin=Math.min.apply(null, compositeScoreList);
      this.orderBSRateM5Min=Math.min.apply(null, orderBSRateM5List);
      this.sdRateMin=Math.min.apply(null, sdRateList);
      this.shortrtnMin=Math.min.apply(null, shortrtnList);
      this.middlertnMin=Math.min.apply(null, middlertnList);
      this.longrtnMin=Math.min.apply(null, longrtnList);

    },
    rowClassName({row}) {
      if (row.highLimitFlag>0) {
          return 'row-purple'
      }
      if (row.compositeScore>=2) {
          return 'row-red'
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
    getPortfolioInfo(){
      axios({
        method:'post',
        url:'/getPortfolioBought',
        params:{
          portfolio_percentage:'Portfolio Bought'
        }
      }).then(response => {
        console.log(response.data)
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
  <!-- <button @click="getPortfolioInfo()">更新</button> -->
  <div style="width: 2000px;" id="app_son_selected">
    <!-- <button @click="getPortfolioInfo()" style="width: 50px;">更新</button> -->
    <vxe-button @click="getPortfolioInfo()" status="primary" content="更新" style="width: 80px;"></vxe-button>
    <p>更新时间  {{updateTime}}</p>
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
      <vxe-table-column field="orderBSRate" sortable title="压托比" sort-type="number"></vxe-table-column>
      <vxe-table-column field="weightedOrderBSRate" sortable title="加权压托比" sort-type="number"></vxe-table-column>
      <vxe-table-column field="transBsRate" sortable title="买卖比" sort-type="number"></vxe-table-column>
      <vxe-table-column field="compositeScore" sortable title="综合得分" sort-type="number"></vxe-table-column>
      <vxe-table-column field="orderBSRateSource" sortable title="压托比正负来源"></vxe-table-column>
      <vxe-table-column field="orderBSRateChangeRate" sortable title="压托比变化率" :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <!-- <vxe-table-column field="bOrderLossRate" sortable title="买单丢单比"></vxe-table-column>
      <vxe-table-column field="sOrderLossRate" sortable title="卖单丢单比"></vxe-table-column> -->
      <vxe-table-column field="orderBSRateM5" sortable title="5分钟压托比" sort-type="number"></vxe-table-column>
      <vxe-table-column field="orderBSRateM5Source" sortable title="5分钟压托比正负来源"></vxe-table-column>
      <vxe-table-column field="sdRate" sortable title="当日涨跌幅" :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="shortrtn" sortable title="短期涨跌幅"  :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="middlertn" sortable title="中期涨跌幅"  :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="longrtn" sortable title="长期涨跌幅"  :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="product" sortable title="主要产品" width="200"></vxe-table-column>
      <vxe-table-column field="highLimitFlag" sortable title="涨停标志"></vxe-table-column>
    </vxe-table>
  </div>
</template>
