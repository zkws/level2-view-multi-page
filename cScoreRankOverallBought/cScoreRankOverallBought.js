import { createApp } from 'vue'
import cScoreRankOverallBought from '../src/page/cScoreRankOverallBought/cScoreRankOverallBought.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(cScoreRankOverallBought)
app.use(VXETable)
app.mount('#app')

