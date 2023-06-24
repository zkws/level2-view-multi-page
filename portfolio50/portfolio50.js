import { createApp } from 'vue'
import portfolio50 from '../src/page/portfolio50/portfolio50.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(portfolio50)
app.use(VXETable)
app.mount('#app')

