import { createApp } from 'vue'
import cScoreRankOverallSingleStk from '../src/page/cScoreRankOverallSingleStk/cScoreRankOverallSingleStk.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(cScoreRankOverallSingleStk)
app.use(VXETable)
app.mount('#app')

