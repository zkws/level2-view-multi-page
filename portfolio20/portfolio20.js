import { createApp } from 'vue'
import portfolio20 from '../src/page/portfolio20/portfolio20.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(portfolio20)
app.use(VXETable)
app.mount('#app')

