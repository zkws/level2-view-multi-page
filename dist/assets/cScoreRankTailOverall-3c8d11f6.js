import{_ as f,a as C,r as m,c as S,b as i,d as p,t as v,w as b,o as R,e as x,V as k}from"./main-35ed4731.js";function w(t){var r=t.replace(/rgba?\(/,"").replace(/\)/,"").replace(/[\s+]/g,"").split(","),n=parseFloat(r[3]||1),h=Math.floor(n*parseInt(r[0])+(1-n)*255),l=Math.floor(n*parseInt(r[1])+(1-n)*255),a=Math.floor(n*parseInt(r[2])+(1-n)*255);return"#"+("0"+h.toString(16)).slice(-2)+("0"+l.toString(16)).slice(-2)+("0"+a.toString(16)).slice(-2)}function c(t,r,n,h){let l=(n-r)/2;var a=255/l,s=0,e=0,g=0;return t=="暂无数据"||t==null||t===""||t.match(/^\s*$/)?(s=255,e=255,g=255):(h=="asc"&&(t-r<l&&(s=a*(t-r),e=255),t-r>=l&&(e=255-(t-r-l)*a<0?0:255-(t-r-l)*a,s=255)),h=="desc"&&(t-r<l&&(e=a*(t-r),s=255),t-r>=l&&(s=255-(t-r-l)*a<0?0:255-(t-r-l)*a,e=255))),s=parseInt(s),e=parseInt(e),g=parseInt(g),w("rgb("+s+","+e+","+g+")")}const y={data(){return{timer:null,updateTime:null,showHighLimit:null,rankWeightMax:0,showCountMax:0,shortrtnMax:0,middlertnMax:0,longrtnMax:0,compositeScoreRankAvgMax:0,weightedOrderBSRateAvgMax:0,transBsRateAvgMax:0,sdRateMax:0,compositeScoreAvgMax:0,rankWeightMin:0,showCountMin:0,shortrtnMin:0,middlertnMin:0,longrtnMin:0,compositeScoreRankAvgMin:0,weightedOrderBSRateAvgMin:0,transBsRateAvgMin:0,sdRateMin:0,compositeScoreAvgMin:0,tableData:[]}},mounted(){this.showHighLimit="不计入",this.showShort="计入",this.getCScoreRank(),this.timer=setInterval(this.getCScoreRank,6e4),this.getNowDate()},beforeDestroy(){clearInterval(this.timer)},methods:{cellStyle({row:t,column:r}){switch(r.field){case"rankWeight":return{backgroundColor:c(t.rankWeight,this.rankWeightMin,this.rankWeightMax,"asc"),color:"＃C0C0C0"};case"showCount":return{backgroundColor:c(t.showCount,this.showCountMin,this.showCountMax,"asc"),color:"＃C0C0C0"};case"shortrtn":return{backgroundColor:c(t.shortrtn,this.shortrtnMin,this.shortrtnMax,"desc"),color:"＃C0C0C0"};case"middlertn":return{backgroundColor:c(t.middlertn,this.middlertnMin,this.middlertnMax,"desc"),color:"＃C0C0C0"};case"longrtn":return{backgroundColor:c(t.longrtn,this.longrtnMin,this.longrtnMax,"desc"),color:"＃C0C0C0"};case"compositeScoreRankAvg":return{backgroundColor:c(t.compositeScoreRankAvg,this.compositeScoreRankAvgMin,this.compositeScoreRankAvgMax,"desc"),color:"＃C0C0C0"};case"weightedOrderBSRateAvg":return{backgroundColor:c(t.weightedOrderBSRateAvg,this.weightedOrderBSRateAvgMin,this.weightedOrderBSRateAvgMax,"asc"),color:"＃C0C0C0"};case"transBsRateAvg":return{backgroundColor:c(t.transBsRateAvg,this.transBsRateAvgMin,this.transBsRateAvgMax,"asc"),color:"＃C0C0C0"};case"sdRate":return{backgroundColor:c(t.sdRate,this.sdRateMin,this.sdRateMax,"desc"),color:"＃C0C0C0"};case"compositeScoreAvg":return{backgroundColor:c(t.compositeScoreAvg,this.compositeScoreAvgMin,this.compositeScoreAvgMax,"asc"),color:"＃C0C0C0"}}},getFieldMaxValue(t){for(var r=[],n=[],h=[],l=[],a=[],s=[],e=[],g=[],u=[],d=[],o=0;o<t.length;o++)t[o].rankWeight!=null&&r.push(parseFloat(t[o].rankWeight)),t[o].showCount!=null&&n.push(parseFloat(t[o].showCount)),t[o].shortrtn!=null&&t[o].shortrtn!="暂无数据"&&h.push(parseFloat(t[o].shortrtn)),t[o].middlertn!=null&&t[o].middlertn!="暂无数据"&&l.push(parseFloat(t[o].middlertn)),t[o].longrtn!=null&&t[o].longrtn!="暂无数据"&&a.push(parseFloat(t[o].longrtn)),t[o].compositeScoreRankAvg!=null&&s.push(parseFloat(t[o].compositeScoreRankAvg)),t[o].weightedOrderBSRateAvg!=null&&e.push(parseFloat(t[o].weightedOrderBSRateAvg)),t[o].transBsRateAvg!=null&&g.push(parseFloat(t[o].transBsRateAvg)),t[o].sdRate!=null&&u.push(parseFloat(t[o].sdRate)),t[o].compositeScoreAvg!=null&&d.push(parseFloat(t[o].compositeScoreAvg));this.rankWeightMax=Math.max.apply(null,r),this.showCountMax=Math.max.apply(null,n),this.shortrtnMax=Math.max.apply(null,h),this.middlertnMax=Math.max.apply(null,l),this.longrtnMax=Math.max.apply(null,a),this.compositeScoreRankAvgMax=Math.max.apply(null,s),this.weightedOrderBSRateAvgMax=Math.max.apply(null,e),this.transBsRateAvgMax=Math.max.apply(null,g),this.sdRateMax=Math.max.apply(null,u),this.compositeScoreAvgMax=Math.max.apply(null,d),this.rankWeightMin=Math.min.apply(null,r),this.showCountMin=Math.min.apply(null,n),this.shortrtnMin=Math.min.apply(null,h),this.middlertnMin=Math.min.apply(null,l),this.longrtnMin=Math.min.apply(null,a),this.compositeScoreRankAvgMin=Math.min.apply(null,s),this.weightedOrderBSRateAvgMin=Math.min.apply(null,e),this.transBsRateAvgMin=Math.min.apply(null,g),this.sdRateMin=Math.min.apply(null,u),this.compositeScoreAvgMin=Math.min.apply(null,d)},rowClassName({row:t}){if(t.highLimitFlag>0)return"row-purple"},getNowDate(){var t=new Date,r=":",n=t.getFullYear(),h=t.getMonth()+1,l=t.getDate(),a=t.getHours(),s=t.getMinutes(),e=t.getSeconds(),g=["星期一","星期二","星期三","星期四","星期五","星期六","星期天"];g[t.getDay()],h>=1&&h<=9&&(h="0"+h),l>=0&&l<=9&&(l="0"+l),a>=0&&a<=9&&(a="0"+a),s>=0&&s<=9&&(s="0"+s),e>=0&&e<=9&&(e="0"+e),this.updateTime=n+"-"+h+"-"+l+" "+a+r+s+r+e},setHighLimit(){this.showHighLimit=="计入"?(this.showHighLimit="不计入",this.getCScoreRank()):(this.showHighLimit="计入",this.getCScoreRank())},setShort(){this.showShort=="计入"?(this.showShort="不计入",this.getCScoreRank()):(this.showShort="计入",this.getCScoreRank())},getCScoreRank(){var t=null;this.showHighLimit=="不计入"?t="not-show":t="show";var r=null;this.showShort=="不计入"?r="not-show":r="show",C({method:"post",url:"/getCScoreRankByOverallRating",params:{rank:t,table_name:"all",short_flag:r,sort_flag:"tail"}}).then(n=>{this.tableData=n.data,this.getNowDate(),this.getFieldMaxValue(n.data)}).catch(n=>{console.log(n),this.updateTime="请求失败"})},formatterNum({cellValue:t}){return t=="暂无数据"||t==null?"暂无数据":t+"%"}}},A={style:{width:"2000px"}};function B(t,r,n,h,l,a){const s=m("vxe-button"),e=m("vxe-table-column"),g=m("vxe-table");return R(),S("div",A,[i(s,{onClick:r[0]||(r[0]=u=>a.getCScoreRank()),status:"primary",content:"更新",style:{width:"80px"}}),i(s,{onClick:r[1]||(r[1]=u=>a.setHighLimit()),status:"primary",content:"计入涨停",style:{left:"20px"}}),i(s,{onClick:r[2]||(r[2]=u=>a.setShort()),status:"primary",content:"计入看空",style:{left:"40px"}}),p("p",null,"更新时间             "+v(l.updateTime),1),p("p",null,"是否计入涨停      "+v(l.showHighLimit),1),p("p",null,"是否计入看空      "+v(t.showShort),1),i(g,{class:"mytable-style",border:"full",height:"1100",data:l.tableData,"cell-style":a.cellStyle,"row-class-name":a.rowClassName},{default:b(()=>[i(e,{type:"seq",width:"60",title:"序号"}),i(e,{field:"stkCode",sortable:"",title:"股票代码"}),i(e,{field:"stkName",sortable:"",title:"股票名称"}),i(e,{field:"sw3Code",sortable:"",title:"三级行业代码"}),i(e,{field:"sw3Name",sortable:"",title:"三级行业名称"}),i(e,{field:"rankNum",sortable:"",title:"行业内相对排名","sort-type":"number"}),i(e,{field:"rankWeight",sortable:"",title:"行业内权重","sort-type":"number"}),i(e,{field:"compositeScoreAvg",sortable:"",title:"得分均值","sort-type":"number"}),i(e,{field:"compositeScoreRankAvg",sortable:"",title:"排名均值","sort-type":"number"}),i(e,{field:"weightedOrderBSRateAvg",sortable:"",title:"加权压托比","sort-type":"number"}),i(e,{field:"transBsRateAvg",sortable:"",title:"买卖比","sort-type":"number"}),i(e,{field:"showCount",sortable:"",title:"出现次数","sort-type":"number"}),i(e,{field:"sdRate",sortable:"",title:"当日涨跌幅",formatter:a.formatterNum,"sort-type":"number"},null,8,["formatter"]),i(e,{field:"shortrtn",sortable:"",title:"短期涨跌幅",formatter:a.formatterNum,"sort-type":"number"},null,8,["formatter"]),i(e,{field:"middlertn",sortable:"",title:"中期涨跌幅",formatter:a.formatterNum,"sort-type":"number"},null,8,["formatter"]),i(e,{field:"longrtn",sortable:"",title:"长期涨跌幅",formatter:a.formatterNum,"sort-type":"number"},null,8,["formatter"]),i(e,{field:"product",sortable:"",title:"主要产品",width:"200"}),i(e,{field:"highLimitFlag",sortable:"",title:"当日涨停标志"})]),_:1},8,["data","cell-style","row-class-name"])])}const L=f(y,[["render",B]]),M=x(L);M.use(k);M.mount("#app");
