import { createApp } from 'vue'
import sector_class1 from '../src/page/sector_class1/sector_class1.vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '../src/assets/main.css'

const app = createApp(sector_class1)
app.use(VXETable)
app.mount('#app')
