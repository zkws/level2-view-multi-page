import { createApp } from 'vue'
import cScoreRankTailOverall from '../src/page/cScoreRankTailOverall/cScoreRankTailOverall.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(cScoreRankTailOverall)
app.use(VXETable)
app.mount('#app')

