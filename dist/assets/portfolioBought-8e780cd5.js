import{_ as f,a as R,r as p,c as b,b as i,d as S,t as B,w as x,o as C,e as y,V as v}from"./main-fe1c536f.js";function k(t){var a=t.replace(/rgba?\(/,"").replace(/\)/,"").replace(/[\s+]/g,"").split(","),s=parseFloat(a[3]||1),d=Math.floor(s*parseInt(a[0])+(1-s)*255),o=Math.floor(s*parseInt(a[1])+(1-s)*255),l=Math.floor(s*parseInt(a[2])+(1-s)*255);return"#"+("0"+d.toString(16)).slice(-2)+("0"+o.toString(16)).slice(-2)+("0"+l.toString(16)).slice(-2)}function u(t,a,s,d){let o=(s-a)/2;var l=255/o,n=0,e=0,h=0;return t=="暂无数据"||t==null||t===""||t.match(/^\s*$/)?(n=255,e=255,h=255):(d=="asc"&&(t-a<o&&(n=l*(t-a),e=255),t-a>=o&&(e=255-(t-a-o)*l<0?0:255-(t-a-o)*l,n=255)),d=="desc"&&(t-a<o&&(e=l*(t-a),n=255),t-a>=o&&(n=255-(t-a-o)*l<0?0:255-(t-a-o)*l,e=255))),n=parseInt(n),e=parseInt(e),h=parseInt(h),k("rgb("+n+","+e+","+h+")")}const _={data(){return{timer:null,updateTime:null,rankWeightMax:0,orderBSRateMax:0,weightedOrderBSRateMax:0,transBsRateMax:0,compositeScoreMax:0,orderBSRateM5Max:0,bounceRateMax:0,sdRateMax:0,shortrtnMax:0,middlertnMax:0,longrtnMax:0,rankWeightMin:0,orderBSRateMin:0,weightedOrderBSRateMin:0,transBsRateMin:0,compositeScoreMin:0,orderBSRateM5Min:0,bounceRateMin:0,sdRateMin:0,shortrtnMin:0,middlertnMin:0,longrtnMin:0,tableData:[]}},mounted(){this.getPortfolioInfo(),this.timer=setInterval(this.getPortfolioInfo,2e4),this.getNowDate()},beforeDestroy(){clearInterval(this.timer)},methods:{cellStyle({row:t,column:a}){switch(a.field){case"rankWeight":return{backgroundColor:u(t.rankWeight,this.rankWeightMin,this.rankWeightMax,"asc"),color:"＃C0C0C0"};case"orderBSRate":return{backgroundColor:u(t.orderBSRate,this.orderBSRateMin,this.orderBSRateMax,"asc"),color:"＃C0C0C0"};case"weightedOrderBSRate":return{backgroundColor:u(t.weightedOrderBSRate,this.weightedOrderBSRateMin,this.weightedOrderBSRateMax,"asc"),color:"＃C0C0C0"};case"transBsRate":return{backgroundColor:u(t.transBsRate,this.transBsRateMin,this.transBsRateMax,"asc"),color:"＃C0C0C0"};case"compositeScore":return{backgroundColor:u(t.compositeScore,this.compositeScoreMin,this.compositeScoreMax,"asc"),color:"＃C0C0C0"};case"orderBSRateM5":return{backgroundColor:u(t.orderBSRateM5,this.orderBSRateM5Min,this.orderBSRateM5Max,"asc"),color:"＃C0C0C0"};case"bounceRate":return{backgroundColor:u(t.bounceRate,this.bounceRateMin,this.bounceRateMax,"asc"),color:"＃C0C0C0"};case"sdRate":return{backgroundColor:u(t.sdRate,this.sdRateMin,this.sdRateMax,"desc"),color:"＃C0C0C0"};case"shortrtn":return{backgroundColor:u(t.shortrtn,this.shortrtnMin,this.shortrtnMax,"desc"),color:"＃C0C0C0"};case"middlertn":return{backgroundColor:u(t.middlertn,this.middlertnMin,this.middlertnMax,"desc"),color:"＃C0C0C0"};case"longrtn":return{backgroundColor:u(t.longrtn,this.longrtnMin,this.longrtnMax,"desc"),color:"＃C0C0C0"}}},getFieldMaxValue(t){for(var a=[],s=[],d=[],o=[],l=[],n=[],e=[],h=[],c=[],m=[],M=[],r=0;r<t.length;r++)t[r].rankWeight!=null&&a.push(parseFloat(t[r].rankWeight)),t[r].orderBSRate!=null&&t[r].orderBSRate.trim().length>0&&s.push(parseFloat(t[r].orderBSRate)),t[r].weightedOrderBSRate!=null&&t[r].weightedOrderBSRate.trim().length>0&&d.push(parseFloat(t[r].weightedOrderBSRate)),t[r].transBsRate!=null&&t[r].transBsRate.trim().length>0&&o.push(parseFloat(t[r].transBsRate)),t[r].compositeScore!=null&&t[r].compositeScore.trim().length>0&&l.push(parseFloat(t[r].compositeScore)),t[r].orderBSRateM5!=null&&t[r].orderBSRateM5.trim().length>0&&n.push(parseFloat(t[r].orderBSRateM5)),t[r].bounceRate!=null&&t[r].bounceRate.trim().length>0&&e.push(parseFloat(t[r].bounceRate)),t[r].sdRate!=null&&h.push(parseFloat(t[r].sdRate)),t[r].shortrtn!=null&&t[r].shortrtn!="暂无数据"&&c.push(parseFloat(t[r].shortrtn)),t[r].middlertn!=null&&t[r].middlertn!="暂无数据"&&m.push(parseFloat(t[r].middlertn)),t[r].longrtn!=null&&t[r].longrtn!="暂无数据"&&M.push(parseFloat(t[r].longrtn));this.rankWeightMax=Math.max.apply(null,a),this.orderBSRateMax=Math.max.apply(null,s),this.weightedOrderBSRateMax=Math.max.apply(null,d),this.transBsRateMax=Math.max.apply(null,o),this.compositeScoreMax=Math.max.apply(null,l),this.orderBSRateM5Max=Math.max.apply(null,n),this.bounceRateMax=Math.max.apply(null,e),this.sdRateMax=Math.max.apply(null,h),this.shortrtnMax=Math.max.apply(null,c),this.middlertnMax=Math.max.apply(null,m),this.longrtnMax=Math.max.apply(null,M),this.rankWeightMin=Math.min.apply(null,a),this.orderBSRateMin=Math.min.apply(null,s),this.weightedOrderBSRateMin=Math.min.apply(null,d),this.transBsRateMin=Math.min.apply(null,o),this.compositeScoreMin=Math.min.apply(null,l),this.orderBSRateM5Min=Math.min.apply(null,n),this.bounceRateMin=Math.min.apply(null,e),this.sdRateMin=Math.min.apply(null,h),this.shortrtnMin=Math.min.apply(null,c),this.middlertnMin=Math.min.apply(null,m),this.longrtnMin=Math.min.apply(null,M)},rowClassName({row:t}){if(t.highLimitFlag>0)return"row-purple";if(t.compositeScore>=2)return"row-red"},getNowDate(){var t=new Date,a=":",s=t.getFullYear(),d=t.getMonth()+1,o=t.getDate(),l=t.getHours(),n=t.getMinutes(),e=t.getSeconds(),h=["星期一","星期二","星期三","星期四","星期五","星期六","星期天"];h[t.getDay()],d>=1&&d<=9&&(d="0"+d),o>=0&&o<=9&&(o="0"+o),l>=0&&l<=9&&(l="0"+l),n>=0&&n<=9&&(n="0"+n),e>=0&&e<=9&&(e="0"+e),this.updateTime=s+"-"+d+"-"+o+" "+l+a+n+a+e},getPortfolioInfo(){R({method:"post",url:"/getPortfolioBought",params:{portfolio_percentage:"Portfolio Bought"}}).then(t=>{console.log(t.data),this.tableData=t.data,this.getNowDate(),this.getFieldMaxValue(t.data)}).catch(t=>{console.log(t),this.updateTime="请求失败"})},formatterNum({cellValue:t}){return t=="暂无数据"||t==null?"暂无数据":t+"%"}}},w={style:{width:"2000px"},id:"app_son_selected"};function F(t,a,s,d,o,l){const n=p("vxe-button"),e=p("vxe-table-column"),h=p("vxe-table");return C(),b("div",w,[i(n,{onClick:a[0]||(a[0]=c=>l.getPortfolioInfo()),status:"primary",content:"更新",style:{width:"80px"}}),S("p",null,"更新时间 "+B(o.updateTime),1),i(h,{class:"mytable-style",border:"full",height:"1100",data:o.tableData,"cell-style":l.cellStyle,"row-class-name":l.rowClassName},{default:x(()=>[i(e,{type:"seq",width:"60",title:"序号"}),i(e,{field:"stkCode",sortable:"",title:"股票代码"}),i(e,{field:"stkName",sortable:"",title:"股票名称"}),i(e,{field:"sw3Code",sortable:"",title:"三级行业代码"}),i(e,{field:"sw3Name",sortable:"",title:"三级行业名称"}),i(e,{field:"rankNum",sortable:"",title:"行业内相对排名","sort-type":"number"}),i(e,{field:"rankWeight",sortable:"",title:"行业内权重","sort-type":"number"}),i(e,{field:"orderBSRate",sortable:"",title:"压托比","sort-type":"number"}),i(e,{field:"weightedOrderBSRate",sortable:"",title:"加权压托比","sort-type":"number"}),i(e,{field:"transBsRate",sortable:"",title:"买卖比","sort-type":"number"}),i(e,{field:"compositeScore",sortable:"",title:"综合得分","sort-type":"number"}),i(e,{field:"orderBSRateSource",sortable:"",title:"压托比正负来源"}),i(e,{field:"orderBSRateChangeRate",sortable:"",title:"压托比变化率",formatter:l.formatterNum,"sort-type":"number"},null,8,["formatter"]),i(e,{field:"orderBSRateM5",sortable:"",title:"5分钟压托比","sort-type":"number"}),i(e,{field:"orderBSRateM5Source",sortable:"",title:"5分钟压托比正负来源"}),i(e,{field:"bounceRate",sortable:"",title:"弹性比","sort-type":"number"}),i(e,{field:"sdRate",sortable:"",title:"当日涨跌幅",formatter:l.formatterNum,"sort-type":"number"},null,8,["formatter"]),i(e,{field:"shortrtn",sortable:"",title:"短期涨跌幅",formatter:l.formatterNum,"sort-type":"number"},null,8,["formatter"]),i(e,{field:"middlertn",sortable:"",title:"中期涨跌幅",formatter:l.formatterNum,"sort-type":"number"},null,8,["formatter"]),i(e,{field:"longrtn",sortable:"",title:"长期涨跌幅",formatter:l.formatterNum,"sort-type":"number"},null,8,["formatter"]),i(e,{field:"product",sortable:"",title:"主要产品",width:"200"}),i(e,{field:"highLimitFlag",sortable:"",title:"涨停标志"})]),_:1},8,["data","cell-style","row-class-name"])])}const N=f(_,[["render",F]]),g=y(N);g.use(v);g.mount("#app");
