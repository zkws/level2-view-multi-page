<script>
import axios from "axios"
export default {
  data() {
    return {
      timer:null,
      updateTime:null,
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
  <!-- <button @click="getPortfolioInfo()">更新</button> -->
  <div style="width: 2000px;" id="app_son_selected">
    <!-- <button @click="getPortfolioInfo()" style="width: 50px;">更新</button> -->
    <vxe-button @click="getPortfolioInfo()" status="primary" content="更新" style="width: 80px;"></vxe-button>
    <p>更新时间  {{updateTime}}</p>
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
      <!-- <vxe-table-column field="rankNum" sortable title="行业内相对排名"></vxe-table-column>
      <vxe-table-column field="rankWeight" sortable title="行业内权重"></vxe-table-column> -->
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
