import { createApp } from 'vue'
import cScoreRankOverallShort from '../src/page/cScoreRankOverallShort/cScoreRankOverallShort.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(cScoreRankOverallShort)
app.use(VXETable)
app.mount('#app')

