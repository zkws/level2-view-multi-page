import { createApp } from 'vue'
import marketCScoreTop from '../src/page/marketCScoreTop/marketCScoreTop.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(marketCScoreTop)
app.use(VXETable)
app.mount('#app')

