<script>
import axios from "axios"
export default {
  data() {
    return {
      tableData: [
        {
          id: 10001,
          stkCode: "600000",
          stkName: "浦发银行",
          orderBSRate: "10%"
        },
        {
          id: 10002,
          stkCode: "600030",
          stkName: "中信证券",
          orderBSRate: "11%"
        },
        {
          id: 10003,
          stkCode: "600036",
          stkName: "招商银行",
          orderBSRate: "12%"
        }
      ]
    }
  },
  methods: {
    getPortfolioInfo(){
      axios({
        method:'post',
        url:'/getPortfolioInfo',
        params:{
          portfolio_percentage:'50'
        }
      }).then(response => {
        console.log(response.data)
        this.tableData = response.data
        // this.tableData[0].stock_name="moooo"
        // console.log(this.tableData[0].stock_name)
      })
      .catch(function (error) { // 请求失败处理
        console.log(error)
      })
    } 
  }
}

</script>
<template>
  <button @click="getPortfolioInfo()">更新</button>
  <div style="width: 1000px;">
    <vxe-table border="inner" :data="tableData">
      <vxe-table-column type="seq" width="60" title="序号"></vxe-table-column>
      <vxe-table-column field="stkCode" sortable title="股票代码"></vxe-table-column>
      <vxe-table-column field="stkName" sortable title="股票名称"></vxe-table-column>
      <vxe-table-column field="rankNum" sortable title="行业内相对排名"></vxe-table-column>
      <vxe-table-column field="orderBSRate" sortable title="压托比"></vxe-table-column>
      <vxe-table-column field="transBsRate" sortable title="买卖比"></vxe-table-column>
      <vxe-table-column field="sdRate" sortable title="当日涨跌幅"></vxe-table-column>
    </vxe-table>
  </div>
</template>
