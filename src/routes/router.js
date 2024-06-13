import { createMemoryHistory, createRouter } from 'vue-router'
import AddPage from "../components/AddPage.vue"
import HomePage from "../components/HomePage.vue"
import ViewPage from "../components/ViewPage.vue"

const routes = [
    { path: '/', component:HomePage},
    { path: '/add', component:AddPage },
    { path: '/view', component:ViewPage},
]

  const router = createRouter({
    history:createMemoryHistory(),
    routes
  })

  export default router;