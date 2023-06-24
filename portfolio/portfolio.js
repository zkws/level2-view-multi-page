import { createApp } from 'vue'
import portfolio from '../src/page/portfolio/portfolio.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(portfolio)
app.use(VXETable)
app.mount('#app')

