import { createApp } from 'vue'
import cScoreRankSelected from '../src/page/cScoreRankSelected/cScoreRankSelected.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(cScoreRankSelected)
app.use(VXETable)
app.mount('#app')

