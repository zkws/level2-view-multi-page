import { createApp } from 'vue'
import cScoreRank from '../src/page/cScoreRank/cScoreRank.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(cScoreRank)
app.use(VXETable)
app.mount('#app')

