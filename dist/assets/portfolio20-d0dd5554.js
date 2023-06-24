import{_ as u,a as c,r as m,c as b,b as e,d as p,t as h,w as g,o as _,e as y,V as v}from"./main-c226395a.js";const w={data(){return{timer:null,updateTime:null,tableData:[]}},mounted(){this.getPortfolioInfo(),this.timer=setInterval(this.getPortfolioInfo,2e4),this.getNowDate()},beforeDestroy(){clearInterval(this.timer)},methods:{rowClassName({row:r}){if(r.compositeScore>=2)return"row-red"},getNowDate(){var r=new Date,i=":",d=r.getFullYear(),s=r.getMonth()+1,a=r.getDate(),o=r.getHours(),l=r.getMinutes(),t=r.getSeconds(),n=["星期一","星期二","星期三","星期四","星期五","星期六","星期天"];n[r.getDay()],s>=1&&s<=9&&(s="0"+s),a>=0&&a<=9&&(a="0"+a),o>=0&&o<=9&&(o="0"+o),l>=0&&l<=9&&(l="0"+l),t>=0&&t<=9&&(t="0"+t),this.updateTime=d+"-"+s+"-"+a+" "+o+i+l+i+t},getPortfolioInfo(){c({method:"post",url:"/getSelectPortfolioInfo",params:{portfolio_percentage:"selected"}}).then(r=>{console.log(r.data),this.tableData=r.data,this.getNowDate()}).catch(r=>{console.log(r),this.updateTime="请求失败"})},formatterNum({cellValue:r}){return r=="暂无数据"?r:r+"%"}}},N={style:{width:"2000px"},id:"app_son_selected"};function x(r,i,d,s,a,o){const l=m("vxe-button"),t=m("vxe-table-column"),n=m("vxe-table");return _(),b("div",N,[e(l,{onClick:i[0]||(i[0]=D=>o.getPortfolioInfo()),status:"primary",content:"更新",style:{width:"80px"}}),p("p",null,"更新时间 "+h(a.updateTime),1),e(n,{class:"mytable-style",border:"full",data:a.tableData,"row-class-name":o.rowClassName},{default:g(()=>[e(t,{type:"seq",width:"60",title:"序号"}),e(t,{field:"stkCode",sortable:"",title:"股票代码"}),e(t,{field:"stkName",sortable:"",title:"股票名称"}),e(t,{field:"sw3Code",sortable:"",title:"三级行业代码"}),e(t,{field:"sw3Name",sortable:"",title:"三级行业名称"}),e(t,{field:"orderBSRate",sortable:"",title:"压托比","sort-type":"number"}),e(t,{field:"weightedOrderBSRate",sortable:"",title:"加权压托比","sort-type":"number"}),e(t,{field:"transBsRate",sortable:"",title:"买卖比","sort-type":"number"}),e(t,{field:"compositeScore",sortable:"",title:"综合得分","sort-type":"number"}),e(t,{field:"orderBSRateSource",sortable:"",title:"压托比正负来源"}),e(t,{field:"orderBSRateChangeRate",sortable:"",title:"压托比变化率",formatter:o.formatterNum,"sort-type":"number"},null,8,["formatter"]),e(t,{field:"orderBSRateM5",sortable:"",title:"5分钟压托比","sort-type":"number"}),e(t,{field:"orderBSRateM5Source",sortable:"",title:"5分钟压托比正负来源"}),e(t,{field:"sdRate",sortable:"",title:"当日涨跌幅",formatter:o.formatterNum,"sort-type":"number"},null,8,["formatter"]),e(t,{field:"shortrtn",sortable:"",title:"短期涨跌幅",formatter:o.formatterNum,"sort-type":"number"},null,8,["formatter"]),e(t,{field:"middlertn",sortable:"",title:"中期涨跌幅",formatter:o.formatterNum,"sort-type":"number"},null,8,["formatter"]),e(t,{field:"longrtn",sortable:"",title:"长期涨跌幅",formatter:o.formatterNum,"sort-type":"number"},null,8,["formatter"]),e(t,{field:"product",sortable:"",title:"主要产品",width:"200"})]),_:1},8,["data","row-class-name"])])}const S=u(w,[["render",x]]),f=y(S);f.use(v);f.mount("#app");
