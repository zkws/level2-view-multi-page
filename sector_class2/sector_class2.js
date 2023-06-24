import { createApp } from 'vue'
import sector_class2 from '../src/page/sector_class2/sector_class2.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(sector_class2)
app.use(VXETable)
app.mount('#app')
