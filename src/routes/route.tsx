import Home from '../pages/Home'
import Sale from '../pages/Sale'
import MonLe from '../pages/MonLe'
import Buffet from '../pages/Buffet'
import SidebarLayout from '../components/Layout/SidebarLayout'
import DefaultLayout from '../components/Layout/DefaultLayout'

const publicRoutes = [
    {
        path: '/', component: Home, layout: DefaultLayout
    },
    {
        path: '/sale', component: Sale, layout: DefaultLayout
    },
    {
        path: '/menu/mon-le', component: MonLe, layout: SidebarLayout
    },
    {
        path: '/menu/buffet', component: Buffet, layout: SidebarLayout
    },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }