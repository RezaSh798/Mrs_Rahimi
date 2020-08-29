import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
// import components
import Index from './components/pages/Index.vue'
import Shop from './components/pages/Shop.vue'
import Error404 from './components/pages/404.vue'
import LogReg from './components/pages/LoginRegister.vue'
import About from './components/pages/About.vue'
import Product from './components/pages/Product.vue'
import Contact from './components/pages/Contact.vue'
import Panel from './components/pages/Panel.vue'
import UserPanel from './components/pages/UserPanel.vue'

// imports admin panel's childeren components
import PanelProducts from './components/layout/panel/Products.vue'
import PanelCreateProduct from './components/layout/panel/CreateProduct.vue'
import PanelUsers from './components/layout/panel/Users.vue'
import Messages from './components/layout/panel/Messages.vue'
import Categories from './components/layout/panel/Categories.vue'

// import user panel's children components
import Ticket from './components/layout/user panel/Ticket.vue'
import Profile from './components/layout/user panel/Profile.vue'

const routes = [
    {
        path : '/panel',
        name : 'panel',
        component : Panel,
        children : [
            {
                path : 'products',
                name : 'products',
                component : PanelProducts
            },
            {
                path : 'create-product/:id',
                name : 'edite',
                component : PanelCreateProduct
            },
            {
                path : 'users',
                name : 'users',
                component : PanelUsers
            },
            {
                path : 'messages',
                name : 'messages',
                component : Messages
            },
            {
                path: 'categories',
                name: 'categories',
                component: Categories
            }
        ]
    },
    {
        path: '/user/panel',
        name: 'userPanel',
        component: UserPanel,
        children: [
            {
                path: 'ticket',
                name: 'ticket',
                component: Ticket
            },
            {
                path: 'profile',
                name: 'profile',
                component: Profile
            }
        ]
    },
    {
        path : '/',
        alias : '/home',
        name : 'home',
        component : Index
    },
    {
        path : '/shop',
        name : 'shop',
        component : Shop
    },
    {
        path : '/about',
        name : 'about',
        component : About
    },
    {
        path : '/contact',
        name : 'contact',
        component : Contact
    },
    {
        path : '/product/:id',
        name : 'product',
        component : Product
    },
    {
        path : '/user/:location',
        name : 'signin/up',
        component : LogReg,
    },
    {
        path : '/*',
        name : '404',
        component : Error404
    },
];

export default new VueRouter({
    routes,
    scrollBehavior() {
        return {
            x : 0,
            y : 0
        }
    }
});