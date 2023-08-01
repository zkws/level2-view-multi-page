<script>
import axios from "axios"
export default {
  data() {
    return {
      timer:null,
      updateTime:null,
      showHighLimit:null,
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
    this.getCScoreRank();
    this.timer = setInterval(this.getCScoreRank, 60000)
    this.getNowDate()
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
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
    getCScoreRank(){
      var rankValue = null;
      if(this.showHighLimit=="不计入"){
        rankValue="not-show";
      }
      else{
        rankValue="show";
      }
      axios({
        method:'post',
        url:'/getCScoreRank',
        params:{
          rank:rankValue,
          table_name:"selected",
          short_flag:"show"
        }
      }).then(response => {
        console.log(response.data)
        this.tableData = response.data
        this.getNowDate()
        // this.tableData[0].stock_name="moooo"
        // console.log(this.tableData[0].stock_name)
      })
      .catch((error) => { // 请求失败处理
          console.log(error)
          this.updateTime = "请求失败"
      })
    },
    formatterNum ({ cellValue }) {
      return cellValue=="暂无数据"?cellValue:cellValue+"%"
    } 
     
  }
}

</script>
<template>
  <div style="width: 2000px;">
    <vxe-button @click="getCScoreRank()" status="primary" content="更新" style="width: 80px;"></vxe-button>
    <vxe-button @click="setHighLimit()" status="primary" content="计入涨停" style="left:20px;"></vxe-button>
    <!-- <button @click="getCScoreRank()" style="width: 50px;">更新</button> -->
    
    <p>更新时间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{updateTime}}</p>
    <p>是否计入涨停&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{showHighLimit}}</p>
    <vxe-table 
    class="mytable-style"
    border="full" 
    :data="tableData"
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
      <vxe-table-column field="shortrtn" sortable title="短期涨跌幅"  :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="middlertn" sortable title="中期涨跌幅"  :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="longrtn" sortable title="长期涨跌幅"  :formatter="formatterNum" sort-type="number"></vxe-table-column>
      <vxe-table-column field="product" sortable title="主要产品" width="200"></vxe-table-column>
      <vxe-table-column field="highLimitFlag" sortable title="当日涨停标志"></vxe-table-column>
      <!-- <vxe-table-column field="lowLimitFlag" sortable title="跌停标志" width="200"></vxe-table-column> -->
    </vxe-table>
  </div>
</template>

