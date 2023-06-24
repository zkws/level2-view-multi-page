import { createApp } from 'vue'
import sector_class3 from '../src/page/sector_class3/sector_class3.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(sector_class3)
app.use(VXETable)
app.mount('#app')
