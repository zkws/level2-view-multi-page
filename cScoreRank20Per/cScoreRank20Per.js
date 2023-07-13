import { createApp } from 'vue'
import cScoreRank20Per from '../src/page/cScoreRank20Per/cScoreRank20Per.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(cScoreRank20Per)
app.use(VXETable)
app.mount('#app')

