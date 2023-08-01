import{_ as f,a as b,r as m,c as p,b as r,d as u,t as d,w,o as v,e as y,V as k}from"./main-fe1c536f.js";const _={data(){return{timer:null,updateTime:null,showHighLimit:null,tableData:[]}},mounted(){this.showHighLimit="不计入",this.getCScoreRank(),this.timer=setInterval(this.getCScoreRank,6e4),this.getNowDate()},beforeDestroy(){clearInterval(this.timer)},methods:{cellStyle({row:e,column:a}){},rowClassName({row:e}){if(e.highLimitFlag>0)return"row-purple"},getFieldMaxValue(e){for(var a=0;a<e.length;a++);},getNowDate(){var e=new Date,a=":",h=e.getFullYear(),i=e.getMonth()+1,o=e.getDate(),l=e.getHours(),s=e.getMinutes(),t=e.getSeconds(),n=["星期一","星期二","星期三","星期四","星期五","星期六","星期天"];n[e.getDay()],i>=1&&i<=9&&(i="0"+i),o>=0&&o<=9&&(o="0"+o),l>=0&&l<=9&&(l="0"+l),s>=0&&s<=9&&(s="0"+s),t>=0&&t<=9&&(t="0"+t),this.updateTime=h+"-"+i+"-"+o+" "+l+a+s+a+t},setHighLimit(){this.showHighLimit=="计入"?(this.showHighLimit="不计入",this.getCScoreRank()):(this.showHighLimit="计入",this.getCScoreRank())},getCScoreRank(){var e=null;this.showHighLimit=="不计入"?e="not-show":e="show",b({method:"post",url:"/getCScoreRank",params:{rank:e,table_name:"bought",short_flag:"show"}}).then(a=>{console.log(a.data),this.tableData=a.data,this.getNowDate()}).catch(a=>{console.log(a),this.updateTime="请求失败"})},formatterNum({cellValue:e}){return e=="暂无数据"?e:e+"%"}}},C={style:{width:"2000px"}};function x(e,a,h,i,o,l){const s=m("vxe-button"),t=m("vxe-table-column"),n=m("vxe-table");return v(),p("div",C,[r(s,{onClick:a[0]||(a[0]=g=>l.getCScoreRank()),status:"primary",content:"更新",style:{width:"80px"}}),r(s,{onClick:a[1]||(a[1]=g=>l.setHighLimit()),status:"primary",content:"计入涨停",style:{left:"20px"}}),u("p",null,"更新时间             "+d(o.updateTime),1),u("p",null,"是否计入涨停      "+d(o.showHighLimit),1),r(n,{class:"mytable-style",border:"full",data:o.tableData,"cell-style":l.cellStyle,"row-class-name":l.rowClassName},{default:w(()=>[r(t,{type:"seq",width:"60",title:"序号"}),r(t,{field:"stkCode",sortable:"",title:"股票代码"}),r(t,{field:"stkName",sortable:"",title:"股票名称"}),r(t,{field:"sw3Code",sortable:"",title:"三级行业代码"}),r(t,{field:"sw3Name",sortable:"",title:"三级行业名称"}),r(t,{field:"rankNum",sortable:"",title:"行业内相对排名","sort-type":"number"}),r(t,{field:"rankWeight",sortable:"",title:"行业内权重","sort-type":"number"}),r(t,{field:"compositeScoreAvg",sortable:"",title:"得分均值","sort-type":"number"}),r(t,{field:"compositeScoreRankAvg",sortable:"",title:"排名均值","sort-type":"number"}),r(t,{field:"weightedOrderBSRateAvg",sortable:"",title:"加权压托比","sort-type":"number"}),r(t,{field:"transBsRateAvg",sortable:"",title:"买卖比","sort-type":"number"}),r(t,{field:"showCount",sortable:"",title:"出现次数","sort-type":"number"}),r(t,{field:"shortrtn",sortable:"",title:"短期涨跌幅",formatter:l.formatterNum,"sort-type":"number"},null,8,["formatter"]),r(t,{field:"middlertn",sortable:"",title:"中期涨跌幅",formatter:l.formatterNum,"sort-type":"number"},null,8,["formatter"]),r(t,{field:"longrtn",sortable:"",title:"长期涨跌幅",formatter:l.formatterNum,"sort-type":"number"},null,8,["formatter"]),r(t,{field:"product",sortable:"",title:"主要产品",width:"200"}),r(t,{field:"highLimitFlag",sortable:"",title:"当日涨停标志"})]),_:1},8,["data","cell-style","row-class-name"])])}const S=f(_,[["render",x]]),c=y(S);c.use(k);c.mount("#app");
