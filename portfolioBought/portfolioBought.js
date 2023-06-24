import { createApp } from 'vue'
import portfolioBought from '../src/page/portfolioBought/portfolioBought.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(portfolioBought)
app.use(VXETable)
app.mount('#app')

