import { createApp } from 'vue'
import cScoreRankTail from '../src/page/cScoreRankTail/cScoreRankTail.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(cScoreRankTail)
app.use(VXETable)
app.mount('#app')

