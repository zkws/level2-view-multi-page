import { createApp } from 'vue'
import marketCScoreTail from '../src/page/marketCScoreTail/marketCScoreTail.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(marketCScoreTail)
app.use(VXETable)
app.mount('#app')

