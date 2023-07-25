import { createApp } from 'vue'
import cScoreRankBought from '../src/page/cScoreRankBought/cScoreRankBought.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(cScoreRankBought)
app.use(VXETable)
app.mount('#app')

