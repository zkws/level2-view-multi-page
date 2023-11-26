import { createApp } from 'vue'
import marketCScoreExtreme from '../src/page/marketCScoreExtreme/marketCScoreExtreme.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(marketCScoreExtreme)
app.use(VXETable)
app.mount('#app')

