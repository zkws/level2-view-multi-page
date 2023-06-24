import{_ as u,a as p,r as d,c as f,b as r,d as b,t as _,w as h,o as g,e as v,V as w}from"./main-c226395a.js";const y={data(){return{timer:null,updateTime:null,tableData:[]}},mounted(){this.getSectorInfo(),this.timer=setInterval(this.getSectorInfo,6e4),this.getNowDate()},beforeDestroy(){clearInterval(this.timer)},methods:{getNowDate(){var t=new Date,l=":",c=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),o=t.getHours(),s=t.getMinutes(),e=t.getSeconds(),i=["星期一","星期二","星期三","星期四","星期五","星期六","星期天"];i[t.getDay()],n>=1&&n<=9&&(n="0"+n),a>=0&&a<=9&&(a="0"+a),o>=0&&o<=9&&(o="0"+o),s>=0&&s<=9&&(s="0"+s),e>=0&&e<=9&&(e="0"+e),this.updateTime=c+"-"+n+"-"+a+" "+o+l+s+l+e},getSectorInfo(){p({method:"post",url:"/getSectorInfo",params:{sector_class:"sw1"}}).then(t=>{console.log(t.data),this.tableData=t.data,this.getNowDate()}).catch(t=>{console.log(t),this.updateTime="请求失败"})},formatterNum({cellValue:t}){return t=="暂无数据"?t:t+"%"}}},S={style:{width:"1500px"}};function x(t,l,c,n,a,o){const s=d("vxe-button"),e=d("vxe-table-column"),i=d("vxe-table");return g(),f("div",S,[r(s,{onClick:l[0]||(l[0]=B=>o.getSectorInfo()),status:"primary",content:"更新",style:{width:"80px"}}),b("p",null,"更新时间 "+_(a.updateTime),1),r(i,{border:"inner",data:a.tableData},{default:h(()=>[r(e,{type:"seq",width:"60",title:"序号"}),r(e,{field:"sw1Code",sortable:"",title:"行业代码"}),r(e,{field:"sw1Name",sortable:"",title:"行业名称"}),r(e,{field:"orderBSRate",sortable:"",title:"压托比","sort-type":"number"}),r(e,{field:"orderBSRateSource",sortable:"",title:"压托比正负来源"}),r(e,{field:"weightedOrderBSRate",sortable:"",title:"加权压托比","sort-type":"number"}),r(e,{field:"orderBSRateM5",sortable:"",title:"5分钟压托比","sort-type":"number"}),r(e,{field:"orderBSRateM5Source",sortable:"",title:"5分钟压托比正负来源"}),r(e,{field:"transBsRate",sortable:"",title:"买卖比","sort-type":"number"}),r(e,{field:"sdRate",sortable:"",title:"当日涨跌幅",formatter:o.formatterNum,"sort-type":"number"},null,8,["formatter"])]),_:1},8,["data"])])}const D=u(y,[["render",x]]),m=v(D);m.use(w);m.mount("#app");
