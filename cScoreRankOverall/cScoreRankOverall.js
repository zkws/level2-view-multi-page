import { createApp } from 'vue'
import cScoreRankOverall from '../src/page/cScoreRankOverall/cScoreRankOverall.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(cScoreRankOverall)
app.use(VXETable)
app.mount('#app')

